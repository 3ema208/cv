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
    const classes = useStyle()
    const data = {
        header: "Languages",
        lang: [
            {
                name: 'English',
                degree: "intermediate"
            },
            {
                name: "Ukrainian",
                degree: "native"
            },
            {
                name: "Russian",
                degree: "native"
            }
        ]
    }
    return (
        <Container className={classes.root}>
            <Typography variant="h5" className={classes.header}>Languages</Typography>
            <div>
                {data.lang.map((l)=>{
                    return (
                    <Typography>{l.name}: {l.degree}</Typography>
                    )
                })}
            </div>
        </Container>
    )
}