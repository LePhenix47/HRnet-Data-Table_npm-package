"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ShowEntries;
var _react = _interopRequireDefault(require("react"));
var PropTypes = _interopRequireWildcard(require("prop-types"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//React

//Proptypes

function ShowEntries(_ref) {
  var setEntriesShown = _ref.setEntriesShown,
    lengthMenu = _ref.lengthMenu,
    isScrolling = _ref.isScrolling,
    hasPaging = _ref.hasPaging;
  /**
   * Function that gets the value of the `<select>` on change and sends it to its parent component
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} event
   */
  function handleSubmit(event) {
    //We get the value of the <select>`as a string and we transform it as a number
    var valueOfSelect = Number(event.currentTarget.value);
    setEntriesShown(valueOfSelect);
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "ShowEntries ".concat(!hasPaging || isScrolling ? "hide" : "")
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "show-entries",
    className: "ShowEntries__label"
  }, "Show", /*#__PURE__*/_react["default"].createElement("select", {
    name: "show-entries",
    id: "show-entries",
    className: "ShowEntries__select",
    onChange: function onChange(e) {
      handleSubmit(e);
    }
  }, lengthMenu && lengthMenu.map(function (number, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: "".concat(number),
      key: "".concat(number, "-").concat(index),
      className: "ShowEntries__option"
    }, number);
  })), "entries"));
}
ShowEntries.propTypes = {
  setEntriesShown: PropTypes.func.isRequired
};