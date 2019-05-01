import {format} from '../src/dateFormatter';

it('formats today as "TODAY"', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 15, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 15, 12, 50).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe('TODAY');
});

it('Returns formatted date when system date differs', () => {
  const Jan = 0; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, Jan, 10, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, Jan, 14, 12, 50).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe('14/01/2018');
});

it('Allows for days 0-9', () => {
  const December = 11; //js Date object month is indexed from 0
  const systemDateTime = new Date(2018, December, 4, 10, 5).getTime();
  const dateTimeToFormat = new Date(2018, December, 4, 12, 50).getTime();
  expect(format(dateTimeToFormat, systemDateTime)).toBe('04/01/2018');
});
