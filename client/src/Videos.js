import React from "react";
import YouTube from "react-youtube";
import { Container, Row, Col } from "react-bootstrap";

/*
video needs to reset to opening screen
These can maybe be moved to a data read in file and loop over it

*/

function Videos() {
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  function _onEnd(event) {
    event.target.restartVideo();
  }

  return (
    <div>
      <h1 className="mb-4">Videos</h1>
      <Container fluid>
        <Row className="video-container mb-5">
          <Col>
            <YouTube
              videoId="85lqRYmlrjo"
              id="hootenany-video"
              opts={opts}
              //   onEnd={this._onEnd}
            />
            <p className="caption">Hootenany - Hoots and Hillbillies</p>
          </Col>
        </Row>
        <Row className="video-container mb-5">
          <Col>
            <YouTube
              videoId="MpDMgW1gQ1s"
              id="hootenany-video"
              opts={opts}
              //   onEnd={this._onEnd}
            />
            <p className="caption">Party NYC - PG Version</p>
          </Col>
        </Row>
        <Row className="video-container mb-5">
          <Col>
            <YouTube
              videoId="2qDD9zZ6bqY"
              id="hootenany-video"
              opts={opts}
              //   onEnd={this._onEnd}
            />
            <p className="caption">
              Party NYC - R Version NOT Endorsed by Official Hoots
            </p>
          </Col>
        </Row>
        <Row className="video-container mb-5">
          <Col>
            <YouTube
              videoId="7oDhV9KEb7c"
              id="hootenany-video"
              opts={opts}
              //   onEnd={this._onEnd}
            />
            <p className="caption">
              Hoot Breeding - Rated X NOT Endorsed by Official Hoots
            </p>
          </Col>
        </Row>
        <Row className="video-container mb-5">
          <Col>
            <YouTube
              videoId="qMsN-11XaHg"
              id="hootenany-video"
              opts={opts}
              //   onEnd={this._onEnd}
            />
            <p className="caption">The Life and Death of 1642</p>
          </Col>
        </Row>
        <Row className="video-container mb-5">
          <Col>
            <YouTube
              videoId="G2wcq1BePNw"
              id="hootenany-video"
              opts={opts}
              //   onEnd={this._onEnd}
            />
            <p className="caption">Hooty Kong - Not an actual game</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Videos;
