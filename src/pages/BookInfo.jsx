import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/ui/Rating';

const BookInfo = ({ books}) => {
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                      <div className="books__selected--top">
                        <Link to="/books" className="book__link">
                        <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                        <Link to="/books" className="book__link">
                        <h2 className="book__selected--title--top">
                            Books
                        </h2>
                        </Link>
                      </div>
                      <figure className="book__selected">
                        <img src="https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg" alt="" className="book__selected--image" />
                      </figure>
                      <div className="book__selected--description">
                        <h2 className="book__selected--title">Crack the Code</h2>
                        <Rating rating="4.5" />
                        <div className="book__selected--price">
                            <Price orginalPrice={50} salePrice={20} />
                        </div>

                      </div> 
                    </div>
                </div>
            </main>
        </div>
    );
}
export default BookInfo;