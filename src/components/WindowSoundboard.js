import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import SoundList from './SoundList'

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
  }
}));

export default function WindowSoundboard(props) {
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => { setChecked((prev) => !prev); };
  const classes = useStyles();

  let windowsize = window.innerHeight - 48 - 62 - 48 + "px";

  return (
    <div id="penis" className={classes.root}>
      <Grid container alignItems="flex-start" spacing={2}>
        <Grid item sm={7}>
          <Grid item sm={12}>
            <Paper className={classes.paper}>
              Bla. Blablaba bla! <br></br> Bla? Bla! BLABLA! bla
                </Paper>
          </Grid><br></br>
          <Grid item sm={12}>
            <Paper className={classes.paper}>
              <FormControlLabel control={<Switch checked={checked} onChange={toggleChecked} />} label="Play Local" />
            </Paper>
          </Grid>
        </Grid>
        <Grid item sm>
          <Paper className={classes.paper}>
            <FormGroup className={classes.form}>
              <form noValidate autoComplete="off">
                <TextField id="search" label="Search" fullWidth="true" />
              </form>
            </FormGroup>
            <Box color="primary" display='flex' flex='1' justifyContent='space-around' overflow="auto" style={{ height: windowsize }}><SoundList /></Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}