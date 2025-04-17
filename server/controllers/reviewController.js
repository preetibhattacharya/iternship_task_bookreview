const Review = require('../models/Review');

exports.getReviews = async (req, res, next) => {
  try {
    const { bookId } = req.query;
    const reviews = await Review.find({ bookId }).populate('userId', 'name');
    res.json(reviews);
  } catch (err) {
    next(err);
  }
};

exports.createReview = async (req, res, next) => {
  try {
    const newReview = new Review(req.body);
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    next(err);
  }
};
