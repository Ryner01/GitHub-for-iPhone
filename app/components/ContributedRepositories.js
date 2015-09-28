var React = require('react-native');
var RepositoryItemSmall = require('./RepositoryItemSmall.js');

var {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },

  button: {
    height: 40,
    backgroundColor: '#5BC724',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: 'center'
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
});

class ContributedRepositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
    };
  }

  render() {

    let popularRepos = this.props.repos;
    let list = popularRepos.map((item, index) => {
      while(index <= 6) {
        return (
          <RepositoryItemSmall item={item} key={index} />
        );
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <Image source={require('image!repository')} resizeMode='contain' style={styles.repositoryIcon} />
          <Text style={styles.labelText}>{this.props.name} Repositories</Text>
        </View>
        {list}
        <TouchableHighlight style={styles.button} underlayColor="#49aa14">
          <Text style={styles.buttonText}>View more</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

module.exports = ContributedRepositories;
