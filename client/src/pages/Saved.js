import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
        })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron>
          <h1>Your Saved Books</h1>
        </Jumbotron>
        <Row>
            <Col size ="lg-12">
        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <Link to={"/books/" + book._id}>
                  <img src={book.image} alt = "The Book's Cover"/>
                  <strong>
                    <a href={book.link}>
                      {book.title} by {book.authors}
                    </a>
                  </strong>
                  <p>{book.description}</p>
                </Link>
                <DeleteBtn onClick={() => this.deleteBook(book._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3 style = {{textAlign:"center"}}>No Saved Books to Display</h3>
        )}
        </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;