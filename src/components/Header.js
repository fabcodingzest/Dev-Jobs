import React from 'react';
import { ReactComponent as Logo } from '../assets/desktop/logo.svg';
import ModeSwitch from './ModeSwitch';

const Header = () => {
  return (
    <div className="bg-violet-dark bg-header-desktop h-[8.1rem] rounded-bl-[5rem]">
      <div className="mx-auto max-w-[55.5rem]">
        <div className="pt-[2.1rem] flex justify-between">
          <Logo />
          <ModeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;
