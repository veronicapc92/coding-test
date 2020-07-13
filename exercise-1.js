const longest_sequence = (s) => {
  // Checking that s is a string and that it's not an empty string
  if (typeof s !== "string" || s.length === 0) {
    console.log("Please enter a valid string");
    return;
  }

  const string = s.toLowerCase();
  const array = Array.from(string);
  const longest = {};
  let letter = array[0];
  let length = 1;
  let count = 1;
  let chosenLetter;

  for (let i = 1; i < array.length; i++) {
    // First, we check if the letter that's currently being evaluated
    // is the same as the one evaluated just before

    // If so, the length of the current string increments by 1
    if (array[i] === array[i - 1]) count += 1;
    // Otherwise, it means we are in a new string and its length
    // as far as we know is 1
    else count = 1;

    // Then, we check if the length of the string that's currently being
    // evaluated is greater than the length of the longest string
    // known so far

    // If so, the string currently being evaluated becomes the longest
    // string known so far
    if (count > length) {
      letter = array[i];
      length = count;
    }

    // If on the contrary, their lengths are the same, we choose the one
    // containing the letter that occurs first alphabetically
    // and we update the variable "length" accordingly
    else if (count === length) {
      chosenLetter = [array[i], array[i - 1]].sort()[0];
      if (chosenLetter !== letter) {
        length = count;
      }
    }
  }

  // Once we have identified the letter that forms the longest array
  // and the length of said array, we update the "longest" object.
  longest[letter] = length;

  console.log(longest);
  return longest;
};

longest_sequence("dghhhmhmx");
longest_sequence("dhkkhhKKKt");
longest_sequence("aBbBadddadd");
