'use client'
import { guardarNombre } from '@/store/slice'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Create() {
  const [nuevoValor, setNuevoValor] = useState('')
  const dispatch = useDispatch()
  const modificar =() => {
    dispatch(guardarNombre(nuevoValor))
  }

  return (
    <>
    <h1>Crear Users</h1>
    <Link href="/users">Usuario</Link>
    <input value={ nuevoValor } onChange={e => setNuevoValor(e.target.value)} />
    <button onClick={modificar}>Crear</button>
    </>
  )
}

export default Create