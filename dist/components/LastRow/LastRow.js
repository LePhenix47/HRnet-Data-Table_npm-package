"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LastRow;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function LastRow(_ref) {
  var totalPaginationIndexes = _ref.totalPaginationIndexes,
    paginationIndex = _ref.paginationIndex,
    handleClick = _ref.handleClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "PaginationIndex__first-row-buttons-container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ",
    type: "button",
    disabled: true
  }, "..."), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ".concat(paginationIndex === totalPaginationIndexes - 4 ? "PaginationIndex__button--active" : ""),
    type: "button",
    key: totalPaginationIndexes - 4 + "LastRow-button-PaginationIndex",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, totalPaginationIndexes - 4), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ".concat(paginationIndex === totalPaginationIndexes - 3 ? "PaginationIndex__button--active" : ""),
    type: "button",
    key: totalPaginationIndexes - 3 + "LastRow-button-PaginationIndex",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, totalPaginationIndexes - 3), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ".concat(paginationIndex === totalPaginationIndexes - 2 ? "PaginationIndex__button--active" : ""),
    type: "button",
    key: totalPaginationIndexes - 2 + "LastRow-button-PaginationIndex",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, totalPaginationIndexes - 2), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ".concat(paginationIndex === totalPaginationIndexes - 1 ? "PaginationIndex__button--active" : ""),
    type: "button",
    key: totalPaginationIndexes - 1 + "LastRow-button-PaginationIndex",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, totalPaginationIndexes - 1));
}