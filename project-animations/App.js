import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';

// import Ball from './src/Ball';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://images.unsplash.com/photo-1600485307381-df50ca327cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' },
  { id: 2, text: 'Card #2', uri: 'https://images.unsplash.com/photo-1600528155905-2b3f57498b43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' },
  { id: 3, text: 'Card #3', uri: 'https://images.unsplash.com/photo-1444201431989-0b9fa7488323?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
  { id: 4, text: 'Card #4', uri: 'https://unsplash.com/photos/NzsQ_ekGidk' },
  { id: 5, text: 'Card #5', uri: 'https://unsplash.com/photos/CEJ6f6UEoEY' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'https://unsplash.com/photos/WP9pTO08Nx8' },
  { id: 8, text: 'Card #8', uri: 'https://unsplash.com/photos/NzsQ_ekGidk' },
];

class App extends React.Component {
  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
      >
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further.
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card
        title={'The End!'}
      >
        <Text style={{ marginBottom: 10, marginTop: 30 }}>
          No more match available.
        </Text>

        <Button
          backgroundColor="#03A9F4"
          title="Change the filters"
        />
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;