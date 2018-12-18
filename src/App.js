import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import BooksList from './components/BooksList'
import BooksSearch from './components/BooksSearch'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      books: []
    }
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  update_books = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.componentDidMount()
    })
  }

  render() {
    return(
      <div className = "app">
      <Route exact path="/" render={() => (
        <BooksList books={this.state.books}
        onChange={this.update_books}/>
      )}/>
      <Route exact path="/search" render={({history}) => (
          <BooksSearch onChange={this.update_books}
            searchBooks={this.state.books}/>
        )}/>
      </div>
    )
  }
}



export default App;
