import React from 'react';

import {
    Container,
    Typography,
    Link
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

function Copyright() {

    return (

        <Typography>

            {"Copyright "}

            <Link href="https://www.google.com">
                Frontend UI courses
            </Link>

            {" " + new Date().getFullYear()}

        </Typography>

    );
}

const useStyles = makeStyles((theme) => ({

    footer: {
        padding: theme.spacing(6)
    }

}));

export default function Footer() {

    const classes = useStyles();

    return (

        <footer className={classes.footer}>

            <Container>

                <Typography variant="h6">
                    Frontend UI
                </Typography>

                <Typography variant="subtitle1" color="textSecondary">
                    Anyone can learn to code.
                </Typography>

                <Copyright />

            </Container>

        </footer>

    );

}