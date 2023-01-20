import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

function FriendsAvatarGroup() {
  return (
    <div>
        {/* estos son los avatares de los grupos de amigos */}
     <AvatarGroup max={6}>
      <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" />
      <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1502877828070-33b167ad6860?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=605&q=80" />
      <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1523111343671-c0872e1ac556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
  
      <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1511763368359-c0d890ede0c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=578&q=80" /> 
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" /> 
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" /> 

    </AvatarGroup>
    </div>
  )
}

export default FriendsAvatarGroup