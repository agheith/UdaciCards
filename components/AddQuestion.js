import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { addCardToDeck } from '../utils/helpers';

class AddQuestion extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle
    };
  }

  state = {
    questionDeck: '',
    answerDeck: '',
    error: ''
  };

  handleSubmit = () => {
    if (this.state.questionDeck && this.state.answerDeck) {
      const title = this.props.navigation.state.params.title;
      const card = {
        question: this.state.questionDeck,
        answer: this.state.answerDeck
      };
      addCardToDeck(title, card);
      this.setState({
        questionDeck: '',
        answerDeck: '',
        error: false
      });
      this.props.navigation.goBack(Keyboard.dismiss());
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    return (
      <Card title='Add a Question and an Answer'>
        <FormLabel>Question:</FormLabel>
        <FormInput
          value={this.state.deckTitle}
          onChangeText={(questionDeck) => this.setState({ questionDeck })}
        />
        <FormLabel>Answer:</FormLabel>
        <FormInput
          value={this.state.deckTitle}
          onChangeText={(answerDeck) => this.setState({ answerDeck })}
        />
        <FormValidationMessage>
          {this.state.error ? 'Cannot leave blank' : ''}
        </FormValidationMessage>
        <Button
          title='Add'
          backgroundColor='#2E7BF6'
          onPress={this.handleSubmit}
        />
      </Card>
    );
  }
}

export default AddQuestion;
