"use client"

import Link from 'next/link'
import React from 'react'

const EventCard = ({event}) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4'>
        <h2 className='text-black text-lg font-semibold mt-4'>
            {event.title}
        </h2>
        <p className='text-gray-700 mt-2'>
            {event.description}
        </p>
        <p className='text-gray-700 mt-2'>
            {event.location}
        </p>
        <p className='text-gray-600 mt-2'>
            {new Date(event.date).toLocaleDateString()}
        </p>
        {/* <Link> */}
        <a href={`event/${event.id}`} className='text-blue-600 hover:underline mt-4 block'>
            View Details
        </a>
        {/* </Link> */}
    </div>
  )
}

export default EventCard