import React, { PropTypes } from 'react';
import GlobalNav from './Globals/GlobalNav';
import GlobalFooter from './Globals/GlobalFooter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#4A4A4A',
		borderColor: '#979797',
		primary1Color: '#4A4A4A',
		accent1Color: '#F5CD23'
  },
  appBar: {
    height: 50,
  },
});

const App = (props) => {
  return (
		<MuiThemeProvider muiTheme={muiTheme}>
	    <div>
				<GlobalNav />
				<div id="main">
		  		{props.children}
				</div>
	    </div>
		</MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
