import { Box, Typography } from '@mui/material'
import React from 'react'

function Pages() {
  return (
    <Box flex={4} p={1.5}>
     
     <Typography variant="h4"   sx={{ display: { xs: "none", sm: "block" }}}>PAGES COMPONENT</Typography>
     <img src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
 
     </Box>
  )
}

export default Pages