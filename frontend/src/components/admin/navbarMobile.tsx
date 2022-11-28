import React, { Fragment } from "react";
import "../../style/admin/admin.css";
import HomeIcon from "@mui/icons-material/Home";

function NavbarMobile() {
  return (
    <Fragment>
      <div className="mobileNavbar">
        <div className="navbar-button-mobile">
          <HomeIcon className="navbar-button-icon" />
          <p className="navbar-button-label font-20-bold">ホーム</p>
        </div>
      </div>
    </Fragment>
  );
}

export default NavbarMobile;
