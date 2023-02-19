import React from 'react'
import {IconButton } from "@mui/material"
import ShareIcon from '@mui/icons-material/Share';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CardActions from '@mui/material/CardActions';

function Actions() {
    return (
        <div>
            <CardActions >
                <IconButton aria-label="add to favorites">

                    <Checkbox icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "pink" }} />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </div>
    )
}

export default Actions