import React, { Component } from 'react'
import { Links } from 'react-router-dom'
import PropTypes from 'prop-types'
import Books from './Books'
import * as BooksAPI from '../BooksAPI'

class BooksSearch extends Component {
  static PropTypes = {
    onChange: PropTypes.func.isRequired,
    searchBooks: PropTypes.array.isRequired
  }
  constructor(props){
    super(props)
    this.state = {
      books: [],
      query: ''
    }
  }
  render(){
    return(
      `hello ~more to add here`
    )
  }


}
export default BooksSearch;
