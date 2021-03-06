import React, { Component } from "react";
import {Dimensions} from "react-native";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import Main from "../Main";
import SearchScreen from "../SearchScreen";
import Details from "../Details";
import MapViews from "../MapViews";
import MapSearch from "../MapSearch";
import Management from "../Management";
import AddThuoc from "../AddThuoc";
import AddTPCN from "../AddTPCN";
import AddVTandTBYT from "../AddVTandTBYT";
import AddMyPham from "../AddMyPham";
import CompanyProfile from "../CompanyProfile";
import SideMenu from "../slide/SideMenu";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ListCompany from "../ListCompany";
import MainHeader from "../header/MainHeaders";
import BackHeader from "../header/CompanyHeader";
import {SIGN_UP} from "../../const/Const";

const {height, width} = Dimensions.get("window");

const ThuocStack = createStackNavigator(
  {
    MainScreen: {
      //screen: (props) => < Main {...props}  />
      screen: (props) => <Main  {...props} screenProps={0}/>,
      navigationOptions :  ({ navigation }) => ({
        header: (props) => <MainHeader {...props} navigation={navigation}  />
      })
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
    AddThuoc: {
      screen: AddThuoc
    },
    AddTPCN: {
      screen: AddTPCN
    },
    AddVTandTBYT: {
      screen: AddVTandTBYT
    },
    AddMyPham: {
      screen: AddMyPham
    },
    DetailCompany: {
      screen: Management
    },
    DetailsScreen: {
      screen: Details
    },
  },
  {
    initialRouteName: "MainScreen"
  }
);

const TPCNStack = createStackNavigator(
  {
    MainScreen: {
      //screen: (props) => < Main {...props}  />
      screen: (props) => <Main  {...props} screenProps={1}/>,
      navigationOptions :  ({ navigation }) => ({
        header: (props) => <MainHeader {...props} navigation={navigation}  />
      })
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
    AddThuoc: {
      screen: AddThuoc
    },
    AddTPCN: {
      screen: AddTPCN
    },
    AddVTandTBYT: {
      screen: AddVTandTBYT
    },
    AddMyPham: {
      screen: AddMyPham
    },
    DetailCompany: {
      screen: Management
    },
    DetailsScreen: {
      screen: Details
    },
  },
  {
    initialRouteName: "MainScreen"
  }
);

const VTYTStack = createStackNavigator(
  {
    MainScreen: {
      screen: (props) => <Main  {...props} screenProps={2}/>,
      navigationOptions :  ({ navigation }) => ({
        header: (props) => <MainHeader {...props} navigation={navigation}  />
      })
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
    AddThuoc: {
      screen: AddThuoc
    },
    AddTPCN: {
      screen: AddTPCN
    },
    AddVTandTBYT: {
      screen: AddVTandTBYT
    },
    AddMyPham: {
      screen: AddMyPham
    },
    DetailCompany: {
      screen: Management
    },
    DetailsScreen: {
      screen: Details
    },
  },
  {
    initialRouteName: "MainScreen"
  }
);

const MyPhamStack = createStackNavigator(
  {
    MainScreen: {
      screen: (props) => <Main  {...props} screenProps={3}/>,
      navigationOptions :  ({ navigation }) => ({
        header: (props) => <MainHeader {...props} navigation={navigation} />
      })
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
    AddThuoc: {
      screen: AddThuoc
    },
    AddTPCN: {
      screen: AddTPCN
    },
    AddVTandTBYT: {
      screen: AddVTandTBYT
    },
    AddMyPham: {
      screen: AddMyPham
    },
    DetailCompany: {
      screen: Management
    },
    DetailsScreen: {
      screen: Details
    },
  },
  {
    initialRouteName: "MainScreen"
  }
);

const CompanyStack = createStackNavigator(
  {
    ListScreen: {
      screen: ListCompany
    },
    DetailCompany: {
      screen: Management
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
  },
  {
    initialRouteName: "ListScreen"
  }
);

const CompanyProfileStack = createStackNavigator(
  {
    CompanyProfile: {
      screen: CompanyProfile
    },
    CheckIn : {
      screen : MapSearch
    },
    DetailsScreen: {
      screen: Details
    },
    MapScreen: {
      screen: MapViews
    },
  },
  {
    initialRouteName: "CompanyProfile"
  }
);

const AddNewStack = createStackNavigator(
  {
    AddThuoc: {
      screen: AddThuoc
    },
  }
)
const SignUpStack =  createStackNavigator({
  SignUpScreen :{
    screen : (props) => <SignUp {...props} Goto="MainStack"/>,
    navigationOptions :  ({ navigation }) => ({
      header: (props) => <BackHeader {...props} navigation={navigation} title={SIGN_UP} Goto="MainStack"/>
    })
  },
  CheckIn : {
    screen : MapSearch
  }
}, {
  initialRouteName: "SignUpScreen"
})

const Drawer = createDrawerNavigator(
  {
    ThuocStack: {
      screen: ThuocStack
    },
    TPCNStack: {
     screen : TPCNStack
    },
    VTYTStack: {
      screen: VTYTStack
    },
    MyPhamStack: {
      screen: MyPhamStack
    },
    CompanyStack: {
      screen: CompanyStack
    },
    CompanyProfileStack: {
      screen: CompanyProfileStack
    },
    SignInStack: {
      screen: SignIn
    },
    SignUpStack: {
      screen: SignUpStack
    },
  },
  {
    initialRouteName: "ThuocStack",
    drawerWidth : width * 0.85,
    contentComponent: (props) => <SideMenu {...props} />
  }
);

export default (MainStack = createStackNavigator(
  {
    SearchStack: {
      screen: SearchScreen
    },
    MainStack: {
      screen: Drawer,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "MainStack"
  }
));
