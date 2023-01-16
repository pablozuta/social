import * as React from 'react';
import Comments from './Comments';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardHeader } from '@mui/material';



export default function Groups() {
  return (
    <Box flex={4} p={1}>

      <Card sx={{ maxWidth: 700 }}>
        <CardHeader
          avatar={
            <Avatar alt="photography club avatar" src="https://www.gcls.org/sites/default/files/styles/news/public/news/photography_0.jpg?itok=jS93fBvT" />
          }
          title="Photography Club"

        />
        <CardMedia
          sx={{ height: 440 }}
          image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Luminar AI Review
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Luminar AI is claimed to be the first image editor which is entirely powered using artificial intelligence. Skylum's previous image editing software, Luminar 4, has been discontinued and replaced with AI, even though it is being pitched as a completely new and different product.

            Although there are some similarities with its predecessor, Skylum says that Luminar AI features a completely new artificial intelligence engine, which means that certain processes can be both smarter and faster. That includes a promised 30% faster Sky Enhancer, recognition for more than 7000 kinds of objects and a range of other new AI tools, including Composition AI, Atmosphere AI, Iris AI, and Body AI.
          </Typography>
        </CardContent>
        <CardActions>

          <Button size="small">Learn More</Button>
        </CardActions>
      <Comments />
      </Card>


    </Box>
  );
}
