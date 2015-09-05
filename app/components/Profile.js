var React = require('react-native');
var BlurView = require('../../iOS/blur-view/index.js');
var Device = require('react-native-device');
var DeviceWidth = Device.width;
var PopularRepositories = require('./PopularRepositories.js');

var {
  View,
  Text,
  StyleSheet,
  Image,
  Component,
  ScrollView
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
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
  },

  omg: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  followContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15
  },

  followText: {
    width: DeviceWidth / 2,
  },

  followTextActual: {
    textAlign: 'center',
    fontSize: 30
  },

  followLabel: {
    textAlign: 'center'
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
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image source={{uri: this.props.profile.avatar_url}} style={styles.headerImg}>
            <BlurView style={styles.omg}>
              <Image source={{uri: this.props.profile.avatar_url}} style={styles.profileImg} />
              <Text style={styles.textName}>{this.props.profile.name}</Text>
            </BlurView>
          </Image>
          <View style={styles.followContainer}>
            <View style={styles.followText}>
              <Text style={styles.followTextActual}>{this.props.profile.following}</Text>
              <Text style={styles.followLabel}>Following</Text>
            </View>
            <View style={styles.followText}>
              <Text style={styles.followTextActual}>{this.props.profile.followers}</Text>
              <Text style={styles.followLabel}>Followers</Text>
            </View>
          </View>
          <PopularRepositories token={this.props.token} profile={this.props.profile} />
        </View>
      </ScrollView>
    );
  }
};

module.exports = Profile;
