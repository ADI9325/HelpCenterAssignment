import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box } from '@mui/material';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';
import Header from '../components/Header';
import AddCardOverlay from '../components/AddCardOverlay';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function HelpCenter() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/api/cards')
      .then(response => {
        setCards(response.data);
        setFilteredCards(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = cards.filter(card => 
      card.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredCards(filtered);
  };

  const handleAddCard = (newCard) => {
    setCards([...cards, newCard]);
    setFilteredCards([...cards, newCard]);
    toast.success('Card added successfully!');
    setShowOverlay(false);
  };

  return (
    <div>
      <Header onAddCardClick={() => setShowOverlay(true)} />
      <Box sx={{ backgroundColor: '#E0E0F8', padding: { xs: '1rem 0', md: '2rem 0' } }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={4}>
            <h1 style={{ fontSize: '2rem', margin: '0 0 1rem' }}>How can we help?</h1>
            <SearchBar onSearch={handleSearch} />
          </Box>
        </Container>
      </Box>
      <Container 
        maxWidth="lg" 
        sx={{ 
          mt: '3rem',
          px: { xs: '1rem', md: '2rem' }, 
        }}
      > 
        <CardList cards={filteredCards} />
      </Container>
      {showOverlay && <AddCardOverlay onClose={() => setShowOverlay(false)} onAddCard={handleAddCard} />}
      <ToastContainer />
    </div>
  );
}

export default HelpCenter;
