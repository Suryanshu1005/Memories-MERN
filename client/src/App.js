import React from "react";
import { Container, AppBar, Typography } from '@material-ui/core';
//import { Container } from '@material-ui/core';
//import Posts from "./components/Posts/Posts";
//import Form from "./components/Form/Form";
import memories from './images/memories.png';

const App = () => {
    return (
         <><Container fixed={true}>
            <AppBar position="static" color="inherit">
                <Typography align="center" variant="h2">Shubham</Typography>
                <img src={memories}></img>
            </AppBar>
        </Container><Container>
                <Typography>New message from suryanshu</Typography>
            </Container></>

    );
    }

export default App;