import React, { useContext } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';  // Sun and moon icons
import { ThemeContext } from '../context/ThemeContext';  // Import ThemeContext

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div style={{ position: 'fixed', top: 10, right: 10 }}>
      <Tooltip title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
        <IconButton onClick={toggleDarkMode} color="inherit">
          {darkMode ? <Brightness7 /> : <Brightness4 />}  {/* Sun for light mode, moon for dark mode */}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default DarkModeToggle;
