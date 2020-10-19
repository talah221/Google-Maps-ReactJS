import { storageService } from './storageService.js'

export const mainService  =  {
    query,
    save,
    remove,
    getById,
    getEmptyCar
}

var gItems = [
    { _id: 'c1', },
    { _id: 'c2' },
    { _id: 'c3', },
    { _id: 'c4', }
]

const STORAGE_KEY = 'items'
const gItems = _loadItems()

function query(filterBy) {
    let itemsToReturn = gItems;
    // if (filterBy) {
    //     var { vendor, maxSpeed, minSpeed } = filterBy
    //     maxSpeed = maxSpeed || Infinity
    //     minSpeed = minSpeed || 0
    //     carsToReturn = gCars.filter(car => car.vendor.toLowerCase().includes(vendor.toLowerCase())
    //         && (car.speed < maxSpeed)
    //         && car.speed > minSpeed)
    // }
    return Promise.resolve([...itemsToReturn]);
}

function getById(id) {
    const item = gItems.find(item => item._id === id)
    return Promise.resolve(item)
}

function remove(id) {
    const idx = gItems.findIndex(item => item._id === id)
    gItems.splice(idx, 1)
    storageService.saveToStorage(STORAGE_KEY, gItems)
    return Promise.resolve()
}

function save(itemToSave) {
    if (itemToSave._id) {
        const idx = gItems.findIndex(item => item._id === itemToSave._id)
        gItems.splice(idx, 1, itemToSave)

    } else {
        itemToSave._id = _makeId()
        itemToSave.imgName = 'default'
        gItems.push(itemToSave)
    }
    storageService.saveToStorage(STORAGE_KEY, gItems)
    return Promise.resolve(itemToSave);
}
// function getEmptyItem() {
//     return Promise.resolve({
//         vendor: '',
//         speed: ''
//     })
// }
function _loadItems() {
    let items = storageService.loadFromStorage(STORAGE_KEY)
    if (!items || !items.length) items = gItems
    storageService.saveToStorage(STORAGE_KEY, items)
    return items
}

function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
