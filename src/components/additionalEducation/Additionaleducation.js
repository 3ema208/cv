import { Container, Typography, Link } from '@material-ui/core'
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
    const dataAdditionalEducation = {
        name: "CodeSpace",
        link: "https://codespace.com.ua/",
        degree: "Advanced Python",
        desc: [
            'Django',
            "Selenium",
            "BeHave"            
        ]
    }
    const classes = useStyle()
    return (
        <Container className={classes.root}>
            <Typography variant="h5" className={classes.header}>ADDITIONAL EDUCATIONAL</Typography>
            <Typography><Link underline='always' color="textPrimary" href={dataAdditionalEducation.link}>{dataAdditionalEducation.name}</Link> | May 2017 - Jule 2017</Typography>
            <Typography>{dataAdditionalEducation.degree}</Typography>
            <ul>
                {dataAdditionalEducation.desc.map((i, ii)=>{return (<li>{ii}</li>)})}
            </ul>
        </Container>
    )
}