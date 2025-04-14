import { Container, Row, Col, Card, Button, InputGroup, Badge, Nav } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Thêm useNavigate
function Sidebar() {
      const [activePage, setActivePage] = useState('DashBoard'); // Quản lý trang active, mặc định là DashBoard
      const navigate = useNavigate(); // Khởi tạo useNavigate
        // Hàm xử lý khi click vào một Nav.Link
        const handleNavigate = (path) => {
            navigate(path);
        };
    return ( 
        <>
                <Col md={2} className="bg-white p-3 border-end">
          <div className="text-center mb-4">
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <img src="../Image 1858.png" alt="" />
              </div>
            </div>
          </div>
          <Nav className="flex-column">
            <Nav.Link
              active={activePage === 'DashBoard'}
              className={activePage === 'DashBoard' ? 'text-pink fw-semibold' : ''}
              onClick={() => handleNavigate('/')}
            >
              DashBoard
            </Nav.Link>
            <Nav.Link
              active={activePage === 'Projects'}
              className={activePage === 'Projects' ? 'text-pink fw-semibold' : ''}
              onClick={() => handleNavigate('/Project')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              active={activePage === 'Teams'}
              className={activePage === 'Teams' ? 'text-pink fw-semibold' : ''}
              onClick={() => handleNavigate('/Teams')}
            >
              Teams
            </Nav.Link>
            <Nav.Link
              active={activePage === 'Analytics'}
              className={activePage === 'Analytics' ? 'text-pink fw-semibold' : ''}
              onClick={() => handleNavClick('Analytics')}
            >
              Analytics
            </Nav.Link>
            <Nav.Link
              active={activePage === 'Messages'}
              className={activePage === 'Messages' ? 'text-pink fw-semibold' : ''}
              onClick={() => handleNavClick('Messages')}
            >
              Messages
            </Nav.Link>
            <Nav.Link
              active={activePage === 'Integrations'}
              className={activePage === 'Integrations' ? 'text-pink fw-semibold' : ''}
              onClick={() => handleNavClick('Integrations')}
            >
              Integrations
            </Nav.Link>
          </Nav>
          <Card className="mt-4 text-center">
            <Card.Body>
              <img src="../Group.png" alt="update" className="mb-2" />
              <Card.Text className="text-muted small">V2.0 is available</Card.Text>
              <Button variant="outline-primary" size="sm">Try now</Button>
            </Card.Body>
          </Card>
          <div className="text-center mt-3 text-muted small">Made with Visily</div>
        </Col>
        </>
     );
}

export default Sidebar;