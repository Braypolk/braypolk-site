import React, { useEffect, useState } from "react";
import { Icon } from '@iconify-icon/react';

export default function Toggle() {
  const [colorScheme, setColorScheme] = useState('light');

  useEffect(() => {
    console.log('colorScheme', colorScheme);
    const savedScheme = localStorage.getItem('colorScheme');
    console.log('savedScheme', savedScheme);

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialScheme = savedScheme || (prefersDarkScheme ? 'dark' : 'light');
    console.log('initialScheme', initialScheme);

    setColorScheme(initialScheme);
    document.body.dataset.scheme = initialScheme;
    if (initialScheme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, []);

  const toggleColorScheme = () => {
    console.log('toggle color scheme');
    const newScheme = colorScheme === 'dark' ? 'light' : 'dark';
    setColorScheme(newScheme);
    document.body.dataset.scheme = newScheme;
    localStorage.setItem('colorScheme', newScheme);

    if (newScheme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  };
  return (
    <label >
      <input onClick={toggleColorScheme} className='toggle-checkbox' type='checkbox' defaultChecked={colorScheme === 'dark' ? true : false}></input>
      <div className='toggle-slot'>
        <div className='sun-icon-wrapper'>
          <Icon className="iconify sun-icon" icon="feather:sun" />
        </div>
        <div className='toggle-button'></div>
        <div className='moon-icon-wrapper'>
          <Icon className="iconify moon-icon" icon="feather:moon" />
        </div>
      </div>
    </label>
  )
}
