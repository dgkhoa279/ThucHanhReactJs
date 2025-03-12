import CartProduct from "../../component/cardProduct";
import { products } from "../../data/index";
import { Container, Row, Col } from 'react-bootstrap';
import Header from "../../component/Header";
import Footer from "../../component/Footer";
const Home = () => {
    // Chia mảng products thành các nhóm, mỗi nhóm 4 sản phẩm
    const chunkSize = 4;
    const productRows = [];
    for (let i = 0; i < products.length; i += chunkSize) {
        productRows.push(products.slice(i, i + chunkSize));
    }

    return (
        <>
            <Header></Header>
            <Container>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    {productRows.map((rowProducts, rowIndex) => (
                        <Row style={{ display: 'flex' }} key={rowIndex} className="mb-4">
                            {rowProducts.map((product) => (
                                <Col style={{ margin: '20px 16px', width: '100%' }} key={product.id} lg={3} md={4} sm={6}>
                                    <CartProduct
                                        name={product.name}
                                        img={product.img}
                                        minutes={product.minutes}
                                    />
                                </Col>
                            ))}
                        </Row>
                    ))}
                </div>
            </Container>
            <Footer></Footer>
        </>

    );
};

export default Home;