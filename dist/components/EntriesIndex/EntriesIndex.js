"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EntriesIndex;
var _react = _interopRequireDefault(require("react"));
var PropTypes = _interopRequireWildcard(require("prop-types"));
require("../../utils/functions/helper-functions");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Proptypes

//Utils

function EntriesIndex(_ref) {
  var currentStartIndex = _ref.currentStartIndex,
    currentEndIndex = _ref.currentEndIndex,
    totalAmountOfEntries = _ref.totalAmountOfEntries,
    filteredAmountOfEntries = _ref.filteredAmountOfEntries,
    isFiltered = _ref.isFiltered,
    isScrolling = _ref.isScrolling,
    hasInfo = _ref.hasInfo;
  var textToShow = "";
  var isNotFiltering = !isFiltered;
  if (isNotFiltering) {
    textToShow = !isScrolling ? "Show ".concat(currentStartIndex + 1, " to ").concat(currentEndIndex, " of ").concat(totalAmountOfEntries) : "Showing ".concat(totalAmountOfEntries, " entries");
  } else {
    textToShow = !isScrolling ? "Show ".concat(currentStartIndex + 1, " to ").concat(currentEndIndex, " of ").concat(filteredAmountOfEntries, " (filtered from ").concat(totalAmountOfEntries, " total entries)") : "Showing ".concat(filteredAmountOfEntries, " entries (filtered from ").concat(totalAmountOfEntries, " total entries)");
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "EntriesIndex ".concat(!hasInfo ? "hide" : "")
  }, textToShow);
}
EntriesIndex.propTypes = {
  currentStartIndex: PropTypes.number,
  currentEndIndex: PropTypes.number,
  totalAmountOfEntries: PropTypes.number.isRequired,
  isFiltered: PropTypes.bool.isRequired
};