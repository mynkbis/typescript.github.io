var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviewTotalDisplay = document.querySelector('#reviews');
var propertyContainer = document.querySelector('.properties');
var footer = document.querySelector('.footer');
var isOpen;
var isLoggedIn;
var GOLD_USER = 'GOLD_USER';
var SILVER_USER = 'SILVER_USER';
var BRONZE_USER = 'BRONZE_USER';
var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser["GOLD_USER"] = "GOLD_USER";
    LoyaltyUser["SILVER_USER"] = "SILVER_USER";
    LoyaltyUser["BRONZE_USER"] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));
// const reviews: {
//     name: string
//     stars: number
//     loyaltyUser: LoyaltyUser
//     date: string
//     description: string;
// }[] = [
var reviews = [
    {
        name: 'Andrew',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021',
        description: 'Great hosts, location was a bit further than said'
    },
    {
        name: 'Seema',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021',
        description: 'Great hosts, location was a bit further than said'
    },
    {
        name: 'Ronit',
        stars: 3.5,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '28-03-2021',
        description: 'Great hosts, location was a bit further than said'
    },
    {
        name: 'Ronika',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said'
    },
];
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
var estate = [
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
        contact: [+1123495082908, 'andyluger@aol.com'],
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
            country: 'United Kingdom'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: true
    },
    {
        image: 'https://www.holidify.com/images/cmsuploads/compressed/214770491_20220223172425.jpg',
        title: 'NZ Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: true
    }, {
        image: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/265353737.jpg?k=9ed69e00876709dbdf0bb31974cbe2ceb8d5ccdf61f73f239bdbadcc1764c055&o=',
        title: 'germany Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: true
    }, {
        image: 'https://image.shutterstock.com/image-photo/rest-cottages-cottage-village-evening-260nw-1740100253.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: true
    }, {
        image: 'https://media.architecturaldigest.com/photos/59c949fba82c564e8879721a/2:1/w_2000,h_1000,c_limit/1%20-%2010-1%20b-b-at-eastern-lodge-1.jpg',
        title: 'paris',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: true
    }
];
var ADMIN = 'ADMIN';
var READ_ONLY = 'READ_ONLY';
var permissions;
(function (permissions) {
    permissions["ADMIN"] = "ADMIN";
    permissions["READ_ONLY"] = "READ_ONLY";
})(permissions || (permissions = {}));
var UserName = {
    firstName: "Surya",
    LastName: " Bisht",
    isReturning: true,
    permissions: permissions.ADMIN,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
//property
// funtions
function showReviewTotal(value, review, loyalty) {
    // diplay only if user is gold user
    var showIcon = LoyaltyUser.GOLD_USER ? "⭐" : "";
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + " | last reviewed by " + review + " " + showIcon;
}
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
var authorityStatus;
isLoggedIn = false;
function showDetails(authorityStatus, element, price) {
    if (authorityStatus) {
        var priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
for (var i = 0; i < estate.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = estate[i].title;
    var image = document.createElement('img');
    image.setAttribute('src', estate[i].image);
    image.classList.add('image');
    card.appendChild(image);
    propertyContainer.appendChild(card);
    showDetails(UserName.permissions, card, estate[i].price);
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(UserName.isReturning, UserName.firstName);
var currentLocation = ['Delhi', '07:35', 37];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
