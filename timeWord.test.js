const timeWord = require('./timeWord');

describe('#timeword', () => {
	test('it is a function', () => {
		expect(typeof timeWord).toBe('function');
	});
	test('it returns a string', () => {
		expect(typeof timeWord('00:23')).toBe('string');
	});
	test('it can handle noon and midnight', () => {
		expect(timeWord('00:00')).toBe('midnight');
		expect(timeWord('12:00')).toBe('noon');
	});
	test('it correctly converts from 24h to 12h', () => {
		expect(timeWord('15:00')).toContain('three');
		expect(timeWord('00:15')).toContain('twelve');
		expect(timeWord('12:15')).toContain('twelve');
	});
	test('it can discern between am and pm', () => {
		expect(timeWord('03:00')).toContain('am');
		expect(timeWord('00:15')).toContain('am');
		expect(timeWord('15:00')).toContain('pm');
		expect(timeWord('12:05')).toContain('pm');
	});
	test('it properly handles the minutes', () => {
		expect(timeWord('03:00')).toContain(`o'clock`);
		expect(timeWord('03:05')).toContain(`oh `);
		expect(timeWord('03:15')).toContain(`fifteen`);
		expect(timeWord('03:35')).toContain(`thirty five`);
		expect(timeWord('03:45')).not.toContain(`thirty`);
	});
});
