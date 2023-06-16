import { Header } from "../../modules";
import { Outlet } from "react-router-dom";

const BgWrapper = ({ children }) => {
  return (
    <div style={{ backgroundColor: "khaki", minHeight: "100vh" }}>
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
