const CartProduct = ({ name, img, minutes }) => {
    return (
        <div style={{border:'1px solid #c3c3c3',borderRadius:'6px'}}>
            <img style={{width:'100%'}} src={img} alt={name} />
            <p>{name}</p>
            <p>{minutes} minutes</p>
        </div>
    );
};

export default CartProduct;
