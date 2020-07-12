import React from "react";
import { Typography } from "@material-ui/core";


export default function Position(props){
    return (
        <Typography variant='h4'>
            {props.position}
        </Typography>
    )
}