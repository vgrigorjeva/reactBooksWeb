import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from '../reducers/reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
