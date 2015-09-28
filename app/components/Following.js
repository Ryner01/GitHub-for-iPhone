var React = require('react-native');
var Device = require('react-native-device');
var DeviceWidth = Device.width;
var api = require('../utils/api.js');
var FollowList = require('./FollowList.js');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var {
  View,
  Text,
  StyleSheet,
  Component,
  TouchableHighlight,
} = React;

var styles = StyleSheet.create({

  followContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
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

class Following extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props.profile);
	}

	handlePress(switchFollow, name) {
    api.getFollowOrFollowers(switchFollow, name)
      .then((res) => {
        this.props.navigator.push({
          title: capitalizeFirstLetter(switchFollow),
          component: FollowList,
          passProps: {list: res, navigator: this.props.navigator}
        });
      });
	}

	render() {
		return (
			<View style={styles.followContainer}>
				<TouchableHighlight onPress={this.handlePress.bind(this, 'following', this.props.profile.login)} underlayColor='#fff'>
      		<View style={styles.followText}>
        		<Text style={styles.followTextActual}>{this.props.profile.following}</Text>
        		<Text style={styles.followLabel}>Following</Text>
        	</View>
       	</TouchableHighlight>
       	<TouchableHighlight onPress={this.handlePress.bind(this, 'followers', this.props.profile.login)} underlayColor='#fff'>
        	<View style={styles.followText}>
        		<Text style={styles.followTextActual}>{this.props.profile.followers}</Text>
        		<Text style={styles.followLabel}>Followers</Text>
      		</View>
      	</TouchableHighlight>
      </View>
		);
	}
}

module.exports = Following;
