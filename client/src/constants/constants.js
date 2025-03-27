import moonImg from '../assets/destination/image-moon.png';
import marsImg from '../assets/destination/image-mars.png';
import europaImg from '../assets/destination/image-europa.png';
import titanImg from '../assets/destination/image-titan.png';

export const navMenuData = [
    {
        id: "0",
        number: '00',
        title: "HOME",
    },
    {
        id: "1",
        number: '01',
        title: "DESTINATION",
    },
    {
        id: "2",
        number: '02',
        title: "CREW",
    },
    {
        id: "3",
        number: '03',
        title: "TECHNOLOGY",
    },
]

export const destinations = {
    moon: {
        "name": "Moon",
        "image": moonImg,
        "description": "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "distance": "384,400 km",
        "travel": "3 days"
    },
    mars: {
        "name": "Mars",
        "image": marsImg,
        "description": "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        "distance": "225 mil. km",
        "travel": "9 months"
    },
    europa: {
        "name": "Europa",
        "image": europaImg,
        "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "distance": "628 mil. km",
        "travel": "3 years"
    },
    titan: {
        "name": "Titan",
        "image": titanImg,
        "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "distance": "1.6 bil. km",
        "travel": "7 years"
    }
}