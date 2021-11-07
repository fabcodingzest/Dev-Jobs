import React from 'react';
import { ReactComponent as Logo } from '../assets/desktop/logo.svg';
import ModeSwitch from './ModeSwitch';

const Header = () => {
  return (
    <div className="bg-violet-dark bg-header-desktop h-[6.8rem] md:h-[8.1rem] rounded-bl-[5rem]">
      <div className="px-[0.7rem] md:mx-auto md:max-w-[35.5rem] lg:max-w-[56.9rem]">
        <div className="pt-[1.6rem] md:pt-[2.1rem] flex justify-between">
          <Logo />
          <ModeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;
