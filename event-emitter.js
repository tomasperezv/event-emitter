/**
 * @object EventEmitter
 */
var EventEmitter = (function() {

  /**
   * @constructor
   */
  var EventEmitter = function() {
    this._listeners = {};
  };

  /**
   * @param {String} eventId
   * @param {Function} callback
   * @method attach
   * @public
   */
  EventEmitter.prototype.attach = function(eventId, callback) {

    if (typeof this._listeners[eventId] === 'undefined') {
      this._listeners[eventId] = [];
    }

    this._listeners[eventId].push(callback);

  };

  /**
   * @param {String} eventId
   * @param {undefined|Object} data 
   * @method _emit
   * @public
   */
  EventEmitter.prototype.emit = function(eventId, data) {

    if (typeof this._listeners[eventId] !== 'undefined') {

      for(var i = 0; i < this._listeners[eventId].length; i++) {
        if (typeof this._listeners[eventId][i] === 'function') {
          this._listeners[eventId][i](data);
        }
      }

    }

  };

  return EventEmitter;

})();
