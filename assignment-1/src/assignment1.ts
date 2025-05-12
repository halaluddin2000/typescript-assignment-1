function formatString(input: string, toUpper?: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
// console.log(formatString("hello"));
// console.log(formatString("hello", true));
// console.log(formatString("hello", false));

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.5 },
  { title: "Book C", rating: 5.0 },
];

const filterByBooks = filterByRating(books);
// console.log(filterByBooks);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  for (const arr of arrays) {
    result = result.concat(arr);
  }
  return result;
}
const output = concatenateArrays([1, 2], [3], [4, 5]);
console.log(output);
