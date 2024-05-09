"use client"

import { useState } from "react";

// COMPONENTS
import { Typography, Box, IconButton, MenuItem, Menu } from "@/material/index"

// ICONS
import MenuIcon from "@mui/icons-material/Menu";

// CONSTANTS
import { PAGES } from "./constants";

// TYPES
import type { FC, MouseEvent } from "react";

const MenuTooltipClient: FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
        <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenMenu}
            color="inherit"
            className="h-fit"
        >
            <MenuIcon />
        </IconButton>
        <Menu
            id="menu-appbar"
            elevation={3}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            sx={{
                display: { xs: "block", md: "none" },
            }}
        >
            {PAGES.map((page) => (
                <MenuItem key={page} onClick={handleCloseMenu}>
                    <Typography textAlign="center">{page}</Typography>
                </MenuItem>
            ))}
        </Menu>
    </Box>
}

export default MenuTooltipClient;