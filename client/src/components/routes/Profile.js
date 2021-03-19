import React from "react";
import { Image, Statistic, Loader } from "semantic-ui-react";
import {
    Container,
    ProfileCard,
    ImageContent,
    ImageSubContent,
    StatDesc,
    StatNum,
    Section,
    ButtonLink,
    Loading
} from "../styles/ProfileStyle";
import { FaEdit as Edit } from "react-icons/fa";
import ProfileImg from "../images/profile.jpg";
import Axios from "axios";
//to fetch data from cookie
import Cookies from 'js-cookie';

// const contributionAPI = "https://activity-graph.herokuapp.com/graph?username=Samridhi-98&theme=blue-green";
class Profile extends React.Component {
    constructor() {
        super();

        this.state = {
            userinfo: {},
            userid: Cookies.get("userid"),
            loading: true
        }

    }
    componentDidMount() {
        // console.log("cookie: ", this.state.userid);
        //? proxy:5000 in package.json
        Axios({
            url: "/userinfo/" + this.state.userid,
            method: "GET"
        })
            .then((response) => {
                this.setState({ userinfo: response.data, loading: false }, () => {
                    console.log(this.state.userinfo);
                });
            })
            .catch((err) => {
                console.log("-----error while fetching user info---", err);
            })
    }
    render() {
        if (this.state.loading === true) {
            return (
                <div>
                    <Loading active size="large"><strong>Loading</strong></Loading>
                </div>
            )
        }
        else {
            const githubStat = `https://github-readme-stats.vercel.app/api?username=${this.state.userinfo.username}&show_icons=true&theme=blue-green&line_height=27&title_color=FFFFFF&bg_color=001E19&hide_border=true`;
            return (
                <Container>
                    <ProfileCard>
                        <Image src={this.state.userinfo.avatar} circular centered size="small" />
                        <ImageContent>
                            {this.state.userinfo.name}
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
                                        <StatNum>{this.state.userinfo.follower}</StatNum>
                                        {/* <StatNum>10</StatNum> */}
                                    </Statistic.Value>
                                    <Statistic.Label>
                                        <StatDesc>Followers</StatDesc>
                                    </Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>
                                        <StatNum>{this.state.userinfo.following}</StatNum>
                                        {/* <StatNum>20</StatNum> */}
                                    </Statistic.Value>
                                    <Statistic.Label>
                                        <StatDesc>Followings</StatDesc>
                                    </Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>
                                        <StatNum>{this.state.userinfo.repositry}</StatNum>
                                        {/* <StatNum>51</StatNum> */}
                                    </Statistic.Value>
                                    <Statistic.Label>
                                        <StatDesc>Repositries</StatDesc>
                                    </Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </Section>
                        {/* https://github-readme-stats.vercel.app/api?username=Samridhi-98&show_icons=true&theme=blue-green&line_height=27&title_color=FFFFFF&bg_color=001E19&hide_border=true */}
                        {/* <Image src={} /> */}
                        <Image src={githubStat} />
                    </ProfileCard>
                </Container>
            )
        }
    }
}

export default Profile;