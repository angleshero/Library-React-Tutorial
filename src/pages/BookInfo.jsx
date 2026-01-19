import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/ui/Rating';
import Price from '../components/ui/Price';
import Book from '../components/ui/Book';
import { useState } from 'react';

const BookInfo = ({ books, cart, addToCart}) => {
    const { id } = useParams();
    const book = books.find((book) => +book.id === +id);
    const[added, setAdded] = React.useState(false);

    function addBookToCart(book) {
          addToCart(book);
    }   

    function bookExistsInCart() {
        return cart.some(item => item.id === +id)
    }


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
                        <img src={book.url} alt="" className="book__selected--img" />
                      </figure>
                      <div className="book__selected--description">
                        <h2 className="book__selected--title">{book.title}</h2>
                        <Rating rating={book.rating} />
                        <div className="book__selected--price">
                            <Price orginalPrice={book.originalPrice} salePrice={book.salePrice} />
                        </div>
                        <div className="book__summary">
                            <h3 className="book__summary--title">
                                Summary
                            </h3>
                            <p className="book__summary--para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure laborum est? Amet dolorum reiciendis ad ipsum voluptates laudantium saepe cumque, molestias esse. Cum, ea doloremque perferendis optio quia quae.
                            </p>
                            <p className="book__summary--para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure laborum est? Amet dolorum reiciendis ad ipsum voluptates laudantium saepe cumque, molestias esse. Cum, ea doloremque perferendis optio quia quae.
                            </p>
                          
                        </div>
                        {bookExistsInCart() ? (
                            <Link to={`/cart`} className="book__link">
                            <button className="btn">Checkout</button>
                            </Link>
                        ) : (
                            <button className="btn" onClick={() => {addBookToCart(book); setAdded(true);}}>
                                {added ? "Added to Cart" : "Add to Cart"}
                            </button>
                        )}
                                
                      </div> 
                      
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                        {
                            books
                            .filter(book => book.rating === 5 && +book.id !== +id)
                            .slice(0, 4)
                            .map((book => <Book book={book} key={book.id} />))
                        }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
export default BookInfo;