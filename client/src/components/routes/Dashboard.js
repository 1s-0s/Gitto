import React from "react";
import { Card } from 'semantic-ui-react';
import {
    Div,
    LeftDiv,
    MiddleDiv,
    RightDiv,
} from "../styles/DashboardStyle";
import loginbg from "../images/login.gif";
class Dashboard extends React.Component {
  render() {
    return (
      <Div>
        <LeftDiv>
          <h1>Left</h1>
        </LeftDiv>
        <MiddleDiv>
          
        <Card
            image=''
            header='Elliot Baker'
            meta='Friend'
            description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            
        />

        </MiddleDiv>
        <RightDiv>
          <h1>right</h1>
        </RightDiv>
      </Div>
    );
  }
}
export default Dashboard;
