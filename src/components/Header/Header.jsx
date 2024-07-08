import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';


const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h4" className={classes.title} style={{ fontWeight: 'bold',fontStyle: 'oblique', letterSpacing: -0.3}}>
                    Trip Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title} style={{ fontWeight: 'bold', fontFamily: 'Monospace', letterSpacing: -0.8}}>
                        Explore new places
                    </Typography>
                    {/*<Autocomplete>*/}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder="        Search..." classes={{ root: classes.inputRoot, input: classes.inputIntput}} />
                        </div>
                    {/*</Autocomplete>*/}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;