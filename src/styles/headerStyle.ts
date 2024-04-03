import styled from "styled-components";
import { motion } from "framer-motion";

export const NavBar = styled(motion.nav)`
  width: 100%;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 0;
`;

export const Section = styled.div`
  display: flex;
  margin-left: 5rem;
`;

export const Logo = styled(motion.svg)`
  margin-right: 5rem;
  path {
    stroke: white;
    stroke-width: 0.5rem;
  }
`;

export const Contents = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

export const Content = styled.li`
  margin-right: 20px;
  font-size: 1.5rem;
  position: relative;
  a {
    text-decoration: none;
    color: white;
  }
`;

export const Search = styled.div`
  display: flex;
  margin-right: 5rem;
  position: relative;
`;

export const SearchForm = styled(motion.input)`
  width: 20rem;
  transform-origin: right center;
  position: absolute;
  top: 0;
  right: 5rem;
  height: 100%;
  border-radius: 1rem;
  border: none;
  background-color: ${(props) => props.theme.black.lighter};
  .closeForm {
    position: absolute;
  }
`;

export const Pointer = styled(motion.span)`
  position: absolute;
  bottom: -1rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.red};
`;
