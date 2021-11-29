const womens = require('../assets/images/cat-women.png')
const mens  = require('../assets/images/cat-man.png')
const phones  = require('../assets/images/cat-phone.png')
const computers  = require('../assets/images/cat-computer.png')
const smarthome  = require('../assets/images/cat-women.png')
const art  = require('../assets/images/cat-art.png')
const baby  = require('../assets/images/cat-baby.png')
const sport  = require('../assets/images/cat-sport.png')

const catalogue =[
    {
        id:1,
        name:"Women's Fashion",
        image:womens

    },
    {
        id:2,
        name:"Men's Fashion",
        image:mens
        
    },
    {
        id:3,
        name:"Phones",
        image:phones
        
    },
    {
        id:4,
        name:"Computers",
        image:computers
        
    },
    {
        id:5,
        name:"Smart Home",
        image:smarthome
        
    },
    {
        id:6,
        name:"Art & Craft",
        image:art
        
    },
    {
        id:7,
        name:"Baby",
        image:baby
        
    },
    {
        id:8,
        name:"Sport",
        image:sport
        
    }
]

const bannerData = [
    {
        id:1,
        name:"Fashion Sale"
    },
    {
        id:2,
        name:"Weekend offer"
    },
    {
        id:3,
        name:"Electronic Flash"
    },
    {
        id:4,
        name:"Monday Cyber"
    }
]

const subcategories = [
    {

        id:1,
        name:'All'
    },
    {
        id:2,
        name:'Shoes'
    },
    {
        id:3,
        name:'Jewelry'
    },
    {
        id:4,
        name:'Watches'
    },
    {
        id:5,
        name:'Handbags'
    },
    {
        id:6,
        name:'Access'
    },
    {
        id:7,
        name:"Men's Fashion"
    },
    {
        id:8,
        name:'Womens Fashion'
    },
    

  ];


export default {catalogue, bannerData, subcategories}