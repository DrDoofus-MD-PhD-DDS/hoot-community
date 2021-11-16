import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import hootsHollow from "./images/hootsHollow.png";
import Videos from "./Videos";
import Degen from "./Degen";
import Art from "./Art";
import "./App.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <img src={hootsHollow} className="App-logo" alt="Hoots' Hollow logo" />
        <div>Unofficial CryptoHoots Community Page</div>
      </header>
      <Container fluid className="main mt-5">
        {/* the cols are not defaulting nicely when screen size
changes */}

        <Row>
          <Col>
            <Videos />
          </Col>
          <Col>
            <Art />
          </Col>
          <Col>
            <Degen />
          </Col>
        </Row>
      </Container>
      <footer></footer>
      <div className="credits">Created by Dr Doofus, MD JDS PhD EDS MBA</div>
    </div>
  );
}

export default App;
