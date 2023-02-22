/**
 * A simplified version of `document.querySelector()` to select an element from the `document` or a container
 *
 * @param  query HTML Element to select
 * @param  container HTML Element to select the query from, if no containers are entered, it will use the `document`
 * @returns The element selected *or* `null` if the element doesn't exist
 */
export function selectQuery(query, container) {
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
export function selectQueryAll(query, container) {
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
export function log(...messages) {
  for (let message of messages) {
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
export function getInputValue(input, options = "") {
  if (!input) {
    return undefined;
  }

  switch (options) {
    case "number": {
      return input.valueAsNumber;
    }
    case "date": {
      return input.valueAsDate;
    }
    default: {
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
export function formatText(string, option) {
  let formattedOption = option.toLowerCase().trim();

  switch (formattedOption) {
    case "lowercase": {
      return string.toLowerCase();
    }

    case "uppercase": {
      return string.toUpperCase();
    }

    case "titlecase": {
      let stringArray = string.split(" ");
      for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] =
          stringArray[i].substring(0, 1).toUpperCase() +
          stringArray[i].slice(1).toLowerCase();
      }
      stringArray = stringArray.concat();
      return stringArray.toString();
    }

    default: {
      throw new Error(
        "Formatting text error: unknown option passed in argument"
      );
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
export function normalizeString(string) {
  if (typeof string !== "string") {
    log("Value passed in argument is not a string !");
    return;
  }
  return string
    .normalize("NFD") //returns the unicode NORMALIZATION FORM of the string using a canonical DECOMPOSITION (NFD).
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
export function splitString(string, character) {
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
export function splitOnUpperCase(
  string,
  formatting = "lowercase",
  characterToJoinBack
) {
  //Regex for all the uppercase letters
  const uppercaseLettersREGEX = /(?=[A-Z])/;

  let newString = splitString(string, uppercaseLettersREGEX);

  for (let i = 0; i < newString.length; i++) {
    newString[i] = formatText(newString[i], formatting);
  }

  let formattedString = newString.reduce((accumulated, currentValue) => {
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
export function splitArrayStringOnUpperCase(
  array,
  formatting = "lowercase",
  characterToJoinBack = ""
) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
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
export function getObjectValues(object) {
  const objectIsDefined = !!object;

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
export function getArrayObjectValues(arrayOfObjects) {
  let newArray = [];

  for (let object of arrayOfObjects) {
    const objectIsDefined = !!object;

    if (objectIsDefined) {
      newArray.push(Object.values(object));
    }
  }

  return newArray;
}

/**
 *Retrieves the properties of an object inside an array
 *
 * @param object
 * @returns {Array<any>}
 */
export function getObjectProperties(object) {
  const objectIsDefined = !!object;

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
export function toPercent(number) {
  return number.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
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
export function numberSeparatorLocale(number) {
  const formatter = new Intl.NumberFormat(undefined, {
    maximumSignificantDigits: 3,
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
export function deepCopy(objectOrArray) {
  return structuredClone(objectOrArray);
}

/**
 *
 * @param {number} starting
 * @param {number} ending
 * @param {boolean} reverse
 * @returns {number[]} An array of numbers

 */
export function createArrayOfNumbers(starting, ending, reverse = false) {
  let arrayOfNumbers = [];
  if (reverse) {
    for (let i = ending; i > starting; i--) {
      arrayOfNumbers.push(i);
    }
  } else {
    for (let i = starting; i < ending; i++) {
      arrayOfNumbers.push(i);
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
export function invertDayAndMonth(dateString) {
  const splittedDate = splitString(dateString, "/");
  const day = splittedDate[0];
  const month = splittedDate[1];
  const year = splittedDate[2];

  return `${month}/${day}/${year}`;
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
export function sortArrayOfObjects(array, prop, reverse = "asc") {
  //To make it easier on the developer we remove any whitespace
  prop = prop.trim();

  //Makes a deep copy of the array
  let newSortedArray = deepCopy(array);

  //We sort the array
  newSortedArray = newSortedArray.sort((obj1, obj2) => {
    //We take the first 2 objects
    let propOfObj1 = obj1[prop];

    let propOfObj2 = obj2[prop];

    let dateStringREGEX =
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    let isDateAsString = dateStringREGEX.test(obj1[prop]);

    if (isDateAsString) {
      propOfObj1 = invertDayAndMonth(propOfObj1);
      propOfObj1 = new Date(propOfObj1).toISOString();

      propOfObj2 = invertDayAndMonth(propOfObj2);
      propOfObj2 = new Date(propOfObj2).toISOString();
    }

    const typeOfObjectProperty = typeof propOfObj1;
    switch (typeOfObjectProperty) {
      case "string": {
        //We compare their locale
        return propOfObj1.localeCompare(propOfObj2);
      }
      case "number": {
        //ex: "10" → 10 in case one of them is a string
        propOfObj1 = Number(propOfObj1);
        propOfObj2 = Number(propOfObj2);
        return propOfObj1 - propOfObj2;
      }
      case "boolean": {
        //If true → 1, if false → 0
        propOfObj1 = propOfObj1 ? 1 : 0;
        propOfObj1 = propOfObj1 ? 1 : 0;
        return propOfObj2 - propOfObj1;
      }
      default: {
        throw console.error(
          "An error has occured, the property is undefined or null"
        );
      }
    }
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
export function setTitlecaseToCamelCase(string) {
  let camelCasedString = splitString(string, " ");
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
export function filterArrayByString(arrayToFilter, string) {
  let typeofArray = typeof arrayToFilter;
  const isArrayOfObjects = typeofArray === "object";

  //To make the filtering more efficient, we're going to use sets
  let filteredSet = new Set();

  if (isArrayOfObjects) {
    //We iterate through every object in the array
    for (let object of arrayToFilter) {
      //We iterate through every property in each object
      for (let property in object) {
        let valueOfObject = object[property].toString().toLowerCase();

        const stringHasSpaces = string.trim().includes(" ");

        if (stringHasSpaces) {
          const arrayOfStrings = splitString(string, " ");

          //If the query contains multiple words, we iterate through each word
          for (const word of arrayOfStrings) {
            let includesQuery = valueOfObject.includes(
              word.toLocaleLowerCase()
            );

            if (includesQuery) {
              filteredSet.add(object);
              continue;
            }
          }
        } else {
          let includesQuery = valueOfObject.includes(string.toLowerCase());

          if (includesQuery) {
            filteredSet.add(object);
          }
        }
      }
    }
  } else {
    for (let word of arrayToFilter) {
      let includesQuery = word
        .toString()
        .toLowerCase()
        .includes(string.toLowerCase());
      if (includesQuery) {
        filteredSet.add(word);
      }
    }
  }

  return Array.from(filteredSet);
}
