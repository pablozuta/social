import { Box, Typography } from '@mui/material'
import supabase from '../config/supabaseClient'
import { useEffect, useState } from "react";
import React from 'react'

function Market() {
  const [fetchError, setFetchError] = useState(null)
  const [datos, setDatos] = useState(null)
  const [user, setUser] = useState(null)

  
  useEffect (() => {
    
    fetchData()
  }, [])
  const fetchData = async () => {
      const {data, error} = await supabase
      .from('names')
      .select()

      if (error) {
        setFetchError("Unable to Fetch Data")
        console.log(error);
            }

      if(data) {
        setDatos(data)
        setFetchError(null)
      }      
    }
  /* console.log(supabase); */
  async function createUser () {
    await supabase
    .from('users')
    .insert({user_name: user})
    .single()
    fetchData()
  }
  return (
    <Box flex={4} p={1}>
      {fetchError && (<p>{fetchError}</p> ) }
      {datos &&
      <div>
        {datos.map(user => (
          <div>
          <h3>{user.user_name}</h3>
         
          </div>
        ))}
      </div> }
     <br />
     <br />
    <input 
    type="text"
      placeholder='User Name'
     value={user}
     onChange={e => setUser(e.target.value)}  
      /> 
      
      <button onClick={createUser}>Create User</button>
    
    </Box>
  )
}

export default Market