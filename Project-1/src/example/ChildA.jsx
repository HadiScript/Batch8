import React from 'react'
import ChildOfA from './ChildOfA'

const ChildA = ({ pesa }) => {
  return (
    <div>

      <ChildOfA pesa={pesa} />
    </div>
  )
}

export default ChildA