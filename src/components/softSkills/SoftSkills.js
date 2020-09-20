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
        head: "Soft Skills",
        skills: ["Critical thinker", "Team player", "Multi-tasking", 'Fast learner', "Good communication"]
    }
    return (
        <Container className={classes.root}>
            <Typography variant="h5" className={classes.header}>{data.head}</Typography>
            <div>
                {data.skills.map((s)=>{return(
                    <Typography>- {s}</Typography>
                )})}
            </div>
        </Container>
    )
}