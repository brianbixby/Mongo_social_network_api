"use strict";

const { Types } = require('mongoose');
const users = [
	{
		"_id": Types.ObjectId("628db9a502d1332d3ec76ada"), "username": 'aaaaa', "email": 'aaaaa@aaaaa.com', "thoughts": ["628ecba42bc4c809b9a0e1da"], "friends": ["628db9a502d1332d3ec76adc", "628db9a502d1332d3ec76add", "628db9a502d1332d3ec76ade"], "__v": 0
	},
	{
		"_id": Types.ObjectId("628db9a502d1332d3ec76adb"), "username": 'bbbbb', "email": 'bbbbb@bbbbb.com', "thoughts": ["628ecba42bc4c809b9a0e1db"], "friends": ["628db9a502d1332d3ec76adc", "628db9a502d1332d3ec76add", "628db9a502d1332d3ec76ade"], "__v": 0
	},
	{
		"_id": Types.ObjectId("628db9a502d1332d3ec76adc"), "username": 'ccccc', "email": 'ccccc@ccccc.com', "thoughts": ["628ecba42bc4c809b9a0e1dc"], "friends": ["628db9a502d1332d3ec76ada", "628db9a502d1332d3ec76adb"], "__v": 0
	},
	{
		"_id": Types.ObjectId("628db9a502d1332d3ec76add"), "username": 'ddddd', "email": 'ddddd@ddddd.com', "thoughts": ["628ecba42bc4c809b9a0e1dd"], "friends": ["628db9a502d1332d3ec76ada", "628db9a502d1332d3ec76adb"], "__v": 0
	},
	{
		"_id": Types.ObjectId("628db9a502d1332d3ec76ade"), "username": 'eeeee', "email": 'eeeee@eeeee.com', "thoughts": ["628ecba42bc4c809b9a0e1de"], "friends": ["628db9a502d1332d3ec76ada", "628db9a502d1332d3ec76adb"], "__v": 0
	}
];

const thoughts = [
	{ "_id": Types.ObjectId("628ecba42bc4c809b9a0e1da"), "thoughtText": "a thought", "username": "aaaaa", "reactions": [{ "reactionBody": "a total reaction", "username": "bbbbb", "reactionId": "628ec0d89d42406d9dd2ai9b" }, { "reactionBody": "a 2nd total reaction", "username": "ccccc", "reactionId": "628ec0d89d42406d9dd2ai9c" }], "__v": 0 },
	{ "_id": Types.ObjectId("628ecba42bc4c809b9a0e1db"), "thoughtText": "a 2nd thought", "username": "bbbbb", "reactions": [{ "reactionBody": "another  total reaction", "username": "ccccc", "reactionId": "628ec0d89d42406d9dd2ai9d" }, { "reactionBody": "a 4th total reaction", "username": "ddddd", "reactionId": "628ec0d89d42406d9dd2ai9e" }], "__v": 0 },
	{ "_id": Types.ObjectId("628ecba42bc4c809b9a0e1dc"), "thoughtText": "a 3rd thought", "username": "ccccc", "reactions": [{ "reactionBody": "a 5th different total reaction", "username": "ddddd", "reactionId": "628ec0d89d42406d9dd2ai9f" }, { "reactionBody": "a 6th total reaction", "username": "eeeee", "reactionId": "628ec0d89d42406d9dd2ai9g" }], "__v": 0 },
	{ "_id": Types.ObjectId("628ecba42bc4c809b9a0e1dd"), "thoughtText": "a 4th thought", "username": "ddddd", "reactions": [{ "reactionBody": "a 7th total reaction", "username": "eeeee", "reactionId": "628ec0d89d42406d9dd2ai9h" }, { "reactionBody": "a 8th total reaction", "username": "aaaaa", "reactionId": "628ec0d89d42406d9dd2ai9i" }], "__v": 0 },
	{ "_id": Types.ObjectId("628ecba42bc4c809b9a0e1de"), "thoughtText": "a 5th thought", "username": "eeeee", "reactions": [{ "reactionBody": "a 9th total reaction", "username": "aaaaa", "reactionId": "628ec0d89d42406d9dd2ai9j" }, { "reactionBody": "a 10th total reaction", "username": "bbbbb", "reactionId": "628ec0d89d42406d9dd2ai9k" }], "__v": 0 }
];

module.exports = { users, thoughts };