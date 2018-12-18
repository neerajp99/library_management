import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BooksShelf from './BooksShelf'

class BooksList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
  render(){
    const { books, onChange } = this.props
    return(
      <div className = "list-books">
        <div className = "list-books-title">
          <h1> MyReads App</h1>
        </div>
        <div className = "list-books-contact">
          <div className = "list-books-content-shelves">
            <BooksShelf books = { books.filter((book) => (book.shelf === "currentlyReading"))}
              title = "Currently Reading"
              onChangeShelf = { onChange }
            />
            <BooksShelf books = { books.filter((book) => (book.shelf === "read"))}
              title = "Read"
              onChangeShelf = { onChange }
            />
            <BooksShelf books = { books.filter((book) => (book.shelf === "wantToRead"))}
              title = "Want To Read"
              onChangeShelf = { onChange }
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'
          className = "list-books-search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default BooksList;
