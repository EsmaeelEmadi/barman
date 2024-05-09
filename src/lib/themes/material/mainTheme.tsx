"use client";

import { createTheme, type ThemeOptions } from "@mui/material/styles";

const options: ThemeOptions = {
  // @ts-ignore didn't wanted to add all the 32 level :)
  shadows: [
    'none', // elevation 0
    '0 2px 4px rgba(0, 0, 0, 0.1)', // elevation 1
    '0 4px 8px rgba(0, 0, 0, 0.1)', // elevation 2
    '0 8px 16px rgba(0, 0, 0, 0.1)', // elevation 3
    '0 16px 24px rgba(0, 0, 0, 0.1)', // elevation 4
    '0 24px 32px rgba(0, 0, 0, 0.1)', // elevation 5
    '0 28px 36px rgba(0, 0, 0, 0.1)', // elevation 6
    '0 32px 36px rgba(0, 0, 0, 0.1)', // elevation 7
    '0 36px 40px rgba(0, 0, 0, 0.1)', // elevation 8
    // add more
    // ...
  ],
  palette: {},
};

export const theme = createTheme(options);
