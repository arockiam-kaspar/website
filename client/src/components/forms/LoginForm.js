import React, { Component } from 'react';
import PropTypes from "prop-types";
import Validator from 'validator';
import { Alert, Button, Container, Form, FormGroup, Input, FormFeedback } from 'reactstrap';
import "../../styles/signup.css";

class SignupForm extends Component {
  state = {
    data:{
      email:'',
      password:'',
    },
    errors:{}
  };
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};

    const inputAll = Object.keys(data);
    for (let i = 0; i < inputAll.length; i += 1) {
      const field = inputAll[i];
      if (!data[field]) errors[field] = "Can't be blank";
    }
    if (!Validator.isEmpty(data.email)) {
      if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    }
    return errors;
  };
  render() {
    const { data, errors } = this.state;
    return (
      <section className="singup-container">
        <Container>
        {errors.global && <Alert color="danger">{errors.global}</Alert>}  
          <Form className="form-wrapper" onSubmit={this.onSubmit}>
            <FormGroup>
              <Input 
                type="email" 
                name="email" 
                id="email" 
                bsSize="lg" 
                placeholder="Email Address" 
                value={data.email}
                onChange={this.onChange}
                invalid={!!errors.email}
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Input 
                  type="password" 
                  name="password" 
                  id="password" 
                  bsSize="lg" 
                  placeholder="Password" 
                  value={data.password}
                  onChange={this.onChange}
                  invalid={!!errors.password}
                />
                <FormFeedback>{errors.password}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Button color="success" size="lg" block >Submit</Button>
            </FormGroup>  
          </Form>
        </Container>
      </section>
    )
  }
}

SignupForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignupForm;