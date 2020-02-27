/**
 * Gets the repositories of the user from Github
 */

import {
  portfolioLoaded
} from 'containers/App/actions';


/**
 * Github repos request/response handler
 */
export function* getPortfolio() {
  const portfolio = 'PORTFOLIO ENTRY';
  try {
    portfolioLoaded(portfolio);
  } catch (err) {
    yield err;
  }
}
