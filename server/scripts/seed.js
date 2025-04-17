const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Book = require('./models/Book');
const User = require('./models/User');
const Review = require('./models/Review');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error(err));

async function seedDatabase() {
  await Book.deleteMany({});
  await User.deleteMany({});
  await Review.deleteMany({});

  const users = await User.insertMany([
    { name: 'Alice Johnson', email: 'alice@example.com', password: 'pass123' },
    { name: 'Bob Smith', email: 'bob@example.com', password: 'pass123' },
    // add more users...
  ]);

  const books = await Book.insertMany([
    { title: '1984', author: 'George Orwell', description: 'Dystopian classic', genre: 'Fiction', rating: 4.8, publishedYear: 1949 },
    { title: 'Atomic Habits', author: 'James Clear', description: 'Guide to habits', genre: 'Self-help', rating: 4.7, publishedYear: 2018 },
    // add more books...
  ]);

  const reviews = [
    {
      book: books[0]._id,
      user: users[0]._id,
      reviewText: 'Incredible and terrifying at once.',
      rating: 5
    },
    {
      book: books[1]._id,
      user: users[1]._id,
      reviewText: 'Really helped me form new habits.',
      rating: 4
    },
    // add more reviews...
  ];

  await Review.insertMany(reviews);

  console.log('Database seeded!');
  mongoose.disconnect();
}

seedDatabase();
