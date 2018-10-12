import React, { Component } from 'react';
import { View, Text, Image  } from 'react-native';
import { connect } from 'react-redux';
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
      <View>
        <Text> Hotels details </Text>
        { this.props.data.hotel
          ? (
              <View>
                <Image
                    style={{width: 150, height: 100}}
                    source={{uri: this.props.data.hotel.images[0]}}
                />
                <Text> Name: {this.props.data.hotel.name} </Text>
                <Text> Price: {this.props.data.hotel.price} </Text>
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

const mapStateToProps = state => ({
    data: state.reducesHotels,
  });
  
  const mapDispatchToProps = dispatch => ({
    getHotelDetails: (id) => {
      dispatch(actionGetHotelDetails(id));
    },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);