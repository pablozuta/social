import * as React from 'react';
import Comments from './Comments';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardHeader } from '@mui/material';
import CommentsTwo from './CommentsTwo';



export default function Groups() {
  return (
    <Box flex={4} p={1}>

      {/* PRIMER CARD */}
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

          <Button size="small">Read More</Button>
        </CardActions>
        <Comments />
      </Card>
      {/*  TERMINO PRIMER CARD */}

      {/* SEGUNDO CARD */}
      <Card sx={{ maxWidth: 700 }}>
        <CardHeader
          avatar={
            <Avatar alt="outdoor icon" src="https://i0.wp.com/laderasur.com/wp-content/uploads/2016/11/Captura-de-pantalla-2016-11-09-a-las-2.38.01-p.m..png?fit=887%2C589&ssl=1" />
          }
          title="Life Outdoor"

        />
        <CardMedia
          sx={{ height: 440 }}
          image="https://images.bauerhosting.com/legacy/media/6039/0ee6/e7a8/7223/cc36/b7ea/the-best-4-man-tents.jpg?q=80&w=1400&ar=16:9&fit=crop&crop=top"
          title="open tenet"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Trail Outdoor Leisure Hartland 4 Man Tent Review
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This Trail Outdoor Leisure tent is just one of the brand’s great-value tents now available, but there’s a fair few features that make the Hartland stand out. Before we get into details, it’s important to know this tent sleeps two to four people with two bedrooms, a small living area, and a sunshade entrance.

            This tent ticks all the boxes for a great camping trip, whether you’re heading away for a week with the whole family, or trudging through the mud to a festival campsite.

            Pair this with the ability to put the full thing up in under 30 minutes, and you’re off to a great start.
          </Typography>
        </CardContent>
        <CardActions>

          <Button size="small">Read More</Button>
        </CardActions>
        <CommentsTwo />
      </Card>
      {/*  TERMINO SEGUNDO CARD */}


      {/* INICIO TERCER CARD */}
      <Card sx={{ maxWidth: 700 }}>
        <CardHeader
          avatar={
            <Avatar alt="outdoor icon" src="https://i0.wp.com/laderasur.com/wp-content/uploads/2016/11/Captura-de-pantalla-2016-11-09-a-las-2.38.01-p.m..png?fit=887%2C589&ssl=1" />
          }
          title="Life Outdoor"

        />
        <CardMedia
          sx={{ height: 440 }}
          image="https://images.unsplash.com/photo-1525740353756-92f4fbde1625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          title="open tenet"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The Ten Essentials
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Packing the “Ten Essentials” whenever you step into the backcountry, even on day hikes, is a good habit. True, on a routine trip you may use only a few of them or none at all. It’s when something goes awry that you’ll truly appreciate the value of carrying these items that could be essential to your survival.

            The original Ten Essentials list was assembled in the 1930s by The Mountaineers, a Seattle-based organization for climbers and outdoor adventurers, to help people be prepared for emergency situations in the outdoors. Back then, the list included a map, compass, sunglasses and sunscreen, extra clothing, headlamp/flashlight, first-aid supplies, fire starter, matches, knife and extra food.
          </Typography>
        </CardContent>
        <CardActions>

          <Button size="small">Read More</Button>
        </CardActions>
        <CommentsTwo />
      </Card>
      {/*  TERMINO TERCER CARD */}


    </Box>
  );
}
