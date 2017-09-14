'use strict';

const Homey = require('homey');
const Log = require('homey-log').Log;

class HueZigBeeApp extends Homey.App {
	onInit() {
		this.log('init HueZigBeeApp');
	}
}

module.exports = HueZigBeeApp;
