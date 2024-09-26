'use client';
import React from 'react'

const EventHandling = () => {
  return (
    <div className='py-20 flex flex-col items-center'>
        <h1 className='text-4xl text-center font-bold mb-10'>Event Handling</h1>
        <button className='border text-red-200 bg-green-400 rounded-3xl p-3 text-xl' onClick={() => {alert("This is a Notification")}}>Click Me</button>
    </div>
  )
}

export default EventHandling