
import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useDispatch, useSelector } from "react-redux";
import { retrieveVehicules } from "actions/vehicules";
import VehiculeDataService from "../../services/VehiculeService";
import Header from "components/Headers/Header";

const DetailVehicules = ({match}) => {

  useEffect(() => {
    dispatch(retrieveVehicules());
  }, [])


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
  // const [message, setMessage] = useState("");

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
    getVehicule(match.params.id);
  }, [match.params.id]);

  


  const vehicule = useSelector(state => state.vehicules).find(elm=>elm.id==match.params.id)
  console.log(vehicule)
  return (
    <>
      <Header /> 
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="12">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-sm-2" lg="3">
                  <div className="card-profile-image" xl="8">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        style={{ width: 900, height:80}}
                        // className="rounded-circle"
                        src={
                          require("../../assets/img/theme/Imatriculation.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                      <div>
               
                      </div>
                      <div>
                   
                      </div>
                      <div>
              
                      </div>
                  </div>
                </Row>
               
                <div className="text-center">
                  <h2>
                  Immatricule: {currentVehicule.immatricule}                    
                  </h2>
                
                    

                  
                  <Row>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-first-name"
                        >
                         PMC: {currentVehicule.PMC}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         Num Chassis: {currentVehicule.nChassis}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Modele: {currentVehicule.modele}
                        </label>
                      </FormGroup>
                      </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         Type: {currentVehicule.type}
                        </label>
                        
                        
                      </FormGroup>
                      </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         Kilometrage: {currentVehicule.Kilometrage}
                        </label>
                      </FormGroup>{" "}
                      </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         Carburant: {currentVehicule.carburant}
                        </label>
                      </FormGroup>
                  
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         Description: {currentVehicule.description}
                        </label>
                      </FormGroup>
                  
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                         photo: {currentVehicule.photoMat}
                        </label>
                      </FormGroup>
                    </Col>
                    <Col sm="4">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-last-name"
                        >
                          Marque: {currentVehicule.marque}
                        </label>
                      </FormGroup>
                    </Col>
                   
                  </Row>
              
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
         
       
        </Row>
      </Container>
    </>
  );
};

export default DetailVehicules;
