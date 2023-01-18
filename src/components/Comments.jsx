import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardHeader } from '@mui/material';
import React from 'react';
import Actions from './Actions';

function Comments() {
    return (
        <Box flex={4} >
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
                                <Actions />

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

export default Comments