import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import PubNubReact from 'pubnub-react';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class App extends Component {

  constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({
        publishKey: 'pub-c-af9e408a-d4a8-473c-b591-81402cdf9aaf'
    });
    this.pubnub.init(this);
  }

  sendChat = (colour) => {
        this.pubnub.publish({
            message: colour,
            channel: 'color-demo'
        });
        this.setState({ chatInput: '' })
  }

  render(){
    const { classes } = this.props;
    return(
      <Card className={classes.card}>
            <Button size="small" color="primary">
              Red
            </Button>
            <Button size="small" color="primary">
              Blue
            </Button>
        </Card>
      );
    }
}

const ChatComponent = withStyles(styles)(App);

ReactDOM.render(<ChatComponent />, document.getElementById('root'));