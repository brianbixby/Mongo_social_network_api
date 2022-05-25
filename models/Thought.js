"use strict";

const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const formatDate = require('../helpers');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 280,
            minlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
}).set(function () {
    this.set({ reactionCount: this.reactions.length });
});

module.exports = model('thought', thoughtSchema);