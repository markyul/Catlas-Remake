// https://www.youtube.com/watch?v=-HEjsVkfjOk : bootstrap Navbar 설명 영상

import { Navbar, Nav, Button } from "react-bootstrap";

import "./Header.css";

export default function Header() {
  return (
    <Navbar
      bg="Navbar"
      sticky="top"
      variant="light"
      expand="lg"
      collapseOnSelect
    >
      <Navbar.Brand href="/">Catlas</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link href="/departmentIntro/main">학과소개</Nav.Link>
          <Nav.Link href="/community/main">게시판</Nav.Link>
          <Nav.Link href="/education/main">교육</Nav.Link>
          <Nav.Link href="/schedule">학사일정</Nav.Link>
        </Nav>
        <Nav>
          <Button>Sign In</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
