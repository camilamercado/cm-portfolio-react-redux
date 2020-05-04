/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import './style.scss';
import Marble from '../../images/marble-blue.png';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { navState: false };
  }

  componentDidMount() {
    const { updateNavSetting } = this.props;
    updateNavSetting(false);
  }

  handleClick = () => {
    const { navState } = this.state;
    this.setState(() => ({
      navState: !navState
    }));
  };

  handleItemLeave= () => {
    const { updateNavSetting } = this.props;
    updateNavSetting(false);
  }

  handleNavHover= () => {
    const { match } = this.props;
    if (match.path !== '/') {
      this.setState(() => ({
        navState: true
      }));
    }
  }

  handleNavLeave= () => {
    const { match } = this.props;
    if (match.path !== '/') {
      this.setState(() => ({
        navState: false
      }));
    }
  }

  handleItemHover(item) {
    const { match, portfolioCurrent, updatePortfolioNext, updateNavSetting } = this.props;
    console.log("hover")
    if (match.path === '/') {
      updatePortfolioNext(item);
      updateNavSetting(true);
    } else if (match.path === '/projects' && portfolioCurrent.id !== item.id) {
      updatePortfolioNext(item);
      updateNavSetting(true);
    }
  }

  render() {
    const { match, portfolio, portfolioCurrent } = this.props;
    const { navState } = this.state;
    if (portfolio.length > 2) {
      return (
        <div
          className={navState ? 'header --isActive' : 'header --isInactive'}
          role="button"
          tabIndex="0"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
          onMouseEnter={this.handleNavHover}
          onMouseLeave={this.handleNavLeave}
        >
          <div className="nav-bar">
            <div className="nav-container">
              {match.path === '/' ? <span>CM</span> : <Link className="router-link" to="/"> <h1>Home</h1> </Link>}
              <span>❦</span>
            </div>
            <div className="nav-container">
              <img className="marble" alt="beautiful, round" height="100px" width="100px" src={Marble} />
              <ul>
                <h1>Projects</h1>
                <span>❦</span>
                {portfolio.map((item) =>
                  // eslint-disable-next-line implicit-arrow-linebreak
                  <li
                    className={item.id === portfolioCurrent.id ? 'active' : null}
                    key={item.id}
                    onMouseEnter={isMobile ? this.handleItemHover.bind(this, item) : null}
                    onMouseLeave={isMobile ? this.handleItemLeave : null}
                  >
                    <Link to={`/projects/${item.id}`}>{item.projectTitle}</Link>
                  </li>)
                }
              </ul>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div
        className="header"
        role="button"
        tabIndex="0"
        onMouseEnter={this.handleNavHover.bind(this, 'home')}
        onMouseLeave={this.handleNavLeave.bind(this, 'home')}
      >
        <div className="nav-bar">
          <div className="nav-container">
            <h1>CM ❦</h1>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  match: PropTypes.object,
  portfolio: PropTypes.array,
  portfolioCurrent: PropTypes.object,
  updatePortfolioNext: PropTypes.func,
  navSetting: PropTypes.bool,
  updateNavSetting: PropTypes.func,
};

export default Header;
