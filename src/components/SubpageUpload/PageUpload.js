import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import UploadService from "./upload-files.service";
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {

    },
    input: {
        display: 'none',
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function PageUpload() {
    const classes = useStyles();
    const [uploadMessage, setUploadMessage] = useState(0);
    const [uploadProgress, setUploadProgress] = useState(-1);
    const [msgState, setMsgState] = useState(false); //false means enabled
    const [buttonState, setButtonState] = useState(false); //false means enabled

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setMsgState(false);
    };

    function upload(currentFile) {
        setUploadProgress(0);
        UploadService.upload(currentFile, (event) => setUploadProgress(Math.round((100 * event.loaded) / event.total)))
            .then((response) => { setUploadMessage(response.data.message) }) //response.status
            .catch((error) => { setUploadMessage(error.message); setUploadProgress(-1); setButtonState(false); setMsgState(true) })
    }

    function generateMessage() {
        switch (uploadMessage) {
            case '200':
                return 'success'
            default:
                return 'error'
        }
    }

    return (
        <div className={classes.root}>
            <div>
                <Box textAlign='center'>
                    <br /><br />
                    <input accept="audio/mp3" className={classes.input} id="contained-button-file" type="file" onChange={(e) => upload(e.target.files[0] && setButtonState(true))} />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">Upload File</Button>
                    </label>
                </Box>
            </div>
            <Snackbar open={msgState} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={generateMessage()}>
                    <p style={{ textTransform: 'capitalize' }}>{generateMessage()}: {uploadMessage}</p>
                </Alert>
            </Snackbar>
            <Backdrop className={classes.backdrop} open={buttonState}>
                    <CircularProgress color="inherit" />
            </Backdrop>
        </div>

    );

}