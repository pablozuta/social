import { Box, Typography } from '@mui/material'
import supabase from '../config/supabaseClient'

import React from 'react'

function Market() {
  console.log(supabase);
  return (
    <Box flex={4} p={1}>

      <Typography variant="h4" sx={{ display: { xs: "none", sm: "block" } }}> MARKET </Typography>

      <img src="" alt="" />

    </Box>
  )
}

export default Market