var React = require('react-native');
var api = require('../utils/api.js');

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

  repoName: {
    padding: 10,
    borderWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0)',
    borderTopColor: '#e8e8e8',
    borderLeftColor: '#e8e8e8',
    borderRightColor: '#e8e8e8',
    flexDirection: 'row',
  },

  repoNameText: {
    fontSize: 17,
    color: '#007AFF'
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

  starWarp: {
    flexDirection: 'row',
  },

  repoStar: {
    height: 16,
    width: 16,
    paddingLeft: 30
  },

  repoButtonWarp: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  noRepositories: {
    textAlign: 'center'
  }

});

class PopularRepositories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    };
  }

  componentWillMount() {
    let repos = api.getAuthUserRepos(this.props.token)
      .then((res) => {
        let sortRes = res.sort((a, b) => a.stargazers_count - b.stargazers_count);
        this.setState({
          repos: sortRes
        });
      });
  }

  render() {
    let popularRepos = this.state.repos;
    let list = popularRepos.map((item, index) => {
      while(index <= 6) {
        return (
          <TouchableHighlight style={styles.repoName} underlayColor="#c1c1c1" key={index}>
            <View style={styles.repoButtonWarp}>
              <Text style={styles.repoNameText}>{item.name}</Text>
              <View style={styles.starWarp}>
                <Text>{item.stargazers_count}</Text>
                <Image source={require('image!star')} resizeMode='contain' style={styles.repoStar}/>
              </View>
            </View>
          </TouchableHighlight>
        );
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.label}>
          <Image source={require('image!repository')} resizeMode='contain' style={styles.repositoryIcon} />
          <Text style={styles.labelText}>Popular Repositories</Text>
        </View>
        {list}
        <TouchableHighlight style={styles.button} underlayColor="#49aa14">
          <Text style={styles.buttonText}>View more</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

module.exports = PopularRepositories;
