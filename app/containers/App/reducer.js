import {
  LOAD_PORTFOLIO, LOAD_PORTFOLIO_SUCCESS, UPDATE_MEDIA_SETTING, UPDATE_NAV_SETTING, SET_PORTFOLIO_CURRENT, SET_PORTFOLIO_NEXT
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
  portfolioNext: {
    projectTitle: 'Software Studios',
    id: 'software-studios',
    link: 'www.software-studios.com',
    tags: ['Shopify', 'SCSS'],
    imageUrl: 'https://lh3.googleusercontent.com/proxy/2PZp5qA7fvAPtZSb6OhaXHI2TRoVo-pAI8xwMc_sRWs3APqDHFK6C_dcakNWei6o6cXKN_a2ohW5G9fj5ohCmQ5kNpMHhG9N7A3a5PJxd7eZIpwfXXYH8rvK3JW8UECloip6bkl09dnXvx8EXuSY32DknXh0kjBxHvSWRH-NuLc6lrITx6mO53CLK5HOptezyGo',
    media: [
      {
        mediaSrc: '392824541',
        video: true,
        caption: 'Screen Recording of Software Studios Portfolio and Webstore Splashpage, 2020',
      },
      {
        mediaSrc: 'software-studios_04.png',
        caption: 'Screenshot of Software Studios Webstore Product Page, 2020',
        local: true
      },
      {
        mediaSrc: '392826478',
        video: true,
        caption: 'Screen Recording of Software Studios Webstore Product Pages, 2020',
      },
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  mediaSetting: false,
  navSetting: false,
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

    case SET_PORTFOLIO_NEXT: {
      const newState = {
        ...state,
        portfolioNext: action.entry,
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

    case UPDATE_NAV_SETTING: {
      const newState = {
        ...state,
        navSetting: action.setting,
      };
      return newState;
    }

    default:
      return state;
  }
}

export default appReducer;
