import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager,
  Alert
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

const SWIPE_RIGHT = 'right';
const SWIPE_LEFT = 'left';

class Deck extends Component {
  static defaultProps = {
    onSwipeRight: () => {},
    onSwipeLeft: () => {}
  }

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        //  console.log('onPanResponderMove  gesture = ', gesture )
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        // console.log('onPanResponderRelease  gesture = ', gesture )
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe(SWIPE_RIGHT);
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe(SWIPE_LEFT);
        } else {
          this.resetPosition();
        }
      }
    });

    this.state = { panResponder, position, index: 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    }
  }

  componentWillUpdate() {
    // will animate any change when component updates
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  resetPosition() {
    Animated.timing(this.state.position, {
      toValue: { x: 0, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start();
  }

  forceSwipe(direction) {
    const x = direction === SWIPE_RIGHT ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data } = this.props;
    const item = data[this.state.index];

    direction === SWIPE_RIGHT ? onSwipeRight(item) : onSwipeLeft(item);
    this.state.position.setValue({ x: 0, y: 0 }); // update position to initial position
    this.setState({ index: this.state.index + 1 });
  }

  cardStyle() {
    const {position} = this.state;

    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...position.getLayout(),
      transform: [{rotate}]
    }
  }

  renderCards() {
    if (this.state.index>= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }

    return this.props.data.map((item, i) => {
      if (i < this.state.index) return null;

      if (i === this.state.index) {
        return (
          <Animated.View
            key={item.id}
            style={[this.cardStyle(), styles.cardStyle, { zIndex: 99 }]}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }

      return (
        <Animated.View
          key={item.id}
          style={[styles.cardStyle, { top: 10 * (i - this.state.index), zIndex: 5 }]}
        >
          {this.props.renderCard(item)}
        </Animated.View>
      ); 
    }).reverse();
  }

  render() {
    return (
     <View>
       {this.renderCards()}
     </View>
    );
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
};

export default Deck;