import React from "react"
import { Container, Typography } from "@material-ui/core";


export default class Education extends React.Component {
    render(){
        return (
            <Container>
                <Typography variant="h6">
                    Education
                </Typography>
                <Container>
                    <Typography>
                        2010.09.01 - 2017.06.22
                    </Typography>
                </Container>
            </Container>
        )
    }
}