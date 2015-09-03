var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Image,
  LinkingIOS
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#141829',
  },

  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 100
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
    color: '#007AFF'
  },

  logo: {
    marginTop: 200,
    alignSelf: 'center',
    height: 170,
    padding: 30,
    alignItems: 'center'
  }

});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false,
      error: true
    };
  }

  handleChange(field, e) {
    this.setState({
      [field]: e.nativeEvent.text
    });
    console.log('username: ' + this.state.username + ' password: ' + this.state.password);
  }

  render() {
    return (
      <View>
        <Image
          source={require('image!logo')}
          style={styles.logo}
        />
        <TouchableHighlight style={styles.button} underlayColor="rgba(255,255,255,0)">
          <Text style={styles.buttonText}>Sign in ></Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = Login;
