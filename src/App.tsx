import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';
import Map from './components/map/Map';

function App() {

  // const [locations, setLocations] = useState<any[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function load() {
  //     try {
  //       const data = await fetchLocations();
  //       setLocations(data);
  //     } catch (error) {
  //       console.error('Error fetching:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   load();
  // }, []);

  return (
    <div className="App d-flex flex-column min-vh-100 bg-light">
      <NavBar />
      <Container fluid className="flex-grow-1 d-flex flex-column my-3">
        <Row className="flex-grow-1">
          <Col md={4} lg={3} className="order-2 order-md-1 mb-4 mb-md-0">
            <Sidebar />
          </Col>
          <Col md={8} lg={9} className="order-1 order-md-2 mb-4 mb-md-0">
            <Map />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
