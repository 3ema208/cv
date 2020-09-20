import React from "react"
import { Container, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"


const useStyle = makeStyles(theme => ({
    title: {
        textAlign: "center",
        paddingBottom: theme.spacing(1)
    },
}))

export default ()=>{
    const classes = useStyle()
    return (
        <Container className={classes.title}>
            <Typography variant='h2'>Roman Nedobytko</Typography>
            <Typography variant='h4'>Python Software Engineer</Typography>
        </Container>
    )
}