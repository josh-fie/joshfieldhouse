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

    description: 'Developed with React.js, this app incorporates React hooks, react router plugin and functional components. The user adds an errand by clicking on the map at a errand location and adding a name and description. The Geolocation API is used to identify the users location to center the map and Leaflet package is used to handle clicks and identify coordinates and add markers onto the map which then adds the errands to the errand list. From here the user prioritises, completes and deletes errands. Customisability includes larger text and light mode.',
    links: {
        github: 'https://github.com/josh-fie/ErrandApp',
        live: 'https://errandapp.netlify.app'
    },
    images: [
        {
            src: errand_small1,
            id: 1},
        {   src: errand_small2,
            id: 2},
        {   src: errand_medium1,
            id: 3},
        {   src: errand_medium2,
            id: 4}, 
        {   src: errand_large1,
            id: 5},
        {   src: errand_large2,
            id: 6}]
};

export const iceTAppData = {
    description: 'This application provides an ordering interface for placing an ice-cream and tea order. A combination of items up to a basket maximum of 10 is allowed. Order price is calculated dynamically within the basket and upon order completion the user can favourite the order to localStorage whereupon it will be available upon future app visits. The user is then given an order number upon order placement. This app was built using vanilla Javascript DOM manipulation, HTML and CSS.',
    links: {
        github: 'https://github.com/josh-fie/IceT-',
        live: 'https://icet-site.netlify.app'
    },
    images: [
        {   src: iceT_small1,
            id: 7},
        {   src: iceT_small2,
            id: 8},
        {   src: iceT_medium1,
            id: 9}, 
        {   src: iceT_medium2,
            id: 10},
        {   src: iceT_large1,
            id: 11},
        {   src: iceT_large2,
            id: 12}]
};

export const MHPCData = {
    description: 'This project showcases a unique design of the Microsoft Homepage based on snapshots of the homepage from 2022 April 2023 made to accommodate responsiveness across all sizes from small mobile devices to large screens with media queries. No code was copied and the design was constructed from scratch implementing manual and automated slideshow, dropdowns, back to top button and search bar visibility to match the true site. This design was constructed with HTML, CSS and vanilla Javascript.',
    links: {
        github: 'https://github.com/josh-fie/MicrosoftHomepageClone',
        live: 'https://microsofthpclone.netlify.app'
    },
    images: [
        {   src: mhpc_small1,
            id: 13},
        {   src: mhpc_small2,
            id: 14},
        {   src: mhpc_medium1,
            id: 15}, 
        {   src: mhpc_medium2,
            id: 16},
        {   src: mhpc_large1,
            id: 17},
        {   src: mhpc_large2,
            id: 18}]
};