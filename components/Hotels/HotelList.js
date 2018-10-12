import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,Button} from 'react-native';
import { connect } from 'react-redux';
import { actionGetlistHotels } from '../../Store/services/ACTIONS';


class HotelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.props.getlistHotels();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Hotels list </Text>
        { this.props.hotels
          ? (
              <FlatList
                data={this.props.hotels.hotels}
                renderItem={({item})=> {
                  return (
                  <Button 
                    onPress={()=>{navigation.navigate('HotelDetails', {id:item._id})}}
                    title={item.name}
                  />
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
    },
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