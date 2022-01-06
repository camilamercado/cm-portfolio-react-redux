const data = [
  {
    projectTitle: 'Kinfolk History',
    id: 'kinfolk',
    date: '2021',
    link: 'https://kinfolkhistory.com/',
    linkTitle: 'https://kinfolkhistory.com/',
    tags: ['Vue.js', 'Vuex', 'PDF.js'],
    imageUrl: 'software-studios_00.png',
    media: [
      {
        mediaSrc: '539183039',
        video: true,
        caption: 'Screen recording of Kinfolk History website, 2021',
      }
    ],
    text: '<p>The Kinfolk History Web Portal was made as a part of <a href="https://www.moversandshakersnyc.com/monuments-project" target="_blank">The Monuments Project</a>– a catalog of augmented reality monuments of women, people of color and the LGBTQIA+ icons produced by <a href="https://www.moversandshakersnyc.com/" target="_blank">Movers & Shakers NYC</a>. The projects first release included an <a href="https://apps.apple.com/us/app/kinfolk-ar/id1510605922" target="_blank">AR app</a> that allows users to bring history to life with augmented reality monuments celecbrating six Black icons, and a Web Portal which provides further access to pedagocial and textual resources organized by the <a href="https://www.instagram.com/langstonleague/?hl=en" target="_blank">Langston League</a> corresponding to the figures celebrated in the app.</p></p>The AR App and Web development was done by <a href="https://www.pariahinteractive.com/portfolio/kinfolk" target="_blank">Pariah Interactive</a>, who brought me on to handle the front-end development using Vue.JS, including features such as the in-browser PDF viewer and predictive search bar.</p><h3>Featured Component Libraries</h3><ul><li>–The PDF Viewer utilizes the <a href="https://mozilla.github.io/pdf.js/" target="_blank">Pdf.js</a> library and was sourced from a great <a href="https://github.com/rossta/vue-pdfjs-demo" target="_blank">demo</a> by <a href="https://github.com/rossta" target="_blank">@rossta</a></li><li>–Predictive search built using the <a href="https://www.npmjs.com/package/@trevoreyre/autocomplete-vue" target="_blank">Autocomplete-vue</a> package</li><li>–“Did you mean” page built using the <a href="https://www.npmjs.com/package/fastest-levenshtein" target="_blank">fastest-levenshtein</a> package</li></ul><h3>Press</h3><ul><li>–Hyperallergic (2021, February 11). <em>An AR App Wants to Correct the Scarcity of Monuments to Historical Leaders of Color</em>. Retrieved from <a href="https://hyperallergic.com/621437/monuments-project-app-ar/" target="_blank">https://hyperallergic.com/621437/monuments-project-app-ar/</a></li><li>–The Hill (2021, January 29). <em>How AR is bringing Black history to life for middle schoolers across America</em>. Retrieved from <a href="https://thehill.com/changing-america/enrichment/education/536562-how-vr-is-bringing-black-history-to-life-for-middle" target="_blank">https://thehill.com/changing-america/enrichment/education/536562-how-vr-is-bringing-black-history-to-life-for-middle</a><li></u>',
  },
  {
    projectTitle: 'Dept. Architecture',
    id: 'department',
    date: '2020',
    link: '',
    linkTitle: '',
    tags: ['Kirby CMS', 'PHP', 'Javascript'],
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
    link: 'https://ancient-escarpment-06918.herokuapp.com/search/11205',
    linkTitle: 'https://www.radishtogo.com/',
    tags: ['Node', 'EJS', 'Express', 'MongoDB', 'Airtable API', 'Heroku'],
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
    // theme: 'blue',
    date: '2021–ongoing',
    link: 'https://kiwi-nguyen.herokuapp.com/',
    tags: ['React', 'Shopify', 'Shopify Buy SDK'],
    media: [
      {
        mediaSrc: '659445416',
        video: true,
        caption: 'Screen recording of Kiwi Phong Nguyen Jewelry website,, 2021',
      },
      {
        mediaSrc: 'kpn-2021-00.png',
        caption: 'Screenshot of Kiwi Phong Nguyen Jewelry website, 2021',
        local: true
      },
      {
        mediaSrc: 'kpn-2021-1.png',
        caption: 'Screenshot of Kiwi Phong Nguyen Jewelry website, 2021',
        local: true
      },
      {
        mediaSrc: 'kpn-2021-2.png',
        caption: 'Screenshot of Kiwi Phong Nguyen Jewelry website, 2021',
        local: true
      },
    ],
    text: '<p>Playful & interactive website for Kiwi Phong Nguyen Jewelry built with React and the Shopify Buy Javascript SDK. This website was designed by me & development is still ongoing.<p>',
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
    tags: ['HTML', 'CSS'],
    imageUrl: 'https://vignette.wikia.nocookie.net/darkstalkers/images/e/e1/NWD_Felicia_01.png/revision/latest?cb=20110416215551',
    media: [
      {
        mediaSrc: '396036203',
        video: true,
        caption: 'Screen Recording of The World Is Unknown, by Carolyn Lazard. Published by Triple Canopy on April 19, 2019.',
      },
    ],
    text: '<p>For the 24th Issue of Triple Canopy’s online magazine “Risk Pool”, I helped to develop an interactive web treatment for a custom font created for the issue by designer <a href="https://www.carypotter.com/" target="_blank">Cary Potter</a>. The font, “Arial All” was designed to highlight the accessibility failings of the Arial Typeface for those with reading disabilities through the construction of an appended armature with adjusted forms.\n\n By hovering over the typeface, a transition is activated which removes the highlighted armature and reveals the original Arial font. Because traditional font formats do not support multi-colored fonts, this effect had to be achieved by the layering of multiple fonts in the browser with CSS. The initial developer on the project was Maxwell Simmer, Triple Canopy’s lead front-end developer.\n\n Media sourced from project “The World Is Unknown” by Carolyn Lazard, published by Triple Canopy on April 19, 2019.</p>'
  },
  {
    projectTitle: 'Nightmare Wallpaper',
    id: 'nightmare-wallpaper',
    date: '2018',
    link: 'https://www.canopycanopycanopy.com/issues/24/contents/nightmare-wallpaper',
    linkTitle: 'https://www.canopycanopycanopy.com/nightmare-wallpaper',
    tags: ['HTML', 'Javascript', 'CSS'],
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
    tags: ['Node', 'Express', 'Gulp', 'HTML', 'CSS', 'Javascript'],
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
    projectTitle: 'I Ching/Binary Dial',
    id: 'i-ching-dial',
    date: '2016',
    theme: 'dark',
    tags: ['React', 'D3'],
    imageUrl: 'https://lh3.googleusercontent.com/proxy/2PZp5qA7fvAPtZSb6OhaXHI2TRoVo-pAI8xwMc_sRWs3APqDHFK6C_dcakNWei6o6cXKN_a2ohW5G9fj5ohCmQ5kNpMHhG9N7A3a5PJxd7eZIpwfXXYH8rvK3JW8UECloip6bkl09dnXvx8EXuSY32DknXh0kjBxHvSWRH-NuLc6lrITx6mO53CLK5HOptezyGo',
    media: [
      {
        mediaSrc: '515502945',
        class: 'full-width',
        video: true,
        caption: 'Screen recording of a graphical representation of the Shao Yong sequence in radial and bar format.',
      },
      {
        mediaSrc: '396309491',
        class: 'full-width',
        video: true,
        caption: 'Screen recording of a graphical representation of the Shao Yong sequence in radial format data glitching.',
      },
      {
        mediaSrc: '515503083',
        class: 'full-width',
        video: true,
        caption: 'Screen recording of a graphical representation of a binary table and Shao Yong sequence in bar format.',
      },
      {
        mediaSrc: 'I-Ching-Dial_01.png',
        caption: 'Screen shot of a graphical representation of the Shao Yong sequence in radial and bar format.',
        local: true
      },
    ],
    text: '<p>Graphical experimentation on the relationship between the Shao Yong sequence and binary code. Each graph utilizes the same data set comprised of binary values 0–64. The initial sequence was created in the 11th century/Song synasty by Chinese poet, philospher and historian Shao Yong(邵雍)– six centuries before the attributed advent of binary code by German mathematician Gottfried Wilhelm Leibniz in his 1703 paper <em>“Explanation of Binary Arithmetic”</em>.</p>',
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
];

export default data;
