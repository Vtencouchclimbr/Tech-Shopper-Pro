# Tech Shopper Pro E-Commerce Application
## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [API Endpoints](#api-endpoints)
6. [Authentication](#authentication)
7. [Wishlist and Cart Functionality](#wishlist-and-cart-functionality)
8. [Troubleshooting](#troubleshooting)
9. [Future Improvements](#future-improvements)
10. [Contributors](#contributors)
## Project Overview
**Tech Shopper Pro** is a full-stack e-commerce application that allows users to browse products, add items to a shopping cart, and proceed to checkout. It also includes a wishlist feature accessible through an off-canvas layout. Users can register and log in using JWT-based authentication, ensuring secure sessions and smooth interactions.
## Features
- **Product Listing**: View detailed product information fetched from an external API.
- **Cart Functionality**: Add items to the cart, remove them, and proceed to checkout.
- **Wishlist**: Save items for later using the wishlist, accessible via an off-canvas component.
- **JWT Authentication**: Secure user login and registration using JWT tokens.
- **Address Autocomplete**: Enhance the checkout experience with address autocomplete using an external address API.
## Technologies Used
- **Frontend**:
  - React (with hooks)
  - TypeScript
  - React Router
  - Bootstrap for UI components
- **Backend**:
  - Node.js (Express)
  - PostgreSQL (for user management)
  - JWT for authentication
  - dotenv for managing environment variables
- **APIs**:
  - Product API: `https://api.escuelajs.co/api/v1`
  - Address Autocomplete API: `https://api.geocodify.com/v2`
- **Others**:
  - Local Storage for maintaining cart persistence
## Setup Instructions
### Prerequisites
- Node.js installed (v14+)
- PostgreSQL database set up for user data
- API keys for the product and address APIs
### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tech-shopper-pro.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tech-shopper-pro
   ```
3. Install dependencies for both client and server:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in both the client and server directories.
   - Add the following keys:
     ```
     # Server-side
     JWT_SECRET_KEY=your_jwt_secret_key
     API_BASE_URL=https://api.escuelajs.co/api/v1
     # Client-side
     VITE_APP_LOCATION_API_KEY=your_geocodify_api_key
     ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Navigate to `http://localhost:3000` to see the app running.
### Database Setup
Ensure you have PostgreSQL installed and running. You’ll need to set up a users table for managing user registration and login:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```
## API Endpoints
### Backend API Endpoints
- **POST** `/auth/register`: Register a new user.
- **POST** `/auth/login`: Log in a user and return a JWT.
- **GET** `/products`: Fetch all products from the external API.
- **GET** `/products/:id`: Fetch product details by ID.
### Frontend API Integration
- **Product API**:
  - Base URL: `https://api.escuelajs.co/api/v1`
  - Endpoints used:
    - `/products`
    - `/products/:id`
- **Address Autocomplete API**:
  - Base URL: `https://api.geocodify.com/v2`
  - Endpoint used:
    - `/autocomplete`
## Authentication
**JWT Authentication** is handled via `auth-routes.js`. When users register or log in, a JWT is generated and stored in the browser’s local storage. The token is included in all requests that require authentication.
- **Logged-in State**: The `AuthService` handles checking the logged-in state, token expiration, and managing login/logout.
## Wishlist and Cart Functionality
- **Wishlist**: Items are added and removed from the wishlist using the `WishlistProvider`. The wishlist is rendered off-canvas, allowing users to access it from any page.
- **Cart**: The cart uses local storage to persist between sessions. Items can be moved from the cart to the wishlist.
## Troubleshooting
- **Image Not Displaying in Wishlist**: Ensure that the image URL is properly fetched from the API and passed down to the wishlist.
- **JWT Not Working**: Check that the secret key is correctly set in the `.env` file, and that tokens are being stored and decoded properly.
- **Address Autocomplete Not Functioning**: Ensure the correct API key is being used, and the API is returning suggestions as expected.
## Future Improvements
- **Search Feature**: Implement a search bar to allow users to search for products by name or category.
- **Payment Gateway**: Integrate a payment gateway (e.g., Stripe) to handle transactions.
- **User Profile**: Add a user profile section where users can view their order history and saved addresses.
- **Product Reviews**: Enable users to leave reviews for products they’ve purchased.
## Contributors
We would like to thank the following contributors for their efforts and contributions to this project:
- [Jesse Anderson](https://github.com/Vtencouchclimbr)
- [Joseph Norris](https://github.com/yoseph1618)
- [Victor Roman](https://github.com/Romantech91)

If you would like to contribute, please feel free to submit a pull request or open an issue.