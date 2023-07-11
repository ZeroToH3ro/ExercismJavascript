function transpose(input) {
  if (input.length === 0) return [];

  let maxLen = 0;

  const array = input
    .reverse()

    .map((s) => {
      maxLen = Math.max(maxLen, s.length);

      return s + " ".repeat(maxLen - s.length);
    })

    .reverse()

    .map((s) => [...s]);

  return array[0]
    .map((_, i) => array.map((r) => r[i]))

    .map((r) => r.join(""));
}

const test = transpose(['abc', 'de']);
console.log(test);
