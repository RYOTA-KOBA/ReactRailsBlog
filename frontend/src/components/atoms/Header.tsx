import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/Home.css';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header: React.FC = () => {
  const history = useHistory();
  const { currentUser }: any = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then((response) => {
        history.push('/login');
        window.location.reload();
        console.log('ログアウトしました');
      })
      .catch((error) => console.log('ログアウトエラー', error));
  };

  const handleOpenProfile = () => {
    const uid = currentUser.id;
    handleClose();
    history.push(`/profile/${uid}`);
  };

  return (
    <>
      <header>
        <div className="header-inner">
          <div className="header-left">
            <a href="/" className="header-logo">
              LOGO
            </a>
          </div>
          <div className="header-right">
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                <span className="header-username">
                  {currentUser && currentUser.username} <ArrowDropDownIcon />
                </span>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleOpenProfile}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
