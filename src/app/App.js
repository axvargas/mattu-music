import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	createMuiTheme,
	responsiveFontSizes,
	MuiThemeProvider,
	Grid,
	Container,
	Fab,



} from '@material-ui/core';


import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';



import useStyles from './style';
import Footer from '../components/footer';
import Header from '../components/header';
import Searcher from '../components/searcher';
import ScrollTop from '../components/scrollTop';
import Lyrics from '../components/lyrics';
import Artist from '../components/artist';


const App = () => {

	const classes = useStyles();
	let theme = createMuiTheme();
	theme = responsiveFontSizes(theme);

	const [search, setSearch] = useState({});
	const [lyrics, setLyrics] = useState('');
	const [artist, setArtist] = useState({});

	useEffect(() => {
		if (Object.keys(search).length === 0) return;
		const consultAPIs = async () => {

			const url = `https://api.lyrics.ovh/v1/${search.artist}/${search.song}`;
			const url1 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${search.artist}`
			const [resLyrics, resArtist] = await Promise.all([
				axios(url),
				axios(url1)
			]);
			setLyrics(resLyrics.data.lyrics);
			setArtist(resArtist.data.artists[0]);

		}
		consultAPIs();
	}, [search]);
	return (
		<MuiThemeProvider theme={theme}>
			<Header title="MattuSongs" />

			<Searcher setSearch={setSearch} />
			<Container>
				<Grid container justify="center" spacing={3} className={classes.grid}>
					{Object.keys(artist).length!==0 &&
						<Grid item lg={6} md={6} sm={12} xs={12}>
							<Artist info={artist} />
						</Grid>
					}
					{lyrics &&
						<Grid item lg={6} md={6} sm={12} xs={12}>
							<Lyrics song={search.song} lyrics={lyrics} />
						</Grid>
					}
				</Grid>

			</Container>


			<Footer />
			<ScrollTop>
				<Fab className={classes.fab} size="small" aria-label="scroll back to top">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>
		</MuiThemeProvider>
	);
}


export default App;