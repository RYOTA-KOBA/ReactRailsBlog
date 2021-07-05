import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;

type P = {
  id: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const ThreeDotMenu = (props: P) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id: string) => {
    handleClose();
    axios
      .delete(`http://localhost:3001/posts/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}>
        <MenuItem onClick={handleClose}>編集</MenuItem>
        <MenuItem onClick={() => handleDelete(props.id)}>削除</MenuItem>
      </Menu>
    </div>
  );
};

export default ThreeDotMenu;
