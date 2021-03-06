"use strict";
//var assert = require('assert');
var assert = require('assert');
var rsvp = require('rsvp');
var chai = require('mocha');
var sinon = require('sinon');
var expect = chai.expect; // we are using the "expect" style of Chai
var MongoClient = require('mongodb').MongoClient;
var CartSummary = require('./../../src/controller/AirPlaneAllStatController');
var nconf = require('nconf');
nconf.argv()
    .env()
    .file({ file: __dirname + '/config.json' });
describe('CartSummary', function () {
    var db = MongoClient.Connect('');
    it('getSubtotal() should return 0 if no items are passed in', function () {
        assert.equal(CartSummary.AirPlaneAllStatController.prototype.Add(), 10);
    });
});
//mocha tests/unit --recursive --require tests\startup.js 
