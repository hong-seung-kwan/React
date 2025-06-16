// 메뉴바를 포함하고 있는 헤더 만들기import Container from 'react-bootstrap/Container';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';

// 메뉴바 꾸미기
// styled component로 div 태그 생성

const HeaderDiv = styled.div`
/* 크기 */
width: 100%;
height: 100px;
background-color: white;
display: flex; /* 방향이 없으면 y축이 주축 */
align-items: center;
/* 그림자 효과 */
box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
`

const Header = () => {
  return (
    <HeaderDiv>
      {/* Navbar 컴포넌트 */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">login</Nav.Link>
              <Nav.Link href="/logout">logout</Nav.Link>
              <Nav.Link href="/register">register</Nav.Link>
              <Nav.Link href="/">home</Nav.Link>
              <Nav.Link href="/board/list">board</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderDiv>
  )
}

export default Header