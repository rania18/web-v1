import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteClient, updateClient } from "../../actions/reparateurs";
import  ReparateurDataService from "../../services/ReparateurService";
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
import { updateReparateur } from "actions/reparateurs";

const ActiveReparateur = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const initialReparateurState = {
    id: null,
    nom: "",
    email: "",
    published: false
  };
  const [currentReparateur, setCurrentReparateur] = useState(initialReparateurState);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getReparateur = id => {
    ReparateurDataService.get(id)
      .then(response => {
        setCurrentReparateur(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getReparateur(props.id);
  }, [props.id]);

  

 
///////////////////////
const updateStatus = status => {
  const data = {
    id: currentReparateur.id,
    nom: currentReparateur.title,
    email: currentReparateur.description,
    published: status
  };

  dispatch(updateReparateur(currentReparateur.id, data))
    .then(response => {
      console.log(response);

      setCurrentReparateur({ ...currentReparateur, published: status });
      setMessage("The status was updated successfully!");
    })
    .catch(e => {
      console.log(e);
    });
};

  return (
    <>
      
      <Button className="btn-icon btn-2"  size="sm" color="danger" type="button" onClick={handleShow}>
            <i className="ni ni-fat-remove" />
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Card className="bg-secondary shadow">
            <CardHeader className="bg-white border-0">
              <Row className="align-items-center">
                <Col xs="8">
                  <h3 className="mb-0">Modifier Reparateur</h3>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Form>
                <h6 className="heading-small text-muted mb-4">
                  Etes-vous sur de vouloir supprimer cet élément ?
                </h6>
               
                <hr className="my-4" />
                <div className="pl-lg-4">
                  <FormGroup>
                    <Button variant="secondary" onClick={handleClose}>
                      non
                    </Button>
                    <Button variant="primary"onClick={updateStatus}>
                      oui
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

export default ActiveReparateur;
