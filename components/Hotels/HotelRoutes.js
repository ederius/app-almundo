import { createStackNavigator } from "react-navigation";
import HotelList from "./HotelList";
import HotelDetails from "./HotelDetails";

const HotelRoutes = createStackNavigator({
    HotelList:{
        screen:HotelList,
        navigationOptions :() => ({
            title:'Lista de hoteles',
            style:{
                fontSize:'3',
            },
            titleStyle:{
                color: '#fefefe',
                fontFamily: 'MuseoSansRounded-300',
                fontWeight: '300',
                justifyContent: 'space-between',
                textAlign: 'center',
                fontSize:'2',
            }
        }),
    },
    HotelDetails:{
        screen:HotelDetails,
        navigationOptions :() => ({
            title:'Detalles de hotel',
        }),
    }
});


export default HotelRoutes;