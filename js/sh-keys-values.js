const person = {
    name: 'Straw Hat Pirates',
    age: 25,
    occupation: 'Pirate Crew',
    email: "strawhats1000@onepiece.org",
    isStudent: false
}

function getObjectInformation(person){

    let infoArray = [];

    for(let key in person){
        infoArray.push("Key: " + key + ", Value: " + person[key]);
    }
    return infoArray;
}

// Don't change this line
if(typeof module !== 'undefined') {
	module.exports = {
		getObjectInformation
	};
}