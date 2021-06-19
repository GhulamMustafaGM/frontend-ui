import React, { useEffect, useState } from 'react';

import {
    Container,
    Toolbar,
    Typography,
    Box,
    Link,
    AppBar,
    IconButton,
    MenuItem,
    Drawer
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    siteTitle: {
        fontWeight: 'bold',
        letterSpacing: 1.5
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    },
    menuBox: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row'
        }
    },
    menuOption: {
        padding: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(10)
        },
        color: 'white'
    },
    menuIcon: {
        color: 'white'
    }

}));

export default function NavigationBar() {

    const [state, setState] = useState({
        toggleMenu: false,
        toggleMenuOpen: false
    });

    const { toggleMenu, toggleMenuOpen } = state;

    useEffect(() => {

        const setResponsiveness = () => {

            return window.innerWidth < 960
                ? setState((prevState) => ({ ...prevState, toggleMenu: true }))
                : setState((prevState) => ({ ...prevState, toggleMenu: false }));

        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

    }, []);

    const classes = useStyles();

    const displayToggleMenu = () => {

        const handleToggleMenuOpen = () => setState((prevState) => ({ ...prevState, toggleMenuOpen: true }));

        const handleToggleMenuClose = () => setState((prevState) => ({ ...prevState, toggleMenuOpen: false }));

        return (

            <Toolbar>

                <IconButton
                    {...{
                        onClick: handleToggleMenuOpen
                    }}
                >
                    <MenuIcon className={classes.menuIcon} />
                </IconButton>

                <Drawer
                    {...{
                        anchor: 'left',
                        open: toggleMenuOpen,
                        onClose: handleToggleMenuClose
                    }}
                >
                    <div>{getToggleMenuOptions()}</div>
                </Drawer>

            </Toolbar>

        );

    }

    const getToggleMenuOptions = () => {
        return (

            <Box>

                {['home', 'courses', 'sign up'].map((menuOption) => (

                    <MenuItem>

                        {menuOption}

                    </MenuItem>

                ))}

            </Box>
        );
    }

    const displayLargeMenu = () => {

        return (

            <Toolbar className={classes.toolbar}>

                <Typography
                    component='h1'
                    variant='h6'
                    className={classes.siteTitle}
                >

                    Wibe App

                </Typography>

                <Box className={classes.menuBox}>

                    {['home', 'courses', 'sign up'].map((menuOption) => (

                        <Link
                            component='button'
                            variant='body1'
                            className={classes.menuOption}
                        >
                            {menuOption.toUpperCase()}
                        </Link>

                    ))}

                </Box>

            </Toolbar>

        );
    }

    return (
        <Container>

            <AppBar>

                {toggleMenu ? displayToggleMenu() : displayLargeMenu()}

            </AppBar>

        </Container>
    );
}