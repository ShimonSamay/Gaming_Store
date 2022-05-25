import { useContext } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { globalStatesContext } from "../../../Contexts/reducers";
import "./SideBar.css";

const SideBar = () : JSX.Element => {

  const { user } = useContext(globalStatesContext);

  return (
    <section className="sidebar_container">
      <ProSidebar>
        <Menu className="menu">
          <MenuItem>LOGIN</MenuItem>
          {  user.loggedIn && 
            <>
              <MenuItem>GAMES</MenuItem>
              <MenuItem>CART</MenuItem>
              <MenuItem>FAVORITES</MenuItem>
              <MenuItem>ACTIVITY</MenuItem>
            </>
          }
        </Menu>
      </ProSidebar>
    </section>
  );
};

export default SideBar;
