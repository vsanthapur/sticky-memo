import React from 'react';
import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'lightseagreen',
        color: '#FFFFFF',
        position: 'fixed',
        bottom: 0,
        left: 0,
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
        fontSize: '0.9em',
      }}
    >
      {/* The typography element allows to render texts */}
      <Typography variant="body2" sx={{ display: 'inline' }}>
        &#169; 2024 Open-Source Project -
      </Typography>
      
      {/* The link element is used to create styled links. */}
      <Link
        href="https://www.github.com/narainkarthikv/Sticky-Memo"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: '#8B0000',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginLeft: '5px',
          transition: 'color 0.3s ease',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        GitHub Repository
      </Link>
      
      <Typography variant="body2" sx={{ display: 'inline', ml: 0.5 }}>
        Developed By
      </Typography>

      <Link
        href="https://www.github.com/narainkarthikv"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: '#8B0000',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginLeft: '5px',
          transition: 'color 0.3s ease',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        Wisdom Fox Community
      </Link>
    </Box>
  );
}

export default Footer;
