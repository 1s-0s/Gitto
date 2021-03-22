import React from "react";
import { Image, Statistic } from "semantic-ui-react";
import {connect} from "react-redux"
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

// const contributionAPI = "https://activity-graph.herokuapp.com/graph?username=Samridhi-98&theme=blue-green";
class Profile extends React.Component {
    
    render() {
        if (this.props.loading) {
            return (
                <div>
                    <Loading active size="large"><strong>Loading</strong></Loading>
                </div>
            )
        }
        else {
            const githubStat = `https://github-readme-stats.vercel.app/api?username=${this.props.userData.user.username}&show_icons=true&theme=blue-green&line_height=27&title_color=FFFFFF&bg_color=001E19&hide_border=true`;
            return (
                <Container>
                    <ProfileCard>
                        <Image src={this.props.userData.user.avatar} circular centered size="small" />
                        <ImageContent>
                            {this.props.userData.user.name}
                            <ImageSubContent>
                                <ButtonLink to="/editprofile">
                                    <Edit />
                                </ButtonLink>
                            </ImageSubContent>
                        </ImageContent>
                        <Section vertical>
                            <Statistic.Group widths="three">
                                <Statistic>
                                    <Statistic.Value>
                                        <StatNum>{this.props.userData.user.follower}</StatNum>
                                        {/* <StatNum>10</StatNum> */}
                                    </Statistic.Value>
                                    <Statistic.Label>
                                        <StatDesc>Followers</StatDesc>
                                    </Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>
                                        <StatNum>{this.props.userData.user.following}</StatNum>
                                        {/* <StatNum>20</StatNum> */}
                                    </Statistic.Value>
                                    <Statistic.Label>
                                        <StatDesc>Followings</StatDesc>
                                    </Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>
                                        <StatNum>{this.props.userData.user.repositry}</StatNum>
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
const mapStateToProps=(state)=>{
    return{
        userData: state.auth
    }
}
export default connect(mapStateToProps)(Profile);