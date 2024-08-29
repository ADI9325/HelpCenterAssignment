import React from 'react';
import Grid from '@mui/material/Grid';
import Card from './Card';

function CardList({ cards }) {
  return (
    <Grid container spacing={4}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card title={card.title} description={card.description} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CardList;
