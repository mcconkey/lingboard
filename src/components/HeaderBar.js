import React from 'react';
import clsx from 'clsx';
import useStyles from '../styles/styles'
import { AppBar, 
         Toolbar, 

         Typography, 

         } from '@material-ui/core/';



const HeaderBar =  () => {
    // eslint-disable-next-line no-unused-vars
    const [open, setOpen] = React.useState(true);
    // const handleDrawerOpen = () => {
    //   setOpen(true);
    // };
    // const handleDrawerClose = () => {
    //   setOpen(false);
    // };
    const classes = useStyles();

    return(
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          {/* <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Linguist Dashboard
          </Typography>
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
    );

};

export default HeaderBar;