import React from 'react';
import { Container, Row, Col, Card, Table, Button, Form, InputGroup, Badge, Nav } from 'react-bootstrap';
import { FaBell, FaQuestionCircle, FaSearch, FaShoppingCart, FaDollarSign, FaUsers, FaPen, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

const getStatusVariant = (status) => {
  switch (status) {
    case 'New': return 'info';
    case 'In-progress': return 'warning';
    case 'Completed': return 'success';
    default: return 'secondary';
  }
};

const Admin = () => {
  // Di chuyển useState và useEffect vào trong component
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5") // Lấy 5 khách hàng để hiển thị
      .then((res) => res.json())
      .then((data) => {
        // Chuyển đổi dữ liệu từ API thành định dạng phù hợp
        const formattedCustomers = data.results.map((user, idx) => ({
          name: `${user.name.first} ${user.name.last}`,
          company: 'N/A', // API không cung cấp, có thể thay bằng dữ liệu thực tế
          value: `$${(Math.random() * 10000).toFixed(2)}`, // Giả lập giá trị đơn hàng
          date: new Date().toLocaleDateString(), // Giả lập ngày
          status: ['New', 'In-progress', 'Completed'][Math.floor(Math.random() * 3)] // Ngẫu nhiên trạng thái
        }));
        setCustomers(formattedCustomers);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container fluid className="bg-light min-vh-100 p-0">
      <Row className="g-0" style={{ width: '1500px' }}>
        {/* Sidebar */}
        <Col md={2} className="bg-white p-3 border-end">
          <div className="text-center mb-4">
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <img src="../Image 1858.png" alt="" />
              </div>
            </div>
          </div>
          <Nav className="flex-column">
            <Nav.Link active className="text-pink fw-semibold">DashBoard</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Teams</Nav.Link>
            <Nav.Link>Analytics</Nav.Link>
            <Nav.Link>Messages</Nav.Link>
            <Nav.Link>Integrations</Nav.Link>
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

        {/* Main Content */}
        <Col md={10} className="p-4">
          {/* Header */}
          <Row className="mb-4 align-items-center">
            <Col><h4 className="fw-semibold">DashBoard</h4></Col>
            <Col md={4}>
              <InputGroup>
                <Form.Control placeholder="Search..." />
                <InputGroup.Text><FaSearch /></InputGroup.Text>
              </InputGroup>
            </Col>
            <Col className="text-end">
              <FaBell className="me-3" />
              <FaQuestionCircle className="me-3" />
              <img src="../Avatar (1).png" className="rounded-circle" alt="avatar" />
            </Col>
          </Row>

          {/* Overview */}
          <Row className="mb-4">
            <Col md={4}>
              <Card className="text-center bg-light border-0">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted">Turnover</h6>
                      <h5>$92,405</h5>
                      <small className="text-success">▲ 5.39% period of change</small>
                    </div>
                    <FaShoppingCart className="text-pink fs-4" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center bg-light border-0">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted">Profit</h6>
                      <h5>$32,218</h5>
                      <small className="text-success">▲ 5.39% period of change</small>
                    </div>
                    <FaDollarSign className="text-primary fs-4" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center bg-light border-0">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="text-muted">New customer</h6>
                      <h5>298</h5>
                      <small className="text-success">▲ 6.84% period of change</small>
                    </div>
                    <FaUsers className="text-info fs-4" />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Table Section */}
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-semibold">Detailed report</h6>
                <div>
                  <Button variant="light" className="me-2">Import</Button>
                  <Button variant="light">Export</Button>
                </div>
              </div>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>CUSTOMER NAME</th>
                    <th>COMPANY</th>
                    <th>ORDER VALUE</th>
                    <th>ORDER DATE</th>
                    <th>STATUS</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((item, idx) => (
                    <tr key={idx}>
                      <td><Form.Check /></td>
                      <td>{item.name}</td>
                      <td>{item.company}</td>
                      <td>{item.value}</td>
                      <td>{item.date}</td>
                      <td><Badge bg={getStatusVariant(item.status)}>{item.status}</Badge></td>
                      <td><FaPen className="text-muted" /></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="d-flex justify-content-between align-items-center text-muted small">
                <span>{customers.length} results</span>
                <div>
                  <Button variant="light" size="sm"><FaChevronLeft /></Button>{' '}
                  <span className="mx-2">1</span>
                  <Button variant="light" size="sm"><FaChevronRight /></Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;