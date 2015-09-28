var React = require('react-native');

var {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Image,
	TouchableHighlight
} = React;

var styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		marginTop: 30
	},

	listItem: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 8,
		alignItems: 'center'
	},

	img: {
		height: 50,
		width: 50,
		borderRadius: 8,
	},

	itemContent: {
		flex: 1,
		height: 50,
		paddingLeft: 10,
		justifyContent: 'center',
	},

	itemName: {
		fontSize: 20,
	}

});

class FollowList extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props.list);
	}

	render() {

		let list = this.props.list;

		let listRender = list.map((item, index) => {
			return(
				<TouchableHighlight underlayColor="#c1c1c1" key={index} >
					<View style={styles.listItem}>
						<Image
							source={{uri: item.avatar_url }}
							style={styles.img}
						/>
						<View style={styles.itemContent}>
							<Text style={styles.itemName}>{item.login}</Text>
						</View>
					</View>
				</TouchableHighlight>
			);
		});

		return (
			<ScrollView style={styles.container}>
				{listRender}
			</ScrollView>
		);
	}
}

module.exports = FollowList;
