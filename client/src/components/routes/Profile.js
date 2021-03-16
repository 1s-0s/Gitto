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
const githubStat = "https://github-readme-stats.vercel.app/api?username=Samridhi-98&show_icons=true&theme=blue-green&line_height=27&title_color=FFFFFF&bg_color=001E19&hide_border=true";
const contributionAPI = "https://activity-graph.herokuapp.com/graph?username=Samridhi-98&theme=blue-green";

class Profile extends React.Component {

    render() {
        return (
            <Container>
                <ProfileCard>
                    <Image src={ProfileImg} circular centered size="small" />
                    <ImageContent>
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
                                    <StatNum>10</StatNum>
                                </Statistic.Value>
                                <Statistic.Label>
                                    <StatDesc>Followers</StatDesc>
                                </Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>
                                    <StatNum>20</StatNum>
                                </Statistic.Value>
                                <Statistic.Label>
                                    <StatDesc>Followings</StatDesc>
                                </Statistic.Label>
                            </Statistic>
                            <Statistic>
                                <Statistic.Value>
                                    <StatNum>51</StatNum>
                                </Statistic.Value>
                                <Statistic.Label>
                                    <StatDesc>Repositries</StatDesc>
                                </Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </Section>
                    <Image src={githubStat} />
                    {/* <Image src={contributionAPI} /> */}
                </ProfileCard>
            </Container>
        )
    }
}

export default Profile;