import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteClient, updateClient } from "../../actions/clients";
import ClientDataService from "../../services/ClientService";
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

const DetailClient = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const initialClientState = {
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
  const [currentClient, setCurrentClient] = useState(initialClientState);
  // const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getClient = id => {
    ClientDataService.get(id)
      .then(response => {
        setCurrentClient(response.data);
        // console.log(response.data);
      })
      .catch(e => {
        // console.log(e);
      });
  };

  useEffect(() => {
    getClient(props.id);
  }, [props.id]);

  

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setCurrentClient({ ...currentClient, [name]: value });
  // };
  return (
    <>
      <Button className="btn-icon btn-2"  size="sm" color="success" type="button" onClick={handleShow}>
            <i className="ni ni-align-center" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Détails client </h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>

                <div className="pl-lg-4">
                  <Row>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-username"
                        >
                         Nom: {currentClient.nom}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                         Prenom: {currentClient.prenom}
                          
                        </label>
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
                         Email: {currentClient.email}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         Code: {currentClient.code}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Tel: {currentClient.tel}
                        </label>
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         Adresse: {currentClient.adresse}
                        </label>
                        <Space direction="vertical">
                       
                        </Space>
                        
                      </FormGroup>
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         Contact: {currentClient.contact}
                        </label>
                      </FormGroup>{" "}
                      </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         Fax: {currentClient.fax}
                        </label>
                      </FormGroup>
                  
                    </Col>
                   
                  </Row>
              
                </div>
               
                
              </Form>
            </CardBody>
          </Card>
        </Modal>
    
    </>
  );
};

export default DetailClient;
