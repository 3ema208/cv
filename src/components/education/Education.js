import React from "react"
import { Container, Typography } from "@material-ui/core";
import EducationBlock from "./EducationBlock";


export default class Education extends React.Component {
    render(){
        return (
            <Container>
                <Typography variant="h5">
                    Education
                </Typography>
                <EducationBlock></EducationBlock>
            </Container>
        )
    }
}