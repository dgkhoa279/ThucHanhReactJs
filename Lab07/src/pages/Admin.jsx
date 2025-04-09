import React from 'react';
import { Container, Row, Col, Card, Button, InputGroup, Badge, Nav } from 'react-bootstrap';
import { FaBell, FaQuestionCircle, FaSearch, FaShoppingCart, FaDollarSign, FaUsers, FaPen } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'; // Import DataTable

const getStatusVariant = (status) => {
  switch (status) {
    case 'New': return 'info';
    case 'In-progress': return 'warning';
    case 'Completed': return 'success';
    default: return 'secondary';
  }
};

// Định nghĩa cột cho DataTable
const columns = [
  {
    name: '',
    selector: row => <input type="checkbox" />,
    width: '50px',
  },
  {
    name: 'CUSTOMER NAME',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'COMPANY',
    selector: row => row.company,
    sortable: true,
  },
  {
    name: 'ORDER VALUE',
    selector: row => row.value,
    sortable: true,
  },
  {
    name: 'ORDER DATE',
    selector: row => row.date,
    sortable: true,
  },
  {
    name: 'STATUS',
    selector: row => <Badge bg={getStatusVariant(row.status)}>{row.status}</Badge>,
    sortable: true,
  },
  {
    name: '',
    selector: row => <FaPen className="text-muted" />,
    width: '50px',
  },
];

const Admin = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then((res) => res.json())
      .then((data) => {
        const formattedCustomers = data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          company: 'N/A',
          value: `$${(Math.random() * 10000).toFixed(2)}`,
          date: new Date().toLocaleDateString(),
          status: ['New', 'In-progress', 'Completed'][Math.floor(Math.random() * 3)],
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
                <InputGroup.Text><FaSearch /></InputGroup.Text>
                <input className="form-control" placeholder="Search..." />
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

          {/* DataTable Section */}
          <Card>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-semibold">Detailed report</h6>
                <div>
                  <Button variant="light" className="me-2">Import</Button>
                  <Button variant="light">Export</Button>
                </div>
              </div>
              <DataTable
                columns={columns}
                data={customers}
                pagination
                highlightOnHover
                responsive
                defaultSortField="name"
                defaultSortAsc={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;