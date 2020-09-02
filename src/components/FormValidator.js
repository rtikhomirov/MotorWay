import React, {Component} from 'react';
import {Form, FormGroup, Col, FormFeedback, Label, Input, Button} from 'reactstrap';

class FormValidator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSendButtonEnabled: false,
            firstName: '',
            email: '',
            birthDate: '',
            color: '',
            salary: 0,
            touched: {
                firstName: false,
                email: false,
                birthDate: false
            }
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Current State is: ' + JSON.stringify(this.state));
        /*
        * This is a place all the data from user is going to be sent to server
        * */
        this.clearFormInputs();
    };

    clearFormInputs = () => {
        this.setState({
            firstName: '',
            email: '',
            birthDate: '',
            salary: 0,
            touched: {
                firstName: false,
                email: false,
                birthDate: false
            }
        });
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    };

    validate = (firstName, email, birthDate) => {
        const errors = {
            firstName: '',
            email: '',
            birthDate: ''
        };

        if (this.state.touched.firstName && firstName.length < 2)
            errors.firstName = 'First Name should be > 2 characters';
        else if (this.state.touched.firstName && firstName.length > 10)
            errors.firstName = 'First Name should be <= 10 characters';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        let date_regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
        if (this.state.birthDate && !(date_regex.test(birthDate))) {
            errors.birthDate = "Date is invalid and doesn't satisfy MM/DD/YYYY format";
        }

        /*let color_regex = /^#[0-9A-F]{6}$/i;
        if (this.state.touched.color && !(color_regex.test(color))) {
            errors.color = "Color is invalid and doesn't satisfy #AABBCC format";
        }*/
        return errors;
    };


    render() {
        const errors = this.validate(this.state.firstName, this.state.email, this.state.birthDate);

        return (
            <div className="col-6 p-4 mx-auto">
                <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                    <FormGroup row>
                        <Label md={3} for="firstName">First name</Label>
                        <Col md={9}>
                            <Input type="text" id="firstName" name="firstName"
                                   model=".firstName"
                                   value={this.state.firstName}
                                   invalid={errors.firstName !== ''}
                                   onBlur={this.handleBlur('firstName')}
                                   onChange={this.handleInputChange} />
                            <FormFeedback>{errors.firstName}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={3} for="email">E-mail</Label>
                        <Col md={9}>
                            <Input type="email" id="email" name="email"
                                   value={this.state.email}
                                   invalid={errors.email !== ''}
                                   onBlur={this.handleBlur('email')}
                                   onChange={this.handleInputChange} />
                            <FormFeedback>{errors.email}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={3} for="birthDate">Birth date</Label>
                        <Col md={9}>
                            <Input type="date" id="birthDate" name="birthDate"
                                   model=".birthDate"
                                   pattern="\d{2}-\d{2}-\d{4}"
                                   value={this.state.birthDate}
                                   invalid={errors.birthDate !== ''}
                                   onBlur={this.handleBlur('birthDate')}
                                   onChange={this.handleInputChange} />
                            <FormFeedback>{errors.birthDate}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={3} for="colorInput">Favourite color</Label>
                        <Col md={9}>
                            <Input type="color" id="colorInput"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={3} for="salaryRange">Salary range</Label>
                        <Col md={9}>
                            <Input type="range" id="salaryRange" size="2" name="salary" min="0" max="5000"
                                   step='100'
                                   value={this.state.salary}
                                   list="tickList"
                                   onChange={this.handleInputChange}>
                            </Input>
                            <span id="output">{this.state.salary}</span>
                        </Col>
                    </FormGroup>
                    <Button type="submit" color="secondary" className='mx-auto' style={{width : '100%'}} disabled={!this.state.isSendButtonEnabled}>
                        Send
                    </Button>
                </Form>
            </div>
        );
    }
}

export default FormValidator;