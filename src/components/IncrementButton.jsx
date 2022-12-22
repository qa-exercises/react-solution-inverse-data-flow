import React from 'react'

export default function IncrementButton({ increment }) {
  return (
    <button onClick={increment}>
      Increment the counter!
    </button>
  )
}
