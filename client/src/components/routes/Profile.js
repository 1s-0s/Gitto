import React from "react";

// Action Creator
import { userDescription } from "../../action/index";

//REACT-REDUX AND REDUX-FORM
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

//Semantic-ui
import { Form, Message, Image, Header } from 'semantic-ui-react';

//Style-Component
import { Container, FormContainer, ImageContent, FormHeader } from "../styles/ProfileStyle";
import ProfileImg from "../images/profile.jpg";
class Profile extends React.Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
    componentWillMount() {
        this.setState({
            options: [
                { key: 'angular', text: 'Angular', value: 'angular' },
                { key: 'css', text: 'CSS', value: 'css' },
                { key: 'design', text: 'Graphic Design', value: 'design' },
                { key: 'ember', text: 'Ember', value: 'ember' },
                { key: 'html', text: 'HTML', value: 'html' },
                { key: 'ia', text: 'Information Architecture', value: 'ia' },
                { key: 'javascript', text: 'Javascript', value: 'javascript' },
                { key: 'typescript', text: 'typescript', value: 'typescript' },
                { key: 'node', text: 'NodeJS', value: 'node' },
                { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
                { key: 'python', text: 'Python', value: 'python' },
                { key: 'rails', text: 'Rails', value: 'rails' },
                { key: 'react', text: 'React', value: 'react' },
                { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
                { key: 'ruby', text: 'Ruby', value: 'ruby' },
                { key: 'ui', text: 'UI Design', value: 'ui' },
                { key: 'ux', text: 'User Experience', value: 'ux' },
            ],
            selected: "angular"
        })
    }
    renderBioField = (field) => {
        console.log("rendering Bio");
        return (
            <Form.Input fluid type="text"  {...field.input} error={field.meta.touched ? field.meta.error : null} />
        );
    }
    renderLangField = (field) => {
        return (
            <Form.Dropdown fluid multiple selection {...field.input} options={this.state.options} error={field.meta.touched ? field.meta.error : null} />
        );
    }
    renderLang1Field = (field) => {
        return (
            <select className="ui fluid dropdown" {...field.input} error={field.meta.touched ? field.meta.error : null}>
                <option key="" value="" disabled="disabled">Language 1</option>
                <option key="C" value="C">C</option>
                <option key="C++" value="C++">C++</option>
                <option key="Java" value="Java">Java</option>
                <option key="Python" value="Python">Python</option>
                <option key="HTML" value="HTML">HTML</option>
                <option key="CSS" value="CSS">CSS</option>
                <option key="Javascript" value="Javascript">Javascript</option>
                <option key="Typescript" value="Typescript">Typescript</option>
                <option key="Kotlin" value="Kotlin">Kotlin</option>
                <option key="Go" value="Go">Go</option>
                <option key="Ruby" value="Ruby">Ruby</option>
            </select>
        );
    }
    renderLang2Field = (field) => {
        return (
            <select className="ui fluid dropdown" {...field.input} error={field.meta.touched ? field.meta.error : null}>
                <option key="" value="" disabled="disabled">Language 2</option>
                <option key="C" value="C">C</option>
                <option key="C++" value="C++">C++</option>
                <option key="Java" value="Java">Java</option>
                <option key="Python" value="Python">Python</option>
                <option key="HTML" value="HTML">HTML</option>
                <option key="CSS" value="CSS">CSS</option>
                <option key="Javascript" value="Javascript">Javascript</option>
                <option key="Typescript" value="Typescript">Typescript</option>
                <option key="Kotlin" value="Kotlin">Kotlin</option>
                <option key="Go" value="Go">Go</option>
                <option key="Ruby" value="Ruby">Ruby</option>
            </select>
        );
    }
    renderLang3Field = (field) => {
        return (
            <select className="ui fluid dropdown" {...field.input} error={field.meta.touched ? field.meta.error : null}>
                <option key="" value="" disabled="disabled">Language 3</option>
                <option key="C" value="C">C</option>
                <option key="C++" value="C++">C++</option>
                <option key="Java" value="Java">Java</option>
                <option key="Python" value="Python">Python</option>
                <option key="HTML" value="HTML">HTML</option>
                <option key="CSS" value="CSS">CSS</option>
                <option key="Javascript" value="Javascript">Javascript</option>
                <option key="Typescript" value="Typescript">Typescript</option>
                <option key="Kotlin" value="Kotlin">Kotlin</option>
                <option key="Go" value="Go">Go</option>
                <option key="Ruby" value="Ruby">Ruby</option>
            </select>
        );
    }
    renderProjectField = (field) => {
        return (
            <Form.Input fluid type="text"  {...field.input} error={field.meta.touched ? field.meta.error : null} />
        );
    }
    renderAdditionalField(field) {
        return (
            <Form.TextArea  {...field.input} error={field.meta.touched ? field.meta.error : null} />
        );
    }
    onSubmit(values) {
        console.log("onSubmit", values);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <Container>
                <Image src={ProfileImg} circular centered size="tiny" />
                <ImageContent>Dhruv Sehgal</ImageContent>
                <FormContainer>
                    <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <FormHeader>Bio</FormHeader>
                        <Field required name="bio" component={this.renderBioField} />
                        <FormHeader>Top Languages</FormHeader>
                        {/* <Form.Dropdown required fluid multiple selection options={this.state.options} /> */}
                        <Field required name="language" component={this.renderLangField} />
                        {/* <Form.Group widths="">
                            <Field required name="language1" component={this.renderLang1Field} />
                            <Field required name="language2" component={this.renderLang2Field} />
                            <Field required name="language3" component={this.renderLang3Field} />
                        </Form.Group> */}
                        <FormHeader>Projects</FormHeader>
                        <Field required name="project" component={this.renderProjectField} />
                        <FormHeader>Additional Info</FormHeader>
                        <Field name="additional" component={this.renderAdditionalField} />
                        <Form.Button color="black">Submit</Form.Button>
                    </Form>
                </FormContainer>
            </Container>
        )
    }
}
function validate(values) {
    //console.log(values.bio);
    console.log("project", values.project);
    const error = {}
    if (!values.bio || values.bio.length > 20) {
        error.bio = "Please enter a bio";
    }
    if (!values.project) {
        error.project = "Enter your top project"
    }
    return error;
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ userDescription }, dispatch);
}
export default reduxForm({
    validate: validate,
    form: "addUserDetails"
})(
    connect(null, mapDispatchToProps)(Profile)
);