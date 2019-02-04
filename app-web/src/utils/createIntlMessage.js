import shortid from 'shortid';
/**
 * returns a intl message object used by the react-intl librars' formatted message component
 * more info here https://github.com/yahoo/react-intl/wiki/Components#string-formatting-components
 * @param {String} id 
 * @param {String} message 
 * @param {String} description
 * @returns {Object}
 */
const createIntlMessage = (id, message, description = '', values = {}) => ({
  id: id || shortid.generate(),
  defaultMessage: message,
  description,
  values,
});

export default createIntlMessage;