import React from "react";
import { Item, Image } from "semantic-ui-react";
import {
    Card,
    CardText,
    CardHeader,
    Container
} from "../styles/FrieindStyle";
import avatar from "../images/logopen3.svg"

class FriendList extends React.Component {

    render() {
        return (
            <Container>
                <Card raised>
                    <Item.Group divided>
                        <Item>
                            <Image alt={avatar} size="mini" src={avatar} />
                            <Item.Content>
                                <CardHeader>
                                    <Item.Header>Kavya Kulkarni</Item.Header>
                                </CardHeader>
                                <Item.Meta>
                                </Item.Meta>
                                <Item.Description>
                                    <CardText>
                                        Hello,people I am Kavya Kulkarni.
                                    </CardText>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Card>
            </Container>
        )
    }
}

export default FriendList;