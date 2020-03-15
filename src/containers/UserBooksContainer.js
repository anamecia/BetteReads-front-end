import React from 'react'

import Book from '../components/UsersBook'

const UserBooksContainer = ({readBooks, wantToReadBooks, currentlyReadingBooks }) => {

    
    return (
        <div className='books-main-container'>
            <h3> Currently Reading </h3>
            <div className='books-container'>
                {currentlyReadingBooks.map(book => <Book book={book.book} readingId={book.readingId} key={book.book.id} status={'Currently Reading'}/>)}
            </div>
            <h3> Want To Read </h3>
            <div className='books-container'>
                {wantToReadBooks.map(book => <Book book={book.book} readingId={book.readingId} key={book.book.id} status={'Want to read'}/>)}
            </div>
            <h3> Read </h3>
            <div className='books-container'>
                {readBooks.map(book => <Book book={book.book} readingId={book.readingId} key={book.book.id} status={'Read'}/>)}
            </div>
        </div>
    )
}

export default UserBooksContainer