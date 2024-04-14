import React from "react";
import { Button, Offcanvas } from "react-bootstrap";

function OffcanvasComponent() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        type="button"
        onClick={handleShow}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        Enable both scrolling & backdrop
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={true}
        placement="start"
        backdrop={true}
        target="#offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffcanvasComponent;
