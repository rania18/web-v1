import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateVehicule } from "../../actions/vehicules";
import VehiculeDataService from "../../services/VehiculeService";
// reactstrap components
import Axios from "axios";
import { Modal } from "react-bootstrap";
import { DatePicker, Space,EditOutlined } from "antd";

import "antd/dist/antd.css";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const EditVehicule = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const initialVehiculeState = {
    id: null,
    nom: "", 
    prenom: "", 
    code: "", 
    adresse: "", 
    contact: "", 
    tel: "", 
    fax: "", 
    email: ""
  };
  const [currentVehicule, setCurrentVehicule] = useState(initialVehiculeState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getVehicule = id => {
    VehiculeDataService.get(id)
      .then(response => {
        setCurrentVehicule(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getVehicule(props.id);
  }, [props.id]);

  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentVehicule({ ...currentVehicule, [name]: value });
  };

  
  const updateContent = () => {
    dispatch(updateVehicule(currentVehicule.id, currentVehicule))
      .then(response => {
        console.log(response);

        setMessage("The Vehicule was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
      handleClose()
  };

  return (
    <>
      
        {/* <Button color="primary" onClick={handleShow}>
          Modifier Vehicule
        </Button> */}
        <Button className="btn-icon btn-2"  size="sm" color="primary" type="button" onClick={handleShow}>
            <i className="ni ni-caps-small" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Modifier Vehicule</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Vehicule information
                </h6>
                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          immatricule
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="lucky.jesse"
                          // id="input-username"
                          // placeholder="Username"
                          type="text"
                          id="immatricule"
                          name="immatricule"
                          value={currentVehicule.immatricule}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                          marque
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id="input-email"
                          // placeholder="jesse@example.com"
                          type="text"
                          id="marque"
                          name="marque"
                          value={currentVehicule.marque}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          PMC
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="PMC"
                          name="PMC"
                          value={currentVehicule.PMC}
                          onChange={handleInputChange}
                        />
                        
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          NumChassis
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="adresse"
                          name="nChassis"
                          value={currentVehicule.nChassis}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Modele
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="modele"
                          name="modele"
                          value={currentVehicule.modele}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Type
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="type"
                          name="type"
                          value={currentVehicule.type}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Kilometrage
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="Kilometrage"
                          name="Kilometrage"
                          value={currentVehicule.Kilometrage}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Carburant
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="carburant"
                          name="carburant"
                          value={currentVehicule.carburant}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          Description
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="description"
                          name="description"
                          value={currentVehicule.description}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                          photoMat
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="Lucky"
                          // id="input-first-name"
                          // placeholder="First name"
                          type="text"
                          id="photoMat"
                          name="photoMat"
                          value={currentVehicule.photoMat}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                  
                    </Col>

                  </Row>
                </div>

                <hr className="my-4" />
                <div className="pl-lg-4">
                  <FormGroup>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary"onClick={updateContent}>
                      Save Changes
                    </Button>
                  </FormGroup>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Modal>
    
    </>
  );
};

export default EditVehicule;
