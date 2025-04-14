import React from 'react';
import { Container, Row, Col, Card, Button, InputGroup, Badge, Nav } from 'react-bootstrap';
import { FaBell, FaQuestionCircle, FaSearch, FaShoppingCart, FaDollarSign, FaUsers, FaPen } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Sidebar from '../layout/Sidebar';


const Teams = () => {
  return (
    <Container fluid className="bg-light min-vh-100 p-0">
      <Row className="g-0" style={{ width: '1500px' }}>
        {/* Sidebar */}
      <Sidebar></Sidebar>

        {/* Main Content */}
        <Col md={10} className="p-4">
          <h1>Đây là Teams</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Teams;