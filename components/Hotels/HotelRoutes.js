import { createStackNavigator } from "react-navigation";
import HotelList from "./HotelList";
import HotelDetails from "./HotelDetails";

const HotelRoutes = createStackNavigator({
    HotelList:{
        screen:HotelList
    },
    HotelDetails:{
        screen:HotelDetails
    }
});


export default HotelRoutes;