import { AuthForm, formOptions as options } from "modules/authPage";

import { loginUser } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginUser = (form) => {
    dispatch(loginUser(form));
  };

  return (
    <AuthForm
      btnTitle={"Login"}
      initialValues={options.loginState}
      options={options.login}
      onSubmit={handleLoginUser}
    />
  );
};

export default LoginPage;
