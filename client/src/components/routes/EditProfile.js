import React from "react";

// Action Creator
import { saveUserData } from "../../action/index";

//REACT-REDUX AND REDUX-FORM
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

//Semantic-ui
import { Form, Image } from 'semantic-ui-react';

//Style-Component
import { Container, FormContainer, ImageContent, FormHeader, Header } from "../styles/EditProStyle";
// import ProfileImg from "../images/profile.jpg";
// import addUserDescription from "../../reducer/addUserDescription";


let languages;
class EditProfile extends React.Component {

    handleChange = (e, { value }) => this.setState({ value })
    componentWillMount() {
        this.setState({
            options: [
                { key: 'c', text: 'C', value: 'c' },
                { key: 'c++', text: 'C++', value: 'c++' },
                { key: 'java', text: 'Java', value: 'java' },
                { key: 'go', text: 'Go', value: 'go' },
                { key: 'html', text: 'HTML', value: 'html' },
                { key: 'css', text: 'CSS', value: 'css' },
                { key: 'javascript', text: 'Javascript', value: 'javascript' },
                { key: 'typescript', text: 'Typescript', value: 'typescript' },
                { key: 'shell', text: 'Shell', value: 'shell' },
                { key: 'c#', text: 'C#', value: 'c#' },
                { key: 'python', text: 'Python', value: 'python' },
                { key: 'rails', text: 'Rails', value: 'rails' },
                { key: 'react', text: 'React', value: 'react' },
                { key: 'less', text: 'LESS', value: 'less' },
                { key: 'ruby', text: 'Ruby', value: 'ruby' },
                { key: 'scss', text: 'SCSS', value: 'scss' },
                { key: 'kotlin', text: 'Kotlin', value: 'kotlin' },
            ],
            selected: "",
            languages: []
        })
    }
    renderBioField = (field) => {
        //console.log("rendering Bio");
        return (
            <Form.Input fluid type="text" value="hey people"{...field.input} error={field.meta.touched ? field.meta.error : null} />
        );
    }
    renderLangField = (field) => {
        return (
            <Form.Dropdown fluid multiple selection {...field.input} onChange={(e, data) => {
                return (data.value.length > 0) ? field.input.onChange(field.input) : field.input.onChange("")
            }}
                value={"cpp"} options={this.state.options} error={field.meta.touched ? field.meta.error : null} />
        );
    }
    renderProject1Field = (field) => {
        return (
            <Form.Input fluid type="text"  {...field.input} error={field.meta.touched ? field.meta.error : null} />
        );
    }
    renderProject2Field(field) {
        return (
            <Form.Input fluid type="text"  {...field.input} error={field.meta.touched ? field.meta.error : null} />
        );
    }
    renderProject3Field(field) {
        return (
            <Form.Input fluid type="text"  {...field.input} error={field.meta.touched ? field.meta.error : null} />
        );
    }
    renderGistField = (field) => {
        return (
            <Form.TextArea fluid type="text" placeholder="Enter your sample code"  {...field.input} error={field.meta.touched ? field.meta.error : null} />
        );
    }


    validateLanguage(e, data) {
        if (languages === undefined || languages.length < 5) {
            languages = data.value;
            //console.log("from show data: ", languages.length);
        } else {
            console.log("language should not be more than 5!", languages.length);
        }
    }
    onSubmit(values) {
        this.props.saveUserData(values)
        //console.log("onSubmit", values);
        alert("Your record has been updated successfully!");
        this.props.history.push("/");
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <Container>
                <Header>
                    <Image src={this.props.userData.avatar} circular centered size="tiny" />
                    <ImageContent>{this.props.userData.name}</ImageContent>
                </Header>
                <FormContainer>
                    <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <FormHeader>Bio</FormHeader>
                        <Field required name="bio" component={this.renderBioField} />
                        <FormHeader>Top Languages* <em>(only 5)</em></FormHeader>
                        <Form.Dropdown required fluid multiple selection options={this.state.options} onChange={this.validateLanguage} />
                        <FormHeader>Repositry 1*</FormHeader>
                        <Field required name="repositries1" component={this.renderProject1Field} />
                        <FormHeader>Repositry 2</FormHeader>
                        <Field required name="repositries2" component={this.renderProject2Field} />
                        <FormHeader>Repositry 3</FormHeader>
                        <Field required name="repositries3" component={this.renderProject3Field} />
                        <FormHeader>Sample Code*</FormHeader>
                        <Field required name="gist" component={this.renderGistField} />
                        <Form.Button color="black">Submit</Form.Button>
                    </Form>
                </FormContainer>
            </Container>
        )
    }
}
function validate(values) {
    values["languages"] = languages;
    // console.log("values", values);
    const error = {}
    // if (!values.bio) {
    //     error.bio = "Please enter a bio ";
    // }
    if (!values.repositries1) {
        error.repositries1 = "Enter your top project"
    }
    if (!values.gist) {
        error.gist = "Enter your gist reference"
    }
    return error;
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ saveUserData }, dispatch);
}
const mapStateToProps = (state) => {
    console.log("edit profile- ", state.auth);
    return {
        userData: state.auth.user
    }
}
export default reduxForm({
    validate: validate,
    form: "addUserDetails"
})(
    connect(mapStateToProps, mapDispatchToProps)(EditProfile)
);