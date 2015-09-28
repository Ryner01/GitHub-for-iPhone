var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} = React;

var styles = StyleSheet.create({

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
});

class RepositoryItemSmall extends React.Component {
	render() {
		return (
			<TouchableHighlight style={styles.repoName} underlayColor="#c1c1c1">
      	<View style={styles.repoButtonWarp}>
        	<Text style={styles.repoNameText}>{this.props.item.name}</Text>
          	<View style={styles.starWarp}>
            	<Text>{this.props.item.stargazers_count}</Text>
            	<Image source={require('image!star')} resizeMode='contain' style={styles.repoStar}/>
            </View>
        </View>
      </TouchableHighlight>
		);
	}
}

module.exports = RepositoryItemSmall;
