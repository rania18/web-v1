
import React , { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from 
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  Badge,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { retrieveVehicules } from "actions/vehicules";
import AddVehicule from "./AddVehicule";
import EditVehicule from "./EditVehicule";
import DeleteVehicule from "./DeleteVehicule";
import DetailVehicule from "./DetailVehicule";
import Profile from "./Profile"
import { Link } from "react-router-dom";

const Vehicule = () => {
  const [copiedText, setCopiedText] = useState();

  const vehicules = useSelector(state => state.vehicules);
  const dispatch = useDispatch();


  useEffect(() => {
    console.log("useeffect")
    dispatch(retrieveVehicules());
  }, []);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card véhicules</h3>
                <Col className="text-right" xs="12">
                <AddVehicule />
                </Col>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Immatricule</th>
                    <th scope="col">Marque</th>
                    <th scope="col">PMC</th>
                    <th scope="col">Num chassis</th>
                    <th scope="col">Model</th>
                    <th scope="col">Type</th>
                    <th scope="col">Kilometrage</th>
                    <th scope="col">Carburant</th>
                    <th scope="col">Description</th>
                    <th scope="col">Photo Ma</th>
                    <th scope="col" />
                  </tr>
                </thead>
                {vehicules.map((vehicule, index) => ( 
                <tbody>
                
                    
                     <tr> <td>{vehicule.immatricule}</td>
                    <td>{vehicule.marque}</td>
                    <td>{vehicule.PMC}</td>
                    <td>{vehicule.nChassis}</td>
                    <td>{vehicule.modele}</td>
                    <td>{vehicule.type}</td>
                    <td>{vehicule.Kilometrage}</td>
                    <td>{vehicule.carburant}</td>
                    <td>{vehicule.description}</td>
                    <td><Link to={`/admin/detail/${vehicule.id}`}>
                      <DetailVehicule id={vehicule.id}/>  </Link>
                      <EditVehicule id={vehicule.id}/>
                    <DeleteVehicule id={vehicule.id}/>
                     </td>
                   
                     
                  </tr>
                
                   
                 
                </tbody>
                 ))}
            </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
   
      </Container>
    </>
  );
};

export default Vehicule;
