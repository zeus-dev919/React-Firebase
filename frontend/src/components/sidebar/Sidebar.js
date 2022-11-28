import "../../style/navbar.css";
import MainMenu from "./MainMenu";
function Sidebar() {
  return (
    <div className="navbar-body">
      <div className="devider"></div>
      <MainMenu  />
      {/* <Menu2/>   */}
    </div>
  );
}
export default Sidebar;
