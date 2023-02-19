"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DataTable;
var _react = _interopRequireWildcard(require("react"));
var _helperFunctions = require("../../utils/functions/helper-functions");
var _EntriesIndex = _interopRequireDefault(require("../EntriesIndex/EntriesIndex"));
var _QuerySearch = _interopRequireDefault(require("../QuerySearch/QuerySearch"));
var _ShowEntries = _interopRequireDefault(require("../ShowEntries/ShowEntries"));
var _PaginationIndex = _interopRequireDefault(require("../PaginationIndex/PaginationIndex"));
var PropTypes = _interopRequireWildcard(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function DataTable(_ref) {
  var _ref$title = _ref.title,
    title = _ref$title === void 0 ? "" : _ref$title,
    _ref$data = _ref.data,
    data = _ref$data === void 0 ? null : _ref$data,
    _ref$sort = _ref.sort,
    sort = _ref$sort === void 0 ? false : _ref$sort,
    _ref$filter = _ref.filter,
    filter = _ref$filter === void 0 ? false : _ref$filter,
    _ref$scroll = _ref.scroll,
    scroll = _ref$scroll === void 0 ? false : _ref$scroll,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 500 : _ref$height,
    _ref$info = _ref.info,
    info = _ref$info === void 0 ? false : _ref$info,
    _ref$lengthMenu = _ref.lengthMenu,
    lengthMenu = _ref$lengthMenu === void 0 ? [10, 25, 50, 100] : _ref$lengthMenu,
    _ref$paging = _ref.paging,
    paging = _ref$paging === void 0 ? false : _ref$paging;
  //We get the amount of total entries

  /**
   * Pagination Index set by the user, default by one, mathematical interval: [1, totalPagination]
   */
  var _useState = (0, _react.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    paginationIndex = _useState2[0],
    setPaginationIndex = _useState2[1];

  /**
   * Entries shown = Number(select.value)
   */
  var _useState3 = (0, _react.useState)(lengthMenu[0]),
    _useState4 = _slicedToArray(_useState3, 2),
    entriesShown = _useState4[0],
    setEntriesShown = _useState4[1];

  /**
   * Tuple to save the activation state of the button to sort
   */
  var _useState5 = (0, _react.useState)({
      top: false,
      bottom: false
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    buttonActive = _useState6[0],
    setButtonActive = _useState6[1];

  /**
   * Object containing the starting index and the ending index
   */
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    usefulIndexes = _useState8[0],
    setUsefulIndexes = _useState8[1];

  /**
   * Values inside the HTML table
   */
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    values = _useState10[0],
    setValues = _useState10[1];

  /**
   * Tuple containing: [oldTPI, newTPI]
   */
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    historyTotalPaginationsArray = _useState12[0],
    setHistoryTotalPaginationsArray = _useState12[1];

  /**
   * Tuple containing: [oldPI, newPI]
   */
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    historyPaginationsArray = _useState14[0],
    setHistoryPaginationsArray = _useState14[1];

  /**
   * Boolean state to know if the array needs sorting
   */
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    needsSorting = _useState16[0],
    setNeedsSorting = _useState16[1];

  /**
   * Boolean state to know if the array needs filtering
   */
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    needsFiltering = _useState18[0],
    setNeedsFiltering = _useState18[1];

  /**
   * Query inputted by the user
   */
  var _useState19 = (0, _react.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    queryInputted = _useState20[0],
    setQueryInputted = _useState20[1];

  /**
   * Property value to to which it needs to sort the array by
   */
  var _useState21 = (0, _react.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    sortingValue = _useState22[0],
    setSortingValue = _useState22[1];

  /**
   * Boolean to know if the sorted array needs to be reversed
   */
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isReverse = _useState24[0],
    setReverse = _useState24[1];

  /**
   * Array that deep copies the value inputted by the user
   */
  var _useState25 = (0, _react.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    copiedData = _useState26[0],
    setCopiedData = _useState26[1];

  /**
   * Data that has been sorted
   */

  var _useState27 = (0, _react.useState)({}),
    _useState28 = _slicedToArray(_useState27, 2),
    scrollStyleHeight = _useState28[0],
    setScrollStyleHeight = _useState28[1];
  var developerWantsScrolling = !!scroll && !!height;

  //We get the properties of the object inside the data
  var properties = (0, _helperFunctions.getObjectProperties)(data[0]);
  //We create the properties for the head
  properties = (0, _helperFunctions.splitArrayStringOnUpperCase)(properties, "titlecase", " ");

  //We populate the body of the table
  /**
   * Amount of data
   */
  var totalEntries = data.length;

  /**
   * Total pagination indexes for the table
   */
  /**
   * ```powershell
   * Total Pagination = [Total entries] ÷ [Entries shown]
   * Rounded to the ceiling
   * ```
   */
  var totalPaginationIndexes = Math.ceil(totalEntries / entriesShown);
  var tpiRef = (0, _react.useRef)(Math.ceil(totalEntries / entriesShown));
  var totalDataRef = (0, _react.useRef)(totalEntries);

  /**
   *
   */
  var dataToShow = _toConsumableArray(data);
  var startingIndex = 0;
  var endingIndex = 0;

  /**
   * Memoizing the value of the sorted data to avoid making pointless recalculations
   */
  var memoizedSortedData = (0, _react.useMemo)(function () {
    var newArrayOfSortedData = null;
    if (needsSorting) {
      newArrayOfSortedData = (0, _helperFunctions.sortArrayOfObjects)(copiedData || data, sortingValue, isReverse);
      if (needsFiltering) {
        newArrayOfSortedData = (0, _helperFunctions.filterArrayByString)(newArrayOfSortedData, queryInputted);
        // Update the total pagination indexes after filtering the data
      }
    } else {
      newArrayOfSortedData = copiedData.length ? copiedData : data;
      if (needsFiltering) {
        newArrayOfSortedData = (0, _helperFunctions.filterArrayByString)(newArrayOfSortedData, queryInputted);
        // Update the total pagination indexes after filtering the data
      }
    }

    return newArrayOfSortedData;
  }, [copiedData, data, needsFiltering, needsSorting, queryInputted, sortingValue, isReverse]);

  /**
   * Function that gets the value of the `<select>` element inside the `<ShowEntries />` component
   */
  (0, _react.useEffect)(function () {
    if (paging) {
      //If the old Total Pagination Index is different than the new one → update the Page Index
      correctPaginationIndex();

      //We set the start and ending index depending on the pagination index
      setStartAndEndIndex();

      //We check if doesn't overflow or underflow
      var paginationIndexOverflows = paginationIndex > totalPaginationIndexes;
      if (paginationIndexOverflows) {
        //paginationIndex = totalPaginationIndex
        setPaginationIndex(totalPaginationIndexes);
      }
      var paginationIndexUnderflows = paginationIndex < 1;
      if (paginationIndexUnderflows) {
        //paginationIndex = totalPaginationIndex
        setPaginationIndex(1);
      }

      //Set the indexes to send them to the <EntriesIndex /> component
      setUsefulIndexes({
        startingIndex: startingIndex,
        endingIndex: endingIndex
      });
      tpiRef.current = Math.ceil(memoizedSortedData.length / entriesShown);
      totalDataRef.current = memoizedSortedData.length;
      paginationIndex > tpiRef.current ? setPaginationIndex(1) : null;
      resetDataToShow();
      fillInDataToShow(memoizedSortedData);
      setValues((0, _helperFunctions.getArrayObjectValues)(dataToShow));
    } else {
      totalDataRef.current = memoizedSortedData.length;
      fillInDataToShow(memoizedSortedData);
      setValues((0, _helperFunctions.getArrayObjectValues)(memoizedSortedData));
    }
  }, [entriesShown, paginationIndex, sortingValue, isReverse, queryInputted, needsFiltering, totalPaginationIndexes, memoizedSortedData]);

  //Get the data the developer added in props
  (0, _react.useEffect)(function () {
    setCopiedData((0, _helperFunctions.deepCopy)(data));
  }, [data]);
  (0, _react.useEffect)(function () {
    if (developerWantsScrolling) {
      var newHeight = {
        height: height + "px"
      };
      setScrollStyleHeight(newHeight);
      paging = false;
    }
  }, [scroll, height]);
  (0, _react.useEffect)(function () {
    var updateContainerStyle = function updateContainerStyle() {
      var isOnMobile = window.matchMedia("(max-width: 768px)").matches;
      if (developerWantsScrolling) {
        setScrollStyleHeight({
          height: "".concat(height + (isOnMobile ? 1000 : 0), "px")
        });
      }
    };
    updateContainerStyle();
    // Add listener to update the style on media query change
    window.addEventListener("resize", updateContainerStyle);
    return function () {
      // Remove listener on component unmount
      window.removeEventListener("resize", updateContainerStyle);
    };
  }, [height, scroll]);

  /**
   * Function that corrects the pagination index making relative to the previous percentage of the table seen
   */
  function correctPaginationIndex() {
    setHistoryTotalPaginationsArray([].concat(_toConsumableArray(historyTotalPaginationsArray), [totalPaginationIndexes]));
    setHistoryPaginationsArray([].concat(_toConsumableArray(historyPaginationsArray), [paginationIndex]));
    var historyPaginationsExceededTwo = historyTotalPaginationsArray.length + 1 > 2;
    if (historyPaginationsExceededTwo) {
      /**
       * ```powershell
       *[New PI] = [Previous PI] × [New TPI] ÷ [Old TPI]
       * ```
       */
      setHistoryTotalPaginationsArray(function (values) {
        return values.slice(1);
      });
      setHistoryPaginationsArray(function (values) {
        return values.slice(1);
      });
    }
    var oldTotalPaginationIndex = historyTotalPaginationsArray === null || historyTotalPaginationsArray === void 0 ? void 0 : historyTotalPaginationsArray[0];
    var newTotalPaginationIndex = totalPaginationIndexes;
    var oldPaginationIndex = Number(historyPaginationsArray === null || historyPaginationsArray === void 0 ? void 0 : historyPaginationsArray[0]);

    /**
     * Verifies that the user changed the amount of entries and that the Pagination index is over one
     */
    var userChangedShownEntries = oldTotalPaginationIndex !== newTotalPaginationIndex && newTotalPaginationIndex > 1;
    if (userChangedShownEntries) {
      var computedPaginationArray = Number((oldPaginationIndex / oldTotalPaginationIndex * newTotalPaginationIndex).toFixed(0)) || 1;
      setPaginationIndex(computedPaginationArray);
    }
  }

  /**
   * Function that settles the starting and ending indexes
   */
  function setStartAndEndIndex() {
    //We get the starting and ending index
    startingIndex = (paginationIndex - 1) * entriesShown;
    var indexUnderflows = startingIndex < 0;
    if (indexUnderflows) {
      startingIndex = 0;
    }
    endingIndex = startingIndex + entriesShown;

    //We check if the end index overflows
    var indexOverflowsArray = endingIndex > totalEntries;
    if (indexOverflowsArray) {
      endingIndex = totalEntries;
    }
  }

  /**
   * Function that sets the `dataToShow` variable containing the table rows to show as an empty array
   */
  function resetDataToShow() {
    dataToShow = [];
  }

  /**
   * Function that fills in
   */
  function fillInDataToShow(array) {
    for (var i = startingIndex; i < endingIndex; i++) {
      var item = array[i];
      dataToShow.push(item);
    }
  }

  /**
   *
   * Function that sorts the table by a property when clicked
   *
   * @param {React.ChangeEvent<HTMLSelectElement>} event React event
   */
  function handleArraySortingByClick(event) {
    //We get the sorting property
    var sortingProperty = event.target.dataset.dataTableSortingProperty;
    //Look if we need to reverse it
    var isSortingInReverse = JSON.parse(event.target.dataset.dataTableSortToReverse);
    if (isSortingInReverse) {
      setButtonActive({
        top: false,
        bottom: true
      });
    } else {
      setButtonActive({
        top: true,
        bottom: false
      });
    }
    //Enables sorting
    setNeedsSorting(true);
    //Sets the property to sort by
    setSortingValue(sortingProperty);
    //Sends the user to the pagination index of 1
    setPaginationIndex(1);
  }
  if (!data.length) {
    return /*#__PURE__*/_react["default"].createElement("table", {
      className: "DataTable"
    }, /*#__PURE__*/_react["default"].createElement("caption", {
      className: "DataTable__caption"
    }, title), /*#__PURE__*/_react["default"].createElement("thead", {
      className: "DataTable__head"
    }, /*#__PURE__*/_react["default"].createElement("tr", {
      className: "DataTable__row DataTable__head-row"
    }, /*#__PURE__*/_react["default"].createElement("th", {
      className: "DataTable__head-cell"
    }, "No data available to display"))), /*#__PURE__*/_react["default"].createElement("tfoot", {
      className: "DataTable__foot"
    }, /*#__PURE__*/_react["default"].createElement("tr", {
      className: "DataTable__row DataTable__head-row"
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "DataTable__cell"
    }, "No entries to show"))), /*#__PURE__*/_react["default"].createElement("tbody", {
      className: "DataTable__body"
    }, /*#__PURE__*/_react["default"].createElement("tr", {
      className: "DataTable__row DataTable__body-row"
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "DataTable__cell DataTable__body-cell"
    }, "Please add data to the table for it to function properly"))));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "DataTable__container",
    style: scrollStyleHeight
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "DataTable ".concat(developerWantsScrolling ? "DataTable--scroll" : "")
  }, /*#__PURE__*/_react["default"].createElement("caption", {
    className: "DataTable__caption"
  }, title, /*#__PURE__*/_react["default"].createElement("section", {
    className: "DataTable__entries-query-container"
  }, /*#__PURE__*/_react["default"].createElement(_ShowEntries["default"], {
    setEntriesShown: setEntriesShown,
    lengthMenu: lengthMenu,
    hasPaging: paging,
    isScrolling: scroll
  }), /*#__PURE__*/_react["default"].createElement(_QuerySearch["default"], {
    hasFilter: filter,
    setQueryInputted: setQueryInputted,
    setNeedsFiltering: setNeedsFiltering
  }))), /*#__PURE__*/_react["default"].createElement("thead", {
    className: "DataTable__head ".concat(developerWantsScrolling ? "DataTable__head--scroll" : "")
  }, /*#__PURE__*/_react["default"].createElement("tr", {
    className: "DataTable__row DataTable__head-row"
  }, data.length && properties.map(function (property, index) {
    //We set back the property
    var unformattedProperty = (0, _helperFunctions.setTitlecaseToCamelCase)(property);
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: properties + index,
      className: "DataTable__cell DataTable__head-cell"
    }, property, /*#__PURE__*/_react["default"].createElement("div", {
      className: "DataTable__buttons-container ".concat(!sort ? "hide" : "")
    }, /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      className: "DataTable__head-button DataTable__head-button-normal ".concat(!!buttonActive.top && !buttonActive.bottom && sortingValue === unformattedProperty ? "DataTable__head-button--active" : ""),
      onClick: function onClick(e) {
        handleArraySortingByClick(e);
        //Set the sorted array in reverse or not
        setReverse("asc");
      },
      "data-data-table-sorting-property": "".concat(unformattedProperty),
      "data-data-table-sort-to-reverse": false
    }, "\u25B2"), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      className: "DataTable__head-button DataTable__head-button-reverse ".concat(!buttonActive.top && !!buttonActive.bottom && sortingValue === unformattedProperty ? "DataTable__head-button--active" : ""),
      onClick: function onClick(e) {
        handleArraySortingByClick(e);
        //Set the sorted array in reverse or not
        setReverse("desc");
      },
      "data-data-table-sorting-property": "".concat(unformattedProperty),
      "data-data-table-sort-to-reverse": true
    }, "\u25BC")));
  }))), /*#__PURE__*/_react["default"].createElement("tfoot", {
    className: "DataTable__foot ".concat(developerWantsScrolling ? "DataTable__foot--scroll" : "")
  }, /*#__PURE__*/_react["default"].createElement("tr", {
    className: "DataTable__row DataTable__foot-row ".concat(developerWantsScrolling ? "DataTable__foot-row--scroll" : "")
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "DataTable__cell DataTable__foot-cell DataTable__foot-cell-entries"
  }, /*#__PURE__*/_react["default"].createElement(_EntriesIndex["default"], {
    totalAmountOfEntries: totalEntries,
    currentStartIndex: usefulIndexes.startingIndex,
    currentEndIndex: usefulIndexes.endingIndex,
    isFiltered: needsFiltering,
    filteredAmountOfEntries: totalDataRef.current,
    isScrolling: scroll,
    hasInfo: info
  })), /*#__PURE__*/_react["default"].createElement("td", {
    className: "DataTable__cell DataTable__foot-cell DataTable__foot-cell-pagination"
  }, /*#__PURE__*/_react["default"].createElement(_PaginationIndex["default"], {
    totalPaginationIndexes: tpiRef.current,
    setCurrentPaginationIndex: setPaginationIndex,
    currentPaginationIndex: paginationIndex,
    isScrolling: scroll,
    hasPaging: paging
  })))), /*#__PURE__*/_react["default"].createElement("tbody", {
    className: "DataTable__body ".concat(developerWantsScrolling ? "DataTable__body--scroll" : "")
  }, data.length && values && values.map(function (valueArray, index) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      className: "DataTable__row DataTable__body-row ".concat(developerWantsScrolling ? "DataTable__body-row--scroll" : ""),
      key: valueArray.toString() + index
    }, valueArray.map(function (value, index) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: value + index,
        className: "DataTable__cell DataTable__body-cell"
      }, value);
    }));
  }), !data.length && /*#__PURE__*/_react["default"].createElement("tr", {
    className: "DataTable__row DataTable__body-row"
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "DataTable__cell DataTable__body-cell"
  }, "No data available to display")), data.length && !values.length && /*#__PURE__*/_react["default"].createElement("tr", {
    className: "DataTable__row DataTable__body-row"
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "DataTable__cell DataTable__body-cell"
  }, "No matching records found")))));
}

//Adding types to the props of the JS component
DataTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  sort: PropTypes.bool,
  filter: PropTypes.bool,
  scroll: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  info: PropTypes.bool,
  lengthMenu: PropTypes.arrayOf(PropTypes.number),
  paging: PropTypes.bool
};