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
                "Manage small team of python software engineers",
                "Cross-platform GUI application development",
                "Development QA tools for manual QA engineer",
                "UI and API web development",
                "Design and implement SQL database architecture",
                "Support and refactoring existing projects",
            ],
            technology: [
                "Python", "PyQt5", "PySide2", "QML", "asyncio", 
                "threading", "multiprocessing", "pymysql", "sqlalchemy",
                "Django", "Django Rest", "Jenkins", "BuildBot",
                "Docker", "MySql", "Postgres", "pytest", "git", 
                "AWS", "pySerial", "PyInstaller", "Linux", "Windows",
            ],
        },        
        {
            position: "Junior Python Developer",
            companyName: "MaAO",
            companyLink: "#",
            dataWork: "May 2017 - July 2017",
            desription: [
                "Odoo addons development",
                "Front-end development"
            ],
            technology: [
                "Python", "Odoo", "Postgres", "HTML", "CSS", "JavaScript", "Bootstrap",
            ],
        },
        {
            position: "Python Developer",
            companyName: "Freelance",
            companyLink: "#",
            dataWork: "May 2016 - May 2017",
            desription: [
                "Data parsing",
                "Scraping web sites",
                "Develop bots (telegram)",
            ],
            technology: [],
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