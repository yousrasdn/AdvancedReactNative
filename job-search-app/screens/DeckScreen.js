import React from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { useSelector, useDispatch  } from 'react-redux';
import { Card, Button, Icon } from 'react-native-elements';
import MapView from 'react-native-maps';
import Swipe from '../components/Swipe';
import * as actions from '../actions';

const DeckScreen = ({navigation}) => {
    const jobs = useSelector(state => state.jobs);
    const dispatch = useDispatch();

    const renderCard = (job) => {
        const initialRegion = {
          longitude: job.longitude,
          latitude: job.latitude,
          latitudeDelta: 0.045,
          longitudeDelta: 0.02
        };
    
        return (
          <Card title={job.title}>
            <View style={{ height: 300 }}>
              <MapView
                scrollEnabled={false}
                style={{ flex: 1 }}
                cacheEnabled={Platform.OS === 'android' ? true : false}
                initialRegion={initialRegion}
              >
              </MapView>
            </View>
            <View style={styles.detailWrapper}>
              <Text>{job.company}</Text>
              <Text>{job.created_at}</Text>
            </View>
            <Text>
              {job.description.replace(/<b>/g, '').replace(/<\/b/g, '')}
            </Text>
          </Card>
        );
    }

    const renderNoMoreCards = () => {
        return (
          <Card title="No More Jobs">
            <Button
              title="Back To Map"
              large
              icon={{ name: 'my-location' }}
              backgroundColor="#03A9F4"
              onPress={() => navigation.navigate('map')}
            />
          </Card>
        );
      }

    return (<View style={{ marginTop: 10 }}>
        <Swipe
          data={jobs}
          renderCard={renderCard}
          renderNoMoreCards={renderNoMoreCards}
          onSwipeRight={job => dispatch(actions.likeJob(job))}
          keyProp="jobkey"
        />
      </View>)
};

const styles = {
    detailWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 10
    }
};

export default DeckScreen;