import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ReviewsListContainer from './ReviewsListContainer.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewData: {},
      reviews: [],
      totalReviews: 0,
      sort: 'relevant'
    }

    this.handleSort = this.handleSort.bind(this);
    this.retrieveReviewsAndData = this.retrieveReviewsAndData.bind(this);
    this.retrieveAllReviews = this.retrieveAllReviews.bind(this);
  }

  componentDidMount() {
    const {productId} = this.props;
    const {sort} = this.state;
    this.retrieveReviewsAndData(productId, sort);
  }

  handleSort(sort) {
    const {productId} = this.props;
    const {totalReviews} = this.state;

    this.retrieveAllReviews(productId, sort, totalReviews);
  }

  retrieveReviewsAndData(id, sort) {
    axios
      .get(`/reviewdata/${id}`)
      .then((response) => {
        const totalReviews = parseInt(response.data.recommended.false, 10) + parseInt(response.data.recommended.true, 10);
        this.setState({
          reviewData: response.data,
          totalReviews
        });
        this.retrieveAllReviews(id, sort, totalReviews);
      })
      .catch((error) => {
        console.log('Get review data failed...', error);
      })
  }

  retrieveAllReviews(id, sort, totalReviews) {
    axios
      .get(`/reviews/${id}/${sort}/${totalReviews}`)
      .then((response) => {
        this.setState({
          reviews: response.data.results
        });
      })
      .catch((error) => {
        console.log('Get all reviews failed...', error);
      })
  }

  render() {
    const {reviews, totalReviews} = this.state;

    return (
      <>
        {/* <RatingsContainer /> */}
        <ReviewsListContainer reviews={reviews} totalReviews={totalReviews} handleSort={this.handleSort} />
      </>
    )
  }
}

RatingsAndReviews.propTypes = {
  productId: PropTypes.number.isRequired
}

export default RatingsAndReviews;