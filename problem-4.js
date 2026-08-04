function topRatedRestaurant(restaurants) {
    if(!Array.isArray(restaurants) || restaurants.length === 0) 
        return "Invalid";
    
    let maxRating = restaurants[0].rating;
    let index = 0;
    for(let i = 1; i < restaurants.length; i++){
        if(restaurants[i].rating > maxRating){
            maxRating = restaurants[i].rating;
            index = i;
        }
    }
    return restaurants[index].name.toUpperCase();
}

const restaurants = [
    {
        name: "Burger King",
        rating: 4.2
    },
    {
        name: "Pizza Hut",
        rating: 4.8
    },
    {
        name: "KFC",
        rating: 4.5
    },
    {
        name: "Dominos",
        rating: 4.7
    }
];

const restaurants2 = [
    {
        name: "Star Kabab",
        rating: 4.6
    },
    {
        name: "Sultan's Dine",
        rating: 4.9
    },
    {
        name: "Takeout",
        rating: 4.7
    },
    {
        name: "Madchef",
        rating: 4.5
    },
    {
        name: "Chillox",
        rating: 4.8
    }
];

console.log(topRatedRestaurant(restaurants2)); // SULTAN'S DINE

console.log(topRatedRestaurant(restaurants)); // PIZZA HUT

console.log(topRatedRestaurant([]));          // Invalid
console.log(topRatedRestaurant("Hello"));     // Invalid
console.log(topRatedRestaurant(null));        // Invalid
console.log(topRatedRestaurant(undefined));   // Invalid




        // if(typeof restaurants[i] !== "object" || restaurants[i] === null || !restaurants[i].hasOwnProperty("name") || !restaurants[i].hasOwnProperty("rating") || typeof restaurants[i].name !== "string" || typeof restaurants[i].rating !== "number" || Number.isNaN(restaurants[i].rating) || !Number.isFinite(restaurants[i].rating))
        //     return "Invalid";