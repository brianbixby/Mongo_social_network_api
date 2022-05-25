"use strict";

const moment = require('moment');

const formatDate = function (date) {
	console.log("date: ", date, moment(date).format(" MMMM Do YYYY, [at] h:mm:ss a"));
	return moment(date).format(" MMMM Do YYYY, [at] h:mm:ss a");
}

module.exports = formatDate;