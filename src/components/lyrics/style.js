import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        backgroundColor: '#0277bd',
        borderRadius: '3px',
        width: '100%',
        color: 'white',
    },
    typo: {
        marginTop: ' 2rem',
        marginBottom: ' 1rem',
        fontFamily: "'Work Sans', sans - serif",
        borderBottom: '3px solid #EB6864',
        paddingBottom: '10px',
        fontWeight: 'bold'
    }

}));
export default useStyles;