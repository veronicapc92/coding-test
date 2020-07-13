const r = (s, acc) =>
  s.length === 0 ? acc : r(s.substr(1), s.charAt(0) + acc);

const reverseString = (str) => r(str, "");

reverseString("abcb");
reverseString("test");
reverseString("racecar");
