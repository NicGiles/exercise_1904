export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {

var today = new Date(dateToFormatTimeMillis).toDateString();

var date_to_check = new Date(systemDateTimeMillis).toDateString();

var result = today === date_to_check ? "TODAY" : "Not Today"

return result
};
