import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardHeader } from '@mui/material';
import React from 'react';
import Actions from './Actions';

function CommentsTwo() {
    return (
        <Box flex={4} >
            <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Pamela Tiles" src="https://avatars.githubusercontent.com/u/81039882?v=4" />
                    </ListItemAvatar>
                    <ListItemText

                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary">
                                    Packing away into a small and relatively light bag, this tent is also perfect for those with smaller cars or heading to summer festivals. Taking less than 30 minutes to pitch from start to finish, it’s a winner in that respect too.
                                </Typography>
                                <Actions />

                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Hugo Machado" src="https://avatars.githubusercontent.com/u/82608823?v=4" />
                    </ListItemAvatar>
                    <ListItemText

                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary">
                                    The Hartland is a pretty sleek-looking tent that measures 4.2 metres in length, 1.4 metres in height, and is 2.1 metres deep. It’s shaped similar to a tunnel tent, but tapers out towards the bedrooms at either side of the living space. In these rooms, the tent is 1.15 metres in height. 
                                </Typography>
                                <Actions />

                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>

        </Box>
    )
}

export default CommentsTwo