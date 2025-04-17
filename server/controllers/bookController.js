const Book = require('../models/Book');

exports.getAllBooks = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const books = await Book.find()
      .limit(limit * 1)
      .skip((page - 1) * limit);
    res.json(books);
  } catch (err) {
    next(err);
  }
};

exports.getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    next(err);
  }
};

exports.createBook = async (req, res, next) => {
  try {
    // Placeholder for admin check
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (err) {
    next(err);
  }
};
