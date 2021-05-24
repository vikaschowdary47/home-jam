import Navigation from "../Navigation";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layout_body">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
