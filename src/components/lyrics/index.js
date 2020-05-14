import React from 'react';

import useStyles from './style';
import { Typography } from '@material-ui/core';
const Lyrics = ({ song, lyrics }) => {
    const classes = useStyles();
    return (
        <React.Fragment>

            <Typography variant="h6" className={classes.typo}>{song.charAt(0).toUpperCase() + song.slice(1)}</Typography>
            <Typography className="letra">{lyrics}</Typography>
        </React.Fragment >

    );
}

export default Lyrics;
