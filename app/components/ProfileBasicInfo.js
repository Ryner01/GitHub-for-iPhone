var React = require('react-native');
var Icon = require('react-native-vector-icons/Octicons');

var {
  View,
  Text,
  Image,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  containerWarp: {
    marginTop: 30,
    marginBottom: 30
  },

  container: {
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  icon: {
    width: 16,
    height: 16
  },

  octicon: {
    width: 32,
    height: 32,
    color: 'gray',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }

});

class ProfileBasicInfo extends React.Component {
  constructor(props) {
    super(props);
  }

    render () {
      return (
        <View style={styles.containerWarp}>
            <View style={styles.container}>
              <Icon name="organization" size={32} style={styles.octicon}></Icon>
              <Text>{this.props.profile.company}</Text>
            </View>
            <View style={styles.container}>
              <Icon name="location" size={32} style={styles.octicon}></Icon>
              <Text>{this.props.profile.location}</Text>
            </View>
            <View style={styles.container}>
              <Icon name="calendar" size={32} style={styles.octicon}></Icon>
              <Text>{this.props.profile.created_at}</Text>
            </View>
            <View style={styles.container}>
              <Icon name="mail" size={32} style={styles.octicon}></Icon>
              <Text>{this.props.profile.email}</Text>
            </View>
            <View style={styles.container}>
              <Icon name="person" size={32} style={styles.octicon}></Icon>
              <Text>@{this.props.profile.login}</Text>
            </View>
          </View>
        );

    }
  }

module.exports = ProfileBasicInfo;
