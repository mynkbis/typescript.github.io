
const returningUserDisplay: any | null = document.querySelector('#returning-user')
const userNameDisplay: any | null = document.querySelector('#user')
const reviewTotalDisplay: any | null = document.querySelector('#reviews')
const propertyContainer: any | null = document.querySelector('.properties')
const footer: any | null = document.querySelector('.footer')

let isOpen: boolean
let isLoggedIn: boolean

const GOLD_USER = 'GOLD_USER'
const SILVER_USER = 'SILVER_USER'
const BRONZE_USER = 'BRONZE_USER'

enum LoyaltyUser{
GOLD_USER = 'GOLD_USER',
SILVER_USER = 'SILVER_USER',
BRONZE_USER = 'BRONZE_USER' 
}

// const reviews: {
//     name: string
//     stars: number
//     loyaltyUser: LoyaltyUser
//     date: string
//     description: string;

// }[] = [

const reviews: any[] = [
    {
        name: 'Andrew',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021',
        description: 'Great hosts, location was a bit further than said',
    },
    {
        name: 'Seema',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021',
        description: 'Great hosts, location was a bit further than said',
    },
     {
        name: 'Ronit',
        stars: 3.5,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '28-03-2021',
        description: 'Great hosts, location was a bit further than said',
    },
    {
        name: 'Ronika',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said',
    },
]


// const UserName:
//     {
//         firstName: string,
//         LastName: string,
//         isReturning: boolean,
//             stayedAt: string[]
//     }
//     = {
//     firstName: "Surya",
//         LastName:" Bisht",
//     isReturning: true,
//      stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
// }

const estate: {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
}[]=[
     {
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/336835397.jpg?k=7ef7eb3c5a1ce3267c1846f719ac08e0b4039c475eaeea62c1a8a6879db67a97&o=&hp=1',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
       contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true  
    },
    {
        image: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_360,q_auto,w_360/itemimages/78/32/7832978_v2.jpeg',
        title: 'london Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
     contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: false 
        },
    {
        image: 'https://static.dezeen.com/uploads/2020/01/lot-6-pbw-architecture-residential-washington-usa_dezeen_sq0.jpg',
        title: 'USA Cottage',
        price: 134,
        location: {
            firstLine: 'no 223',
            city: 'Merli',
            code: 343903,
            country: 'USA'
        },
     contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true 
    },
    {
        image: 'https://lamusdworski.files.wordpress.com/2018/06/zalipie_poland_021.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
     contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: false 
    },
    {
        image: 'https://images.adsttc.com/media/images/5230/8287/e8e4/4e26/0100/0144/large_jpg/De-Vere-Gardens.jpg?1378910844',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
         contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: true
    }
    ]




const  ADMIN = 'ADMIN'
const READ_ONLY = 'READ_ONLY'

enum permissions{
   ADMIN = 'ADMIN', 
    READ_ONLY = 'READ_ONLY'
}



const UserName  = {
    firstName: "Surya",
    LastName:" Bisht",
    isReturning: true,
     permissions: permissions.ADMIN,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}



//property



// funtions

function showReviewTotal(value: number, review: string, loyalty: LoyaltyUser) {
    // diplay only if user is gold user
    const showIcon = LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + " | last reviewed by " + review + " "+ showIcon
}

function populateUser(isReturning: boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back' 
    }
    userNameDisplay.innerHTML = userName;
}


let authorityStatus : any

isLoggedIn = false

function showDetails(authorityStatus: boolean | permissions, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

for (let i = 0; i < estate.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = estate[i].title
    const image = document.createElement('img')
    image.setAttribute('src', estate[i].image)
    image.classList.add('image')
    card.appendChild(image)
    propertyContainer.appendChild(card)
    showDetails(UserName.permissions, card, estate[i].price)
}


showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(UserName.isReturning, UserName.firstName)

let currentLocation: [string, string, number] = ['Delhi', '07:35', 37]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'



