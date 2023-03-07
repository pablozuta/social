import { Box, Card, Typography } from '@mui/material'
import supabase from '../config/supabaseClient'
import { useEffect, useState } from "react";
import React from 'react'

function Market() {
  const [fetchError, setFetchError] = useState(null)
  const [datos, setDatos] = useState(null)
  const [user, setUser] = useState(null)
  const [email, setEmail] = useState(null)

  // useEffect para triggear fetch de datos
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data, error } = await supabase
      .from('names')
      .select()

    if (error) {
      setFetchError("Unable to Fetch Data")
      console.log(error);
    }

    if (data) {
      setDatos(data)
      setFetchError(null)
    }
  }

  // funcion para crear un usuario
  async function createUser() {
    await supabase
      .from('names')
      .insert({ user_name: user, email: email })
      .single()
    fetchData()
  }

  // return del componente
  return (
    <Box flex={4} p={1}>
      {fetchError && (<p>{fetchError}</p>)}
      {datos &&
        <Card >
          {datos.map(user => (
            <Card key={user.id} style={{ marginBottom: "4rem" }}>
              <h3>UserName: {user.user_name}</h3>
              <p>User Id: {user.id}</p>
              <p>Email: {user.email}</p>
              <p>Website: {user.website}</p>
         </Card>

          ))}
        </Card>}
     

      <input
        type="text"
        placeholder='User Name'
        value={user}
        onChange={e => setUser(e.target.value)}
      />


      <input
        type="text"
        placeholder='User Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <button onClick={createUser}>Create User </button>

    </Box>
  )
}

export default Market