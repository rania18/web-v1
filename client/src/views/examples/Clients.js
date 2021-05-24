
import React , { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import {AddClient} from './AddClient'
import {
  retrieveClients
} from "../../actions/clients";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
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
  TabContent, TabPane, Nav, NavItem, NavLink, button, Button, CardTitle, CardText, 
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
// import { Button } from "reactstrap";
//client
import AddClient from "./AddClient";
import EditClient from "./EditClient";
import DeleteClient from "./DeleteClient";
import DetailClient from "./DetailClient";
import classnames from 'classnames';
//import ActiveReparateur from "./ActiveReparateur";

//reparateur
import { retrieveReparateurs } from "actions/reparateurs";
import AddReparateur from "./AddReparateur";
import EditReparateur from "./EditReparateur";
import ActiveReparateur from "./ActiveReparateur";

const Clients = (props) => {

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }


  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const clients = useSelector(state => state.clients);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(retrieveClients());
  }, []);

  //reparateur
  

  const reparateurs = useSelector(state => state.reparateurs);


  useEffect(() => {
    dispatch(retrieveReparateurs());
  }, []);
  return (
    <>
    
      {/* Page content */}
      <Header />

      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
              <Col xs="8">
              <h3 className="mb-0">List des clients</h3>
                </Col>
                <Col className="text-right" xs="12">
                    <AddClient />
                </Col>
              </CardHeader>
              <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
           Client
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Reparateur
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
            <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Prenom</th>
                    <th scope="col">Code</th>
                    <th scope="col">Adresse</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Tel</th>
                    {/* <th scope="col">Fax</th> */}
                    <th scope="col">Email</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                    <th scope="col" />
                  </tr>
                </thead>
                
                <tbody>
                  {clients.map((client, index) => (  <tr>
                 
                    <th>
                    <Media>
                          <span className="mb-0 text-sm">
                          {client.nom}
                          </span>
                        </Media>
                    </th>
                    {/* <td  scope="col">{client.prenom}</td> */}
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        {client.prenom}
                      </Badge>
                    </td>
                    {/* <td  scope="col">{client.code}</td> */}
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                      {client.code}
                      </Badge>
                    </td>
                    {/* <td  scope="col">{client.adresse}</td> */}
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                      {client.adresse}
                      </Badge>
                    </td>
                    {/* <td  scope="col">{client.contact}</td> */}
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                      {client.contact}
                      </Badge>
                    </td>
                    {/* <td  scope="col">{client.tel}</td> */}
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                      {client.tel}
                      </Badge>
                    </td>
                    {/* <td  scope="col">{client.fax}</td> */}
                    {/* <td>
                      <Badge color="" className="badge-dot mr-4">
                      {client.fax}
                      </Badge>
                    </td> */}
                    {/* <td  scope="col">{client.email}</td> */}
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                      {client.email}
                      </Badge>
                    </td>
                    <td>
                      <Badge color="" className="badge-dot mr-4">
                        <i className="bg-warning" />
                        is active
                      </Badge>
                    </td>
                    <td><DetailClient id={client.id}/>
                      <ActiveReparateur id={client.id} />
                    <EditClient id={client.id}/> 
                  <DeleteClient id={client.id}/> </td>


                  </tr>
                  ))}
                </tbody>
            
             </Table>
              
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>      
                  <Col sm="12">

                  <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Email</th>
                    <th scope="col" />
                  </tr>
                </thead>
                {reparateurs.map((reparateur, index) => ( 
                <tbody>
                  <tr>
                    <td>{reparateur.nom}</td>
                    <td>{reparateur.email} </td>
                    <td><EditReparateur id={reparateur.id}/> </td>
                    <td><ActiveReparateur id={reparateur.id}/> </td>
                  </tr>
                </tbody>
                ))}
             </Table>
             
         </Col> 
         </Row>
          
        </TabPane>
      </TabContent>
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

export default Clients;
