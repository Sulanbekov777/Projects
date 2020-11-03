import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import Axios from "axios";
import { Col, Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { connect } from "react-redux";



function Contact(props) {

  console.log(props.props)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [advice, setAdvice] = useState("");

  function postData(id){
    const data = {
      id: Date.now(),
      name,
      email, 
      subject,
      advice,
      cartItems: props.cartItems.map(item=>item.id)
    }
    if(name !== '' && email !== '') {
    async function postOrder(id){
      const res = await Axios.post(`${process.env.REACT_APP_API_URL_PRODUCTS}/orders`, data)
    }
    postOrder()
  }else{console.log("order has not been sent")}
    
}

  return (    
    <section className="mt-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Order please!
      </h2>
      
      <MDBRow>
        <MDBCol className=" mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header blue accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                  value={subject}
                  onChange={(e)=> setSubject(e.target.value)}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Your advice"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                  value={advice}
                  onChange={(e)=> setAdvice(e.target.value)}
                />
                {props.props?.map((item) => (
                  <div className="d-none" key={item.id}>
                      <div item={item}>
                        <p> image {item.image}</p> 
                        <p> Title {item.title} </p>
                        <p> Comment {item.comment}</p>
                        <p> Price {item.price} $</p>
                      </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <MDBBtn onClick ={() => postData()} color="primary">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

const mapStateToProps = state => {
  let { cartItems } = state.CartReducer
  return { cartItems };
}

export default connect(mapStateToProps, null)(Contact);
