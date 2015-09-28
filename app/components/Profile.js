var React = require('react-native');
var PopularRepositories = require('./PopularRepositories.js');
var ContributedRepositories = require('./ContributedRepositories.js');
var ProfileBasicInfo = require('./ProfileBasicInfo.js');
var ViewFeedPrivate = require('./ViewFeedPrivate.js');
var ProfileHeader = require('./ProfileHeader.js');
var api = require('../utils/api.js');

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
    height: 1000,
    backgroundColor: '#f5f5f5'
  },
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reposContrib: [],
      hasContRepos: false,
      hasPopularRepos: false,
      popularRepos: []
    }
  }

  componentDidMount() {
   let repos = api.getContributedRepos(this.props.profile)
      .then((res) => {
        if (res !== null) {
          let sortRes = res.sort((a, b) => a.stargazers_count - b.stargazers_count);
          this.setState({
            reposContrib: sortRes,
          });
        };
    });

    let popularRepos = api.getAuthUserRepos(this.props.token)
      .then((res) => {
        let sortRes = res.sort((a, b) => a.stargazers_count - b.stargazers_count);
        this.setState({
          popularRepos: sortRes,
        });
      });
  }

  renderList(name, list) {
    return(
      <ContributedRepositories name={name} repos={list} />
    );
  }

  renderEmpty() {
    return(
      <View></View>
    );
  }

  render() {
    let popularRepositories = (this.state.popularRepos.length !== 0) ? this.renderList('Popular', this.state.popularRepos) : this.renderEmpty();
    let contributedRepositoriesList = (this.state.reposContrib.length !== 0) ? this.RenderList('Contributed', this.state.reposContrib) : this.renderEmpty();

    return (
      <ScrollView style={styles.container}>
        <ProfileHeader navigator={this.props.navigator} profile={this.props.profile} />
        <ProfileBasicInfo profile={this.props.profile} />
        {popularRepositories}
        {contributedRepositoriesList}
        <ViewFeedPrivate profile={this.props.profile} />
      </ScrollView>
    );
  }
};

module.exports = Profile;
