import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchDeckInfo } from '../actions';

class Deck extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle
    };
  }

  componentDidMount() {
    this.props.fetchDeckInfo(this.props.navigation.state.params.id);
  }

  componentDidUpdate() {
    this.props.fetchDeckInfo(this.props.navigation.state.params.id);
  }

  render() {
    return (
      <View style={styles.deckWrapper}>
        <Card title={this.props.title}>
          <Text style={styles.text}>
            {this.props.questions ? this.props.questions.length : 0} cards
          </Text>
          <View>
            <Button
              backgroundColor='#CC2B1D'
              title='Add Question'
              buttonStyle={styles.buttonStyle}
              onPress={() => {
                this.props.navigation.navigate(
                  'AddQuestion', { navTitle: this.props.title, title: this.props.title }
                );
              }}
            />
          </View>
          <View>
            <Button
              backgroundColor='#CC2B1D'
              title='Click to Start Quiz'
              buttonStyle={styles.buttonStyle}
              onPress={() => {
                this.props.navigation.navigate(
                  'Quiz', { navTitle: this.props.title, questions: this.props.questions }
                );
              }}
            />
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  deckWrapper: {
    flex: 1,
  },
  text: {
    marginBottom: 10,
    textAlign: 'center'
  },
  buttonStyle: {
    marginTop: 10,
    marginBottom: 10
  }

});

const mapStateToProps = (state) => {
  const { title, questions } = state.deckInfo ? state.deckInfo : ('', []);
  return { title, questions };
};

export default connect(mapStateToProps, { fetchDeckInfo })(Deck);
