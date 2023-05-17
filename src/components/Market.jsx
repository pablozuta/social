import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardHeader, Rating } from '@mui/material';




export default function Market() {
  return (
    <Box flex={4} p={1} >

      {/* PRIMER CARD */}
      <Card sx={{ maxWidth: 500, mx: 'auto' }}>
        <CardHeader
          avatar={
            <Avatar alt="john burton avatar" src="https://avatars.githubusercontent.com/u/16634828?v=4" />
          }
          title="John Burton"

        />
        <Rating sx={{ marginLeft: 2 }} name="read-only" value={5} readOnly />
        <CardMedia
          sx={{ height: 440 }}
          image="https://cdn.shopify.com/s/files/1/0537/1177/products/Untitleddesign-2023-04-07T100903.723_500x.png?v=1680880353"
          title="Fleece Hoodie"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Men's All-Paca™ Fleece Hoodie by Appalachian Gear Company
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price: $ 164.99
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Appalachian Gear Company's All-Paca™ fleece hoodie made from 100% Alpaca Fiber is super lightweight, breathable, and packable. Great for outdoor adventure sports & activities, but great to hang around in also. It is super warm for its weight. The knit structure and fiber properties allow perspiration to easily escape while retaining its amazing insulating properties. Its exceptional properties allow it to be worn in a wide range of temperatures.
          </Typography>
        </CardContent>
        <CardActions>

          <Button variant="contained" color="success">Read More</Button>
        </CardActions>

      </Card>
      {/*  TERMINO PRIMER CARD */}

      {/* INICIO SEGUNDO CARD */}
      <Card sx={{ maxWidth: 500, mx: 'auto' }}>
        <CardHeader
          avatar={
            <Avatar alt="john burton avatar" src="https://avatars.githubusercontent.com/u/63784031?v=4" />
          }
          title="Vincent"

        />
        <Rating sx={{ marginLeft: 2 }} name="read-only" value={4} readOnly />
        <CardMedia
          sx={{ height: 440 }}
          image="https://cdn.shopify.com/s/files/1/0537/1177/products/Untitleddesign-2022-11-11T115315.550_500x.png?v=1668189432"
          title="Fleece Hoodie"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Ultralight Sling Bag by Napacks
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price:	$ 49.99
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Napacks' puts value in making simple, very well made items with a purpose. This sleek, durable and water resistant pack features an inner pocket, inner keyring loop, zipper back pocket. Super comfortable around your waist or the strap is long enough to wear as a cross body sling bag.
          </Typography>
        </CardContent>
        <CardActions>

          <Button variant="contained" color="success">Read More</Button>
        </CardActions>

      </Card>
      {/*  TERMINO SEGUNDO CARD */}

      {/* INICIO TERCER CARD */}
      <Card sx={{ maxWidth: 500, mx: 'auto' }}>
        <CardHeader
          avatar={
            <Avatar alt="colibri avatar" src="https://avatars.githubusercontent.com/u/110330205?v=4" />
          }
          title="Colibri"

        />
        <Rating sx={{ marginLeft: 2 }} name="read-only" value={4} readOnly />
        <CardMedia
          sx={{ height: 440 }}
          image="https://cdn.shopify.com/s/files/1/0537/1177/products/Untitleddesign-2022-07-04T152606.195_500x.png?v=1656966439"
          title="Titanium Hip Flask"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Titanium Hip Flask & Funnel - 220ml by SilverAnt
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price: $ 44.99
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A hip flask is one of the ultimate companions on a camping trip, telling stories around the camp fire, reminiscing on the day's adventures while sharing and sipping on your alcohol of choice.

            This lightweight titanium hip flask is strong and robust so you can take it with you to any environment. With its careful design, don’t worry about losing the lid, as it is securely attached to the clip, while also containing a food grade silicon seal and secure screw top preventing leakage.
          </Typography>
        </CardContent>
        <CardActions>

          <Button variant="contained" color="success">Read More</Button>
        </CardActions>

      </Card>
      {/*  TERMINO TERCER CARD */}

      {/* INICIO CUARTO CARD */}
      <Card sx={{ maxWidth: 500, mx: 'auto' }}>
        <CardHeader
          avatar={
            <Avatar alt="Nath avatar" src="https://avatars.githubusercontent.com/u/86206754?v=4" />
          }
          title="Nath86"

        />
        <Rating sx={{ marginLeft: 2 }} name="read-only" value={5} readOnly />
        <CardMedia
          sx={{ height: 440 }}
          image="https://cdn.shopify.com/s/files/1/0537/1177/products/Untitleddesign-2022-09-07T163509.260_500x.png?v=1680888509"
          title="Run Shorts"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Men's All Day Run Shorts by Territory Run Co.
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price: $ 48.99
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The All Day Run Shorts are a new premium piece for TRC's collection that offers deep pocket storage, a fabric and fit that will provide an ease of motion and all day style.

            Features:

            5" Inseam
            Two large stash mesh pockets
            Zip pocket that fits most phones with pull through storage behind it
            Lightweight smooth mesh liner
            Faux fly
            Lightweight quick dry nylon fabric
            Territory Run Co woven label
          </Typography>
        </CardContent>
        <CardActions>

          <Button variant="contained" color="success">Read More</Button>
        </CardActions>

      </Card>
      {/*  TERMINO CUARTO CARD */}

      {/* INICIO QUINTO CARD */}
      <Card sx={{ maxWidth: 500, mx: 'auto' }}>
        <CardHeader
          avatar={
            <Avatar alt="Nath avatar" src="https://avatars.githubusercontent.com/u/67812625?v=4" />
          }
          title="Abdelrahman Dwedar"

        />
        <Rating sx={{ marginLeft: 2 }} name="read-only" value={4} readOnly />
        <CardMedia
          sx={{ height: 440 }}
          image="https://cdn.shopify.com/s/files/1/0537/1177/products/Untitleddesign_90_b22d0c8d-855a-44db-9315-0c4ea38efd0b_500x.png?v=1650064185"
          title="Kumo 36"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Kumo 36 Superlight Backpack by Gossamer Gear
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Price: $ 179.99
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tough, frameless pack for day trippers and die-hard minimalists.

            This is a smaller-volume pack for low-stuff adventures. Maybe you’re doing a day hike and just carrying six or seven of the ten essentials. Or maybe you’re a wilderness warrior whose trail name is “Tent? Who needs a tent?” and thinks nothing of heading out on a backcountry weekend with six energy bars, one pair of socks and a Mylar blanket. Any hiker who wants more of an experience with less luggage will love the Kumo 36.
          </Typography>
        </CardContent>
        <CardActions>

          <Button variant="contained" color="success">Read More</Button>
        </CardActions>

      </Card>
      {/*  TERMINO QUINTO CARD */}




    </Box>
  );
}