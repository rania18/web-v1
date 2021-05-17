import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createVehicule } from "../../actions/vehicules";
// reactstrap components
import Axios from "axios";
import { Modal } from "react-bootstrap";
import { DatePicker, Space } from "antd";
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

const AddVehicule = () => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialVehiculeState = {
    id: null,
    immatricule:"", 
    marque:"", 
    PMC: "", 
    nChassis:"", 
    modele: "", 
    type: "", 
    Kilometrage: "", 
    carburant: "", 
    description :"", 
    photoMat: "",
  };
  const [vehicule, setVehicule] = useState(initialVehiculeState);


  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVehicule({ ...vehicule, [name]: value });
  };

  const saveVehicule = () => {
    const { immatricule, marque, PMC, nChassis, modele, type, Kilometrage, carburant, description, photoMat } = vehicule;

    dispatch(createVehicule(immatricule, marque, PMC, nChassis, modele, type, Kilometrage, carburant, description, photoMat))
      .then((data) => {
        setVehicule({
          id: data.id,
          immatricule:data.immatricule, 
          marque:data.marque, 
          PMC: data.PMC, 
          nChassis:data.nChassis, 
          modele: data.modele, 
          type: data.type, 
          Kilometrage: data.Kilometrage, 
          carburant: data.carburant, 
          description :data.description, 
          photoMat: data.photoMat,
        });
     
      })
      .catch((e) => {
       // console.log(e);
      });
  };

  

  return (
    <>
      
        <Button color="primary" onClick={handleShow}>
          Ajouter Vehicule
        </Button>
   
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Ajouter vehicule</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  User information
                </h6>
                <div className="pl-lg-4">
                <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                          Nom
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="lucky.jesse"
                          // id="input-username"
                          // placeholder="Username"
                          type="text"
                          name="immatricule"
                          value={vehicule.immatricule}
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
                          Description
                        </label>
                        <Input
                          className="form-control-alternative"
                          // id="input-email"
                          // placeholder="jesse@example.com"
                          type="text"
                          name="marque"
                          value={vehicule.marque}
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
                          type="photo"
                          name="PMC"
                          value={vehicule.PMC}
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
                          value={vehicule.nChassis}
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
                          value={vehicule.modele}
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
                          value={vehicule.type}
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
                          value={vehicule.Kilometrage}
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
                          value={vehicule.carburant}
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
                          value={vehicule.description}
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
                          value={vehicule.photoMat}
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
                    <Button variant="primary" onClick={saveVehicule}>
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

export default AddVehicule;
