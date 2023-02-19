"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FirstRow;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FirstRow(_ref) {
  var totalPaginationIndex = _ref.totalPaginationIndex,
    paginationIndex = _ref.paginationIndex,
    handleClick = _ref.handleClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "PaginationIndex__first-row-buttons-container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ".concat(paginationIndex === 2 ? "PaginationIndex__button--active" : ""),
    type: "button",
    key: 2 + "FirstRow-button-PaginationIndex",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, "2"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ".concat(paginationIndex === 3 ? "PaginationIndex__button--active" : ""),
    type: "button",
    key: 3 + "FirstRow-button-PaginationIndex",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, "3"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ".concat(paginationIndex === 4 ? "PaginationIndex__button--active" : ""),
    type: "button",
    key: 4 + "FirstRow-button-PaginationIndex",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, "4"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ".concat(paginationIndex === 5 ? "PaginationIndex__button--active" : ""),
    type: "button",
    key: 5 + "FirstRow-button-PaginationIndex",
    onClick: function onClick(e) {
      handleClick(e);
    }
  }, "5"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "PaginationIndex__button ",
    type: "button",
    disabled: true
  }, "..."));
}