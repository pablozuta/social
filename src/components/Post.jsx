import {IconButton, TextField } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CardActions from '@mui/material/CardActions';
import { useAuth0 } from '@auth0/auth0-react';

function Post(props) {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
{/* estos son las cards del feed principal */}
<Card  sx={{ maxWidth: '700px', mx: 'auto' }}>

<CardHeader
  avatar={
    <Avatar sx={{ bgcolor: "#A2CDCB" }} aria-label="recipe">
      T
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title={props.title}
  subheader={props.date}
/>


<CardMedia
  component="img"
  height="375px"
  image={props.url}
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
  {props.textpost}

  </Typography>

</CardContent>

<CardActions >
  <IconButton aria-label="add to favorites">

  <Checkbox icon={<FavoriteBorder />} 
  checkedIcon={<Favorite sx={{color:"pink"}} />} 
   />
   
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
</CardActions>
{isAuthenticated && <TextField fullWidth label="Add a comment" id="fullWidth" />}


</Card>
    </div>
  )
}

export default Post