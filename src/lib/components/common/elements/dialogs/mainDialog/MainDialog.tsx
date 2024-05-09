import { styled, CssVarsTheme } from "@mui/material";

// CONPONENTS
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@/material/index";
import { IBaseDialog, IPropsWithForcedChildren } from "@/types/components";

// ICONS
import CloseIcon from "@mui/icons-material/Close";

// TYPES
import { FC, ReactNode } from "react";

interface IMainDialogProps extends IBaseDialog, IPropsWithForcedChildren {
  title?: string;
  actions?: ReactNode;
}

// STYLES
const StyledDialog = styled(Dialog)({
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      width: "600px",
    },
  },
});

const MainDialog: FC<IMainDialogProps> = ({
  toggle,
  open,
  title,
  children,
  actions,
}) => {
  return (
    <StyledDialog
      onClose={toggle}
      aria-labelledby="main-dialog-title"
      open={open}
      maxWidth="md"
      className="min-w-20"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="main-dialog-title">
        {title}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={toggle}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>{children}</DialogContent>
      {actions ? <DialogActions>{actions}</DialogActions> : null}
    </StyledDialog>
  );
};

export default MainDialog;
