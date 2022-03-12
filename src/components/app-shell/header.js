import { Button, PageHeader } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';

const Header = ({ collapsed, setCollapsed }) => {
    return (
        <div>
            <PageHeader
                className="py-0"
            >
                <div className="d-flex">
                    {/* Toggle menu */}
                    <Button type="primary" onClick={() => {
                        setCollapsed(!collapsed)
                    }} style={{ marginBottom: 16 }}>
                        {
                            collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                        }
                    </Button>


                </div>
            </PageHeader>
        </div>
    )
}

export default Header;