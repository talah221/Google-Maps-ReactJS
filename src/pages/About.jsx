import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function About() {
  // const [creators, setCreators] = useState(['Nadav', 'Tal'])
  // const interval = useRef()
  // const dispatch = useDispatch()

  // Get From Relevant Store:
  // const { users } = useSelector(state => state.userReducer)


  //Component Did Mount
  useEffect(() => {
    console.log('Mounted!');
    // startInterval()
    return () => {
      console.log('Unmounted!');
      //Component Will Mount
      // clearInterval(interval.current)
    }
  }, [])



  return (
    <div className="about-container">
<h1>About Page</h1>
    </div>
  )
}

