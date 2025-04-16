# Book Review Platform

A full-stack book review platform built using Node.js, Express, MongoDB, and React. Users can browse books, read and write reviews, and manage their profiles.

## Features
- User Authentication and Profile Management
- Book browsing and detailed information display
- Review creation and management for books
- Admin-only functionalities to add new books
- Pagination for books listing
- MongoDB Atlas for storing data

## Tech Stack
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose and MongoDB Atlas)
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: MongoDB Atlas (for the database), Heroku (for the backend, optional)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Database Schema](#database-schema)
- [Seeding Data](#seeding-data)
- [Contributing](#contributing)
- [License](#license)

## Installation

### 1. Clone the repository
Clone the repository to your local machine.

```bash
git clone https://github.com/your-username/book-review-platform.git
cd book-review-platform
```

### 2. Install Backend Dependencies
Navigate to the server directory and install the backend dependencies.

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies
Navigate to the client directory and install the frontend dependencies.

```bash
cd ../client
npm install
```

### 4. Set Up Environment Variables
Create a `.env` file in the `server` directory to store environment variables such as MongoDB URI and JWT secret key.

```txt
MONGODB_URI=your-mongodb-atlas-uri
JWT_SECRET=your-secret-key
PORT=5000
```

Make sure to replace `your-mongodb-atlas-uri` and `your-secret-key` with your actual values.

## Usage

### 1. Start the Backend
In the `server` directory, run:

```bash
npm run dev
```

This will start the backend server using `nodemon`, which will automatically restart the server on code changes.

### 2. Start the Frontend
In the `client` directory, run:

```bash
npm start
```

This will start the React development server and open the frontend in your default browser.

### 3. Access the Application
Once both servers are running:
- The frontend will be available at `http://localhost:3000`.
- The backend will be available at `http://localhost:5000`.

## API Endpoints

### Books
- **GET /books**: Get all books (supports pagination)
  - Query parameters: `page`, `limit`
  
- **GET /books/:id**: Get a specific book by ID
  
- **POST /books**: Admin-only route to add a new book

### Reviews
- **GET /reviews**: Get all reviews
  
- **POST /reviews**: Create a new review for a book

### Users
- **GET /users/:id**: Get a user profile
  
- **PUT /users/:id**: Update a user profile

## Folder Structure

```bash
book-review-platform
│
├── server/                       # Backend directory
│   ├── controllers/              # Controllers for handling requests
│   ├── models/                   # Mongoose models for database schema
│   ├── routes/                   # API routes for books, reviews, users
│   ├── middleware/               # Custom middleware (e.g., error handling)
│   ├── seed.js                   # Script to seed database with initial data
│   ├── .env                      # Environment variables
│   └── app.js                    # Main Express app configuration
│
├── client/                       # Frontend directory (React app)
│   ├── public/                   # Static files
│   ├── src/
│   │   ├── components/           # React components (BookCard, UserProfile, etc.)
│   │   ├── pages/                # React pages (Home, BookDetails, UserProfile)
│   │   ├── App.js                # Main React app component
│   │   └── index.js              # Entry point for React
│   └── .env                      # Frontend environment variables
│
└── README.md                     # Project documentation
```

## Database Schema

- **Books**: Contains information about the books (title, author, description, published date, cover image, genre).
- **Reviews**: Contains user reviews for books (rating, review text, bookId, userId).
- **Users**: Contains user profile data (username, email, password, profile picture).

## Seeding Data

To populate the database with sample data, run the `seed.js` script from the `server` directory.

1. Make sure your MongoDB Atlas cluster is connected and your environment variables are set.

2. From the `server` directory, run:

```bash
node seed.js
```

This will insert 20 sample books, reviews, and user profiles into your MongoDB database.

## Contributing

Contributions are welcome! If you have suggestions, fixes, or improvements, please feel free to fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes.
4. Commit your changes: `git commit -am 'Add new feature'`
5. Push to the branch: `git push origin feature-branch`
6. Submit a pull request.

