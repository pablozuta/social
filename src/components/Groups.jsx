import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardHeader, IconButton } from '@mui/material';





import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

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
      </Card>

      <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://avatars.githubusercontent.com/u/87880432?v=4" />
          </ListItemAvatar>
          <ListItemText
           
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary">
                  In January 2021, an update to Luminar AI - which is a free update for anybody who already has Luminar AI - also became available. Luminar AI 1.0.1 promises to be a more refined version of Luminar AI, with a more convenient Edit panel, a new Import interface and a host of refined and redesigned tools that should make the process of using the software even easier than before.
                </Typography>
               
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Avatar Brian" src="https://avatars.githubusercontent.com/u/49203262?v=4" />
          </ListItemAvatar>
          <ListItemText
           
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary">
                  Once the software is installed you'll be greeted with the Welcome screen the first time you open it. As well as being a photo-editing tool, you can also use it to organise your photo library. By default, Luminar will create a folder ink which to keep your Catalog of images, but you can move it to somewhere else by clicking the Change button if you prefer - perhaps if you want to keep it on an external hard drive.
                </Typography>
               
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </Box>
  );
}
