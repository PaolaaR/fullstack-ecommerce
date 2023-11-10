import React from 'react'
import { useParams } from 'react-router-dom'

export const TazonUno = () => {
  const { tazonUno } = useParams()
  return (
    <div>{tazonUno}</div>
  )
}
