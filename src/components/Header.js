import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/desktop/logo.svg';
import Container from './Container';
import ModeSwitch from './ModeSwitch';

const Header = () => {
  return (
    <div className="focus:ring focus:ring-violet-light bg-violet-dark bg-header-desktop h-[6.8rem] md:h-[8.1rem] md:rounded-bl-[5rem]">
      <Container>
        <div className="pt-[1.6rem] md:pt-[2.1rem] flex justify-between">
          <Link to="../">
            <Logo className="focus:ring focus:ring-violet-light" />
          </Link>
          <ModeSwitch />
        </div>
      </Container>
    </div>
  );
};

export default Header;
