import React, { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import NavbarPerMenu from './NavbarPerMenu';
import ACircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const NavbarHeader = () => {
  const Link1 = ['Home', 'About'];
  const Link2 = ['Profile', 'Create'];

  return (
    <Fragment>
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>

          <TypoGraphy variant="h6" color="inherit">
            Information
          </TypoGraphy>
          <List component="nav">
            <ListItem component="div">
              <ListItemText inset>
                <NavbarPerMenu
                  iconType={ACircleIcon}
                  NavName={'Account'}
                  items={Link1}
                />
              </ListItemText>
              <ListItemText>
                <NavbarPerMenu
                  iconType={MenuIcon}
                  NavName={'Menu'}
                  items={Link2}
                />
              </ListItemText>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default NavbarHeader;
