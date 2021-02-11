function timeWord(timeString) {
	let hoursPart = '';
	let minutesPart = '';
	let amOrPm;

	if (timeString === '00:00') return 'midnight';
	if (timeString === '12:00') return 'noon';

	// separate time into hours and minutes
	const timeArr = timeString.split(':');
	// convert hour to a number to deal with 24 hour time and make it 12 hour
	timeArr[0] = +timeArr[0];

	// determine am/pm and convert 24h to 12h
	if (timeArr[0] >= 12) {
		timeArr[0] -= 12;
		amOrPm = 'pm';
	} else amOrPm = 'am';

	// define possible hours array; this will have indices matching their respective times (with 12 being considered 0 in 12 hour time)
	const hours = [
		'twelve',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven'
	];

	// define possible minutes array; this will have indices one less than their corresponding time; it goes through the teens since the pattern changes a lot in those numbers.
	const minutes = [
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'
	];

	// handle the different scenarios of minutes depending on tens and ones place of number; teens get handled differently

	if (timeArr[1] === '00') {
		minutesPart += `o'clock`;
	} else if (+timeArr[1][0] === 0 && +timeArr[1][1] < 10) {
		minutesPart += 'oh ';
		minutesPart += `${minutes[+timeArr[1][1] - 1]}`;
	} else if (+timeArr[1][0] === 1) {
		minutesPart += `${minutes[+timeArr[1] - 1]}`;
	} else if (+timeArr[1][0] === 2) {
		minutesPart += 'twenty';
		if (+timeArr[1][1] > 0) {
			minutesPart += ` ${minutes[+timeArr[1][1] - 1]}`;
		}
	} else if (+timeArr[1][0] === 3) {
		minutesPart += 'thirty';
		if (+timeArr[1][1] > 0) {
			minutesPart += ` ${minutes[+timeArr[1][1] - 1]}`;
		}
	} else if (+timeArr[1][0] === 4) {
		minutesPart += 'forty';
		if (+timeArr[1][1] > 0) {
			minutesPart += ` ${minutes[+timeArr[1][1] - 1]}`;
		}
	} else if (+timeArr[1][0] === 5) {
		minutesPart += 'fifty';
		if (+timeArr[1][1] > 0) {
			minutesPart += ` ${minutes[+timeArr[1][1] - 1]}`;
		}
	}
	hoursPart += hours[timeArr[0]];
	let timeInWords = `${hoursPart} ${minutesPart} ${amOrPm}`;
	return timeInWords;
}

module.exports = timeWord;
