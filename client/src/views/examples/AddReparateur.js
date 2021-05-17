import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createReparateur } from "../../actions/reparateurs";
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

const AddReparateur = () => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialReparateurState = {
    id: null,
    nom: "",
    email: "",
  };
  const [reparateur, setReparateur] = useState(initialReparateurState);


  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReparateur({ ...reparateur, [name]: value });
  };

  const saveReparateur = () => {
    const { nom, email } = reparateur;

    dispatch(createReparateur(nom, email))
      .then((data) => {
        setReparateur({
          id: data.id,
          nom: data.nom,
          email: data.email,
        });
     
      })
      .catch((e) => {
       // console.log(e);
      });
  };

  

  return (
    <>
      
        <Button color="primary" onClick={handleShow}>
          Ajouter reparateur
        </Button>
   
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Ajouter reparateur</h3>
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
                          defaultValue="lucky.jesse"
                          id="input-username"
                          placeholder="Username"
                          type="text"
                          name="nom"
                          value={reparateur.nom}
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
                          Email
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-email"
                          placeholder="jesse@example.com"
                          type="Email"
                          name="email"
                          value={reparateur.email}
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
                    <Button variant="primary" onClick={saveReparateur}>
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

export default AddReparateur;
