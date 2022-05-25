"use strict";

const { Schema, Types } = require('mongoose');
const formatDate = require('../helpers');

const reactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
		},
		reactionBody: {
			type: String,
			required: true,
			maxlength: 280
		},
		username: {
			type: String,
			required: true
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: formatDate
		}
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

// question when is a mongoose document turned to json
// to json getters false

module.exports = reactionSchema;