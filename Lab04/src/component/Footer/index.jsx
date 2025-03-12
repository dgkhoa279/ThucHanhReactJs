import { Row, Col } from 'react-bootstrap';
import '../Footer/footer.css';
const Footer = () => {
    return (
        <Row className='flex bg-[#38393d] text-white justify-between'>
            <Col lg={6}>
                <h5>About Us</h5>
                <p>Welcome to our website,a wonderful place to expolore and learn how to look like a pro</p>
                <div>
                    <input className='rounded-[4px]' style={{ backgroundColor: '#fff' }} placeholder='Enter your email' type="text" />
                    <button className="pl-[4px] pr-[4px] rounded-[4px] ml-[8px] bg-pink-300">Send</button>
                </div>
                <div className="flex justify-around mt-[70px]">
                    <div>
                        <img src="./img/chefifywhite.png" alt="" />
                    </div>
                    <p>2023 Chefify Company</p>
                    <p>Term of Seviced Privacy Policy</p>
                </div>
            </Col>
            <Col lg={6}>
                <Row className='flex'>
                    <Col lg={6} className='mr-[50px]'>
                        <div>
                            <h4>Learn More</h4>
                            <p>Our Cooks</p>
                            <p>See Our Fechtures</p>
                            <p>FAQ</p>
                        </div>
                        <div className='mt-[30px]'>
                            <h4>Shop</h4>
                            <p>Gift Subcription</p>
                            <p>Send Us Feedback</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h4>Recipes</h4>
                            <p>What to Cook This Week</p>
                            <p>Pasta</p>
                            <p>Dinner</p>
                            <p>Healthy</p>
                            <p>Vegetation</p>
                            <p>Vegan</p>
                            <p>Chrismars</p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
export default Footer