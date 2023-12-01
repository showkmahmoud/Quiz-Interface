import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import styles from './Nav.module.css';

const NavComp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();
  const isActiveLink = (path:string)=>{
    return location.pathname === path
  }
  return (
    <div className={styles.nav_comp}>
    <Navbar color="light" light  expand="md" className="py-0">
      <Container className="d-lg-flex">
        <Link className={styles.logo+ ' text-capitalize '} to="/">quizzes</Link>
        <NavbarToggler className={styles.toggle_btn } onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={'mx-auto d-flex justify-content-between' + styles.nav_items_wrapper} navbar>
            <NavItem className= {isActiveLink('/') ? styles.active : styles.nav_item}>
              <Link to="/">Home</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default NavComp