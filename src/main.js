// Practice: Music Row
// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.

let chattenRecords = []
let jumpStopRecords = []
let polarRecords = []

const createBluegrassArtist=(name, age)=>({
    artistName: name,
    artistGenre: "bluegrass",
    artistAge: age 
})

const createFunkArtist= (name, age)=>({
    artistName: name,
    artistGenre: "funk",
    artistAge: age 
})

const createRapArtist= (name, age)=>({
    artistName: name,
    artistGenre: "rap",
    artistAge: age 
})

const createCountryArtist= (name, age)=>({
    artistName: name,
    artistGenre: "country",
    artistAge: age 
})

const createPopArtist= (name, age)=>({
    artistName: name,
    artistGenre: "pop",
    artistAge: age 
})

// -Bruce Atikins is a Country artist and is 23 years old
// -Jensen Brown is a Pop artist and is 20 years old
// -Dre Funkz is a Funk artist and is 25 years old
// -Dusta Grimes is a Rap artist and is 21 years old
// -Bartholomew Danielson is a Bluegrass artist and is 23 years old
// -Avilee Dallas is a Country artist and is 19 years old
// -Austin Kinkaid is a Pop artist and is 22 years old
// -Loyoncé Branis is a Rap artist and is 27 years old

let bruce = createCountryArtist("Bruce Atikins", 23)
let bartholomew = createBluegrassArtist("Bartholomew Danielson", 23)
let avilee = createCountryArtist("Avilee Dallas", 19)

chattenRecords.push(bruce, bartholomew, avilee)
console.log(chattenRecords)

let dre = createFunkArtist("Dre Funkz", 25)
let dusta = createRapArtist("Dusta Grimes", 21)
let loyonce =createRapArtist("Loyonce Branis", 27)

jumpStopRecords.push(dre, dusta, loyonce)
console.log(jumpStopRecords)

let jensen = createPopArtist("Jensen Brown", 20)
let austin = createPopArtist("Austin Kinkaid", 22)

polarRecords.push(jensen, austin)
console.log(polarRecords)