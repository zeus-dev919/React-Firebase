import "../../style/navbar.css";
import { useState } from "react";
import MenuItem from "./MenuItem";
function MainMenu() {
  const submenuItems = [
    "Send Email",
    "Calendar",
    "Files",
    "Dashboard",
    "Inventory",
    "Vendors",
    "Sales",
    "Contacts",
    "Report Centre",
    "EDI",
    "Marketplaces",
    "Settings"
  ];
  const icon = [
    
  ]
  const [selectedId, setSelectedId] = useState(-1);

  return (
    <div className="mainmenu-body">
      {submenuItems.map((item, idx) => {
        return (
          <MenuItem
            item={item}
            key={idx}
            idx={idx}
            icon={icon}
            isSelected={selectedId == idx}
            onSelected={() => {
              setSelectedId(idx);
            }}
          />
        );
      })}
    </div>
  );
}
export default MainMenu;
