import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import SoundList from './SoundList'
import MessageBox from './MessageBox'
import PlayBox from './PlayBox'
import UserList from './UserList'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 15,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 400,
  },
  form: {
    textAlign: 'left',
  },
  inputfield: {
    marginTop: 9,
  },
  soundlist: {
    marginTop: 4,
  },
}));

export default function WindowSoundboard(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <div className={classes.root}>
      <Grid container alignItems="flex-start" justify="center" spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <Paper className={fixedHeightPaper}>
            <Box className={classes.soundlist} color="primary" display='flex' flex='1' justifyContent='space-around' overflow="auto"><SoundList /></Box>
			<FormGroup className={classes.form}>
              <form noValidate autoComplete="off">
                <TextField className={classes.inputfield} id="search" label="Search" fullWidth="true" variant="outlined" size="small"/>
              </form>
            </FormGroup>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
            <Paper className={fixedHeightPaper}>
              <MessageBox />
              <form noValidate autoComplete="off">
                <TextField className={classes.inputfield} id="message" label="Message" fullWidth="true" variant="outlined" size="small"/>
              </form>
            </Paper>
        </Grid>
		<Grid item xs={12} md={4} lg={4}>
            <Paper className={classes.paper}>
			<Typography variant="body2">Users Online</Typography>
			<Box overflow="auto">
			<UserList />
            </Box>
			</Paper>
        </Grid>
		<Grid item xs={12} md={6} lg={6}>
            <Paper className={classes.paper}>
              <PlayBox />
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}