import React from "react";

// Action Creator
import {userDescription} from  "../../action/index";

//REACT-REDUX AND REDUX-FORM
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

//Semantic-ui
import { Form, Message, Image, Header } from 'semantic-ui-react';

//Style-Component
import { Container, FormContainer, ImageContent } from "../styles/ProfileStyle";
import ProfileImg from "../images/profile.jpg";
class Profile extends React.Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
    
    renderBioField=(field)=>{
        console.log("rendering Bio");
        return(
            <Form.Input  fluid label="Bio"  type="text"  {...field.input} error={field.meta.touched ? field.meta.error : null}/>
        );
    }
    onSubmit(values){
        console.log("onSubmit",values);
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <Container>
                <Image src={ProfileImg}circular centered size="small"/>
                <ImageContent>Dhruv Sehgal</ImageContent>
                <FormContainer>
                    {/* <Message
                        warning header="Please fill the form carefully"
                    /> */}
                    <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                          <Field required name="bio" component={this.renderBioField}/>
                          <Form.Button color="black">Submit</Form.Button>
                    </Form>
                </FormContainer>
            </Container>
        )
    }
}
function validate(values){
    console.log(values.bio);
    const error ={}
    if(!values.bio){
        error.bio="Please enter a bio";
    }
    return error;
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({userDescription},dispatch);
}
export default reduxForm({
    validate:validate,
    form:"addUserDetails"
})(
    connect(null,mapDispatchToProps)(Profile)
);