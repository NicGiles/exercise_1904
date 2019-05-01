export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {

var today = new Date(dateToFormatTimeMillis)
// raw date for later formatting.
var today_s = new Date(dateToFormatTimeMillis).toDateString();
var date_to_check = new Date(systemDateTimeMillis).toDateString();
// dates in string form to remove time of day difference.

var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();
if(day<10)
{ day='0'+day; }
if(month<10)
{ month='0'+month; }
var today_formatted = day+'/'+month+'/'+year;
// formatting date with allowances for additional 0s required for earlier days and months.

var result = today_s === date_to_check ? "TODAY" : today_formatted
// Ternary to check system date against current date.

return result
};
