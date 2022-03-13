import { Button, PageHeader } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const Header = ({ collapsed, setCollapsed }) => {
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
            <span>
              <i className="fs-5 bi bi-box-arrow-right me-2"></i>
              Logout
            </span>
          </div>
        </div>
      </PageHeader>
    </div>
  );
};

export default Header;
