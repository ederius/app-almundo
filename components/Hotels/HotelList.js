import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { actionGetlistHotels } from '../../Store/services/ACTIONS';

import { Rating, AirbnbRating } from 'react-native-ratings';


class HotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.props.getlistHotels();
  }

  ratingCompleted(rating) {
    console.log("Rating is: " + rating)
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        { this.props.hotels
          ? (
              <FlatList
                data={this.props.hotels.hotels}
                renderItem={({item})=> {
                  return (
                    <View style={styles.card}> 
                      <TouchableOpacity 
                         onPress={()=>{navigation.navigate('HotelDetails', {id:item._id})}}
                      >
                        <Image
                          style={{width: 450, height: 120}}
                          source={{uri: item.images[0] }}
                        />
                        <View style={styles.cardContainer}>
                          <View style={styles.cardContent}>
                            <Text style={styles.hotelTitle}>{item.name}</Text>
                            <Text style={styles.hotelPriceTitle}>Precio por noche</Text>
                          </ View>
                          <View style={styles.cardContent}>
                          <Rating
                            onFinishRating={this.ratingCompleted}
                            style={{ paddingVertical: 10 }}
                            imageSize={20}
                          />
                            <Text style={styles.hotelPrice}>ARS {item.price}</Text>
                          </View>
                        </View>
                      </ TouchableOpacity>
                    </View>
                  )
                }}
              />
            ) 
          : (
              <Text> Lista vacia </Text>
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
    hotels: state.reducesHotels,
  });
  
  const mapDispatchToProps = dispatch => ({
    getlistHotels: () => {
      dispatch(actionGetlistHotels());
    },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(HotelList);