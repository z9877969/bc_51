import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const BgWrapper = ({ children }) => {
  return (
    <div style={{ backgroundColor: "grey", minHeight: "100vh" }}>
      {children}
    </div>
  );
};

const MainLayout = () => {
  return (
    <>
      <BgWrapper>
        <Header />
        <Outlet />
      </BgWrapper>
    </>
  );
};

export default MainLayout;
