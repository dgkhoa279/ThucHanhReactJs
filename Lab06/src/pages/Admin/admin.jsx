import '../Admin/admin.css'
function Admin() {
    return (
        <div className="container">
            <div className="header">
                <h2>Navbar</h2>
            </div>
            <div className="menu">
                <a href="#">Dashboard</a>
                <a href="#">Projects</a>
                <a href="#">Teams</a>
                <a href="#">Analytics</a>
                <a href="#">Messages</a>
                <a href="#">Integrations</a>
            </div>
            <div className="content">
                <h3>Over view</h3>
            </div>
            <div className="detai_report">
                <h4>Detai report</h4>
            </div>
        </div>
    );
}

export default Admin;
