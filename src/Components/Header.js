import { Icon } from "@iconify/react";
import fireIcon from "@iconify/icons-emojione/fire";

function Header(props) {
  return (
    <div className="header-bar">
      <Icon icon={fireIcon} /> Natural Events Tracker
    </div>
  );
}

export default Header;
