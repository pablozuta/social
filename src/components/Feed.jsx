import { Box } from "@mui/material"
import Post from "./Post"

// aca se ingresa el componente "Post" pasandole props de url, nombre y date del post
const Feed = () => {
  return (

    <Box flex={4} p={1} >


      <Post url="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Travel"
        date="December 17, 2022"
        textpost="Make plans lightly. It definitely helps to make plans. But do it with the expectation that any of them could change. Nothing is set in stone. Could you view them as fluid, while trying to stick to them as best you can?"
      />
      <Post
        url="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=974&q=80"
        title="Norway Mountains"
        date="January 27, 2023"
        textpost="Norway mainly consists of mountains and wilderness. Craggy summits and rounded rock formations are an important part of the national identity. Norwegians have long used the mountains for leisure. All over the country, people flock to the mountains during weekends and holidays to breathe in the crisp and clean mountain air." />

      <Post url="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Magic Evenings"
        date="January 04, 2023"
        textpost="Venice at night is when the city opens up and spreads it magic and special charms – when the sun starts to set over the Piazza San Marco , you can see sunset over the Grand Canal crescending slowly down the Adriatic sea. A perfect time to relax and enjoy the moment with these wonderful views across the Grand Canal and the lively Piazza San Marco."
      />
      <Post url="https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Greece for Two"
        date="December 11, 2022"
        textpost="Two weeks is a great length for a Greek vacation. You'll have plenty of time to see multiple islands and historic mainland sites, taking part in cultural or outdoor activities along the way. These itineraries explore the possibilities: get active on some of the Cyclades lesser-known islands, dive into ancient mythology, enjoy a laidback beach holiday, and more."
      />
      <Post url="https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=810&q=80"
        title="Small Pathways"
        date="February 14, 2023"
        textpost="One of the more attractive aspects of Havana is to see how everyday life pans out in the city: happy children playing baseball on the street, street troubadours, a group of people doing maintenance on a Plymouth from 1955 in the middle of the street… and the peculiar way in which the people of Havana, the habaneros, project themselves, create, and live above all, enjoying life. Learn about their stories and the passions that move them as you enjoy an entertaining game of dominos and the atmosphere of tranquility that the city breathes. "
      />



    </Box>
  )
}

export default Feed
