import React, { Component } from 'react'

import Book from './Book'

const SearchedBooksContainer = ({books, username}) => {

    return (
        <div className="ui divided three column grid">
           {books.map(book => <Book book={book} key={book.id} username={username}/>)}
        </div>
    )
}

export default SearchedBooksContainer