import React from 'react';
import {Container} from "@material-ui/core"
import {makeStyles} from "@material-ui/styles"

import Headers from "./components/headerCv/Header"
import PersonalInfo from './components/personalInfo/personalInfo';
import WorkExperience from './components/workExperience/workExperience';
import Education from './components/education/Education';

const useStyle = makeStyles({
  root: {
    marginTop: "80px"
  }
})

function App() {
  const classes = useStyle();
  return (
    <Container maxWidth='xl' className={classes.root}>
      <Headers></Headers>
      <PersonalInfo></PersonalInfo>
      <WorkExperience></WorkExperience>
      <Education></Education>
    </Container>
  );
}

export default App;
