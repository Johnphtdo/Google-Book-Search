import React, { Component } from "react";
import API from "../utils/API";
import axios from "axios";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


class Search extends Component {
    state = {
        books: []
    }



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };



    handleFormSubmit = event => {
        event.preventDefault();

        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.title)
            .then(response => {

                this.setState({
                    books: response.data.items.map(item => {
                        return {
                            title: item.volumeInfo.title,
                            authors: item.volumeInfo.authors,
                            description: item.volumeInfo.description,
                            image: item.volumeInfo.imageLinks.thumbnail,
                            link: item.volumeInfo.infoLink
                        }

                    })
                })
                console.log(this.state.books)
            })
    }

    handleSave = data => {
          API.saveBook({
            title: data.title,
            authors: data.authors,
            description: data.description,
            image: data.image,
            link: data.link
          })
            .catch(err => console.log(err));
        
      };


    render() {
        return (<Container fluid>
            <Row>
                <Col size = "lg-12">


            <form>
                <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Title (required)"
                />

                <FormBtn
                    onClick={this.handleFormSubmit}
                >
                    Search
                  </FormBtn>
            </form>
            </Col>
            </Row>
            <Row>
                <Col size = "lg-12">
            {this.state.books.length ? (
                <List>
                    {this.state.books.map((book, index) => (
                        <div>

                            <ListItem key={[index]}>
                                <FormBtn onClick = {() => this.handleSave(book)}>
                                    Save
                                </FormBtn>

                                <img src={book.image} alt = "The Book's Cover"/>
                                <strong><a href={book.link}>{book.title} by {book.authors}</a></strong>
                                <p>{book.description}</p>
                            </ListItem>

                        </div>
                    ))}
                </List>
            ) : (
                    <h3 style = {{textAlign:"center"}}>No Results. Please search for a book title.</h3>
                )}
                </Col>
                </Row>
        </Container>)
    }
}

export default Search;