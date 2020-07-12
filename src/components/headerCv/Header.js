import React from "react"

import { Container } from "@material-ui/core"
import Owner from "./Name"
import Position from "./Position";

export default class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "Nedobytko Roman",
            position: "Golang Developer",
        }
    }

    render(){
        return (
            <Container>
                <Owner name={this.state.name}></Owner>
                <Position position={this.state.position}></Position>
            </Container>
        )
    }
}