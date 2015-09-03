var React = require('react-native');
var cliendId = require('../../appkey.js');
var qs = require('shitty-qs');

var state = Math.random().toString();

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

  componentDidMount() {
    LinkingIOS.addEventListener('url', this.handleUrl);
  }

  handlePress() {
    let clientKey = cliendId.app_key;

    LinkingIOS.openURL(
      `https://github.com/login/oauth/authorize?client_id=${clientKey}&scope=user&redirect_uri=githubforiphone://&state=${state}`
    );
  }

  handleUrl(e) {
    let clientKey = cliendId.app_key;
    let clientSecret = cliendId.client_secret;
    let url = e.url.split('?');

    let data = qs(url[1]);

    fetch(`https://github.com/login/oauth/access_token?client_id=${clientKey}&client_secret=${clientSecret}&code=${data.code}&state=${data.state}`)
      .then((response) => response.text())
      .then((resText) => {
        let resArray = qs(resText);
        console.log(resArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <Image
          source={require('image!logo')}
          style={styles.logo}
        />
        <TouchableHighlight onPress={this.handlePress} style={styles.button} underlayColor="rgba(255,255,255,0)">
          <Text style={styles.buttonText}>Sign in ></Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = Login;
