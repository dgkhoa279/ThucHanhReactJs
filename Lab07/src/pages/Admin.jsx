import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, InputGroup, Badge, Modal, Form } from 'react-bootstrap';
import { FaBell, FaQuestionCircle, FaSearch, FaShoppingCart, FaDollarSign, FaUsers, FaPen } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataTable from 'react-data-table-component';
import Sidebar from '../layout/Sidebar';

const getStatusVariant = (status) => {
  switch (status) {
    case 'New':
      return 'info';
    case 'In-progress':
      return 'warning';
    case 'Completed':
      return 'success';
    default:
      return 'secondary';
  }
};

const columns = (handleEditClick) => [
  {
    name: '',
    selector: (row) => <input type="checkbox" />,
    width: '50px',
  },
  {
    name: 'CUSTOMER NAME',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'COMPANY',
    selector: (row) => row.company,
    sortable: true,
  },
  {
    name: 'ORDER VALUE',
    selector: (row) => row.value,
    sortable: true,
  },
  {
    name: 'ORDER DATE',
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: 'STATUS',
    selector: (row) => <Badge bg={getStatusVariant(row.status)}>{row.status}</Badge>,
    sortable: true,
  },
  {
    name: '',
    selector: (row) => (
      <FaPen
        className="text-muted"
        style={{ cursor: 'pointer' }}
        onClick={() => handleEditClick(row)}
      />
    ),
    width: '50px',
  },
];

const Admin = () => {
  const [customers, setCustomers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    value: '',
    date: '',
    status: '',
  });

  // Fetch dữ liệu từ API
  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const formattedCustomers = data.users.map((user, index) => ({
          id: index, // Thêm id để xác định user khi cập nhật
          name: user.customerName,
          company: user.company,
          value: user.orderValue,
          date: user.orderDate,
          status: user.status,
        }));
        setCustomers(formattedCustomers);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Xử lý khi bấm vào icon sửa
  const handleEditClick = (row) => {
    setSelectedCustomer(row);
    setFormData({
      name: row.name,
      company: row.company,
      value: row.value,
      date: row.date,
      status: row.status,
    });
    setShowModal(true);
  };

  // Xử lý khi thay đổi giá trị trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Xử lý lưu thông tin đã chỉnh sửa
  const handleSave = async () => {
    try {
      // Gửi yêu cầu PUT hoặc PATCH tới server để cập nhật user
      const response = await fetch(`http://localhost:5000/api/users/${selectedCustomer.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: formData.name,
          company: formData.company,
          orderValue: formData.value,
          orderDate: formData.date,
          status: formData.status,
        }),
      });

      if (!response.ok) {
        throw new Error('Lỗi khi cập nhật dữ liệu');
      }

      // Cập nhật danh sách customers trong state
      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === selectedCustomer.id
            ? { ...customer, ...formData }
            : customer
        )
      );

      // Đóng modal
      setShowModal(false);
      setSelectedCustomer(null);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  // Đóng modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedCustomer(null);
  };

  return (
    <Container fluid className="bg-light min-vh-100 p-0">
      <Row className="g-0" style={{ width: '1500px' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <Col md={10} className="p-4">
          {/* Header */}
          <Row className="mb-4 align-items-center">
            <Col>
              <h4 className="fw-semibold">DashBoard</h4>
            </Col>
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text>
                  <FaSearch />
                </InputGroup.Text>
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
                  <Button variant="light" className="me-2">
                    Add user
                  </Button>
                </div>
              </div>
              <DataTable
                columns={columns(handleEditClick)}
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

      {/* Modal chỉnh sửa */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa thông tin khách hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Tên khách hàng</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Công ty</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Giá trị đơn hàng</Form.Label>
              <Form.Control
                type="text"
                name="value"
                value={formData.value}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ngày đặt hàng</Form.Label>
              <Form.Control
                type="text"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Trạng thái</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="New">New</option>
                <option value="In-progress">In-progress</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Admin;