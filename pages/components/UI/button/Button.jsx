import React from 'react'

export function Button({styles}) {
  return (
    <button className={` ${styles} py-2 bg-teal-600 w-44 text-white rounded-lg text-2xl hover:bg-teal-500 ease-in`}>Играть</button>
  )
}
