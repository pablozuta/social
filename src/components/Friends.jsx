
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Friends() {
  let altura = "600px";
  return (
    <Box flex={4} p={1}>

      <Typography variant="h3" gutterBottom>FRIENDS</Typography>

      <Card sx={{ bgcolor: "pink", marginBottom: "1rem" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>John Mick</Typography>
          <Typography variant="body1" color="text.secondary">
            👨‍💻Indiepreneur | AI IoT researcher turned startup founder 🚀
            Building a portfolio of profitable businesses.</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height={altura}
          image="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
      </Card>

      <Card sx={{ bgcolor: "#44B78B", marginBottom: "1rem" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Charlotte Ball</Typography>
          <Typography variant="body1" color="text.secondary">
            Senior Developer Relations, Social Deduction Game Dev, TED Resident. Tweets about technology, coding, and DevRel. Listens. </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height={altura}
          image="https://images.unsplash.com/photo-1511763368359-c0d890ede0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=578&q=80" />
      </Card>




      <Card sx={{ bgcolor: "#3be9a5", marginBottom: "1rem" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Liz Ball</Typography>
          <Typography variant="body1" color="text.secondary">
            SaaS cofounder growing to 10k/month • Focused on becoming the customer acquisition geek • Taking a gap year around the world 🌎</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height={altura}
          image="https://images.unsplash.com/photo-1502877828070-33b167ad6860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=605&q=80" />
      </Card>

      <Card sx={{ bgcolor: "#f7c1b9", marginBottom: "1rem" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Kyle Rowden</Typography>
          <Typography variant="body1" color="text.secondary">
            Solopreneur building indie startups and a life of freedom </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height={altura}
          image="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      </Card>

      <Card sx={{ bgcolor: "pink", marginBottom: "1rem" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>Jason Meyers</Typography>
          <Typography variant="body1" color="text.secondary">
            Graphic Designer looking for expanding creative outputs </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height={altura}
          image="https://images.unsplash.com/photo-1624561172888-ac93c696e10c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80" />
      </Card>



    </Box>
  )
}

export default Friends