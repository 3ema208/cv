import React from "react"
import { Container, Grid, Typography, Link } from "@material-ui/core";


export default function EducationBlock(props){
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Typography>
                        09/2011 - 05/2017
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h5">
                        <Link href='https://kpi.ua/' color="inherit">
                            NTUU 'KPI'
                        </Link>
                    </Typography>
                    <Typography>Faculty of Electronics, Departament of Acoustics</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}