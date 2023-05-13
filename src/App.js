import React from 'react';
import ExpandingCards from './ExpandingCards';
const images=[
    { 
        id:1,
        title: "WATER",
        url:"https://images.unsplash.com/photo-1682687981630-cefe9cd73072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        poster_url:"https://images.unsplash.com/photo-1682687982468-4584ff11f88a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        description:"The seas, ocean, rivers, lakes etc form the hydrosphere. 75 % of earth's surface is covered with water. Water exists in these three forms: solid (snow), liquid (water) and gaseous (water vapour).",
        active:false
    },
    { 
        id:2,
        title: "DESERT",
        url:"https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        poster_url:"https://images.unsplash.com/photo-1682686581362-796145f0e123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        description:"A desert is a barren area of landscape where little precipitation occurs and, consequently, living conditions are hostile for plant and animal life. The lack of vegetation exposes the unprotected surface of the ground to denudation. About one-third of the land surface of the Earth is arid or semi-arid.",
        active:false
    },
    { 
        id:3,
        title: "MOUNTAIN",
        url:"https://images.unsplash.com/photo-1682688759157-57988e10ffa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        poster_url:"https://images.unsplash.com/photo-1683899266164-219e1ebdf029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        description:`Mountain Habitat
        Some mountains form when the big slabs of rock—called tectonic plates—that make up the Earth's crust crash into each other. Over millions of years, the sheets of rock push up and over one another, creating the mountain. Others form when vents in the Earth's surface erupt and spew lava out onto the ground`,
        active:false
    },
    { 
        id:4,
        title: "SKY",
        url:"https://images.unsplash.com/photo-1683611851020-7c9b9512f66f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
        poster_url:"https://images.unsplash.com/photo-1683014121668-db007fc22e85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        description:"The sky is an unobstructed view upward from the surface of the Earth. It includes the atmosphere and outer space. It may also be considered a place between the ground and outer space, thus distinct from outer space.",
        active:false
    },
    { 
        id:5,
        title: "LAND",
        url:"https://plus.unsplash.com/premium_photo-1683547021291-f06af2076ed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
        poster_url:"https://plus.unsplash.com/premium_photo-1665311515452-a9f54c4266c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        description:"Land is a gift of nature. It includes all natural resources like, woods, grasslands, villages, etc. Thus land is heterogeneous in nature. In fact, the quality of land differs a lot.",
        active:false
    }
];


const App =()=>{
    return <ExpandingCards data={images}/>
}

export default App;
