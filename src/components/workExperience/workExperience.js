import React from "react"
import { Container, Typography } from "@material-ui/core";



export default class WorkExperience extends React.Component {
    render(){
        return (
            <Container>
                <Typography variant='h6'>
                    WorkExperience
                </Typography>
                <Container>
                    <Typography>
                        2017.03.12 - current
                    </Typography>
                </Container>
            </Container>
        )
    }
}