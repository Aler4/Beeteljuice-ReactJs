import {toJS, makeAutoObservable, makeObservable} from "mobx";

export type TReward = {
    photo: string,
    title: string,
    description: string,
}

export type TFutProject = {
    title: string,
    description: string,
    photo?: string
}

export type TProject = TFutProject & {
    read: string;
}

export type TCritic = {
    avatar: string,
    name: string,
    review: string,
}

export type TData = {
    rewards: TReward[] | [];
    performances: string[] | [];
    fans: string[] | [];
    critics: TCritic[];
    projects: TProject[];
    futureProjects: TFutProject[];
    news: TReward[];
}

class Store {
    data: TData = {
        rewards: [],
        performances: ['https://i.ibb.co/4m9q8sC/theatr1.webp','https://i.ibb.co/ZgCxB9S/theatr2.webp', 'https://i.ibb.co/ZJRdz57/theatr3.webp'],
        fans: ['https://i.ibb.co/R7d95nL/fan1.webp', 'https://i.ibb.co/3ffh3kb/fan3.webp', 'https://i.ibb.co/d0XC3YN/fan4.webp', 'https://i.ibb.co/sVStxhT/fan2.webp'],
        critics: [
            {
                avatar: 'https://i.ibb.co/NZh9gsd/Peter-Sellars.jpg',
                name: 'Peter Sellars',
                review: 'If you want to experience all the emotions that can and cannot be felt in our mortal life, this production is what you need.'
            },
            {
                avatar: 'https://i.ibb.co/dr451hK/Trevor-Nunn.jpg',
                name: 'Trevor Nunn',
                review: 'A wonderful story that could only happen to such a wonderful person as Beetlejuice..'
            },
            {
                avatar: 'https://i.ibb.co/mXMny3m/Orson-Welles.jpg',
                name: 'Orson Welles',
                review: 'If I were alive I would watch this show.'
            },
            {
                avatar: 'https://i.ibb.co/pKRd7XL/Julie-Taymor.jpg',
                name: 'Julie Taymor',
                review: 'I haven\'t words it\'s just brilliant.'
            },
        ],

        projects: [
            {
                photo: 'https://i.ibb.co/CbCKCxv/Koleso-1-1024x717.jpg',
                title: 'Wheel',
                description: 'It was fun to throw this toy down the mountain, but now people use it to travel.',
                read: 'https://en.wikipedia.org/wiki/Wheel'
            },
            {
                photo: 'https://i.ibb.co/NZBL7mg/topkpop2022.webp',
                title: 'K-POP',
                description: 'Yeah, it\'s not about the music. It\'s about cute girls and boys who just dance and maybe some of them can sing.Don\'t give thanks',
                read: 'https://kpop.fandom.com/wiki/Main_Page',
            },
            {
                photo: 'https://i.ibb.co/xzvGypG/watermalon.webp',
                title: 'Watermelon',
                description: 'A huge sweet berry that you can eat and drink at the same time. What could be better?',
                read: 'https://specialtyproduce.com/produce/Watermelon_691.php',
            },
            {
                photo: 'https://i.ibb.co/DK1qjnD/The-Walt-Disney-Company-Headquarters.webp',
                title: 'Disney',
                description: '',
                read: 'http://www.disneyinternational.com',
            },
            {
                photo: 'https://i.ibb.co/m9rg92C/First-law-of-thermodynamics-equation-4.webp',
                title: 'First law of thermodynamics',
                description: 'Yeah that also we',
                read: 'https://chem.libretexts.org/Courses/City_College_of_San_Francisco/Chemistry_101A/Topic_D%3A_Thermochemistry/6%3A_Thermochemistry/6.03%3A_The_First_Law_of_Thermodynamics#:~:text=The%20first%20law%20of%20thermodynamics%20is%20given%20as%20%CE%94E,on%20or%20by%20the%20system).',
            },
            {
                photo: 'https://i.ibb.co/3cH9Cx2/naruto.webp',
                title: 'Naruto',
                description: 'Do You have free time? Don\'t have free time? Watch!',
                read: 'https://naruto.fandom.com/wiki/Naruto_Uzumaki',
            },
            {
                photo: 'https://i.ibb.co/nRSFHZ2/instagram.webp',
                title: 'Instagram',
                description: 'Do you want people to be jealous of the one-time successes in your life, or do you have a nice ass? Welcome!',
                read: 'https://www.instagram.com/',
            },
            {
                photo: 'https://i.ibb.co/sbmtkCR/heaven-vs-hell-wallpaper-preview.webp',
                title: 'Journey to the underworld',
                description: 'Unfortunately, this project has not been completed yet. And the pass only works one way.',
                read: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
            },
        ],
        futureProjects: [

            {
                title: 'Invisible Pockets Clothing Line:',
                description: "Always struggling to find your pockets? This clothing line takes that challenge to the next level by offering garments with invisible pockets. Your keys, phone, and wallet will be perfectly secure yet seemingly nowhere at all. Just remember where you \"put\" your belongings, and you're all set for a confusing adventure in fashion!.",
            },
            {
                title: 'Round books',
                description: "Well they're rarely read anyway so at least they can be used as Frisbees.",
            },
            {
                title: 'Belt with Built-in Parachute',
                description: "You never know when you might need a belt.",
            },
            {
                title: 'Synchronized Sneeze Symphony',
                description: "Have you ever wondered what it would be like if your sneezes were perfectly synchronized with others? This project aims to create a global network that connects sneezes, allowing people from different corners of the world to unleash their sneezes in harmony. Imagine the symphony of a hundred thousand sneezes, all in tune and rhythm – a uniquely hilarious auditory experience.",
            },

            {
                title: 'Colonize the Sun',
                description: "Colonizing planets is too easy for me.",
            },
            {
                title: 'Book based on movie.',
                description: 'Who will stop me?',
            },
            {
                title: 'Reverse Umbrella – The Raincatcher.',
                description: 'Sick of getting wet in the rain while trying to collect water for your plants? The Reverse Umbrella is here to solve that problem! Instead of shielding you from raindrops, this innovative umbrella collects rainwater and funnels it down into a convenient reservoir at the handle. Stay dry while simultaneously hydrating your garden.',
            },
            {
                title: 'Inflatable Furniture for Ants.',
                description: 'Tired of your pet ants being left out of the furniture game? Introducing inflatable furniture designed specifically for ants! This line of miniaturized couches, chairs, and even tiny inflatable bean bags will make your ant colony the envy of the insect world. Watch as your ants relax in style and comfort, creating a surreal spectacle for your guests.',
            },
            {
                title: 'Create another framework for js.',
                description: 'Of course, there are so few of them, you need a framework for each person',
            },
        ],
        news: [
            {
                title: 'Beetlejuice Opens Fashion Line for the Afterlife',
                description: ' In a shocking move, the ghostly icon Beetlejuice has launched his own line of ethereal fashion, featuring striped suits and shrunken head accessories. Fashion critics are dying to get their hands on these otherworldly ensembles.',
                photo: 'https://i.ibb.co/BtkM8r8/00030-0.png',
            },
            {
                title: 'Beetlejuice Elected as Mayor of the Netherworld',
                description: ' After a heated campaign, Beetlejuice narrowly wins the election for mayor of the afterlife. His first act in office? Instituting mandatory sandworm riding lessons for all residents.',
                photo: 'https://i.ibb.co/YbXG2CP/Best-Background-Beetlejuice-Characters.webp',
            },
            {
                title: 'Beetlejuice Stars in Remake of "Beetlejuice"',
                description: ' In a meta twist, Beetlejuice announces his role in the remake of his own movie. He insists on playing every character, leading to a chaotic and hilarious spectral extravaganza.',
                photo: 'https://i.ibb.co/8YM91MZ/mov.jpg',
            },
            {
                title: 'Beetlejuice Becomes Spokesghost for Exorcism Service',
                description: ' Tired of being summoned by pesky mortals, Beetlejuice signs on as the face of a new exorcism service, promising to rid homes of other unwanted spirits – for a price, of course.\n',
                photo: 'https://i.ibb.co/Cv9sVfb/gost.jpg',
            },
            {
                title: 'Beetlejuice Enters Haunting Reality Show',
                description: 'Beetlejuice joins a reality show where ghosts compete to scare the living. His unconventional approach involves performing a stand-up routine that leaves both the living and the dead in stitches.',
                photo: 'https://i.ibb.co/PYhWFtL/MSDBEET-WB016-e1683660149551.webp',
            },
            {
                title: 'Beetlejuice Launches Line of Haunted Home Décor',
                description: 'If you\'re looking to add a touch of the supernatural to your living space, look no further! Beetlejuice\'s new line includes levitating furniture, singing sandworms, and self-dancing sculptures.',
                photo: 'https://i.ibb.co/tQ8dXRy/decor.jpg',
            },
            {
                title: 'Beetlejuice Stars in Cooking Show for the Undead',
                description: 'Ever wondered what ghosts eat? Beetlejuice hosts a cooking show where he whips up ghostly gourmet dishes like ectoplasmic spaghetti and transparent tofu.',
                photo: 'https://i.ibb.co/5h7qrwQ/cook.jpg',
            },
            {
                title: 'Beetlejuice Appointed Head of Paranormal Cybersecurity',
                description: ' With his experience in dealing with the living, the dead, and everything in between, Beetlejuice is now tackling the digital realm by safeguarding the afterlife against cyber-spectral threats.',
                photo: 'https://i.ibb.co/XDsLnRF/secur.jpg',
            },
            {
                title: 'Beetlejuice Joins Ghost Therapy Group',
                description: ' In an attempt to work on his image, Beetlejuice reluctantly attends group therapy for restless spirits. However, his attempts to use therapy as stand-up material don\'t go over well with the other attendees.',
                photo: 'https://i.ibb.co/tJ2HH5Y/therapy.png',
            },
            {
                title: 'Beetlejuice Stars in Romantic Comedy Across Realities',
                description: 'Beetlejuice\'s afterlife takes an unexpected turn when he falls in love with a living human, leading to a heartwarming yet hilarious romantic comedy that blurs the boundaries between life and death.',
                photo: 'https://i.ibb.co/yk5xxnp/romantic.jpg',
            },
        ],
    };
    constructor() {
        makeAutoObservable(this)
    }

    fetchData() {
        fetch('https://63beddcef5cfc0949b6369bc.mockapi.io/beetle').then(res => res.json()).then(json => (this.data.rewards = [...json]))
    }
    getData () {
        return toJS(this.data);
    }
}
export default new Store();
