/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_PORTFOLIO,
  LOAD_PORTFOLIO_SUCCESS,
  SET_PORTFOLIO_CURRENT,
  SET_PORTFOLIO_NEXT,
  UPDATE_MEDIA_SETTING,
  UPDATE_NAV_SETTING,
} from './constants';

export function loadPortfolio() {
  return { type: LOAD_PORTFOLIO };
}

export function portfolioLoaded(portfolio) {
  return {
    type: LOAD_PORTFOLIO_SUCCESS,
    portfolio,
  };
}

export function updatePortfolioCurrent(entry) {
  return {
    type: SET_PORTFOLIO_CURRENT,
    entry,
  };
}

export function updatePortfolioNext(entry) {
  return {
    type: SET_PORTFOLIO_NEXT,
    entry,
  };
}

export function updateMediaSetting(setting) {
  return {
    type: UPDATE_MEDIA_SETTING,
    setting,
  };
}

export function updateNavSetting(setting) {
  return {
    type: UPDATE_NAV_SETTING,
    setting,
  };
}
