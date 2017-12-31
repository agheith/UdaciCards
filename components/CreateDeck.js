import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { Button, Card, FormInput, FormValidationMessage } from 'react-native-elements';
import { saveDeckTitle } from '../utils/helpers';

class CreateDeck extends Component {

  state = {
    deckTitle: '',
    error: false
  };

  handleSubmit = () => {
    if (this.state.deckTitle) {
      saveDeckTitle(this.state.deckTitle);
      this.setState({
        deckTitle: '',
        error: false
      });
      this.props.navigation.navigate(
        'Deck', { id: this.state.deckTitle, navTitle: this.state.deckTitle },
        Keyboard.dismiss()
      );
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    return (
        <Card title="Name of the Deck">

          <FormInput
            value={this.state.deckTitle}
            onChangeText={(deckTitle) => this.setState({ deckTitle })}
          />

          <FormValidationMessage>
            {this.state.error ? 'Cannot leave blank' : ''}
          </FormValidationMessage>

          <Button
            title='Add Deck'
            backgroundColor='#CC2B1D'
            onPress={this.handleSubmit}
          />

        </Card>
    );
  }
}

export default CreateDeck;
