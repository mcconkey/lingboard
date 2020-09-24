import React from 'react';
//import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SideNavigation from '../components/SideNavigation';
import HeaderBar from '../components/HeaderBar';
import useStyles from '../styles/styles';
import HomeScreen from '../components/HomeScreen';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import LoadLedger from './LoadLedger';
import Linguist from './Linguist';
import Roster from './Roster';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
           Linguist Dashboard -
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Dashboard() {
  const classes = useStyles();
  //const [open, setOpen] = React.useState(true);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <BrowserRouter>
    <div className={classes.root}>
      <CssBaseline />
        <HeaderBar />
      <SideNavigation />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
            <Switch>
              <Route path="/load">
                <LoadLedger />
              </Route>
              <Route path="/roster">
                <Roster />
              </Route>
              <Route path="/linguist/:linguistKey">
                <Linguist />
              </Route>
              <Route
                path="/">
                <HomeScreen />
              </Route>
            </Switch>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
    </BrowserRouter>
  );
}
