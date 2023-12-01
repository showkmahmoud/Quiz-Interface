/**
 * represent the navbar component
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import styles from "./Nav.module.css";
import { navBarItems } from "../../shared/static data/navbarItems";
import { INavItem } from "../../shared/interfaces/navItem";

interface INavProps {
}

const NavComp : React.FC<INavProps> = () => {
  // declare the isOpen state to use with the toggle btn
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={styles.nav_comp}>
      <Navbar color="light" light expand="md" className="py-0">
        <Container className="d-lg-flex">
          <Link className={styles.logo + " text-capitalize "} to="/">
            quizzes
          </Link>
          <NavbarToggler className={styles.toggle_btn} onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav
              className={
                "mx-auto d-flex justify-content-between" +
                styles.nav_items_wrapper
              }
              navbar
            >
              {
              // array from static data used if you want add a new item
              navBarItems.map((item: INavItem, index: number) => {
                return (
                  <NavItem key={index} className={styles.nav_item}>
                    <Link to="/">{item.title}</Link>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavComp;
