"use strict";

const { Schema, model } = require('mongoose');

const isEmail = function (email) {
	var re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	return re.test(email)
};

const userSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
			trim: true
		},
		email: {
			type: String,
			unique: true,
			required: true,
			validate: [isEmail, 'invalid email']
		},
		thoughts: [{
			type: Schema.Types.ObjectId,
			ref: 'thought'
		}],
		friends: [this]
		// friends: [{
		// 	type: Schema.Types.ObjectId,
		// 	ref: this
		// }]
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

userSchema.virtual('friendCount').get(function () {
	return this.friends.length;
}).set(function () {
	this.set({ friendCount: this.friends.length });
});

// userSchema.add({
// 	friends: [{
// 		type: Schema.Types.ObjectId,
// 		ref: 'user',
// 	}]
// });

module.exports = model('user', userSchema);