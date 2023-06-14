import { Navigate, Route, Routes } from "react-router-dom";
import { selectIdToken, selectIsAuth } from "../../redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";

import CounterPage from "../../pages/CounterPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import MainLayout from "../MainLayout/MainLayout";
import RegisterPage from "../../pages/RegisterPage";
import TodoPage from "../../pages/TodoPage";
import { getCurUser } from "../../redux/auth/authOperations";
import { getCurUserApi } from "../../services/firebaseApi";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const idToken = useSelector(selectIdToken);

  useEffect(() => {
    idToken && dispatch(getCurUser());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {isAuth ? (
          <>
            <Route path="counter" element={<CounterPage />} />
            <Route path="todo" element={<TodoPage />} />
            <Route path="*" element={<Navigate to={"/todo"} />} />
          </>
        ) : (
          <>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to={"/login"} />} />
          </>
        )}
      </Route>
    </Routes>
  );
};

export default App;
