//import liraries
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import {
  Container,
  Form,
  Item,
  Button,
  Input,
  Label,
  Icon,
  Right,
  View,
  Content
} from "native-base";
import { connect } from "react-redux";
import Header from "./header/CompanyHeader";
import {
  SO_DIEN_THOAI,
  PASSWORD,
  SIGN_IN,
  BACKGROUND_COLOR_HEADER,
  MA_SO_THUE
} from "../const/Const";
import { postData } from "../redux/actions/actionCreators";
import { Loading } from "./common/Loading";
// create a component
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false
    };
  }
  render() {
    const { navigation, account } = this.props;
    return (
      <Container>
        <Header navigation={navigation} title={SIGN_IN} />
        <Loading size="large" loading={this.state.loading} />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground
            source={require("../images/demo.png")}
            style={styles.backgroundImage}
            resizeMode="contain"
            opacity={0.2}
          >
            <Form style={styles.wrapForm}>
              <View style={styles.wrapInput}>
                <Item floatingLabel>
                  <Label>{MA_SO_THUE}</Label>
                  <Input
                    onChangeText={username => this.setState({ username })}
                    numberOfLines={1}
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    autoCorrect={false}
                    onSubmitEditing={() => {
                      this.passwordInput._root.focus();
                    }}
                  />
                  <Icon name="call" />
                </Item>
              </View>
              <View style={styles.wrapInput}>
                <Item floatingLabel>
                  <Label>{PASSWORD}</Label>
                  <Input
                    numberOfLines={1}
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry={true}
                    returnKeyType="done"
                    autoCorrect={false}
                    getRef={input => (this.passwordInput = input)}
                  />
                  <Icon name="unlock" />
                </Item>
              </View>
              <Button
                style={styles.button}
                onPress={() => {
                  this.setState({ loading: true });
                  var user = {
                    username: this.state.username,
                    password: this.state.password
                  };
                  this.props.postData(user, navigation.goBack());
                }}
                onPressOut={Keyboard.dismiss}
              >
                <Text style={styles.textButton}>ĐĂNG NHẬP</Text>
              </Button>
            </Form>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </Container>
    );
  }
}

// define your styles
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: "#aed581",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
    height: 50,
    borderRadius: 4,
    backgroundColor: BACKGROUND_COLOR_HEADER
  },
  wrapForm: {
    padding: "4%",
    width: "96%",
    backgroundColor: "#c5e1a5",
    borderRadius: 4,
    margin: "2%",
    marginBottom: 4
  },
  wrapInput: {
    backgroundColor: "#dcedc8",
    paddingTop: 8,
    borderRadius: 4,
    margin: 4
  },
  textButton: {
    fontSize: 17,
    color: "white"
  },
  textWelcome: {
    fontSize: 20,
    color: "blue",
    
  }
});

//make this component available to the app
function mapStateToProps(state) {
  return {
    account: state.login.account
  };
}

export default connect(
  mapStateToProps,
  { postData }
)(SignIn);
