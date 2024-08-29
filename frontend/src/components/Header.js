import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = ({ onAddCardClick }) => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Box flexGrow={1} sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: '1rem', md: '0' } }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem' },
            }}
          >
            Abstract | Help Center
          </Typography>
        </Box>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: { xs: 'center', md: 'flex-end' },
            alignItems: { xs: 'center', sm: 'inherit' },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#000', 
              color: '#fff', 
              mb: { xs: '0.5rem', sm: '0' },
              mr: { sm: '10px' },
              width: { xs: '90%', sm: 'auto' },
              '&:hover': { backgroundColor: '#333' }
            }}
            onClick={onAddCardClick}
          >
            Add Card
          </Button>
          <Button
            variant="contained"
            sx={{ 
              backgroundColor: '#000', 
              color: '#fff', 
              width: { xs: '90%', sm: 'auto' }, 
              '&:hover': { backgroundColor: '#333' }
            }}
          >
            Submit a request
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
