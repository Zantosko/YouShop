import React from 'react'
import { useSelector } from 'react-redux';

export default function ItemDetails() {
  const products = useSelector(state => state.products)

  return (
    <div>
      <h1>Details</h1>
    </div>
  )
}
