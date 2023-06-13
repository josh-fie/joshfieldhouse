// ErrandApp Images
import errand_small1 from '../assets/Screenshots/ErrandApp_screenshots/Screenshot_AddErrand_Small.JPG';
import errand_small2 from '../assets/Screenshots/ErrandApp_screenshots/Screenshot_CompleteErrand_Small.JPG';
import errand_medium1 from '../assets/Screenshots/ErrandApp_screenshots/Screenshot_SettingsLightMode_Medium.JPG';
import errand_medium2 from '../assets/Screenshots/ErrandApp_screenshots/Screenshot_Stats_Medium.JPG';
import errand_large1 from '../assets/Screenshots/ErrandApp_screenshots/Screenshot_Homepage_Large.JPG';
import errand_large2 from '../assets/Screenshots/ErrandApp_screenshots/Screenshot_AddErrandsColours_Large.JPG';

// IceT Images
import iceT_small1 from '../assets/Screenshots/IceT_screenshots/Screenshot_Overlay.JPG';
import iceT_small2 from '../assets/Screenshots/IceT_screenshots/Screenshot_IceCreams_small.JPG';
import iceT_medium1 from '../assets/Screenshots/IceT_screenshots/Screenshot_Basket_Medium.JPG';
import iceT_medium2 from '../assets/Screenshots/IceT_screenshots/Screenshot_Favourites_medium.JPG';
import iceT_large1 from '../assets/Screenshots/IceT_screenshots/Screenshot_Home_Fullscreen.JPG';
import iceT_large2 from '../assets/Screenshots/IceT_screenshots/Screenshot_Teas_Fullscreen.JPG';

// MHPC Images
import mhpc_small1 from '../assets/Screenshots/Microsoft_screenshots/Screenshot_Phone_Top_Small.JPG';
import mhpc_small2 from '../assets/Screenshots/Microsoft_screenshots/Screenshot_Lower_Small.JPG';
import mhpc_medium1 from '../assets/Screenshots/Microsoft_screenshots/Screenshot_Search.JPG';
import mhpc_medium2 from '../assets/Screenshots/Microsoft_screenshots/Screenshot_Tablet_Dropdown.JPG';
import mhpc_large1 from '../assets/Screenshots/Microsoft_screenshots/Screenshot_Dropdown_Cookies_Large.JPG';
import mhpc_large2 from '../assets/Screenshots/Microsoft_screenshots/Screenshot_Mid_Large.JPG';

// Bankist (Adjusted) Images

// Data Objects

export const errandAppData = {
    description: 'Test',
    // description: 'Developed with React.js, this app incorporates React hooks, react router plugin and functional components. The errandapp provides a place where a user can add an errand to the errand list by clicking on the map at a destination. The Geolocation API is used to identify the user's location to center the map and Leaflet.js is used to handle clicks on the map to identify coordinates for destinations and add markers onto the map.',
    links: {
        github: 'https://github.com/josh-fie/ErrandApp',
        live: 'https://errandapp.netlify.app'
    },
    images: [errand_small1, errand_small2, errand_medium1, errand_medium2, errand_large1, errand_large2]
};

export const iceTAppData = {
    description: 'This application provides an ordering interface for placing an ice-cream and tea order, favouriting your orders to localStorage, and receiving an order number upon placement. This app was built using vanilla Javascript, HTML and CSS without frameworks.',
    links: {
        github: 'https://github.com/josh-fie/IceT-',
        live: 'https://icet-site.netlify.app'
    },
    images: [iceT_small1, iceT_small2, iceT_medium1, iceT_medium2, iceT_large1, iceT_large2]
};

export const MHPCData = {
    description: 'Test',
    links: {
        github: 'https://github.com/josh-fie/MicrosoftHomepageClone',
        live: 'https://microsofthpclone.netlify.app'
    },
    images: [mhpc_small1, mhpc_small2, mhpc_medium1, mhpc_medium2, mhpc_large1, mhpc_large2]
};