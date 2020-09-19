import { Container, Typography } from '@material-ui/core'
import {makeStyles} from "@material-ui/styles"
import React from 'react'


const useStyle = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    header: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    }
}))

export default () => {
    const dataEducation = {
        university: "National Technical University of Ukraine 'Kyiv Polytechnic Institute'​",
        degree: "Master of Art",
        date: "2011-2017",
        category: "Acoustics and Electronics Engineering"
    }
    const classes = useStyle()
    return (
        <Container className={classes.root}>
            <Typography variant="h5" className={classes.header}>EDUCATION</Typography>
            <Typography>{dataEducation.university}</Typography>
            <Typography variant="subtitle2">{dataEducation.degree} ({dataEducation.date})</Typography>
            <Typography>{dataEducation.category}</Typography>
        </Container>
    )
}