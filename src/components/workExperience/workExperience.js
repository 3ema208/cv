import React from "react"
import { Container, Typography, Grid, Link} from "@material-ui/core";



export default class WorkExperience extends React.Component {
    render(){
        return (
            <Container>
                <Typography variant='h5'>
                    Experience
                </Typography>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <Typography>08/2017 - 08/2020</Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant='h5'>Python Developer</Typography>
                            <Typography variant='h6'>
                                <Link color='inherit' href="https://ajax.systems">AjaxSystems</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        )
    }
}