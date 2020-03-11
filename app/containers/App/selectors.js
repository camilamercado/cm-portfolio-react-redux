import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

const selectRoute = (state) => state.router;

const makeSelectPortfolio = () => createSelector(
  selectGlobal,
  (globalState) => globalState.portfolio
);

const makeSelectPortfolioCurrent = () => createSelector(
  selectGlobal,
  (globalState) => globalState.portfolioCurrent
);

const makeSelectPortfolioNext = () => createSelector(
  selectGlobal,
  (globalState) => globalState.portfolioNext
);

const makeSelectMediaSetting = () => createSelector(
  selectGlobal,
  (globalState) => globalState.mediaSetting
);

const makeSelectNavSetting = () => createSelector(
  selectGlobal,
  (globalState) => globalState.navSetting
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location
);

export {
  selectGlobal,
  makeSelectPortfolio,
  makeSelectLocation,
  makeSelectPortfolioCurrent,
  makeSelectPortfolioNext,
  makeSelectNavSetting,
  makeSelectMediaSetting,
};
