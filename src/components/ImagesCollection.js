import React, {Component} from 'react';
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import {Container} from "reactstrap";

class ImagesCollection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: []
        }
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            },
        });

        //console.log(response.data.results);
        this.setState({
            images: response.data.results
        })
    };

    render() {
        return (
            <Container className="themed-container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </Container>
        );
    }
}

export default ImagesCollection;