import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography, Fade } from '@mui/material';
import axios from 'axios';

function AddCardOverlay({ onClose, onAddCard }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    const newCard = { title, description };

    // Submit the card to the server
    axios.post('https://helpcenterbackend-wnv9.onrender.com/api/cards', newCard, {
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      onAddCard(newCard);
    })
    .catch(error => {
      console.error('Error adding card:', error);
    });
  };

  return (
    <Fade in={true}>
      <Box 
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }}
        onClick={onClose}
      >
        <Paper 
          sx={{ 
            padding: '2rem', 
            width: '400px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            boxShadow: 24
          }}
          onClick={(e) => e.stopPropagation()} // Prevent closing on click inside
        >
          <Typography variant="h6" mb={2}>
            Add New Card
          </Typography>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ marginBottom: '1rem' }}
          />
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ marginBottom: '1rem' }}
          />
          <Box display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              variant="contained" 
              onClick={handleSubmit} 
              sx={{ backgroundColor: '#000', color: '#fff', '&:hover': { backgroundColor: '#333' } }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Box>
    </Fade>
  );
}

export default AddCardOverlay;
