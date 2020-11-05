import React from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import MapView from 'react-native-maps';

const ReviewScreen = () => {
    const likedJobs = useSelector(state => state.likedJobs);
console.log(likedJobs);
    const renderLikedJobs = () => {
        return likedJobs.map(job => {
          const {
            company, formattedRelativeTime, url,
            longitude, latitude, title, id
          } = job;
          const initialRegion = {
            longitude,
            latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
          };
    
          return (
            <Card title={title} key={id}>
              <View style={{ height: 200 }}>
                <MapView
                  style={{ flex: 1 }}
                  cacheEnabled={Platform.OS === 'android'}
                  scrollEnabled={false}
                  initialRegion={initialRegion}
                />
                <View style={styles.detailWrapper}>
                  <Text style={styles.italics}>{company}</Text>
                  <Text style={styles.italics}>{formattedRelativeTime}</Text>
                </View>
                <Button
                  title="Apply Now!"
                  backgroundColor="#03A9F4"
                  onPress={() => Linking.openURL(url)}
                />
              </View>
            </Card>
          );
        });
      }

    return ( <ScrollView>
        {renderLikedJobs()}
      </ScrollView>)
};

const styles = {
    italics: {
      fontStyle: 'italic'
    },
    detailWrapper: {
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  }

export default ReviewScreen;