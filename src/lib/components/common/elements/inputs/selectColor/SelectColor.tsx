import { styled } from "@mui/material";

// COMPONENTS
import { Select, MenuItem, Box } from "@/material/index";

// TYPES
import type { FC } from "react";
// import type { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import type { IColor } from "@/mock/constants";
import type {
  SelectChangeEvent,
  SelectProps,
} from "@mui/material/Select/Select";

// STYLES
const StyledColorBox = styled(Box)({
  width: 10,
  height: 10,
  borderRadius: 3,
  marginRight: 1,
});

type TSelectColorProps = SelectProps & {
  colors: IColor[] | Readonly<IColor[]>;
};

const SelectColor: FC<TSelectColorProps> = ({ colors, ...rest }) => {
  return (
    <Select {...rest}>
      {colors.map((_color, index) => {
        return (
          <MenuItem key={index} value={_color.name}>
            <div className="flex items-center gap-1">
              <StyledColorBox
                sx={{
                  backgroundColor: _color.value,
                }}
              />
              {_color.value}
            </div>
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default SelectColor;
