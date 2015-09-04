var React = require('react-native');
var BlurView = require('react-native-blur').BlurView;

var {
  View,
  Text,
  StyleSheet,
  Image,
  Component
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gray'
  },

  headerImg: {
    height: 200
  },

  headerContainer: {
    height: 200
  },

  blur: {
    height: 200
  },

  profileImg: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    marginTop: 80,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white'
  },

  textName: {
    width: 150,
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 12,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)'
  }

});

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.profile);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={{uri: this.props.profile.avatar_url}} style={styles.headerImg}>
            <Image source={{uri: this.props.profile.avatar_url}} style={styles.profileImg} />
            <Text style={styles.textName}>{this.props.profile.name}</Text>
          </Image>
        </View>
      </View>
    );
  }
};

module.exports = Profile;
