import React from 'react';
import { Container, Row, Col, Card, Button, InputGroup, Badge, Nav } from 'react-bootstrap';
import { FaBell, FaQuestionCircle, FaSearch, FaShoppingCart, FaDollarSign, FaUsers, FaPen } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../layout/Sidebar';
const getStatusVariant = (status) => {
  switch (status) {
    case 'New': return 'info';
    case 'In-progress': return 'warning';
    case 'Completed': return 'success';
    default: return 'secondary';
  }
};


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

const Project = () => {
  const [customers, setCustomers] = useState([]);




  return (
    <Container fluid className="bg-light min-vh-100 p-0">
      <Row className="g-0" style={{ width: '1500px' }}>
        {/* Sidebar */}
      <Sidebar></Sidebar>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <h1>Đây là project</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Project;