import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deletePanne, updatePanne } from "../../actions/typepannes";
import TypepanneDataService from "../../services/TypepanneService";
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

const DetailTypepanne = (props) => {
  //Modal ajou
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const initialTypepanneState = {
 
  };
  const [currentTypepanne, setCurrentTypepanne] = useState(initialTypepanneState);
  // const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getTypepanne = id => {
    TypepanneDataService.get(id)
      .then(response => {
        setCurrentTypepanne(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTypepanne(props.id);
  }, [props.id]);

  

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
                  <h3 className="mb-0">Détails Typepanne </h3>
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
                         Titre: {currentTypepanne.name}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-email"
                        >
                         Description: {currentTypepanne.description}
                          
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

export default DetailTypepanne;
