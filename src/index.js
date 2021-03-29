const trackers = require("./trackers");

/**
 * check if some url is known
 *
 * @param {string} url The full URL
 *
 * @returns {ThirdParty|undefined}
 */
const find = (url) => trackers.find((tracker) => tracker.check(url));

module.exports = { trackers, find };
