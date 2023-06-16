import AuthFormInput from "../AuthFormInput/AuthFormInput";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import PasswordInputIcon from "../PasswordInputIcon/PasswordInputIcon";
import { useState } from "react";

export const AuthForm = ({ initialValues, options, btnTitle, onSubmit }) => {
  const [isShowPasswordIcon, setIsShowPasswordIcon] = useState(false);
  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };
  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        width: 450,
        margin: "0 auto",
        padding: "12px 24px",
        backgroundColor: "info.light",
      }}
    >
      {options.map(({ label, id, name, type, mustTypeChanges }) => (
        <AuthFormInput
          label={label}
          type={mustTypeChanges ? type[`${isShowPasswordIcon}`] : type}
          id={id}
          name={name}
          value={form[name]}
          onChange={handleChange}
          showDownIcon={(name === "password" && isShowPasswordIcon) || null}
          setShowDownIcon={() => setIsShowPasswordIcon((p) => !p)}
          endAdornment={(name === "password" && PasswordInputIcon) || null}
        />
      ))}

      <Button sx={{ alignSelf: "center" }} type="submit" variant="contained">
        {btnTitle}
      </Button>
    </Box>
  );
};
