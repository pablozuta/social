import { Box, IconButton } from "@mui/material"
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

function Post(props) {
  return (
    <div>
         <Card  sx={{margin:1}}>

<CardHeader
  avatar={
    <Avatar sx={{ bgcolor: "pink" }} aria-label="recipe">
      T
    </Avatar>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title="Travel"
  subheader="December 11, 2022"
/>


<CardMedia
  component="img"
  height="375px"
  image={props.url}
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    Make plans lightly. It definitely helps to make plans. But do it with the expectation that any of them could change. Nothing is set in stone. Could you view them as fluid, while trying to stick to them as best you can?

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

</Card>
    </div>
  )
}

export default Post