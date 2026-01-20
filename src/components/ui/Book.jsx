import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Price from './Price';
import Rating from './Rating';

const Book = ({ book }) => {
    const [img, setImg] = useState(false);

    useEffect(() => {
        console.log("Starting to load:", book.url);
        let isMounted = true;
        const image = new Image();
        image.src = book.url;
        
        // Timeout fallback - show content after 3 seconds regardless
        const timeout = setTimeout(() => {
            console.log("Timeout reached, showing content anyway");
            if (isMounted) {
                setImg(true);
            }
        }, 3000);
        
        image.onload = () => {
            console.log("Image loaded successfully:", book.url);
            clearTimeout(timeout);
            if (isMounted) {
                console.log("Setting img to true");
                setImg(true); 
            }
        };
        
        image.onerror = () => {
            console.error("Failed to load image:", book.url);
            clearTimeout(timeout);
            if (isMounted) {
                setImg(true);
            }
        };
        
        return () => {
            console.log("Cleanup running for:", book.url);
            isMounted = false;
            clearTimeout(timeout);
        };
    }, [book.url]);

    return (
        <div className="book">
            {img ? (
                <>
                    <Link to={`/books/${book.id}`}>
                        <figure className="book__img--wrapper">
                            <img src={book.url} alt="" className="book__img" />
                        </figure>
                    </Link>
                    <div className="book__title">
                        <Link to={`/books/${book.id}`} className="book__title--link">
                            {book.title}
                        </Link>
                    </div>
                    <Rating rating={book.rating} />
                    <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                </>
            ) : (
                <>
                    <div className="book__img--skeleton"></div>
                    <div className="skeleton book__title--skeleton"></div>
                    <div className="skeleton book__rating--skeleton"></div>
                    <div className="skeleton book__price--skeleton"></div>
                </>
            )}
        </div>
    );
}

export default Book;