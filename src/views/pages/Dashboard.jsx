import React, { Component } from "react";
import { Card, CardBody, Container, Row, Col } from "reactstrap";
import navigationConfig from "../../_nav"; 
import "../../vibe/scss/styles.scss";
import { Link } from "react-router-dom";
import Button from "../../components/elements/Button";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedItems: [], // Track expanded menu items
      firstName: "", // State to hold user's first name
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://globaleducomm.com/api/user');
      const { user_fname } = response.data;
      this.setState({ firstName: user_fname });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  // Function to handle toggling the expansion of a menu item
  toggleItemExpansion = (index) => {
    const { expandedItems } = this.state;
    const newExpandedItems = [...expandedItems];

    // Toggle the expansion state for the clicked item
    if (newExpandedItems.includes(index)) {
      newExpandedItems.splice(newExpandedItems.indexOf(index), 1);
    } else {
      newExpandedItems.push(index);
    }

    this.setState({ expandedItems: newExpandedItems });
  };

  render() {
    const heroStyles = {
      padding: "50px 0 70px",
    };

    const { expandedItems, firstName } = this.state;

    return (
      <Container fluid>
        <Row>
          <Col md="3" style={{ height: "100vh" }} className="dashboard-sidebar bg-dark">
            <div className="mt-5">
              <Link to="/"><h3 className="my-5 text-light ms-3">GLOBAL<span><h3 className="d-inline text-success"> EDUCOM</h3></span></h3></Link>
            </div>
            <ul mainNav>
              {navigationConfig.top.map((item, index) => (
                <li className="text-warning" key={index}>
                  {item.children ? (
                    <div>
                      <Button
                        onClick={() => this.toggleItemExpansion(index)}
                      >
                        {item.name}
                      </Button>
                      {expandedItems.includes(index) && (
                        <ul>
                          {item.children.map((child, childIndex) => (
                            <li className="text-light" key={childIndex}>
                              <Link className="text-light navLnks" to={child.url}>
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link to={item.url}>{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </Col>
          <Col md="9" className="dashboard-content bg-success">
            <Row>
              <Col md={6}>
                <div className="home-hero" style={heroStyles}>
                  <h1 className="text-light">Welcome, {firstName}</h1>
                  <p className="text-dark">
                    Discover the resources that will help speed up
                    your next reasearch project.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Card>
                  <CardBody className="display-flex">
                    <div className="m-l">
                      <h2 className="h4">My Resources
                        <span>
                          <h4 className="text-muted d-inline"> &emsp; 3</h4>
                        </span>
                      </h2>
                      <ul>
                        <li className="navLnks mb-3">
                          <span>
                            <img src={require("../../assets/images/gallery/data.jpg")} width="20%" alt="resources" />&emsp;
                            <Link to="#!" className="text-dark"> Prediction and Classification of COVID-19 Death and Recovered cases using ML</Link>
                          </span>
                          
                        </li>
                        <li className="navLnks mb-3">
                          <span>
                            <img src={require("../../assets/images/gallery/pm.jpg")} width="20%" alt="resources" />&emsp;
                          <Link to="#!" className="text-dark">Stakeholder Approach to Successful Adoption of Projects</Link>
                          </span>
                        </li>
                        <li className="navLnks">
                          <span>
                            <img src={require("../../assets/images/gallery/lang.jpg")} width="20%" alt="resources" />&emsp;
                          <Link to="#!" className="text-dark">Analyzing language attrition among most English speakers</Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <CardBody className="display-flex">
                    <div className="m-l">
                      <h2 className="h4">Similar Resources</h2>
                      <ul>
                        <li className="navLnks mb-3">
                          <span>
                            <img src={require("../../assets/images/gallery/data.jpg")} width="20%" alt="resources" />&emsp;
                            <Link to="#!" className="text-dark"> Prediction and Classification of COVID-19 Death and Recovered cases using ML</Link>
                          </span>
                          
                        </li>
                        <li className="navLnks mb-3">
                          <span>
                            <img src={require("../../assets/images/gallery/pm.jpg")} width="20%" alt="resources" />&emsp;
                          <Link to="#!" className="text-dark">Stakeholder Approach to Successful Adoption of Projects</Link>
                          </span>
                        </li>
                        <li className="navLnks">
                          <span>
                            <img src={require("../../assets/images/gallery/lang.jpg")} width="20%" alt="resources" />&emsp;
                          <Link to="#!" className="text-dark">Analyzing language attrition among most English speakers</Link>
                          </span>
                        </li>
                        {/* <li className="navLnks mb-3">
                          <span>
                            <img src={require("../../assets/images/gallery/pm.jpg")} width="20%" alt="resources" />&emsp;
                          <Link to="#!" className="text-dark">Stakeholder Approach to Successful Adoption of Projects</Link>
                          </span>
                        </li> */}
                        
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md={12}>
                <Card>
                  <CardBody className="display-flex">
                    <div className="m-l">
                      <h2 className="h4">Current Plan
                        <span>
                          <h4 className="text-muted d-inline"> &emsp; FREE</h4>
                        </span>
                      </h2>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              {/* <Col md={6}>
                <Card>
                  <CardBody className="display-flex">
                    <div className="m-l">
                      <h2 className="h4">Responsive</h2>
                      <p className="text-muted">
                        Designed for screens of all sizes.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
