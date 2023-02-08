import { func } from "prop-types";

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
 *ex: "crème brûlée" → "creme brulee"
 *
 * @param string string to be normalized
 * @returns  {string |}
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
 *ex: "testColor" with "-" → ["test","Color"] → ["test", "color"] → "test-color"

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
 * Copies an object or anrray without using their reference
 *
 * @param {object | array} objectOrArray Object or array to copy
 * @returns {object | array} A deep copied object
 */
export function deepCopy(objectOrArray) {
  return structuredClone(objectOrArray);
}