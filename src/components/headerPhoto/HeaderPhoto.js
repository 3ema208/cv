import React from 'react'
import {Container, Avatar} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'
import ava from '../../avatar.jpg'


const useStyle = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    },
    avatar: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        margin: "auto"
    }
}))

export default () => {
    const classes = useStyle()
    return (
        <Container className={classes.container}>
            <Avatar src={ava} className={classes.avatar}></Avatar>
        </Container>
    )
}