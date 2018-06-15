function fullName(name1, name2){
	return `${name1} ${name2}`;
}

function ageInYears(birthdayString){
	const birthday = new Date(birthdayString);
	const ageInMilliseconds = Date.now() - birthday;
	const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
	return Math.floor(ageInMilliseconds / millisecondsPerYear);
	

}
