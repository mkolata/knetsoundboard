import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function Main() {
    const classes = useStyles();
    const [fileName, setFileName] = useState(0);

    function handleUpload(audiofile) {
        //starteUpload
    }
    return (
        <div className={classes.root}>
            <Box textAlign='center'>
                <br/><br/>
                <input accept="audio/mp3" className={classes.input} id="contained-button-file" type="file" onChange={(e) => handleUpload(e.target.files[0])}/>
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">Upload</Button>
                </label>
            </Box>
        </div>
    );

}