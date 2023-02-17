import { Box, Typography} from '@mui/material'
import ProfileCard from '../blocks/ProfileCard'
import FriendsCard from '../blocks/FriendsCard'

function Profile() {
  return (
    <Box flex={4} p={1}>
      
    <ProfileCard />
   
    <FriendsCard image="https://e7.pngegg.com/pngimages/451/93/png-clipart-cartoon-comics-avatar-na-discord-comics-head.png" 
    name="Max" 
    bio="Sometimes, I like to pretend that I'm a chicken nugget." 
    handle="@jour_n_a_l" />

    <FriendsCard image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9b1d578-8f88-45e9-b0d8-9e6ad6bc9dfe/delfmu5-bfc5d4bf-8dcd-49b4-a16d-7e597442af0e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5YjFkNTc4LThmODgtNDVlOS1iMGQ4LTllNmFkNmJjOWRmZVwvZGVsZm11NS1iZmM1ZDRiZi04ZGNkLTQ5YjQtYTE2ZC03ZTU5NzQ0MmFmMGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.81y9BR-CKjQSDVCVsKVv0fi9h9sID5ozNzXuPrInRFY" 
    name="Sophie" 
    bio="I'm a Gemini, so I have two personalities. And they're both equally annoying." 
    handle="@lifeG54" />
    
    


    </Box>
  )
}

export default Profile