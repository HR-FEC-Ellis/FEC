import React from 'react';
import PropTypes from 'prop-types';

const DescriptionBanner = (props) => {
  // selectProductName={selectProductInfo.name} viaOvC
  const { selectProductInfo } = props;
  return (
    <div className="descriptionBanner">
      <div id="descriptionAreaLeft">
        <h4>{selectProductInfo.slogan}</h4>
        <p>{selectProductInfo.description}</p>
        {/* <p>{selectProductInfo.overview}</p> */}
        {/* Business Requirements Document (page5): Product Overview: This free form text field may exist on some items. If it is available it should be displayed. */}
      </div>
      <div id="hrVertical">
        <hr />
      </div>
      <div id="descriptionAreaRight">
        <ul>
          {/* {selectProductInfo.features.map(item => {
            <li key={item.feature} className="checkIt">
              <h3>✓</h3>
              <span>{item.feature}</span>
            </li>
          })} */}
        </ul>
      </div>
    </div>
  );
}

DescriptionBanner.propTypes = {
  selectProductInfo: PropTypes.shape({
    "id": PropTypes.number,
    "campus": PropTypes.string,
    "name": PropTypes.string,
    "slogan": PropTypes.string,
    "description": PropTypes.string,
    "category": PropTypes.string,
    "default_price": PropTypes.string,
    "created_at": PropTypes.string,
    "updated_at": PropTypes.string
  }).isRequired
}

export default DescriptionBanner;
