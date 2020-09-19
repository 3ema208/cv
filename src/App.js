import React from 'react';
import {Container} from "@material-ui/core"
import {makeStyles, ThemeProvider} from "@material-ui/styles"
import {createMuiTheme} from "@material-ui/core/styles"
import Headers from "./components/headerCv/Header"
import PersonalInfo from './components/personalInfo/personalInfo';
import WorkExperience from './components/workExperience/workExperience';
import Education from './components/education/Education';
import _ from "./App.css"


const Theme = createMuiTheme({
  typography: {
    "fontFamily": "Marlboro",
    "fontSize": 16
  }
})

const useStyle = makeStyles({
  root: {
    marginTop: "60px"
  }
})

function App() {
  const classes = useStyle();
  return (
    <ThemeProvider theme={Theme}>
      <Container maxWidth='md' className={classes.root}>
        <Headers></Headers>
        <PersonalInfo></PersonalInfo>
        <Education></Education>
        <WorkExperience></WorkExperience>
      </Container>
    </ThemeProvider>
  );
}

export default App;
