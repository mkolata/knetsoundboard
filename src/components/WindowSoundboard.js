import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import SoundList from './SoundList'
import MessageBox from './MessageBox'
import PlayBox from './PlayBox'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 15,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    textAlign: 'left',
  },
  messagefield: {
    marginTop: 9,
  },
  search: {
    marginTop: -6,
  },
  soundlist: {
    marginTop: 4,
  },
}));

export default function WindowSoundboard(props) {
  const classes = useStyles();

  let windowsize = window.innerHeight - 48 - 62 - 48;
  return (
    <div className={classes.root}>
      <Grid container alignItems="flex-start" spacing={2}>
        <Grid item sm={7}>
          <Grid item >
            <Paper className={classes.paper}>
              <MessageBox windowsize={windowsize}/>
              <form noValidate autoComplete="off">
                <TextField className={classes.messagefield} id="search" label="Message" fullWidth="true" variant="outlined" size="small"/>
              </form>
            </Paper>
          </Grid><br></br>
          <Grid item >
            <Paper className={classes.paper}>
              <PlayBox />
            </Paper>
          </Grid>
        </Grid>
        <Grid item sm={5}>
          <Paper className={classes.paper}>
            <FormGroup className={classes.form}>
              <form noValidate autoComplete="off">
                <TextField className={classes.search} id="search" label="Search" fullWidth="true" />
              </form>
            </FormGroup>
            <Box className={classes.soundlist} color="primary" display='flex' flex='1' justifyContent='space-around' overflow="auto" style={{ height: windowsize}}><SoundList /></Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}