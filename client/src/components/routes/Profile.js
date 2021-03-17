import React from "react";
import { Image, Statistic } from "semantic-ui-react";
import {
    Container,
    ProfileCard,
    ImageContent,
    ImageSubContent,
    StatDesc,
    StatNum,
    Section,
    ButtonLink
} from "../styles/ProfileStyle";
import { FaEdit as Edit } from "react-icons/fa";
import ProfileImg from "../images/profile.jpg";
import Axios from "axios";
//to fetch data from cookie
import Cookies from 'js-cookie';

// const contributionAPI = "https://activity-graph.herokuapp.com/graph?username=Samridhi-98&theme=blue-green";
class Profile extends React.Component {
    constructor(){
        super();
        
        this.state={
            userinfo:null
           
        }
        this.githubStat = `https://github-readme-stats.vercel.app/api?username=Samridhi-98&show_icons=true&theme=blue-green&line_height=27&title_color=FFFFFF&bg_color=001E19&hide_border=true`;
    }
    componentDidMount(){
        console.log(Cookies.get("username"));
        Axios({
            url:"http://localhost:5000/userinfo/"+this.state.githubusername,
            method:"GET"
        })
        .then((response)=>{
            this.setState({userinfo:response.data},()=>{
                console.log(this.state.userinfo);
            });
        })
        .catch((err)=>{
            console.log("-----error while fetching user info---",err);
        })
    }
    render() {

        return (
            <Container>
                <ProfileCard>
                    <Image src={ProfileImg} circular centered size="small" />
                    <ImageContent>
                        {/* {this.state.userinfo.fullname} */}
                        Kavya Kulkarni
                        <ImageSubContent>
                            <ButtonLink to="/dashboard/editprofile">
                                <Edit />
                            </ButtonLink>
                        </ImageSubContent>
                    </ImageContent>


                    <Section vertical>
                        <Statistic.Group widths="three">
                            <Statistic>
                                <Statistic.Value>
                                    {/* <StatNum>{this.state.userinfo.followers}</StatNum> */}
                                    <StatNum>10</StatNum>
                                </Statistic.Value>
                                <Statistic.Label>
                                    <StatDesc>Followers</StatDesc>
                                </Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>
                                    {/* <StatNum>{this.state.userinfo.following}</StatNum> */}
                                    <StatNum>20</StatNum>
                                </Statistic.Value>
                                <Statistic.Label>
                                    <StatDesc>Followings</StatDesc>
                                </Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>
                                    {/* <StatNum>{this.state.userinfo.repos}</StatNum> */}
                                    <StatNum>51</StatNum>
                                </Statistic.Value>
                                <Statistic.Label>
                                    <StatDesc>Repositries</StatDesc>
                                </Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </Section>
                    {/* https://github-readme-stats.vercel.app/api?username=Samridhi-98&show_icons=true&theme=blue-green&line_height=27&title_color=FFFFFF&bg_color=001E19&hide_border=true */}
                    {/* <Image src={} /> */}
                    <Image src={this.githubStat} />
                </ProfileCard>
            </Container>
        )
    }
}

export default Profile;