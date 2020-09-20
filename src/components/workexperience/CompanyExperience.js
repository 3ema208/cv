import { Link, Typography, Chip, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import React from "react"


const useStyle = makeStyles(theme => ({
    root: {
        padding: theme.spacing(0.5),
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


export default ({company}) => {
    const classes = useStyle()
    return (
        <Container className={classes.root}>
            <Typography variant="h6">{company.position}</Typography>
            <Typography>
            <Link underline='always' color='textPrimary' href={company.companyLink}>{company.companyName}</Link> | {company.dataWork}
            </Typography>
            <div>
                {company.desription.map((d)=>{return(
                    <Typography>- {d}</Typography>
                )})}
            </div>
            <div className={classes.chips}>
                {company.technology.map((t)=>{return (
                    <Chip size="small" variant="outlined" label={t}></Chip>
                )})}
            </div>
        </Container>
    )
}