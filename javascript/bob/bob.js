//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  // Remove leading and trailing whitespace from the message
  message = message.trim();

  // Check if the message is empty or only contains whitespace
  if (message === '') {
    return 'Fine. Be that way!';
  }

  // Check if the message ends with a question mark to determine if it's a question
  const isQuestion = message.endsWith('?');

  // Check if the message is in all capital letters to determine if it's yelling
  const isYelling = message === message.toUpperCase();

  // Check if the message contains at least one letter
  const hasLetters = /[a-zA-Z]/.test(message);

  //Check if the message has only characters
  const isNumeric = /^[0-9, ]+$/.test(message);
  if (isQuestion && isYelling && hasLetters) {
    return 'Calm down, I know what I\'m doing!';
  } else if (isQuestion) {
    return 'Sure.';
  } else if (isNumeric) {
    return 'Whatever.';
  } else if (isYelling) {
    return 'Whoa, chill out!';
  } else {
    return 'Whatever.';
  }
};
