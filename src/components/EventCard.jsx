"use client"

import Link from 'next/link'
import React from 'react'

const EventCard = ({event}) => {
  return (
    <div className='bg-transparent border shadow-md rounded-lg p-4'>
        <h2 className='text-gray-200 text-lg font-semibold mt-4'>
            {event.title}
        </h2>
        <p className='text-gray-400 mt-2'>
            {event.description}
        </p>
        <p className='text-gray-300 mt-2'>
            {event.location}
        </p>
        <p className='text-gray-300 mt-2'>
            {new Date(event.date).toLocaleDateString()}
        </p>
        {/* <Link> */}
        <a href="/bookings" className='text-blue-600 hover:underline mt-4 block'>
            View Details
        </a>
        {/* <a href={`event/${event.id}`} className='text-blue-600 hover:underline mt-4 block'>
            View Details
        </a> */}
        {/* </Link> */}
    </div>
  )
}

export default EventCard