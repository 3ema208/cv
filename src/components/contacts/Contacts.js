import { Container, Typography, Grid } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
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
    const contacts = [
        {'name': 'phone', 'value': "+380633289970", 'isLink': false},
        {'name': 'email', 'value': "nedobytko.r@gmail.com", 'isLink': true},
        {'name': 'linkedIn', 'value': "https://www.linkedin.com/in/roman-nedobytko-4456a2b5", 'isLink': true},
        {'name': 'telegram', 'value': "@RomanNedobytko", 'isLink': false},
        {'name': 'skype', 'value': "live:.cid.6c0d23aba2ccb558", 'isLink': false},
        {'name': 'location', 'value': "Kyiv, Ukraine", 'isLink': false},
    ]
    const classes = useStyle()
    return (
        <Container className={classes.root}>
            <Typography variant="h5" className={classes.header}>CONTACT DETAILS</Typography>
            <Grid container direction='column'>
                {contacts.map((item)=>{
                    return (
                        <Grid item key={item.name}>
                            <Typography variant='body1'>{item.name}: {item.value}</Typography>
                        </Grid>
                    )
                }
            )}
            </Grid>
        </Container>
    )
}
