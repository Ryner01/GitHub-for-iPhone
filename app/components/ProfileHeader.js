var React = require('react-native');
var BlurView = require('../../iOS/blur-view/index.js');
var Following = require('./Following');

var {
  View,
  Text,
  StyleSheet,
  Image,
  Component,
} = React;

var styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'gray'
  },

  headerImg: {
    height: 200
  },

  headerContainer: {
    flex: 1,
    height: 200
  },

  blur: {
    height: 200
  },

  profileImg: {
    height: 70,
    width: 70,
    alignSelf: 'center',
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

});

class ProfileHeader extends React.Component {
	render() {
		return (
			<View>
			  <View style={styles.headerContainer}>
          <Image source={{uri: this.props.profile.avatar_url}} style={styles.headerImg}>
            <BlurView style={styles.omg}>
              <Image source={{uri: this.props.profile.avatar_url}} style={styles.profileImg} />
              <Text style={styles.textName}>{this.props.profile.name}</Text>
            </BlurView>
          </Image>
       	</View>
        <Following navigator={this.props.navigator} profile={this.props.profile} />
      </View>
		);
	}
}

module.exports = ProfileHeader;
