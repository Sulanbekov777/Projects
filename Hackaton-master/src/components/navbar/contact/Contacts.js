import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { Container } from "reactstrap";

function Contact() {

  return (    
      <Container style={{marginTop:"100px"}} className="text-align-center justify-content-center align-items-center">
        <h2>Our Contacts</h2>
        <MDBRow>
            <MDBCol lg="7">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93531.71079379348!2d74.49115431079855!3d42.89677465293526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec7d979079afb%3A0x9bb594c6a6f88787!2z0J_QtdGA0LLQvtC80LDQudGB0LrQuNC5INGA0LDQudC-0L0sINCR0LjRiNC60LXQug!5e0!3m2!1sru!2skg!4v1599171814146!5m2!1sru!2skg"
                title="This is a unique title"
                width="1200px"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
                <p>Bishkek, 72000064</p>
                <p className="mb-md-0">KYRGYZSTAN</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="phone" />
                </MDBBtn>
                <p>+ 01 234 567 89</p>
                <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="envelope" />
                </MDBBtn>
                <p>info@gmail.com</p>
                <p className="mb-md-0">azixmam@gmail.com</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </Container>

  );
}

export default Contact;
