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
        style={{borderRadius:"2rem"}}
        bsPrifix='card'

      >
        <div className="card_img_container">
         <div className="card_img">
         <img
            src={logo_s}
            alt="logo_S"
          />
           </div> 
           <div className="card_img">
           <img
            src={logo}
            alt="logo_S"
          />
           </div>
          
        </div>
        <Card.Body>
          <h1 className="title">Info</h1>
          <Card.Text bsPrifix="text">
            Softech ERP Solutions Pvt. Ltd. is a software development firm
            located in the metropolis of Kolkata, India. The company started its
            operation as Softech Solutions in 2002 and was later incorporated in
            2011.
          </Card.Text>
        </Card.Body>
      </Card>
      {/* 2nd card */}
      <Card
      bsPrifix='card'
        border="primary"
        style={{
          borderRadius: "2rem",
        }}
      >
        <Card.Header
          style={{
            borderRadius: "2rem 2rem 0 0",
            color: "blue",
          }}
          className="title"
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
          borderRadius: "2rem",
        }}
        bsPrifix='card'
      >
        <Card.Header
          style={{
            borderRadius: "2rem 2rem 0 0",
            color: "blue",
            fontWeight: "500",
          }}
          className="title"
        >
          Contact Us
        </Card.Header>
        <Card.Body>
          <h4 className="title_h" style={{color:"orange"}}>
            Address
          </h4>
          <Card.Text>
            19/6 Sahapur Colony Block – J New Alipore, Kolkata 700053
          </Card.Text>

          <h4 className="title_h" style={{color:"orange"}}>
            Phone
          </h4>
          <Card.Text>+919831556450</Card.Text>

          <h4
          className="title_h" style={{color:"orange"}}>Email</h4>
          <Card.Text>info@softechsolutions.co.in</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
