var React = require('react-native');
var { requireNativeComponent } = React;

class BlurView extends React.Component {
  render() {
    return <NativeBlurView {...this.props} />;
  }
}
BlurView.propTypes = {
};

var NativeBlurView = requireNativeComponent('BlurView', BlurView);

module.exports = BlurView;
