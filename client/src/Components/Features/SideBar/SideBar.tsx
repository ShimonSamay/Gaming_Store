import { useContext } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { reducersContext } from "../../../Contexts/reducers";
import "./SideBar.css";

const SideBar = () => {
  const { user } = useContext(reducersContext);

  return (
    <section style={{ width: "12vw", height: "100vh" }}>
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
