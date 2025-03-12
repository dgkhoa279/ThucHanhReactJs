import { Navbar, Nav, NavDropdown, Container, FormControl, InputGroup } from 'react-bootstrap';
import { nameMenu } from '../../data/index'
import '../Header/header.css';
const Header = () => {
    return (
        <Navbar >
            <Nav className='flex items-center'>
                <div>
                    <img src="/img/avatar_small.png" alt="" />
                </div>
                <InputGroup className="flex-nowrap mr-auto w-[250px]" >
                    <FormControl className="w-[100%]"  placeholder="What would you like to cook" />
                    <InputGroup.Text >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </InputGroup.Text>
                </InputGroup>
                <div>
                    <ul className='flex'>
                        {nameMenu.map((item,index)=> {
                            return (
                                <li key={index} style={{listStyle:'none',margin:'0 10px',width:'100px'}}>{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <button className='flex w-[150px] justify-center items-center bg-pink-300 text-[#ff0099] rounded-[20px]' style={{border:'1px solid #c3c3c3'}}>
                        <img src="/img/archive_check.png" alt="" />
                        <p>Your Recipe Box</p>
                    </button>
                </div>
                <div>
                    <img className='ml-[20px] w-[34px]' src="/img/avatar.png" alt="" />
                </div>
            </Nav>
        </Navbar>
    )
}

export default Header