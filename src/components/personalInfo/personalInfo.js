import React from "react"
import { Container, Typography } from "@material-ui/core";


export default class PersonalInfo extends React.Component {
    render(){
        return (
            <Container>
                <Typography variant="h5">PersonalInfo</Typography>
                <Container>
                    <Typography paragraph>
                        I am a hard-working software engineer with cool experience. 
                        I can develop anything I don't afraid, learn new for me.
                        Last time I'm writing code in Python, but now I wont switch on Golang.
                    </Typography>
                </Container>
            </Container>
        )
    }
}