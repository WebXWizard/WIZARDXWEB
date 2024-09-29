'use client';
import React from 'react'

const EventHandling = () => {
  return (
    <div className='py-20 flex flex-col items-center'>
        <h1 className='text-5xl text-gray-500 shadow:md text-center font-bold mb-10'>Event Handling</h1>
        <button className='bg-green-500 hover:bg-red-500 text-white font-bold py-2 px-3 rounded-lg text-xl' onClick={() => {alert("This is a Notification")}}>Click Me</button>
    </div>
  )
}

export default EventHandling