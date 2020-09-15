import React from 'react';
import { Drawer, Divider, List,  } from '@material-ui/core';
import clsx from 'clsx';
import { mainListItems } from '../listItems';
//import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useStyles from '../styles/styles';


function SideNavigation() {
  const [open, setOpen] = React.useState(true);
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const classes = useStyles();
  return (
    <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          {/* <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton> */}
        </div>
        <Divider />
        <List>{mainListItems}</List>
        
      </Drawer>
  );
}

export default SideNavigation;