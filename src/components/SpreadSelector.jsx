import React from 'react'

export default function SpreadSelector({ options, selected, onSelect }) {
  return (
    <div className="flex justify-center gap-4 mb-6">
      {options.map(opt => (
        <button key={opt} onClick={()=>onSelect(opt)}
          className={`px-4 py-2 rounded-full ${selected===opt? 'bg-accent text-white':'bg-gray-200'}`}>
          {opt} Carta{opt>1?'s':''}
        </button>
      ))}
    </div>
  )
}