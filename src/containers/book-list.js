// renders a list of books
import React, { Component } from 'react';
import { connect } from 'react-redux'; // glue between react and redux
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li key={book.title} onClick={() => this.props.selectBook(book)} className="list-group-item">{book.title}</li>
    ));
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatver is returned will show up as props inside of BookList
  return {
    books: state.books,
  };
}

// Anything returned from this function will end up as props on the booklist container
function mapDispatchToProps(dispatch) {
  // whenever select book is called result should be passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. <make it available
// connect takes a function and a component and produces a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
