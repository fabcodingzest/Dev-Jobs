import React from 'react';
import { ReactComponent as MoonIcon } from '../assets/desktop/icon-moon.svg';
import { ReactComponent as SunIcon } from '../assets/desktop/icon-sun.svg';
import { useDarkMode } from '../hooks/toggleMode';

const ModeSwitch = () => {
  const [isDark, setIsDark] = useDarkMode();
  return (
    <div className="flex justify-between items-center w-[5.6rem]">
      <SunIcon />
      <div>
        <input checked={isDark} onChange={(e) => setIsDark(e.target.checked)} type="checkbox" name="mode" id="toggle" className="hidden" />
        <label htmlFor="toggle">
          <div className="group cursor-pointer w-[2.8rem] h-[1.4rem] flex items-center bg-white rounded-full p-[0.4rem]">
            <div className="toggle-dot transform duration-300 ease-in-out w-[0.8rem] h-[0.8rem] bg-violet-dark group-hover:bg-violet-light rounded-full"></div>
          </div>
        </label>
      </div>
      <MoonIcon />
    </div>
  );
};

export default ModeSwitch;
