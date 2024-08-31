import React from 'react'

export default function Container({children}) {
  return (
    <div className='m-12 border-2 border-gray-500 p-5 rounded-lg bg-slate-200 w-2/4'>
      {children}
    </div>
  )
}
