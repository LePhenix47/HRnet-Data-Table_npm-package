"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PaginationIndex;
var _react = _interopRequireDefault(require("react"));
var PropTypes = _interopRequireWildcard(require("prop-types"));
var _helperFunctions = require("../../utils/functions/helper-functions");
var _FirstRow = _interopRequireDefault(require("../FirstRow/FirstRow"));
var _MiddleRow = _interopRequireDefault(require("../MiddleRow/MiddleRow"));
var _LastRow = _interopRequireDefault(require("../LastRow/LastRow"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//React

//Proptypes

//Utils

//Components

function PaginationIndex(_ref) {
  var totalPaginationIndexes = _ref.totalPaginationIndexes,
    setCurrentPaginationIndex = _ref.setCurrentPaginationIndex,
    currentPaginationIndex = _ref.currentPaginationIndex,
    isScrolling = _ref.isScrolling,
    hasPaging = _ref.hasPaging;
  /**
   * Boolean constant to check if the component should render
   *
   * ```powershell
   * [Total Pagination Index] =< 7
   * ```
   */
  var showAllPaginationButtons = totalPaginationIndexes <= 7;

  /**
   * Boolean constant to check if the component should show the first 5 buttons like this:
   *
   * ```powershell
   * 1 2 3 4 5 … [TPI]
   * ```
   */
  var showFirstRowThenTotal = currentPaginationIndex < 5;

  /**
   * Boolean constant to check if the component should show the first , and last the other likes this:
   *
   * ```powershell
   * 1 … [PI - 1] [PI] [PI + 1] … [TPI]
   * ```
   */
  var showMiddle = currentPaginationIndex >= 5 && currentPaginationIndex <= totalPaginationIndexes - 4;

  /**
   *  Boolean constant to check if the component should show the last 5 buttons like this:
   *
   * ```powershell
   * 1 … [TPI - 4] [TPI - 3] [TPI - 2] [TPI - 1] [TPI]
   * ```
   */
  var showFirstThenLastRow = currentPaginationIndex > totalPaginationIndexes - 4;

  /**
   * Array to fill in automically all the 7 buttons
   *
   */
  var underOrEqualSevenPaginationArray = (0, _helperFunctions.createArrayOfNumbers)(2, totalPaginationIndexes);
  var fivePaginationPage = (0, _helperFunctions.createArrayOfNumbers)(2, 6);
  if (showAllPaginationButtons) {
    // log("Is under 7");
  }

  /**
   *Function that sets the pagination index
   *
   * @param {React.MouseEvent<HTMLButtonElement, MouseEvent>} event
   */
  function handleClick(event) {
    var valueOfButton = Number(event.target.innerText);
    var buttonIsNotANumber = isNaN(valueOfButton);
    if (buttonIsNotANumber) {
      var previousOrNextValue = event.target.innerText.includes("Next") ? 1 : -1;
      var newPaginationIndex = currentPaginationIndex + previousOrNextValue;
      var paginationIndexOverflows = newPaginationIndex > totalPaginationIndexes;
      if (paginationIndexOverflows) {
        newPaginationIndex = totalPaginationIndexes;
      }
      setCurrentPaginationIndex(newPaginationIndex);
      return;
    }
    setCurrentPaginationIndex(valueOfButton);
  }

  /**
   * Removes all the `"PaginationIndex__button--active"` classes from the buttons row
   */

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "PaginationIndex ".concat(!hasPaging || isScrolling ? "hide" : "")
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "PaginationIndex__previous",
    onClick: function onClick(e) {
      handleClick(e);
    },
    disabled: currentPaginationIndex === 1
  }, "Previous"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ".concat(currentPaginationIndex === 1 ? "PaginationIndex__button--active" : ""),
    type: "button",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, "1"), showAllPaginationButtons && underOrEqualSevenPaginationArray.map(function (number) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      className: "PaginationIndex__button ".concat(currentPaginationIndex === number ? "PaginationIndex__button--active" : ""),
      type: "button",
      key: number + "buttonPaginationIndex",
      onClick: function onClick(e) {
        handleClick(e);
      }
    }, number);
  }), !showAllPaginationButtons && showFirstRowThenTotal && /*#__PURE__*/_react["default"].createElement(_FirstRow["default"], {
    totalPaginationIndex: totalPaginationIndexes,
    paginationIndex: currentPaginationIndex,
    handleClick: handleClick
  }), !showAllPaginationButtons && showMiddle && /*#__PURE__*/_react["default"].createElement(_MiddleRow["default"], {
    totalPaginationIndexes: totalPaginationIndexes,
    paginationIndex: currentPaginationIndex,
    handleClick: handleClick
  }), !showAllPaginationButtons && showFirstThenLastRow && /*#__PURE__*/_react["default"].createElement(_LastRow["default"], {
    totalPaginationIndexes: totalPaginationIndexes,
    paginationIndex: currentPaginationIndex,
    handleClick: handleClick
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ".concat(currentPaginationIndex === totalPaginationIndexes ? "PaginationIndex__button--active" : "", " ").concat(currentPaginationIndex <= 1 && totalPaginationIndexes <= 1 ? "hide" : ""),
    type: "button",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, totalPaginationIndexes), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "PaginationIndex__next",
    onClick: function onClick(e) {
      handleClick(e);
    },
    disabled: currentPaginationIndex === totalPaginationIndexes || currentPaginationIndex === 1 && totalPaginationIndexes <= 1
  }, "Next"));
}
PaginationIndex.propTypes = {
  totalPaginationIndexes: PropTypes.number.isRequired,
  setCurrentPaginationIndex: PropTypes.func.isRequired,
  currentPaginationIndex: PropTypes.number.isRequired
};