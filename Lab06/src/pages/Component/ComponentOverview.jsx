function ComponentOverview(props) {
    return (
        <div style={{ backgroundColor: "pink",position:"relative",width:"400px",height:"150px"}}>
            <h5>{props.title}</h5>
            <p>{props.money}</p>
            <p>{props.percent}%</p>
            <div style={{position:"absolute",top:"16px",right:"16px"}}>
                <img style={{width:"40px",height:"40px"}} src={props.img} alt="" />
            </div>
        </div>
    );
}
export default ComponentOverview;
