import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordInputIcon = ({ showDownIcon, onIconClick }) => {
  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={onIconClick}
        // onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {showDownIcon ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
};

export default PasswordInputIcon;
