import { makeStyles, fade } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paper: {
        textAlign: 'center',
        borderRadius: '4px',
        width: '100%',
        color: 'black',
        backgroundColor: '#195e83',
    },
    typo: {
        marginBottom: '10px',
        marginTop: '10px',
        textAlign: 'center',
        cursor: 'default',
        color: 'white',
        fontFamily: "'Work Sans', sans-serif",
        fontWeight:'bold'
    },
    typo2: {
        textAlign: 'center',
        cursor: 'default',
        color: 'white',
        fontFamily: "'Work Sans', sans-serif",
    },
    error: {
        color: '#195e83',
    },
    textField: {
        '& label.Mui-focused': {
            color: 'black',
        },
        '& label': {
            color: 'grey',

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
        },
        '& .MuiInput-underline': {
            borderBottomColor: 'grey',
        },
        '& .MuiInput-input:focus': {
            color: 'black',

        },
        '& .MuiInput-input': {
            color: 'white',

        },
        '& label..MuiInputLabel-outlined': {
            fontSize: 40
        },
        '& .MuiOutlinedInput-input': {
            padding: '11px 11px'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'grey',
            },
            // '&:hover fieldset': {
            //     borderColor: '#828282',
            // },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
            color: 'black',



        },
        '& .MuiFormHelperText-root.Mui-error':{
            color: 'white',
        },
        '& .MuiInputBase-input': {
            backgroundColor: 'white',
            borderRadius: '5px',
        },
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },

        width: '100%',
        marginBottom: '0.5rem',


    },
    btn: {
        marginTop: '23px',
        width: '100%',
        backgroundColor: '#EB6864',
        color: 'white',
        borderRadius: '4px',
        textTransform: 'none',
        "& .MuiButton-label": {
            padding: '0.0px 0.0px'
        },
        '&:hover': {

            backgroundColor: '#EB6150',
        },
    },
    animated: {
        width: '300px',
        display: 'block',
        backgroundColor: '#EB6864',
        transform: 'rotate(-1deg)',
        transition: 'transform .3s ease',
        '&:hover ': {
            display: 'block',
            backgroundColor: '#EB6150',
            transform: 'rotate(2deg)',
            // height: 40px;
            // z-index:-1;
            // left: -30px;
            // right: -30px;

        },
        marginBottom: '0.5rem',
        marginTop: '1.5rem'
    },

}));
export default useStyles;