import React from 'react'
import {Container, Grid, Paper} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'
import Summary from '../summary/Summary'
import Contacts from '../contacts/Contacts'
import WorkExperience from "../workexperience/WorkExperience"
import Education from '../education/Education'
import Additionaleducation from '../additionalEducation/Additionaleducation'

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    item: {}
}))

export default () => {
    const classes = useStyle()
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} md={6}>
                <Grid container direction='column' spacing={1}>
                    <Grid item>
                       <Paper className={classes.item}>
                            <Summary></Summary>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.item}>
                            <Contacts></Contacts>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container direction='column' spacing={1}>
                    <Grid item>
                        <Paper className={classes.item}>
                            <WorkExperience></WorkExperience>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Education></Education>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Additionaleducation></Additionaleducation>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}