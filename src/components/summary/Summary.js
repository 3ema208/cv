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
    Software Engineer with 4+ years experience and knowledge agile methodology without afraid make project with scratch.
    Now I'm looking for new challenging me and will be glad become a part of your team. I like to learn new technology and solve hard situation. 
    I fast learn new and fast understand in exists projects.`
    const classes = useStyle()
    return (
        <Container className={classes.root}>
            <Typography variant="h5" className={classes.header}>SUMMARY</Typography>
            <Typography variant='body1'>{data}</Typography>
        </Container>
    )
}