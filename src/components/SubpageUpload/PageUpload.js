import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useState } from 'react';
import UploadService from "./upload-files.service";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import * as musicMetadata from 'music-metadata-browser';

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
    const [backdrop, setBackdrop] = useState(false); //false means enabled
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    let upload = (e) => {
        const currentFile = e.target.files[0];
        const musicMetadata = require('music-metadata-browser');
        musicMetadata.parseBlob(currentFile).then(metadata => {
            console.log(metadata.format.duration);
            if (metadata.format.duration > 0 && metadata.format.duration < 90) {
                setBackdrop(true);
                setUploadProgress(0);
                UploadService.upload(currentFile, (event) => setUploadProgress(Math.round((100 * event.loaded) / event.total)))
                    .then((response) => { setUploadMessage(response.data.message); setBackdrop(false) }) //response.status
                    .catch((error) => { setUploadMessage("Error: " + error.message); setUploadProgress(-1); setBackdrop(false); setOpen(true) })
            } else {
                setUploadMessage("Error: Audio file too long!");
                setOpen(true);
            }
        }).catch(e => {
            setUploadMessage("Error: Unsupported file format!");
            setOpen(true);
        });
    }

    //reset e on fail?
    return (
        <div className={classes.root}>
            <div>
                <Box textAlign='center'>
                    <br /><br />
                    <input accept="audio/mp3" className={classes.input} id="contained-button-file" type="file" onChange={upload} />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">Upload File</Button>
                    </label>
                </Box>
            </div>
            <Backdrop className={classes.backdrop} open={backdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    Error: {uploadMessage}
                </Alert>
            </Snackbar>
        </div>

    );

}