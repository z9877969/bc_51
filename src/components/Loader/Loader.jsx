const backdropStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
};

const titleStyles = { color: "#fff", fontSize: 48 };

const Loader = () => {
  return (
    <div style={backdropStyles}>
      <h1 style={titleStyles}>Loading...</h1>
    </div>
  );
};

export default Loader;
