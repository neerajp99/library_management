import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books'

class BooksShelf extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf:  PropTypes.func.isRequired
  }

  updateBooksDetails = (book, shelf) => {
  this.props.onChangeShelf(book, shelf)
  }

  render(){
    const { books, onChangeShelf } = this.props
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => (
              <Books book = { book }
              key = { index }
              onUpdate = {(shelf) => {
                this.updateBooksDetails(book, shelf)
              }}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BooksShelf;
