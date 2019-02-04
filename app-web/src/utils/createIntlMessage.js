/**
 * returns a intl message object used by the react-intl librars' formatted message component
 * @param {String} id 
 * @param {String} message 
 * @param {String} description
 * @returns {Object}
 */
const createIntlMessage = (id, message, description = '') => ({
  id,
  message,
  description
});

export default createIntlMessage;