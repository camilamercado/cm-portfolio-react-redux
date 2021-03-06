/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';

export const LOAD_PORTFOLIO = 'boilerplate/App/LOAD_PORTFOLIO';
export const LOAD_PORTFOLIO_SUCCESS = 'boilerplate/App/LOAD_PORTFOLIO_SUCCESS';
export const SET_PORTFOLIO_CURRENT = 'boilerplate/App/SET_PORTFOLIO_CURRENT';
export const SET_PORTFOLIO_NEXT = 'boilerplate/App/SET_PORTFOLIO_NEXT';
export const UPDATE_MEDIA_SETTING = 'boilerplate/App/UPDATE_MEDIA_SETTING';
export const UPDATE_NAV_SETTING = 'boilerplate/App/UPDATE_NAV_SETTING';
