import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

function Card({ title, description }) {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        padding: '1rem', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        backgroundColor: '#fff',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Typography 
        variant="h6" 
        component="h3" 
        sx={{ 
          fontWeight: 'bold', 
          marginBottom: '0.5rem',
          fontSize: { xs: '1rem', md: '1.25rem' }
        }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ 
          fontSize: { xs: '0.9rem', md: '1rem' }, 
          color: 'text.secondary',
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
}

export default Card;
