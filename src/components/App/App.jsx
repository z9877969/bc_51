import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { getCurUser, getUserRole } from "../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";

import CounterPage from "../../pages/CounterPage";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
// import MainLayout from "../MainLayout/MainLayout";
import PrivateRoute from "../../containers/PrivateRoute";
import PublicRoute from "../../containers/PublicRoute";
import RegisterPage from "../../pages/RegisterPage";
import TodoPage from "../../pages/TodoPage";
import WithoutBuyerPrivateRoute from "../../containers/WithoutBuyerPrivateRoute";
import { selectIsUserExist } from "../../redux/auth/authSelectors";
import { useEffect } from "react";

// const App = () => {
//   const dispatch = useDispatch();
//   const isUserExist = useSelector(selectIsUserExist);

//   useEffect(() => {
//     dispatch(getCurUser());
//   }, [dispatch]);

//   useEffect(() => {
//     isUserExist && dispatch(getUserRole());
//   }, [isUserExist, dispatch]);

//   return (
//     <Routes>
//       <Route path="/" element={<MainLayout />}>
//         <Route index element={<HomePage />} />
//         <Route
//           path="counter"
//           element={<WithoutBuyerPrivateRoute component={<CounterPage />} />}
//         />
//         <Route
//           path="todo"
//           element={<PrivateRoute component={<TodoPage />} />}
//         />
//         <Route
//           path="register"
//           element={
//             <PublicRoute component={<RegisterPage />} redirect="/todo" />
//           }
//         />
//         <Route
//           path="login"
//           element={<PublicRoute component={<LoginPage />} redirect="/todo" />}
//         />
//       </Route>
//       <Route path="*" element={<Navigate to={"/"} />} />
//     </Routes>
//   );
// };

const UserBgWrapper = () => {
  return (
    <div className="bg-wrapper-user">
      <Outlet />
    </div>
  );
};

const AuthBgWrapper = () => {
  return (
    <div className="bg-wrapper-auth">
      <Outlet />
    </div>
  );
};

const MainLayout = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <>
      <header>
        Logo
        {isAuth && <span>UserBar</span>}
      </header>
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/"
          element={
            <PrivateRoute redirect="/auth/login">
              <UserBgWrapper />
            </PrivateRoute>
          }
        >
          <Route
            path="transactions/:transactionType"
            element={<h2>TransactionsPage</h2>}
          />
          <Route
            path="reports/:transactionType"
            element={<h2>ReportsPage</h2>}
          />
        </Route>
        <Route
          path="auth"
          element={
            <PublicRoute redirect="/transactions/incomes">
              <AuthBgWrapper />
            </PublicRoute>
          }
        >
          <Route path="login" element={<h2>LoginPage</h2>} />
          <Route path="rgister" element={<h2>RegisterPage</h2>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default App;
