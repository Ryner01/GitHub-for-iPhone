var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  Image,
} = React;

var styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20
  },

  label: {
    marginTop: 5,
    backgroundColor: '#e8e8e8',
    flexDirection: 'row',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },

  repositoryIcon: {
    marginLeft: 5,
    marginTop: 2,
    height: 20,
    width: 20,
    alignSelf: 'center'
  },

  labelText: {
    fontSize: 20,
    padding: 7
  }

});

class PopularRepositories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <Image source={require('image!repository')} resizeMode='contain' style={styles.repositoryIcon} />
          <Text style={styles.labelText}>Popular Repositories</Text>
        </View>
      </View>
    );
  }

}

module.exports = PopularRepositories;
