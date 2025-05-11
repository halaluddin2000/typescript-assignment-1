function formatString(input: string, toUpper?: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
console.log(formatString("hello"));
console.log(formatString("hello", true));
console.log(formatString("hello", false));
