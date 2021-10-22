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

export default function UploadPage() {
    const classes = useStyles();
    const [errorMessage, setErrorMessage] = useState(0);
    const [backdrop, showBackdrop] = useState(false); //false means enabled
    const [snackbar, showSnackbar] = React.useState(false);

    const handleClose = (event, reason) => {
        showSnackbar(false);
    };

    const upload = (e) => {
        const currentFile = e.target.files[0];
        
        musicMetadata.parseBlob(currentFile).then(metadata => {
            if (metadata.format.container === 'MPEG') {
                if (metadata.format.duration > 0 && metadata.format.duration < 90) {
                    showBackdrop(true);
                    UploadService.upload(currentFile)
                        .then((response) => { setErrorMessage(response.data.message); showBackdrop(false) }) 
                        .catch((error) => { setErrorMessage(error.message); showBackdrop(false); showSnackbar(true) })
                } else {
                    setErrorMessage("Audio file too long!");
                    showSnackbar(true);
                }
            } else {
                setErrorMessage("Only mp3 files allowed!");
                showSnackbar(true);
            }
        }).catch(e => {
            setErrorMessage("Unknown parsing error");
            showSnackbar(true);
        });
    }

    return (
        <div className={classes.root}>
            <div>
                <Box textAlign='center'>
                    <br /><br />
                    <input data-testid="upload-input" accept="audio/mp3" className={classes.input} id="contained-button-file" type="file" onChange={upload} />
                    <label htmlFor="contained-button-file">
                        <Button data-testid="upload-button" variant="contained" color="primary" component="span">Upload File</Button>
                    </label>
                </Box>
            </div>
            <Backdrop className={classes.backdrop} open={backdrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Snackbar open={snackbar} autoHideDuration={6000} onClose={handleClose}>
                <Alert data-testid="upload-msg" onClose={handleClose} severity="error">
                    Error: {errorMessage}
                </Alert>
            </Snackbar>
        </div>

    );

}