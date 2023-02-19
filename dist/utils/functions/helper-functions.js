"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createArrayOfNumbers = createArrayOfNumbers;
exports.deepCopy = deepCopy;
exports.filterArrayByString = filterArrayByString;
exports.formatText = formatText;
exports.getArrayObjectValues = getArrayObjectValues;
exports.getInputValue = getInputValue;
exports.getObjectProperties = getObjectProperties;
exports.getObjectValues = getObjectValues;
exports.invertDayAndMonth = invertDayAndMonth;
exports.log = log;
exports.normalizeString = normalizeString;
exports.numberSeparatorLocale = numberSeparatorLocale;
exports.selectQuery = selectQuery;
exports.selectQueryAll = selectQueryAll;
exports.setTitlecaseToCamelCase = setTitlecaseToCamelCase;
exports.sortArrayOfObjects = sortArrayOfObjects;
exports.splitArrayStringOnUpperCase = splitArrayStringOnUpperCase;
exports.splitOnUpperCase = splitOnUpperCase;
exports.splitString = splitString;
exports.toPercent = toPercent;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * A simplified version of `document.querySelector()` to select an element from the `document` or a container
 *
 * @param  query HTML Element to select
 * @param  container HTML Element to select the query from, if no containers are entered, it will use the `document`
 * @returns The element selected *or* `null` if the element doesn't exist
 */
function selectQuery(query, container) {
  if (container) {
    return container.querySelector(query);
  }
  return document.querySelector(query);
}

/**
 * A simplified version of `document.querySelectorAll()` to select elements from the `document` or a container
 *
 * @param  query HTML Element to select
 * @param  container HTML Element to select the query from, if no containers are entered, it will use the `document`
 * @returns An array with all the elements selected *or* `null` if the element doesn't exist
 */
function selectQueryAll(query, container) {
  if (container) {
    return Array.from(container.querySelectorAll(query));
  }
  return Array.from(document.querySelectorAll(query));
}

/**
 *
 *Function that prints out a message in the console but with a simpler syntax
 * @param message
 * @returns {void}
 */
function log() {
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  for (var _i = 0, _messages = messages; _i < _messages.length; _i++) {
    var message = _messages[_i];
    console.log(message);
  }
}

/**
 *Function that gets the value of an `<input/>` element
 *
 * @param {HTMLInputElement} input
 * @param {string} options
 * @returns { number | Date | string} The value of the input as a string, number or date
 */
function getInputValue(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  if (!input) {
    return undefined;
  }
  switch (options) {
    case "number":
      {
        return input.valueAsNumber;
      }
    case "date":
      {
        return input.valueAsDate;
      }
    default:
      {
        return input.value;
      }
  }
}

/**
 *
 *Function that formats text in 3 cases: lowercase, uppercase and titlecase
 * @param string string
 * @param option string
 * @throws Text formatting error
 * @returns {Array<any>} {string}
 */
function formatText(string, option) {
  var formattedOption = option.toLowerCase().trim();
  switch (formattedOption) {
    case "lowercase":
      {
        return string.toLowerCase();
      }
    case "uppercase":
      {
        return string.toUpperCase();
      }
    case "titlecase":
      {
        var stringArray = string.split(" ");
        for (var i = 0; i < stringArray.length; i++) {
          stringArray[i] = stringArray[i].substring(0, 1).toUpperCase() + stringArray[i].slice(1).toLowerCase();
        }
        stringArray = stringArray.concat();
        return stringArray.toString();
      }
    default:
      {
        throw new Error("Formatting text error: unknown option passed in argument");
      }
  }
}

/**
 *Funtion that replaces letters with accents by their "non-accented" counter-part
 *
 *ex:
 *```js
 *let str = "crème brûlée";
 *str = normalizeString(str);
 *console.log(str) → "creme brulee"
 *```
 *
 * @param {string} string string to be normalized
 * @returns  {string} Normalized string
 */
function normalizeString(string) {
  if (typeof string !== "string") {
    log("Value passed in argument is not a string !");
    return;
  }
  return string.normalize("NFD") //returns the unicode NORMALIZATION FORM of the string using a canonical DECOMPOSITION (NFD).
  .replace(/[\u0300-\u036f]/g, "");
}

/**
 *Splits a string on a character, word or regular expression
 *ex: Split on every space → "hello world" → ["hello", "world"]
 *
 * @param string
 * @param character
 * @returns {Array<string>}
 */
function splitString(string, character) {
  return string.split(character);
}

/**
 *Split a string into an array separating each word with an uppercase on it
 *ex:
 *```js
 *  "testColor" with "-" → ["test","Color"] → ["test", "color"] → "test-color"
 * ```
 *
 * @param {Array} string
 * @param {string} formatting
 * @param {string} characterToJoinBack
 * @returns  {Array<any>}
 */
function splitOnUpperCase(string) {
  var formatting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "lowercase";
  var characterToJoinBack = arguments.length > 2 ? arguments[2] : undefined;
  //Regex for all the uppercase letters
  var uppercaseLettersREGEX = /(?=[A-Z])/;
  var newString = splitString(string, uppercaseLettersREGEX);
  for (var i = 0; i < newString.length; i++) {
    newString[i] = formatText(newString[i], formatting);
  }
  var formattedString = newString.reduce(function (accumulated, currentValue) {
    return accumulated + characterToJoinBack + currentValue;
  });
  return formattedString;
}

/**
 * Function that applies formatting to an array of strings
 *
 * @param {string[]} array Array of string that you want to format
 * @param {"lowercase"|"uppercase"|"titlecase"} formatting Formatting for the string
 * @param {string} characterToJoinBack Character to join the split back to, empty by default
 * @returns {string[]} A new formatted array of string
 */
function splitArrayStringOnUpperCase(array) {
  var formatting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "lowercase";
  var characterToJoinBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray[i] = splitOnUpperCase(array[i], formatting, characterToJoinBack);
  }
  return newArray;
}

/**
 *Retrieves the values of an object inside an array
 *
 * @param object
 * @returns {Array<any>}
 */
function getObjectValues(object) {
  var objectIsDefined = !!object;
  if (objectIsDefined) {
    return Object.values(object);
  }
  return [];
}
/**
 *Retrieves the values of an array of objects
 *
 * @param arrayOfObjects Array of objects
 * @returns {array[]} Array containing the arrays with the values
 */
function getArrayObjectValues(arrayOfObjects) {
  var newArray = [];
  var _iterator = _createForOfIteratorHelper(arrayOfObjects),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var object = _step.value;
      var objectIsDefined = !!object;
      if (objectIsDefined) {
        newArray.push(Object.values(object));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return newArray;
}

/**
 *Retrieves the properties of an object inside an array
 *
 * @param object
 * @returns {Array<any>}
 */
function getObjectProperties(object) {
  var objectIsDefined = !!object;
  if (objectIsDefined) {
    return Object.keys(object);
  }
  return [];
}

/**
 *Returns a string with a '%' in the end of the number inputted
 *
 * @param number
 * @returns {string}
 */
function toPercent(number) {
  return number.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0
  });
}

/**
 *Formats a number by separating every thousand with a format from the user's locale
 *example:
 *
 *The user lives in Italy and we have: const number = 1_930 → returns "1.930"
 *If they lived in the US and we have: const number = 1_930 → returns "1,930"
 *
 * @param number
 * @returns {string}
 */
function numberSeparatorLocale(number) {
  var formatter = new Intl.NumberFormat(undefined, {
    maximumSignificantDigits: 3
  });
  return formatter.format(number);
}

/**
 * Copies an object or anrray without using their reference by using the `structuredClone` function
 *
 * ```js
 * const a = [];
 * const b = a;
 * const c = deepCopy(a);
 *
 * a.push(1);
 *
 * console.log(b);
 * → [1]
 *
 * console.log(c);
 * → []
 *
 * ```
 *
 * @param {object | array} objectOrArray Object or array to copy
 * @returns {object | array} A deep copied object
 */
function deepCopy(objectOrArray) {
  return structuredClone(objectOrArray);
}

/**
 *
 * @param {number} starting
 * @param {number} ending
 * @param {boolean} reverse
 * @returns {number[]} An array of numbers

 */
function createArrayOfNumbers(starting, ending) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var arrayOfNumbers = [];
  if (reverse) {
    for (var i = ending; i > starting; i--) {
      arrayOfNumbers.push(i);
    }
  } else {
    for (var _i2 = starting; _i2 < ending; _i2++) {
      arrayOfNumbers.push(_i2);
    }
  }
  return arrayOfNumbers;
}

/**
 *Function that transforms date strings in this format:
 * - `dd/mm/yyyy`
 *
 *
 * Into this format:
 * - `mm/dd/yyyy`
 *
 *
 * @param {string} dateString
 * @returns {string} New date in the American format
 */
function invertDayAndMonth(dateString) {
  var splittedDate = splitString(dateString, "/");
  var day = splittedDate[0];
  var month = splittedDate[1];
  var year = splittedDate[2];
  return "".concat(month, "/").concat(day, "/").concat(year);
}

/**
 * Function that can sort an array of objects by:
 * - Number
 * - String
 * - Boolean
 * - Date
 *
 * @param {array} array Array of objects
 * @param {string} prop Name of the property in the array to be sorted by
 * @param {boolean} reverse Boolean value to know if the array has to be reversed or not
 * @returns A new sorted array
 */
function sortArrayOfObjects(array, prop) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "asc";
  //To make it easier on the developer we remove any whitespace
  prop = prop.trim();

  //Makes a deep copy of the array
  var newSortedArray = deepCopy(array);

  //We sort the array
  newSortedArray = newSortedArray.sort(function (obj1, obj2) {
    //We take the first 2 objects
    var propOfObj1 = obj1[prop];
    var propOfObj2 = obj2[prop];
    var dateREGEX = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    var isDateAsString = dateREGEX.test(obj1[prop]);
    if (isDateAsString) {
      propOfObj1 = invertDayAndMonth(propOfObj1);
      propOfObj1 = new Date(propOfObj1).toISOString();
      propOfObj2 = invertDayAndMonth(propOfObj2);
      propOfObj2 = new Date(propOfObj2).toISOString();
    }
    var typeOfObjectProperty = _typeof(propOfObj1);
    switch (typeOfObjectProperty) {
      case "string":
        {
          //Perfect, we do nothing
          break;
        }
      case "number":
        {
          //ex:  10 → "10"
          propOfObj1 = propOfObj1.toString();
          propOfObj2 = propOfObj2.toString();
          break;
        }
      case "boolean":
        {
          //If true → "a", if false → "z"
          propOfObj1 = propOfObj1 ? "a" : "z";
          propOfObj1 = propOfObj1 ? "a" : "z";
          break;
        }
      default:
        {
          throw console.error("An error has occured, the property is undefined or null");
        }
    }

    //We sort by converting the property values into string and compare their locale
    return propOfObj1.localeCompare(propOfObj2);
  });

  //Reverse the order of the array if the dev wants to
  if (reverse === "desc") {
    return newSortedArray.reverse();
  }
  return newSortedArray;
}

/**
 * Does the exact opposite of {@link splitArrayStringOnUpperCase}, instead of transforming a camelCase string into a titlecase word with spaces
 * (like: "firstName" → "First Name")
 *
 * It transforms a titlecase word with spaces passed in argument as a camelCase string
 *
 * @param {string} string String to change the
 * @returns A string using the camelCase naming convention
 */
function setTitlecaseToCamelCase(string) {
  var camelCasedString = splitString(string, " ");
  camelCasedString[0] = formatText(camelCasedString[0], "lowercase");
  camelCasedString = camelCasedString.toString().replaceAll(",", "");
  return camelCasedString;
}

//Faster and more efficient

/**
 * Function that filters an array by a string
 *
 * @param {array} arrayToFilter
 * @param {string} string
 * @returns
 */
function filterArrayByString(arrayToFilter, string) {
  var newArray = [];
  var typeofArray = _typeof(arrayToFilter);
  var isArrayOfObjects = typeofArray === "object";

  //To make the filtering more efficient, we're going to use sets
  var filteredSet = new Set();
  if (isArrayOfObjects) {
    var _iterator2 = _createForOfIteratorHelper(arrayToFilter),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var object = _step2.value;
        for (var property in object) {
          var valueOfObject = object[property].toString();
          var includesQuery = valueOfObject.toLowerCase().includes(string);
          if (includesQuery) {
            filteredSet.add(object);
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } else {
    var _iterator3 = _createForOfIteratorHelper(arrayToFilter),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var word = _step3.value;
        var _includesQuery = word.toString().toLowerCase().includes(string);
        if (_includesQuery) {
          filteredSet.add(word);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
  newArray = Array.from(filteredSet);
  return newArray;
}