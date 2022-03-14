import { Button, PageHeader } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { userContext } from "../../App";
import { useNavigate } from "react-router-dom";


const Header = ({ collapsed, setCollapsed }) => {
  const { user, setUser } = useContext(userContext);
  const navigate = useNavigate();


  function handleLogout() {
    setUser("");
    navigate("/");
  }

  return (

    <div>
      <PageHeader className="py-0">
        <div className="d-flex justify-content-between">
          {/* Toggle menu */}
          <Button
            type="primary"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            style={{ marginBottom: 16 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <div>
            <span className="me-2">
              <i className="fs-5 bi bi-envelope-fill"></i>
            </span>
            <span className="me-2">
              <i className="fs-5 bi bi-bell-fill"></i>
            </span>
            <b>
              {user.name}
            </b> &nbsp;
            <span>
              <i className="fs-5 bi bi-box-arrow-right me-1"></i>
              <button className="border-0 bg-white me-3" onClick={handleLogout}>Logout</button>
            </span>
          </div>
        </div>
      </PageHeader>
    </div>
  );
};

export default Header;
