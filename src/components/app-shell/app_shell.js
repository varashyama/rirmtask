import { useState } from "react";
import "./app_shell.css";
import Header from "./header";
import Sidemenu from "./sidemenu";

const AppShell = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="d-flex w-100 h-100 app-shell">
            <div className="h-100 side_menu">
                <Sidemenu collapsed={collapsed} />
            </div>
            <div className="flex-fill" style={{ overflowY: 'auto'}}>
                <Header collapsed={collapsed} setCollapsed={setCollapsed}/>
                {children}
            </div>
        </div>
    )
}

export default AppShell;