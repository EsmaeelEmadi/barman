"use client";

import { useState } from "react";

// COMPONENTS
import {
  Box,
  Divider,
  ListItemIcon,
  IconButton,
  CircularProgress,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
} from "@/material/index";

// HOOKS
import { useGetUserQuery } from "@/mock/api/user";

// CONSTANTS
import { UESR_MENU_SETTINGS, USER_MENU_LINKS } from "./constants"

// TYPES
import type { FC, MouseEvent } from "react";

const UserTooltopClient: FC = () => {
  const { data, isLoading } = useGetUserQuery();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <Box sx={{ m: 1, position: 'relative' }}>
            <IconButton
              aria-label="save"
              color="primary"
              onClick={handleOpenMenu}
            >
              <Avatar alt={data?.name} src={data?.avatar} />
            </IconButton >
            {isLoading ?
              <CircularProgress
                size={42}
                className="bg-white rounded-full p-2"
                sx={{
                  position: 'absolute',
                  top: 7,
                  left: 7,
                  zIndex: 1,
                }}
              />
              : null}
          </Box>
        </Tooltip>
      </Box>

      <Menu
        className="shadow-xs"
        elevation={3}
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        {USER_MENU_LINKS.map((link) => (
          <MenuItem key={link} onClick={handleCloseMenu}>
            <Typography textAlign="center">{link}</Typography>
          </MenuItem>
        ))}
        <Divider />
        {UESR_MENU_SETTINGS.map((setting) => (
          <MenuItem key={setting.title} onClick={handleCloseMenu}>
            <ListItemIcon>
              <setting.Icon fontSize="small" />
            </ListItemIcon>
            <Typography textAlign="center">{setting.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserTooltopClient;