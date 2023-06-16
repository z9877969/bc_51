import { AuthForm, formOptions as options } from "modules/authPage";

import { registerUser } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegisterUser = (form) => {
    dispatch(registerUser(form));
  };

  return (
    <AuthForm
      btnTitle={"Register"}
      initialValues={options.passwordState}
      options={options.password}
      onSubmit={handleRegisterUser}
    />
  );
};

export default RegisterPage;
