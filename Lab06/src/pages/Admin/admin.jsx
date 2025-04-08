import '../Admin/admin.css'
import { useState } from 'react';
import ComponentOverview from '../Component/componentOverview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
    // State for modal visibility
    const [showModal, setShowModal] = useState(false);
    
    // State for form data
    const [formData, setFormData] = useState({
        customerName: '',
        company: '',
        orderValue: '',
        orderDate: '',
        status: 'Pending',
        img: '../Avatar (1).png' // Default avatar
    });
    
    // Overview data
    const overview = [
        {
            title: "Sample Title",
            money: "$92,405",
            percent: 25,
            img: "../Button 1509.png"
        },
        {
            title: "Sample Title",
            money: "$32,218",
            percent: 25,
            img: "../Button 1529.png"
        },
        {
            title:"Sample Title",
            money:"$298",
            percent:25,
            img:"../Button 1530.png"
        }
    ];
    
    // State for customers data
    const [customers, setCustomers] = useState([
        {
          img: '../Avatar (1).png',
          customerName: 'John Doe',
          company: 'Tech Corp',
          orderValue: '$2000',
          orderDate: '2025-04-02',
          status: 'Completed',
        },
        {
            img: '../Avatar (2).png',
            customerName: 'Alice Smith',
            company: 'Business Solutions',
            orderValue: '$1500',
            orderDate: '2025-03-30',
            status: 'Pending',
        },
        {
            img: '../Avatar (3).png',
            customerName: 'Bob Johnson',
            company: 'Innovative Tech',
            orderValue: '$1200',
            orderDate: '2025-04-01',
            status: 'Shipped',
        },
        {
            img: '../Avatar (4).png',
            customerName: 'Charlie Brown',
            company: 'Creative Designs',
            orderValue: '$1800',
            orderDate: '2025-03-28',
            status: 'Completed',
        },
        {
            img: '../Avatar (5).png',
            customerName: 'Charlie Laliga',
            company: 'Creative Designs',
            orderValue: '$6500',
            orderDate: '2025-03-28',
            status: 'Completed',
        },
    ]);
      
    // Handle opening and closing the modal
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    
    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Format order value to include $ if not already included
        let orderValue = formData.orderValue;
        if (orderValue && !orderValue.startsWith('$')) {
            orderValue = '$' + orderValue;
        }
        
        // Create new customer object
        const newCustomer = {
            ...formData,
            orderValue
        };
        
        // Add new customer to the list
        setCustomers([...customers, newCustomer]);
        
        // Reset form and close modal
        setFormData({
            customerName: '',
            company: '',
            orderValue: '',
            orderDate: '',
            status: 'Pending',
            img: '../Avatar (1).png'
        });
        handleCloseModal();
    };
    
    // Template for image display in the table
    const imageBodyTemplate = (rowData) => {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={rowData.img} alt="Customer Avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                {rowData.customerName}
            </div>
        );
    };
    
    return (
        <div className="container">
            <div className="header">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h2 style={{ color: "pink" }}>Dashboard</h2>
                    </div>
                    <div className='group_icon_nav' style={{ display: "flex" }}>
                        <div>
                            <input
                                placeholder='Search' type="search" />
                        </div>
                        <div>
                            <img src="../Bell 1.png" alt="" />
                        </div>
                        <div>
                            <img src="../Question 1.png" alt="" />
                        </div>
                        <div>
                            <img style={{ width: "80%" }} src="../Avatar (5).png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div>
                    <img src="../Image 1858.png" alt="" />
                </div>
                <div>
                    <div>
                        <img src="../Squares four 1.png" alt="" />
                    </div>
                    <a href="#">Dashboard</a>
                </div>
                <div>
                    <div>
                        <img src="../Folder.png" alt="" />
                    </div>
                    <a href="#">Projects</a>
                </div>
                <div>
                    <div>
                        <img src="../Groups.png" alt="" />
                    </div>
                    <a href="#">Teams</a>
                </div>
                <div>
                    <div>
                        <img src="../Pie chart.png" alt="" />
                    </div>
                    <a href="#">Analytics</a>
                </div>
                <div>
                    <div>
                        <img src="../Chat.png" alt="" />
                    </div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <div>
                        <img src="../Code.png" alt="" />
                    </div>
                    <a href="#">Integrations</a>
                </div>
                <div>
                    <div>
                        <img src="../Group.png" alt="" />
                        <h5>V2.0 is avaiable</h5>
                        <button>try now</button>
                    </div>
                </div>
            </div>
            <div className="content">
                <div>
                    <img src="../Squares four 1.png" alt="" />
                    <h4>Overview</h4>
                </div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                {
                    overview.map((item, index) => (
                        <ComponentOverview
                            key={index}
                            title={item.title}
                            money={item.money}
                            percent={item.percent}
                            img={item.img}
                        />
                    ))
                }
                </div>
            </div>
            <div className="detai_report">
                <h4>Detai report</h4>
                <div>
                    <button onClick={handleShowModal}>Add new customer</button>
                </div>
                <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                    <Column header="Customer Name" body={imageBodyTemplate} style={{ width: '25%' }}></Column>
                    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                    <Column field="orderValue" header="Order Value" style={{ width: '25%' }}></Column>
                    <Column field="orderDate" header="Order Date" style={{ width: '25%' }}></Column>
                    <Column field="status" header="Status" style={{ width: '25%' }}></Column>
                </DataTable>
            </div>
            
            {/* Add Customer Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="customerName" 
                                value={formData.customerName} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Company</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="company" 
                                value={formData.company} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Order Value</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="orderValue" 
                                value={formData.orderValue} 
                                onChange={handleInputChange} 
                                required 
                                placeholder="e.g. 1500"
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Order Date</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="orderDate" 
                                value={formData.orderDate} 
                                onChange={handleInputChange} 
                                required 
                            />
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select 
                                name="status" 
                                value={formData.status} 
                                onChange={handleInputChange}
                            >
                                <option value="Pending">Pending</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </Form.Select>
                        </Form.Group>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Avatar</Form.Label>
                            <Form.Select 
                                name="img" 
                                value={formData.img} 
                                onChange={handleInputChange}
                            >
                                <option value="../Avatar (1).png">Avatar 1</option>
                                <option value="../Avatar (2).png">Avatar 2</option>
                                <option value="../Avatar (3).png">Avatar 3</option>
                                <option value="../Avatar (4).png">Avatar 4</option>
                                <option value="../Avatar (5).png">Avatar 5</option>
                            </Form.Select>
                        </Form.Group>
                        
                        <div className="d-flex justify-content-end">
                            <Button variant="secondary" className="me-2" onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button variant="primary" type="submit">
                                Add Customer
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Admin;