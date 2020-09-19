import React from 'react';
import "./App.css"

import {Container} from "@material-ui/core"
import {makeStyles, ThemeProvider} from "@material-ui/styles"
import {createMuiTheme} from "@material-ui/core/styles"
import HeaderPhoto from './components/headerPhoto/HeaderPhoto'
import Body from "./components/bodylayout/Bodylayout"
import Title from "./components/title/Title"

const Theme = createMuiTheme({
  typography: {
    "fontFamily": "Marlboro",
    "fontSize": 16
  },
})

const useStyle = makeStyles({
  root: {
    maxWidth: "1024px"
  }
})

function App() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={Theme}>
      <Container className={classes.root}>
        <HeaderPhoto></HeaderPhoto>
        <Title></Title>
        <Body></Body>
      </Container>
    </ThemeProvider>
  );
}

export default App;
