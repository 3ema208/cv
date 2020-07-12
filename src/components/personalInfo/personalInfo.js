import React from "react"
import { Container, Typography } from "@material-ui/core";


export default class PersonalInfo extends React.Component {
    render(){
        return (
            <Container>
                <Typography variant="h6">Personal Info</Typography>
                <Container>
                    {["1", "2", "3"].map((v)=>{
                        return <Typography>{v}</Typography>
                    })}
                </Container>
            </Container>
        )
    }
}