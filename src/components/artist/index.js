import React from 'react';
import { Typography, Grid } from '@material-ui/core';

import useStyles from './style';
const Artist = ({ info }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Typography variant="h6" className={classes.typo}>{info.strArtist}</Typography>
            <Grid container justify="flex-start" spacing={1} className={classes.grid}>



                <Grid item >
                    <img src={info.strArtistThumb} alt={info.strArtist} className={classes.img} />
                </Grid>
                <Grid item >
                    <Typography variant="h6" className={classes.typo}>Biography</Typography>
                    <Typography>{info.strBiographyEN}</Typography>
                </Grid>
                <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-lastfm"></i>
                </a>
            </Grid>
        </React.Fragment >
    );
}

export default Artist;
