import React from "react";

//image
import logo from "../../UI/Img/softechsolutions_header_log.png";
import logo_s from "../../UI/Img/softechsolutions_logo.png";

//bootstrap
import { Card, ListGroup } from "react-bootstrap";

//css
import "../Footer/footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      {/* 1st card */}
      <Card
        border="primary"
        style={{
          width: "20rem",
          height: "20rem",
          borderRadius: "2rem",
          marginLeft: "2rem",
        }}
      >
        <div className="card_img_container">
          <img
            src={logo_s}
            className="card-img"
            alt="logo_S"
          />
          <img
            src={logo}
            style={{ width: "8rem" }}
            className="card-img"
            alt="logo"
          />
        </div>
        <Card.Body>
          <Card.Title style={{ color: "blue" }}>Info</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            Softech ERP Solutions Pvt. Ltd. is a software development firm
            located in the metropolis of Kolkata, India. The company started its
            operation as Softech Solutions in 2002 and was later incorporated in
            2011.
          </Card.Text>
        </Card.Body>
      </Card>
      {/* 2nd card */}
      <Card
        border="primary"
        style={{
          width: "20rem",
          height: "20rem",
          borderRadius: "2rem",
          marginLeft: "3rem",
        }}
      >
        <Card.Header
          style={{
            borderRadius: "2rem 2rem 0 0",
            color: "blue",
            fontWeight: "500",
          }}
          className="card_header"
        >
          Services
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item action>Consulting</ListGroup.Item>
            <ListGroup.Item action>IT & Web applications</ListGroup.Item>
            <ListGroup.Item action>Website development</ListGroup.Item>
            <ListGroup.Item action>Domain & Hosting Service</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      {/* 3rd card */}
      <Card
        border="primary"
        style={{
          width: "20rem",
          height: "20rem",
          borderRadius: "2rem",
          marginLeft: "3rem",
          float: "right",
        }}
      >
        <Card.Header
          style={{
            borderRadius: "2rem 2rem 0 0",
            color: "blue",
            fontWeight: "500",
          }}
          className="card_header"
        >
          Contact Us
        </Card.Header>
        <Card.Body>
          <Card.Title
            style={{
              color: "orange",
              fontWeight: "500",
            }}
          >
            Address
          </Card.Title>
          <Card.Text>
            19/6 Sahapur Colony Block – J New Alipore, Kolkata 700053
          </Card.Text>

          <Card.Title
            style={{
              color: "orange",
              fontWeight: "500",
            }}>
            Phone
          </Card.Title>
          <Card.Text>+919831556450</Card.Text>

          <Card.Title style={{
            color: "orange",
            fontWeight: "500",
          }}>Email</Card.Title>
          <Card.Text>info@softechsolutions.co.in</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
