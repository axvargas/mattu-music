import React, { useState } from 'react';

import { Typography, Grid, Paper, TextField, Button, Container, FormHelperText } from '@material-ui/core';

import useStyles from './style';
const Searcher = ({setSearch}) => {
    const classes = useStyles();

    // State
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const [error, setError] = useState(false);
    const [helper, setHelper] = useState('');
    const [error1, setError1] = useState(false);
    const [helper1, setHelper1] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
        setError(false);
        setHelper('');
    }
    const handleChange1 = (event) => {
        setText1(event.target.value);
        setError1(false);
        setHelper1('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        //Validate
        let errors = 0;
        if (!text.trim()) {
            errors++;
            setError(true)
            setHelper('Write a band or an artist')
        }
        if (!text1.trim()) {
            errors++;
            setError1(true)
            setHelper1('Write the name of a song')
        }
        if (errors > 0) {
            return;
        }

        // Send seacrh
        setSearch({
            artist: text.trim(),
            song: text1.trim()
        });
    }
    return (
        <Paper elevation={3} className={classes.paper}>
            <Container className={classes.cont}>
                <Grid container direction="column" justify="center" alignItems="center">

                    <Paper className={classes.animated}>
                        <Typography variant="h5" className={classes.typo}>Lyrics Finder</Typography>
                    </Paper>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item lg={5} md={6} sm={12} xs={12}>
                            <Typography variant="h6" className={classes.typo2}>Band</Typography>

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                className={classes.textField}
                                onChange={handleChange}
                                value={text}
                                helperText={helper}
                                error={error}
                                autoComplete="off"
                            />
                            {error1 && !(error && error1) &&
                                <FormHelperText  className={classes.error}>Error</FormHelperText>

                            }
                        </Grid>
                        <Grid item lg={5} md={6} sm={12} xs={12}>
                            <Typography variant="h6" className={classes.typo2}>Song</Typography>

                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                className={classes.textField}
                                onChange={handleChange1}
                                value={text1}
                                helperText={helper1}
                                error={error1}
                                autoComplete="off"
                            />
                            {error && !(error && error1) &&
                                <FormHelperText  className={classes.error}>Error</FormHelperText>

                            }
                        </Grid>
                        <Grid item lg={2} md={2} sm={4} xs={4}>
                            
                            <Button
                                className={classes.btn}
                                type="submit"
                                variant="contained"
                            >
                                <Typography variant="h6" className={classes.typo2}>Search</Typography>
                            </Button>
                            {(error || error1 )&&
                                <FormHelperText className={classes.error}>Error</FormHelperText>

                            }
                        </Grid>

                    </Grid>
                </form>


            </Container>
        </Paper >
    );
}

export default Searcher;
