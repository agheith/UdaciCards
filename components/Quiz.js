import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button, Card } from 'react-native-elements';

class Quiz extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle
    };
  }

  state = {
    questions: this.questionsShuffle(),
    showQuestion: true,
    currentQuestion: 0,
    correctAnswers: 0
  }

  restartQuiz() {
    this.setState(() => {
      return {
        questions: this.questionsShuffle(),
        showQuestion: true,
        currentQuestion: 0,
        correctAnswers: 0
      };
    });
  }

  questionsShuffle() {
    const questions = this.props.navigation.state.params.questions;
    let singleQuestion = questions.length - 1;

    do {
      const randomizedQuestions = Math.floor(Math.random() * (questions.length - 1));
      const temp = questions[randomizedQuestions];
      questions[randomizedQuestions] = questions[singleQuestion];
      questions[singleQuestion] = temp;
      singleQuestion--;
    } while (singleQuestion >= 0);

    return questions;
  }

    // while (singleQuestion >= 0) {
    //   const randomizedQuestions = Math.floor(Math.random() * (questions.length - 1));
    //   const temp = questions[randomizedQuestions];
    //   questions[randomizedQuestions] = questions[singleQuestion];
    //   questions[singleQuestion] = temp;
    //   singleQuestion--;
    //
    //   return questions;
    // }

  goBack() {
    this.props.navigation.dispatch(NavigationActions.navigate({
      routeName: 'DeckList'
    }));
  }

  renderQuiz() {
    if (this.state.currentQuestion < this.state.questions.length) {
      return (
        <Card
          title={
            this.state.showQuestion
            ?
             `Question - ${this.state.questions[this.state.currentQuestion].question}`
            :
             `Answer - ${this.state.questions[this.state.currentQuestion].answer}`
          }
        >
          <View>
            <Text style={styles.text}>
              {`Question ${this.state.currentQuestion + 1} / ${this.state.questions.length}`}
            </Text>
          </View>
          <View style={styles.qabutton}>
            <Button
              large
              icon={{ name: 'done' }}
              backgroundColor='#2E7BF6'
              onPress={() => {
                this.setState({
                  currentQuestion: this.state.currentQuestion + 1,
                  correctAnswers: this.state.correctAnswers + 1
                });
              }}
            />
            <Button
              large
              icon={{ name: 'clear' }}
              backgroundColor='#2E7BF6'
              onPress={() => {
                this.setState({
                  currentQuestion: this.state.currentQuestion + 1
                });
              }}
            />
          </View>
          <View>
            <Button
              backgroundColor='#CC2B1D'
              title={
                this.state.showQuestion
                 ?
                 'Click to Review Answer'
                 :
                 'Click to Review Question'
               }
              buttonStyle={styles.buttonStyle}
              onPress={() => this.setState({ showQuestion: !this.state.showQuestion })}
            />
          </View>
        </Card>
      );
    }
    return (
      <Card
        title={`You've answered ${this.state.correctAnswers} out of ${this.state.questions.length}`}
      >
         <Text style={styles.text}>
           {this.state.correctAnswers === this.state.questions.length
              ?
              'Greate job!'
              :
              'Nice Try!'
          }
         </Text>
         <Button
           buttonStyle={styles.buttonStyle}
           title='Restart Quiz'
           backgroundColor='#CC2B1D'
           onPress={() => this.restartQuiz()}
         />
         <Button
           buttonStyle={styles.buttonStyle}
           title='Back to Decks'
           backgroundColor='#CC2B1D'
           onPress={() => this.goBack()}
         />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.quizWrapper}>
        {this.renderQuiz()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  quizWrapper: {
    flex: 1,
  },

  text: {
    marginBottom: 10,
    textAlign: 'center'
  },

  buttonStyle: {
    marginTop: 10,
    marginBottom: 10
  },

  qabutton: {
    width: 240,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 40,
    marginLeft: 40,
  }

});

export default Quiz;
