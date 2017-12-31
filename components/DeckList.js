import React, { Component } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-elements';
import { fetchDecks } from '../actions';

class DeckList extends Component {

  componentDidMount() {
    this.props.fetchDecks();
  }

  componentDidUpdate() {
    this.props.fetchDecks();
  }

  renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => this.props.navigation.navigate(
        'Deck', { id: item.key, navTitle: item.title }
      )}
    >
      <View>
        <Card title={item.title} >
          <Text>{`This deck has ${item.questions.length} cards`}</Text>
        </Card>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.wrapper}>
        {
          this.props.deckData.length > 0
          ?
          <FlatList
            data={this.props.deckData}
            renderItem={this.renderItem}
          />
        :
        <Card
          title='Tab on "Create Deck" to get started'
        />
        }
      </View>
      // <View style={styles.wrapper}>
      //
      //
      //     <FlatList
      //       data={this.props.deckData}
      //       renderItem={this.renderItem}
      //     />
      //
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ECECEC',
    alignSelf: 'stretch'
  }
});

const mapStateToProps = state => {
  const deckData = state.decks;
  return { deckData };
};

export default connect(mapStateToProps, { fetchDecks })(DeckList);
