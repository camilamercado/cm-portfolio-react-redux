const data = [
  {
    projectTitle: 'Dept. Architecture',
    id: 'department',
    date: '2020',
    link: 'dept.llc',
    tags: ['Kirby', 'PHP', 'SCSS', 'Javascript'],
    imageUrl: 'software-studios_00.png',
    media: [
      {
        mediaSrc: '514851638',
        video: true,
        caption: 'Screenshot of Department Architecture, 2020',
      },
      {
        mediaSrc: 'Department_04.png',
        caption: 'Screenshot of Department Architecture Projects Page, 2020',
        local: true
      },
      {
        mediaSrc: 'Department_06.png',
        caption: 'Screenshot of Department Architecture Project Page, 2020',
        local: true
      },
      {
        mediaSrc: 'Department_07.png',
        caption: 'Screenshot of Department Architecture Project Page, 2020',
        local: true
      },
    ],
    text: '<p>Website for Dept. (Department, LLC), a landscape architecture and urban design studio. Design by <a href="https://www.carypotter.com/" target="_blank">Cary Potter</a>.</p><p>Portfolio website built with the Kirby CMS, with advanced features allowing for project filtering by type, customizable grid layout for images on project pages, and randomizing image scatter on the home page.',
  },
  {
    projectTitle: 'RADISH',
    id: 'radish',
    theme: 'light',
    date: '2020',
    link: 'https://www.radishtogo.com/',
    linkTitle: 'https://www.radishtogo.com/',
    tags: ['Node', 'EJS', 'Express', 'MongoDB', 'Airtable API', 'Heroku' ],
    imageUrl: 'https://lh3.googleusercontent.com/proxy/2PZp5qA7fvAPtZSb6OhaXHI2TRoVo-pAI8xwMc_sRWs3APqDHFK6C_dcakNWei6o6cXKN_a2ohW5G9fj5ohCmQ5kNpMHhG9N7A3a5PJxd7eZIpwfXXYH8rvK3JW8UECloip6bkl09dnXvx8EXuSY32DknXh0kjBxHvSWRH-NuLc6lrITx6mO53CLK5HOptezyGo',
    media: [
      {
        mediaSrc: 'RADISH_02.png',
        caption: 'Screenshot of RADISH website search results page, 2021',
        local: true
      },
      {
        mediaSrc: 'RADISH_03.png',
        caption: 'Screenshot of RADISH website search results page in mobile, 2021',
        local: true
      },
      {
        mediaSrc: 'RADISH_04.png',
        caption: 'Screenshot of RADISH website search results page in mobile, 2021',
        local: true
      },
    ],
    text: '<p>An online database/directory of New York City based Restaurants offering direct delivery to consumers instead of (or in addition to) food delivery Apps such as Grubhub and Seamless. The project is comprised of the following components:</p><h3>Directory Website</h3><p>A location based directory which allows users to filter search results by restaurant and delivery types. Built with a Node.js Express server, and EJS template rendering. Website designed with <a href="http://riaroberts.net/" target="_blank">Ria Roberts</a>, who was also responsible for the product branding.</p><h3>Database Client</h3><p>This project uses a MongoDB database making API to data managed on an Airtable admin interace. This pattern enables administrators to directly approve, organize, and edit information submitted by participating Restaurants.</p>'
  },
  {
    projectTitle: 'Kiwi Phong Nguyen Jewelry',
    id: 'kiwi-phong-nguyen-jewelry',
    theme: 'blue',
    date: '2020',
    link: 'https://kiwinguyen.com/',
    tags: ['HTML', 'SCSS', 'Javascript'],
    media: [
      {
        mediaSrc: '514744528',
        video: true,
        caption: 'Screen Recording of Kiwi Phong Nguyen Jewelry website, 2020',
      },
      {
        mediaSrc: 'kiwi-phong-nguyen-jewelry_02.jpg',
        caption: 'Screenshot of Kiwi Phong Nguyen Jewelry website, 2020',
        local: true
      },
      {
        mediaSrc: 'kiwi-phong-nguyen-jewelry_04.png',
        caption: 'Screenshot of Kiwi Phong Nguyen Jewelry website, 2020',
        local: true
      },
    ],
    text: '<p>Playful placeholder website for Kiwi Phong Nguyen Jewelry.<br/>Deployed on Github Pages.<p>',
  },
  {
    projectTitle: 'Software Studios',
    id: 'software-studios',
    date: '2019',
    link: 'https://software-studios.com/',
    tags: ['Shopify E-Commerce', 'Liquid Templating Language', 'Javascript'],
    imageUrl: 'software-studios_00.png',
    media: [
      {
        mediaSrc: '392824541',
        video: true,
        caption: 'Screen Recording of Software Studios Portfolio and Webstore Splashpage, 2020',
      },
      {
        mediaSrc: 'software-studios_01.png',
        caption: 'Screenshot of Software Studios Portfolio, 2020',
        local: true
      },
      {
        mediaSrc: 'software-studios_02.png',
        caption: 'Screenshot of Software Studios Store, 2020',
        local: true
      },
      {
        mediaSrc: '514989301',
        video: true,
        caption: 'Screen Recording of Software Studios Print Size Toggle, 2020',
      }
    ],
    text: '<p>Custom webstore & portfolio for Software Studios, LLC built on Shopify. Features a custom feature which renders a scale model of print size options and allows users to toggle between variants.<p>',
  },
  {
    projectTitle: 'Arial All Typeface',
    id: 'risk-pool',
    date: '2019',
    link: 'https://www.canopycanopycanopy.com/issues/24/contents/the-world-is-unknown',
    linkTitle: 'https://www.canopycanopycanopy.com/the-world-is-unknown',
    tags: ['HTML', 'SCSS'],
    imageUrl: 'https://vignette.wikia.nocookie.net/darkstalkers/images/e/e1/NWD_Felicia_01.png/revision/latest?cb=20110416215551',
    media: [
      {
        mediaSrc: '396036203',
        video: true,
        caption: 'Screen Recording of The World Is Unknown, by Carolyn Lazard. Published by Triple Canopy on April 19, 2019.',
      },
    ],
    text: '<p>For the 24th Issue of Triple Canopy’s online magazine “Risk Pool”, I developed an interactive web treatment for a custom font created for the issue by designer <a href="https://www.carypotter.com/" target="_blank">Cary Potter</a>– who also designed the layout. The font, “Arial All” was designed to highlight the accessibility failings of the Arial Typeface for those with reading disabilities through the construction of an appended armature with adjusted forms.\n\n By hovering over the typeface, a transition is activated which removes the highlighted armature and reveals the original Arial font. Because traditional font formats do not support multi-colored fonts, this effect had to be achieved by the layering of multiple fonts in the browser with CSS.\n\n Media sourced from project “The World Is Unknown” by Carolyn Lazard, published by Triple Canopy on April 19, 2019.</p>'
  },
  {
    projectTitle: 'Nightmare Wallpaper',
    id: 'nightmare-wallpaper',
    date: '2018',
    link: 'https://www.canopycanopycanopy.com/issues/24/contents/nightmare-wallpaper',
    linkTitle: 'https://www.canopycanopycanopy.com/nightmare-wallpaper',
    tags: ['HTML', 'Javascript', 'SCSS'],
    imageUrl: 'https://www.fightersgeneration.com/nz3/character/rikuo-darkstalkers-revenge-artwork-high-contrast.png',
    media: [
      {
        mediaSrc: 'Nightmare-Wallpaper_03.png',
        caption: 'Screenshot of Nightmare Wallaper, 2018',
        local: true
      },
      {
        mediaSrc: '414924922',
        video: true,
        caption: 'Screen Recording of English Language version of Nightmare Wallaper, by Pak Sheung Chuen. Published by Triple Canopy on May 01, 2018.',
      },
      {
        mediaSrc: '414926011',
        video: true,
        caption: 'Screen Recording of Chinese Language version of Nightmare Wallaper, by Pak Sheung Chuen. Published by Triple Canopy on May 01, 2018.',
      },
    ],
    text: '<p>“Nightmare Wallpaper,” is a multimedia essay by Pak Sheung Chuen, design by <a href="https://www.carypotter.com/" target="_blank">Cary Potter</a>, and produced by Triple Canopy. The project was built in both English and Chinese verions, allowing readers to navigate a selection of journal entries, photographs and original artworks collected and produced by the artist to overcome the depression and sense of disempowerment that he and so many others experienced in the wake of Hong Kong’s 2014 Umbrella Movement.</p><p>“Nightmare Wallpaper” is an adaptation of an artwork that was first presented by the author in 2017 at an exhibition at Para Site in Hong Kong curated by Freya Chou.</p>',
  },
  {
    projectTitle: 'Software Studios Legacy-Sites',
    id: 'software-studios-legacy',
    date: '2016–2018',
    theme: 'dark',
    link: '',
    linkTitle: '',
    tags: [''],
    imageUrl: 'https://lh3.googleusercontent.com/proxy/2PZp5qA7fvAPtZSb6OhaXHI2TRoVo-pAI8xwMc_sRWs3APqDHFK6C_dcakNWei6o6cXKN_a2ohW5G9fj5ohCmQ5kNpMHhG9N7A3a5PJxd7eZIpwfXXYH8rvK3JW8UECloip6bkl09dnXvx8EXuSY32DknXh0kjBxHvSWRH-NuLc6lrITx6mO53CLK5HOptezyGo',
    media: [
      {
        mediaSrc: '395819438',
        video: true,
        caption: 'Screen Recording of Software Studios Website, 2015–2016',
      },
      {
        mediaSrc: '396186801',
        video: true,
        caption: 'Screen Recording Updated Software Studios Website, 2017–2019',
      },
      {
        mediaSrc: '515095716',
        video: true,
        caption: 'Screen Recording of Software Studios Portfolio, 2015–2016',
      },
    ],
    text: ''
  },
  {
    projectTitle: 'CM Portfolio',
    id: 'cm-portfolio',
    date: '2020',
    theme: 'dark',
    tags: ['React', 'Redux', 'React Router'],
    imageUrl: 'https://lh3.googleusercontent.com/proxy/2PZp5qA7fvAPtZSb6OhaXHI2TRoVo-pAI8xwMc_sRWs3APqDHFK6C_dcakNWei6o6cXKN_a2ohW5G9fj5ohCmQ5kNpMHhG9N7A3a5PJxd7eZIpwfXXYH8rvK3JW8UECloip6bkl09dnXvx8EXuSY32DknXh0kjBxHvSWRH-NuLc6lrITx6mO53CLK5HOptezyGo',
    media: [
      {
        mediaSrc: '515001496',
        video: true,
        caption: 'Screen Recording of CM Portfolio Website, 2020',
      }
    ],
    text: '<p>This portfolio was built with React ontop of of the <a href="https://github.com/flexdinesh/react-redux-boilerplate" href="_blank">react-reduct-boilerplate</a> by <a href="https://github.com/flexdinesh">@flexdinesh</a>.</p>'
  },
  // {
  //   projectTitle: 'I Ching Dial',
  //   id: 'i-ching-dial',
  //   theme: 'dark',
  //   link: 'https://web.archive.org/web/20160308193522/http://software-studios.com/',
  //   linkTitle: 'web.archive.org/software-studios.com',
  //   tags: ['HTML', 'Javascript', 'CSS'],
  //   imageUrl: 'https://lh3.googleusercontent.com/proxy/2PZp5qA7fvAPtZSb6OhaXHI2TRoVo-pAI8xwMc_sRWs3APqDHFK6C_dcakNWei6o6cXKN_a2ohW5G9fj5ohCmQ5kNpMHhG9N7A3a5PJxd7eZIpwfXXYH8rvK3JW8UECloip6bkl09dnXvx8EXuSY32DknXh0kjBxHvSWRH-NuLc6lrITx6mO53CLK5HOptezyGo',
  //   media: [
  //     {
  //       mediaSrc: '396309491',
  //       class: 'full-width',
  //       video: true,
  //       caption: 'Screen Recording of My Existential Limits To the Rectification of Past Wrongs, by Tiona Nekkia McClodden. Published by Triple Canopy on April 25, 2019.',
  //     },
  //     {
  //       mediaSrc: 'I-Ching-Dial_03.png',
  //       caption: 'Screenshot of Software Studios Webstore Product Page, 2020',
  //       local: true
  //     },
  //     {
  //       mediaSrc: 'I-Ching-Dial_02.png',
  //       caption: 'Screenshot of Software Studios Webstore Product Page, 2020',
  //       local: true
  //     },
  //     {
  //       mediaSrc: 'I-Ching-Dial_01.png',
  //       caption: 'Screenshot of Software Studios Webstore Product Page, 2020',
  //       local: true
  //     },
  //   ],
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  // },
];

export default data;
