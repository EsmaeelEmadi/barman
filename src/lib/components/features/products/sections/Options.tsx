"use client";

import { useState, useCallback } from "react";

// CONTANTS
import { COLORS, IColor, SIZES } from "@/mock/constants";

// COMPONENTS
import {
  Container,
  Grid,
  Select,
  MenuItem,
  InputLabel,
} from "@/material/index";
import SelectColor from "@/elements/inputs/selectColor/SelectColor";

// TYPES
import type { FC } from "react";
import type { SelectChangeEvent } from "@mui/material";

const ProductOptionsSection: FC = () => {
  // STATES
  const [size, setSize] = useState<(typeof SIZES)[number]>(SIZES[0]);
  const [color, setColor] = useState<IColor>(COLORS[0]);

  // HANDLERS
  const handleSizeChange = useCallback((evt: SelectChangeEvent) => {
    setSize(() => evt.target.value as (typeof SIZES)[number]);
  }, []);

  const handleColorChange = useCallback((evt: SelectChangeEvent<unknown>) => {
    const selectedColorName = evt.target.value;
    const selectedColor = COLORS.find(
      (_color) => _color.name === selectedColorName
    );
    if (selectedColor) {
      setColor(() => selectedColor);
    }
  }, []);

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid>
          <InputLabel id="options-sizes">Sizes</InputLabel>
          <Select
            size="small"
            labelId="options-sizes"
            value={size}
            onChange={handleSizeChange}
          >
            {SIZES.map((size, index) => {
              return (
                <MenuItem key={index} value={size}>
                  {size}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid>
          <InputLabel id="options-sizes">Colors</InputLabel>
          <SelectColor
            colors={COLORS}
            onChange={handleColorChange}
            value={color.name}
            size="small"
            labelId="options-colors"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductOptionsSection;
