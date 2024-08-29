# Frontend Documentation

This document provides an overview of the various components used in the frontend of the application.

## Components

### 1. AddCardOverlay

**File**: `AddCardOverlay.jsx`

This component renders an overlay that allows users to add a new card. It includes a form with two text fields for the card's title and description, and buttons to submit or cancel the action.

#### Props
- `onClose`: Function to be called when the overlay is closed.
- `onAddCard`: Function to be called when a new card is added.

#### Key Features
- Uses Material-UI components such as `Box`, `TextField`, `Button`, `Paper`, `Typography`, and `Fade` for styling.
- Submits new card data to the server using `axios`.

#### Code Snippet
```jsx
const handleSubmit = () => {
  const newCard = { title, description };
  axios.post('http://localhost:3000/api/cards', newCard, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    onAddCard(newCard);
  })
  .catch(error => {
    console.error('Error adding card:', error);
  });
};
