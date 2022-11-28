import React, { Fragment } from "react";
import HomeIcon from '@mui/icons-material/Home';
import { initializeApp } from "firebase/app";

import "../../style/admin/admin.css";
function AdminNavbar() {
  
  return (
      <div className="navbar-container">
        <div className="navbar-title" />
        <div className="navbar-button">
					<HomeIcon className="navbar-button-icon"/>
					<p className="navbar-button-label font-20-bold">ホーム</p>
				</div>
      </div>
  );
}

export default AdminNavbar;
