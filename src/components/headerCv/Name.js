import React from 'react';
import { Typography } from "@material-ui/core";


export default function Owner(props){
    return (
        <Typography variant="h2">
           { props.name }
        </Typography>
    )
}