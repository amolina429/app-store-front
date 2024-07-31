'use client'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

function Users() {
    const miNombre = useSelector(state=> state.valores.nombre)
  return (
    <>
    <h1>Users</h1>
    <Link href="/create">Create</Link>
    <h2>{miNombre}</h2>
    </>
  )
}

export default Users