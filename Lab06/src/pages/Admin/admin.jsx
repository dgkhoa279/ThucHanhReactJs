import '../Admin/admin.css'
import ComponentOverview from '../Component/componentOverview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Admin() {
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
    ]
    const customers = [
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
      ];
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
                {
                    overview.map((item,index) =>(
                        <ComponentOverview
                    title={title}
                    money={money}
                    percent={percent}
                    img={img}

                />
                    ))
                }
            </div>
            <div className="detai_report">
                <h4>Detai report</h4>
                <div>
                    <button>Add new customer</button>
                </div>
                <DataTable value={customers} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
               
                <Column header="Customer Name" body={imageBodyTemplate} style={{ width: '25%' }}></Column>
                    <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                    <Column field="orderValue" header="Order Value" style={{ width: '25%' }}></Column>
                    <Column field="orderDate" header="Order Date" style={{ width: '25%' }}></Column>
                    <Column field="status" header="Status" style={{ width: '25%' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}

export default Admin;
