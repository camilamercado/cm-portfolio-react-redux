import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { navState: false };
  }

  handleClick = () => {
    const { navState } = this.state;
    // console.log("hello", navState);
    this.setState(() => ({
      navState: !navState
    }));
  };

  render() {
    const { match, portfolio, portfolioCurrent } = this.props;
    const { navState } = this.state;
    if (match.path === '/work' && portfolio.length > 2) {
      return (
        <div
          className={navState ? 'header --isActive' : 'header --isInactive'}
          role="button"
          tabIndex="0"
          onClick={this.handleClick}
          onKeyDown={this.handleClick}
        >
          <div className="nav-bar">
            <Link className="router-link" to="/">
            HOME
            </Link>
            <ul>
              <h1>Work</h1>
              {portfolio.map((item) => <li className={item.id === portfolioCurrent.id ? 'active' : null} key={item.id}><Link to={`${match.path}/${item.id}`}>{item.projectTitle}</Link></li>)}
            </ul>
          </div>
        </div>
      );
    }
    return (
      <div className="header">
        <div className="nav-bar">
          <h1>Camila Mercado</h1>
          <Link className="router-link" to="/work/software-studios">
            Work
          </Link>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  match: PropTypes.object,
  portfolio: PropTypes.array,
  portfolioCurrent: PropTypes.object,
};

export default Header;
