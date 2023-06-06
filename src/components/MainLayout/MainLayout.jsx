import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const BgWrapper = ({ children }) => {
  return (
    <div style={{ backgroundColor: "rgba(0,150,0,0.2)", minHeight: "100vh" }}>
      {children}
    </div>
  );
};

const MainLayout = () => {
  return (
    <>
      <BgWrapper>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </BgWrapper>
    </>
  );
};

export default MainLayout;
