import { Box, Typography } from '@mui/material'
import supabase from '../config/supabaseClient'; 
import  { useState, useEffect } from 'react';


function Market() {
  const [fetchError, setFetchError] = useState(null);
  const [post, setPost] = useState(null);


  useEffect(() => {
    const fetchPost = async () => {
      const {data, error} = await supabase
      .from('posts')
      .select()

      if(error){
        setFetchError("no se pudo hacer fetch de posts")
        setPost(null)
      }
      if(data){
        setPost(data)
        setFetchError(null)
      }
    }

     fetchPost()
  }, [])
  
  return (
    <Box flex={4} p={3.5}>
     
    <div>
      {fetchError && ( <p>{fetchError}</p>)}
      {post && (
        <div>
          {post.map(pos => (
            <div className="card">
              <h4>{pos.title}</h4>
              <p>{pos.content}</p>
            </div>
            
          ))}
        </div>
       )}
      </div>


    

    </Box>
  )
}

export default Market