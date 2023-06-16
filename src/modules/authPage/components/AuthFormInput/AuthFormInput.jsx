import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

const AuthFormInput = ({
  endAdornment: ComponentEnd = null,
  startAdornment: ComponentStart = null,
  showDownIcon,
  setShowDownIcon,
  label,
  id,
  ...inputProps
}) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="outlined">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        {...inputProps}
        id={id}
        endAdornment={
          ComponentEnd && (
            <ComponentEnd
              showDownIcon={showDownIcon}
              onIconClick={setShowDownIcon}
            />
          )
        }
        startAdornment={
          ComponentStart && (
            <ComponentStart
              showDownIcon={showDownIcon}
              onIconClick={setShowDownIcon}
            />
          )
        }
        label={label}
      />
    </FormControl>
  );
};

export default AuthFormInput;
