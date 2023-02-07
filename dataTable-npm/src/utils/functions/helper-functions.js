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
 * @param {string[]} array
 * @param {string} formatting
 * @param {string} characterToJoinBack
 * @returns {string[]} A new formatted array of string
 */
export function splitArrayStringOnUpperCase(
  array,
  formatting = "lowercase",
  characterToJoinBack
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
