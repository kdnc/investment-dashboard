import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './NavBar.css'

const INVESTMENTS_TAB_VALUE = 'investments';
const ABOUT_TAB_VALUE = 'about';

/**
 * Nav bar component which displays on top of the page
 */
class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabValue: INVESTMENTS_TAB_VALUE
    };
    this.links = [
      {name: 'About', url: '/about', tabValue: ABOUT_TAB_VALUE},
    ];
    this.linksComponents = this.links.map((link) => {
      return (
        <Tab
          label={link.name} value={link.tabValue} component={Link} to={link.url} key={link.tabValue} exact='true'/>
      );
    });
  }

  /**
   * Handle the tab change
   * @param {object} event - Tab change event
   * @param {string} tabValue - Value state of the tab
   */
  handleTabChange = (event, tabValue) => {
    this.setState({tabValue});
  };

  render() {
    const {tabValue} = this.state;
    return (
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' color='inherit' noWrap>
            Investment Dashboard
          </Typography>
          <div className='tabs-container'>
            <Tabs value={tabValue} onChange={this.handleTabChange}>
              <Tab value={INVESTMENTS_TAB_VALUE} label='Investments' component={Link} to='/' exact='true'/>
              {this.linksComponents}
            </Tabs>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;