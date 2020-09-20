import { Container, Typography, Chip } from '@material-ui/core'
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
    },
    chips: {
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(0.3),
        },
    },
}))

export default () => {
    const hobby = [
        "Football",
        "Billiard",
        "Programing", 
        "Music",
    ]
    const classes = useStyle()
    return (
        <Container className={classes.root}>
            <Typography variant="h5" className={classes.header}>HOBBY</Typography>
            <div className={classes.chips}>
                {
                    hobby.map((h)=>{
                        return <Chip label={h} variant="outlined"></Chip>
                    })
                }
            </div>
        </Container>
    )
}