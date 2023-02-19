"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MiddleRow;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MiddleRow(_ref) {
  var totalPaginationIndexes = _ref.totalPaginationIndexes,
    paginationIndex = _ref.paginationIndex,
    handleClick = _ref.handleClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "PaginationIndex__mid-buttons-container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ",
    type: "button",
    disabled: true
  }, "..."), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button",
    type: "button",
    key: paginationIndex + "MiddleRow-button-PaginationIndex-1",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, paginationIndex - 1), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button PaginationIndex__button--active",
    type: "button",
    key: paginationIndex + "MiddleRow-button-PaginationIndex",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, paginationIndex), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button",
    type: "button",
    key: paginationIndex + "MiddleRow-button-PaginationIndex+1",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, paginationIndex + 1), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ",
    type: "button",
    disabled: true
  }, "..."));
}