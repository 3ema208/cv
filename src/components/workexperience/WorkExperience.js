import { Typography, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import React from "react"
import CompanyExperience from "./CompanyExperience"


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
    const dataWorkExpereince = [
        {
            position: "Python Developer",
            companyName: "AjaxSystems",
            companyLink: "https://ajax.systems",
            dataWork: "August 2017 - Present",
            desription: [
                "Make gui app for manufactoring Ajax."
            ]
        },
    ]
    const classes = useStyle()
    return (
        <Container className={classes.root}>
            <Typography variant="h5" className={classes.header}>WORK EXPERIENCE</Typography>
            {dataWorkExpereince.map((d, i)=>{return <CompanyExperience key={i} company={d}></CompanyExperience>})}
        </Container>
    )
}