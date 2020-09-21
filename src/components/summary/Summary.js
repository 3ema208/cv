import { Container, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
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
    const data = `
    I'm Software Engineer with 4+ years of experience with knowledge of agile methodology, 
    making projects from scratch without afraid. 
    Now I'm looking for new challenges for me and will be glad to become a part of your team. 
    I like to learn new technologies and solve complex tasks.`
    const classes = useStyle()
    return (
        <Container className={classes.root}>
            <Typography variant="h5" className={classes.header}>SUMMARY</Typography>
            <Typography variant='body1'>{data}</Typography>
        </Container>
    )
}