import { Box, Typography} from '@mui/material'
import ProfileCard from '../blocks/ProfileCard'
import FriendsCard from '../blocks/FriendsCard'

function Profile() {
  return (
    <Box flex={4} p={1}>
      
    <ProfileCard />
   
    <FriendsCard image="https://avatars.githubusercontent.com/u/107578323?v=4" 
    name="Max" 
    bio="Sometimes, I like to pretend that I'm a chicken nugget." 
    handle="@jour_n_a_l" />

    <FriendsCard image="https://avatars.githubusercontent.com/u/51833647?v=4" 
    name="Sophie" 
    bio="I'm a Gemini, so I have two personalities. And they're both equally annoying." 
    handle="@lifeG54" />

    <FriendsCard image="https://avatars.githubusercontent.com/u/9838872?v=4" 
    name="Jean Michele" 
    bio="You see a boat filled with people. It has not sunk, but when you look again, you don’t see a single person on the boat. Why?" 
    handle="@juju" />

    <FriendsCard image="https://avatars.githubusercontent.com/u/37716815?v=4" 
    name="E.Z.OP" 
    bio="Don't ever think that you're not good enough—because you are." 
    handle="@electroLegacy" />

    <FriendsCard image="https://avatars.githubusercontent.com/u/9282824?v=4" 
    name="Laurie" 
    bio="Do you know what they call a Royale with Cheese?" 
    handle="@good_s_21" />

    <FriendsCard image="https://avatars.githubusercontent.com/u/17500430?v=4" 
    name="Tom Hilbert" 
    bio="You're pretty cool, but if you were a triangle, you'd be acute one." 
    handle="@tom_hilb" />

    <FriendsCard image="https://avatars.githubusercontent.com/u/107067269?v=4" 
    name="Eva_l_p" 
    bio="You see a black cat. Is it a witch’s cat?" 
    handle="@spacepro89" />
    
    


    </Box>
  )
}

export default Profile