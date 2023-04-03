import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const AboutUs = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" gutterBottom>
                            About Us
                        </Typography>
                        <Divider />
                        <br />
                        <Typography variant="body1" gutterBottom>
                            Our mission is to provide quality education and create a learning environment that is both challenging and nurturing.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            We strive to create leaders who are not only academically strong, but also well-rounded individuals who can make a positive impact in society.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Our team of experienced and dedicated teachers work closely with students to ensure they reach their full potential.
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            We are committed to providing an inclusive and welcoming environment for all students, regardless of their background.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AboutUs;
