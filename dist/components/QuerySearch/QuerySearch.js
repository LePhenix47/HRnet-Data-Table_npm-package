"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = QuerySearch;
var _react = _interopRequireDefault(require("react"));
var PropTypes = _interopRequireWildcard(require("prop-types"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Proptypes

function QuerySearch(_ref) {
  var setQueryInputted = _ref.setQueryInputted,
    setNeedsFiltering = _ref.setNeedsFiltering,
    hasFilter = _ref.hasFilter;
  return /*#__PURE__*/_react["default"].createElement("form", {
    className: "QuerySearch ".concat(!hasFilter ? "hide" : "")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "QuerySearch__inputs-wrapper"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "search",
    className: "QuerySearch__label"
  }, "Search", /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "QuerySearch__input",
    id: "search",
    onInput: function onInput(e) {
      //We get the value of the input without any whitespace
      var valueOfInput = e.target.value.trim();

      //We verify if the input isn't empty to avoid pointless re-renders
      var isNotEmpty = !!valueOfInput.length;
      if (isNotEmpty) {
        setQueryInputted(e.target.value);
        setNeedsFiltering(true);
      } else {
        setQueryInputted("");
        setNeedsFiltering(false);
      }
    }
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "reset",
    className: "QuerySearch__reset-button",
    value: "\xD7",
    onClick: function onClick() {
      setQueryInputted("");
      setNeedsFiltering(false);
    }
  })));
}
QuerySearch.propTypes = {
  setQueryInputted: PropTypes.func.isRequired,
  setNeedsFiltering: PropTypes.func.isRequired
};