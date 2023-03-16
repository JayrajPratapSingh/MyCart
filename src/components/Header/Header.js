import React from "react";
import "./Header.css"
import {AiFillDelete} from "react-icons/ai"
//to import react boostrap components
import {
  Container,
  Navbar,
  FormControl,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
//importing react icons
import { FaShoppingCart } from "react-icons/fa";
//importing Link for routing from react router dom
import {Link} from "react-router-dom"
import {CartState} from "../../context/Context"
//making react Header components

const Header = () => {
  const {state:{cart},dispatch}=CartState()
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 85 }} className="navbar" >
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{fontSize:"4vh", fontFamily:"cursive", backgroundColor:"purple", borderRadius:"10px", padding:"1vh 2vh", }}>My Cart</Link>
        </Navbar.Brand>
        {/* <Navbar.Text className="search">
          <FormControl
            style={{ width: 400 }}
            placeholder="Search an Item"
            className="m-auto"
          />
        </Navbar.Text> */}
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge bg="green">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 100 }}>
              {cart.length>0? (<>
              {
                cart.map((item)=>(
                  <span className="cart-item" key = {item.id}>
                    <img src={item.image} className='cart-item-image' alt={item.name}/>
                    <div className="cart-item-detail">
                      <span>{item.name}</span>
                      <span>₹ {item.price.split(".")[0]}</span>
                    </div>
                    <div>
                      <AiFillDelete fontSize="20px" style={{cursor:"pointer", color:"brown"}} onClick={()=>{dispatch({type:"REMOVE_FROM_CART", payload:item})}} />

                     
                    </div>
                  </span>
                ))
              }
              <Link to="/cart">
                <Button style={{width:"90%", margin:"0 10px"}}>Go to Cart </Button>
              </Link>
              </>)
              :(<span style={{ padding: 10 }}>Empty</span>)}
              
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
