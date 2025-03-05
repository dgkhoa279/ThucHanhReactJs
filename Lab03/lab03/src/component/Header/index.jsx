import { Navbar, Nav, NavDropdown, Container, FormControl, InputGroup } from 'react-bootstrap';
import { nameMenu } from '../../data/index'
const Header = () => {
    return (
        <Navbar >
            <Nav style={{display:'flex',alignItems:'center'}}>
                <div>
                    <img src="/img/avatar_small.png" alt="" />
                </div>
                <InputGroup className="flex-nowrap me-3" style={{ width: '50%' }}>
                    <FormControl placeholder="What would you like to cook" />
                    <InputGroup.Text >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </InputGroup.Text>
                </InputGroup>
                <div>
                    <ul style={{display:'flex'}}>
                        {nameMenu.map((item,index)=> {
                            return (
                                <li style={{listStyle:'none',margin:'0 10px',width:'100px'}}>{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <button style={{display:'flex',width:'150px',justifyContent:'center',alignItems:'center',backgroundColor:'pink',color:'#ff0099',borderRadius:'5px',border:'1px solid #c3c3c3'}}>
                        <img src="/img/archive_check.png" alt="" />
                        <p>Your Recipe Box</p>
                    </button>
                </div>
                <div>
                    <img style={{width:'34px',marginLeft:'20px'}} src="/img/avatar.png" alt="" />
                </div>
            </Nav>
        </Navbar>
    )
}

export default Header