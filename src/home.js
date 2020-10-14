import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';



renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };

function renderRow(props) {
    const { index, style } = props;
  
    return (
      <ListItem button style={style} key={index} dense={true}>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItem>
    );
  }

function GenerateList(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            //maxWidth: 560,
            backgroundColor: theme.palette.background.paper,
            position: 'relative',
            overflow: 'auto',
            //maxHeight: 110,
        },
        listSection: {
          backgroundColor: 'inherit',
        },
        ul: {
          backgroundColor: 'inherit',
          padding: 0,
          paddingRight: 16,
        },
      }));
      
      const classes = useStyles();


    return (
        <Box flex={1} overflow="auto">
        <List dense="true" className={classes.root}>
            <ul className={classes.ul}>
              {[0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,32,33,34,35,36,37,38,39,40,41,21,22,23,24,25,26,27,28,123,36,56458,224,2].map((item) => (
                <ListItem button key={`item-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
      </List>
      </Box>
      );
    
}

function HomeGrid(props) {
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

    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    const classes = useStyles();

    let windowsize =  window.innerHeight-48-62-48 + "px";

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
                    SIZE: { window.innerHeight-48} <br></br>
                    <FormControlLabel control={<Switch checked={checked} onChange={toggleChecked} />} label="Play Local"/>
                    </Paper>
                </Grid>
            </Grid>
            <Grid item sm>
            <Paper className={classes.paper}>
            <FormGroup className={classes.form}>
                <form noValidate autoComplete="off">
                <TextField id="search" label="Search" fullWidth="true"/>
                </form>
            </FormGroup>
            <Box color="primary" display='flex' flex='1' justifyContent='space-around' overflow="auto" style={{ height: windowsize }}><GenerateList/></Box>
            </Paper>
            </Grid>
        </Grid>
      </div>
    );
}

export default class GUIhome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            localButton: false,
        };
      }

    render() {
        let content = <HomeGrid content='test'/>
        return(
                content
        )
    }
}