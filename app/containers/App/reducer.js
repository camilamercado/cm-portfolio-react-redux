import {
  LOAD_PORTFOLIO, LOAD_PORTFOLIO_SUCCESS, UPDATE_MEDIA_SETTING, SET_PORTFOLIO_CURRENT
} from './constants';

// The initial state of the App
export const initialState = {
  portfolio: [
    {
      projectTitle: 'Software Studios', link: 'www.software-studios.com', tags: ['Shopify', 'SCSS'], media: [{ mediaSrc: 'software-studios_04.png', caption: 'Felicia', local: true }]
    }
  ],
  portfolioCurrent: {
    projectTitle: 'Software Studios', link: 'www.software-studios.com', tags: ['Shopify', 'SCSS'], media: [{ mediaSrc: 'software-studios_04.png', caption: 'Felicia', local: true }]
  },
  mediaSetting: false,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PORTFOLIO: {
      const newState = {
        ...state,
        portfolio: false,
      };
      return newState;
    }

    case SET_PORTFOLIO_CURRENT: {
      const newState = {
        ...state,
        portfolioCurrent: action.entry,
      };
      return newState;
    }

    case LOAD_PORTFOLIO_SUCCESS: {
      const newState = {
        ...state,
        portfolio: action.portfolio,
      };
      return newState;
    }

    case UPDATE_MEDIA_SETTING: {
      const newState = {
        ...state,
        mediaSetting: action.setting,
      };
      return newState;
    }

    default:
      return state;
  }
}

export default appReducer;
