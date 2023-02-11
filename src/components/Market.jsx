import { Box, Typography } from '@mui/material'
import supabase from '../config/supabaseClient'
import { useEffect, useState } from "react";
import React from 'react'

function Market() {
  const [fetchError, setFetchError] = useState(null)
  const [datos, setDatos] = useState(null)
  useEffect (() => {
    const fetchData = async () => {
      const {data, error} = await supabase
      .from('users')
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
    fetchData()
  }, [])
  /* console.log(supabase); */
  return (
    <Box flex={4} p={1}>
      {fetchError && (<p>{fetchError}</p> ) }
      {datos &&
      <div>
        {datos.map(user => (
          <h3>{user.user_name}</h3>
        ))}
      </div> }
     

    </Box>
  )
}

export default Market