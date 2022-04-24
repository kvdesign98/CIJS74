const people = [{
    "id": 1,
    "first_name": "Cynthy",
    "last_name": "Blunsden",
    "email": "cblunsden0@tuttocitta.it",
    "gender": "Female"
}, {
    "id": 2,
    "first_name": "Anna-diana",
    "last_name": "Whitlock",
    "email": "awhitlock1@go.com",
    "gender": "Male"
}, {
    "id": 3,
    "first_name": "Aurora",
    "last_name": "Lawrance",
    "email": "alawrance2@google.com.hk",
    "gender": "Female"
}, {
    "id": 4,
    "first_name": "Netti",
    "last_name": "McDonnell",
    "email": "nmcdonnell3@tmall.com",
    "gender": "Female"
}, {
    "id": 5,
    "first_name": "Elfie",
    "last_name": "McGinnis",
    "email": "emcginnis4@un.org",
    "gender": "Female"
}, {
    "id": 6,
    "first_name": "Eugine",
    "last_name": "Wyndham",
    "email": "ewyndham5@tinyurl.com",
    "gender": "Genderfluid"
}, {
    "id": 7,
    "first_name": "Franky",
    "last_name": "Reiner",
    "email": "freiner6@gov.uk",
    "gender": "Polygender"
}, {
    "id": 8,
    "first_name": "Amity",
    "last_name": "Luparto",
    "email": "aluparto7@eventbrite.com",
    "gender": "Female"
}, {
    "id": 9,
    "first_name": "Vivien",
    "last_name": "Tolle",
    "email": "vtolle8@mapquest.com",
    "gender": "Female"
}, {
    "id": 10,
    "first_name": "Arnoldo",
    "last_name": "Deval",
    "email": "adeval9@google.fr",
    "gender": "Male"
}]

let firstName = people.map(item =>({first_name : item.first_name}))
console.log("All first Name : ",firstName)

let fullName  = people.map(item =>({fullName : item.first_name + " " + item.last_name ,gender : item.gender}))
console.log("All full Name : ",fullName)

let filterFirst = people.filter(item => item.id > 5)
console.log("ID > 5 : ", filterFirst)

let filterLast = people.filter(item => item.id < 5 && item.gender === "Male")
console.log("ID < 5 , Male: ", filterLast)

let find = people.find(item =>item.id == 10)
console.log("ID = 10 : ", find)

