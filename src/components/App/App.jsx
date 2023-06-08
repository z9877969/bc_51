import { Navigate, Route, Routes } from "react-router-dom";

import CounterPage from "../../pages/CounterPage";
import HomePage from "../../pages/HomePage";
import MainLayout from "../MainLayout/MainLayout";
import TodoPage from "../../pages/TodoPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="counter" element={<CounterPage />} />
        <Route path="todo" element={<TodoPage />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default App;
