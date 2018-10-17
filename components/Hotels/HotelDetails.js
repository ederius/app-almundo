import React, { Component } from 'react';
import { View, Text, Image, StyleSheet  } from 'react-native';
import { connect } from 'react-redux';
import { actionGetHotelDetails } from "../../Store/services/ACTIONS";

import { Rating, AirbnbRating } from 'react-native-ratings';


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
                  onFinishRating={this.ratingCompleted}
                  style={{ paddingVertical: 10 }}
                  imageSize={20}
                />
                </View>
                <View>
                  <Text>{this.props.data.hotel.address}</Text>
                </View>
              </View>
              <Image
                style={{width: 450, height: 120}}
                source={{uri: this.props.data.hotel.images[0] }}
              />
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
    height:190,
    backgroundColor:'white',
  },
  cardContainer:{
    marginTop: 8,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 7,
  },
  cardContent:{
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
  myEmptyStarStyle: {
    color: 'white',
  }
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