import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
    },
    box: {
        textAlign: 'left',
    },
});

export default function WindowSoundboard(props) {
    const classes = useStyles();
    const [plButton, setPlButton] = React.useState(false);
    const [mButton, setMButton] = React.useState(false);
    const togglePlButton = () => { setPlButton((prev) => !prev); };
    const toggleMButton = () => { setMButton((prev) => !prev); };
    const [value, setValue] = React.useState(30);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
	    <Grid container spacing={1}>
			<Grid item xs={12} xm={6}>
				<Grid container spacing={2}>
					<Grid item xs={1}>
					  <VolumeDown />
					</Grid>
					<Grid item xs={10}>
					  <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
					</Grid>
					<Grid item xs={1}>
					  <VolumeUp />
					</Grid>
				  </Grid>
				</Grid>
			<Grid item xs={12} xm={6}>
				<Box>
					<FormControlLabel control={<Switch checked={plButton} onChange={togglePlButton} />} label="Play Local" />
					<FormControlLabel control={<Switch checked={mButton} onChange={toggleMButton} />} label="Mute" />
				</Box>
			</Grid>
		</Grid>
    );
}
