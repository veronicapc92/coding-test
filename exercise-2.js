/**HELPER FUNCTIONS**/

// Determines the frequency of each element
// and stores it in an object with keys element and frequency
const getFrequency = (array, element) => {
  let filteredArray = array.filter((e) => e === element);
  return { element, frequency: filteredArray.length };
};

// Removes duplicates in an array
const removeDuplicates = (data) => {
  return data.filter((value, index) => data.indexOf(value) === index);
};

/**MAIN FUNCTION**/
const secondLowest = (array) => {
  let elementInformation = [];
  let frequencyArray = [];
  let numbersArray = [];

  // Storing in an array each object returned by getFrequency
  for (let element of array)
    elementInformation.push(getFrequency(array, element));

  // Storing all the frequencies in an array
  for (let element of elementInformation)
    frequencyArray.push(element.frequency);

  // Removing duplicates from the frequencies array
  // in order to determine the second lowest frequency
  const frequencies = removeDuplicates(frequencyArray);
  frequencies.sort();

  // Determining the second lowest frequency
  let secondLowestFrequency =
    frequencies.length < 2 ? frequencies[0] : frequencies[1];

  // Finding what numbers have the second lowest frequency
  // and storing them in an array
  for (let element of elementInformation)
    element.frequency === secondLowestFrequency &&
      numbersArray.push(element.element);

  // Removing duplicates from the numbers array
  // in order to determine the second smallest number
  const numbers = removeDuplicates(numbersArray);
  numbers.sort();

  // Determining the second lowest number
  let secondLowestNumber = numbers.length < 2 ? numbers[0] : numbers[1];

  return secondLowestNumber;
};

secondLowest([4, 3, 1, 1, 2]);
secondLowest([4, 3, 1, 1, 2, 2]);
secondLowest([4, 3, 1, 2]);
