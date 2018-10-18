import React, { Component } from 'react';
import { View, Text, Image, StyleSheet  } from 'react-native';
import { connect } from 'react-redux';
import { Rating } from 'react-native-ratings';
import { Entypo } from '@expo/vector-icons';
import MapView, { Marker } from 'react-native-maps';

import { actionGetHotelDetails } from "../../Store/services/ACTIONS";


class HotelDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    const { navigation } = this.props;
    const id = navigation.getParam('id','No_ID');
    this.props.getHotelDetails(id);

  }

  render() {
    return (
      <View style={styles.container}>
        { this.props.data.hotel
          ? (
            <View style={styles.card}> 
              <View style={styles.cardContainer}>
                <View style={styles.cardContent}>
                  <Text style={styles.hotelTitle}>{this.props.data.hotel.name}</Text>
                </ View>
                <View style={styles.cardContent}>
                <Rating
                  startingValue={Number(this.props.data.hotel.start)}
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10 }}
                  imageSize={20}
                />
                </View>
                <View style={styles.cardContent}>
                  <Entypo style={styles.location} name='location-pin' size={25} color="black"/>
                  <Text>{this.props.data.hotel.address}</Text>
                </View>
              </View>
              <View style={styles.containerMap}>
                <MapView
                  style={styles.map}
                  region={{
                    latitude: 37.78400,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}
                >
                  <Marker
                    coordinate={{
                      latitude: 37.78999,
                      longitude: -122.4324,
                    }}
                    centerOffset={{ x: 0, y: 0 }}
                    anchor={{ x: 0, y: 0 }}
                  />
                </MapView>
              </View>
            </View>
            ) 
          : (
              <Text> Error obteniendo detalles del hotel </Text>
            )
        }
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  card:{
    height:250,
    backgroundColor:'white',
  },
  cardContainer:{
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 7,
  },
  cardContent:{
    width:250,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  hotelTitle:{
    fontWeight: 'bold',
    fontSize: 15,
  },
  hotelPriceTitle:{
    fontSize:12,
    color:'#cccccc'
  },
  hotelPrice:{
    fontSize:15,
    color:'#ffd700',
    fontWeight: 'bold',
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  location:{
    marginRight: 17,
    marginLeft: 17,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  containerMap:{
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});




const mapStateToProps = state => ({
    data: state.reducesHotels,
  });
  
  const mapDispatchToProps = dispatch => ({
    getHotelDetails: (id) => {
      dispatch(actionGetHotelDetails(id));
    },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);