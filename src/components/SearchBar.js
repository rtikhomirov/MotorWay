import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Container, Button, InputGroupAddon} from 'reactstrap';
import InputGroup from "reactstrap/es/InputGroup";

class SearchBar extends Component {

    state = {
        term : ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <Container className="themed-container">
                <Form onSubmit={this.onFormSubmit}>
                    <FormGroup>
                        <Label>Type something you want to find and press "Search" button</Label>
                        <InputGroup>
                            <Input
                                type="text"
                                value={this.state.term}
                                onChange={(e) => this.setState({term : e.target.value})}
                            />
                            <InputGroupAddon addonType="append">
                                <Button>Search</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </Container>
        );
    }
}

export default SearchBar;