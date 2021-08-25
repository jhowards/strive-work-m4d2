import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Card } from 'react-bootstrap';
import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge';
import SingleBook from './components/SingleBook';
import BookList from './components/BookList';

const bookdetails = {title: "Nightchaser", cover: "https://images-na.ssl-images-amazon.com/images/I/514%2BSppz8AL.jpg"}

function App() {
  return (
    <div className="App">
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
      </Navbar>
      <WarningSign text="Alert! This is working as intended!" />
      <MyBadge text="My Badge" color="primary"/>
      <div className="d-flex">
        <SingleBook {...bookdetails} />
        
    </div>
    <BookList />
    </div>
  );
}

export default App;
