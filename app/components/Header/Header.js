import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

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
    const { updateNavSetting, navSetting } = this.props;
    const { navState } = this.state;
    this.setState(() => ({
      navState: !navState
    }));
    updateNavSetting(!navSetting);
  };

  handleItemLeave= () => {
    const { updateNavSetting } = this.props;
    updateNavSetting(false);
  }

  handleNavHover= () => {
    const { match, updateNavSetting } = this.props;
    this.setState(() => ({
      navState: true
    }));
    // if (match.path === '/') {
    //   updateNavSetting(true);
    // }
  }

  handleNavLeave= () => {
    const { match, updateNavSetting } = this.props;
    this.setState(() => ({
      navState: false
    }));
    // if (match.path === '/') {
    //   updateNavSetting(false);
    // }
  }

  handleItemHover(item) {
    const { match, portfolioCurrent, updatePortfolioNext, updateNavSetting } = this.props;
    if (match.path === '/') {
      updatePortfolioNext(item);
      updateNavSetting(true);
    } else if (match.path === '/work' && portfolioCurrent.id !== item.id) {
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
              {match.path === '/' ? <h1>Camila Mercado</h1> : <Link className="router-link" to="/"> <h1>Home</h1> </Link>}
              <span>❦</span>
            </div>
            <div className="nav-container">
              <ul>
                <h1>Projects</h1>
                <span>❦</span>
                {portfolio.map((item) => <li className={item.id === portfolioCurrent.id ? 'active' : null} key={item.id} onMouseEnter={this.handleItemHover.bind(this, item)} onMouseLeave={this.handleItemLeave}><Link to={`/work/${item.id}`}>{item.projectTitle}</Link></li>)}
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
            <h1>Camila Mercado</h1>
          </div>
          <div
            className="nav-container"
          >
            <Link className="router-link" to="/work/software-studios">
              Work
            </Link>
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
