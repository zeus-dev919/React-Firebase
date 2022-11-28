import "../../style/navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SubmenuItem from "./SubmenuItem";
function MenuItem({ item, isSelected, onSelected, idx }) {
  const Navigate = useNavigate();
  const [submenuSelect, setSubmenuSelect] = useState(false);

  const submenuClick = () => {
    isSelected ?
      submenuSelect ? setSubmenuSelect(false) : setSubmenuSelect(true)
      : console.log('ss');

  }

  const handleClick = () => {
    onSelected();
    item == "Dashboard" ? Navigate('') :
      item == "Inventory" ? Navigate('/inventory') :
        item == "Vendors" ? Navigate('/vendor') :
          item == "Sales" ? submenuClick() :
            Navigate('/calendar');
  };

  let logoName = "logo" + idx;
  let selecetName = "selected" + idx;
  const subListMenu = [
    'Pricing',
  ]
  return (
    <div>
      <div
        className={
          item == "Dashboard" && isSelected
            ? "menuitem-body clicked-menu-item-body margin-top-30px border-up-line"
            : item != "Dashboard" && isSelected
              ? "menuitem-body clicked-menu-item-body menuitem-body"
              : item == "Dashboard" && !isSelected
                ? "menuitem-body margin-top-30px border-up-line"
                : "menuitem-body "
        }
        onClick={handleClick}
      >
        <div
          className={
            isSelected
              ? `logo-size-position ${selecetName}`
              : `logo-size-position email-logo ${logoName} `
          }
        ></div>
        <div className={isSelected ? "item-label font-white" : "item-label"}>
          {item}
        </div>
        {item == 'Sales' ? (submenuSelect && isSelected) ? <div className="faq-item__title-icon icon-down" /> : <div className="faq-item__title-icon icon-right" /> : isSelected ? <div className="triangle"></div> : <></>}

      </div>
      {item == 'Sales' ? (submenuSelect && isSelected) ? <div >
        {subListMenu.map((subitem, idx) => {
          return (
            <SubmenuItem subitem={subitem} key={idx} />
          )
        })}
      </div > : <div /> : <div />}
    </div>
  );
}
export default MenuItem;
