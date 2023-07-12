---
title: create a sorting table in React
author: Trent1900
date: 2023-7-3 22:02:00 +1000
categories: [Blogging, jwt]
tags: [logout]
---

### Create a react sorting function

- pass the list for sorting, and we will need to know which column we want to start sorting, so we will need two argument, which is the list and the column, last but not least, we would need to know the sorting order. by now we have three parameters in the function.

```ts
export function listSort<T>(list: T[], key: keyof T, isAscending: boolean) {
  let sortedList;
  sortedList = [...list].sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    if (typeof valueA === "string" && typeof valueB === "string") {
      const comparison = valueA.localeCompare(valueB);
      return isAscending ? comparison : -comparison;
    }
    if (typeof valueA === "number" && typeof valueB === "number") {
      return isAscending ? valueA - valueB : valueB - valueA;
    }
    return 0;
  });
  return sortedList;
}
```

1. The function listSort is defined as a generic function with a type parameter T that extends Record<number, string>. This ensures that the elements of the list array have keys of type number and values of type string.
2. The function takes three parameters:

- list: T[]: An array of objects of type T.
- key: keyof T: The key of the object on which the sorting will be performed.
- isAscending: boolean: A boolean value indicating whether the sorting should be in ascending order.

3. Inside the function, a variable sortedList is declared to store the sorted array.
4. The sortedList is assigned the sorted version of the list array. The spread operator ([...list]) is used to create a new array with the same elements as the list array.
5. The sort method is called on the sortedList array, passing a comparison function as an argument. This comparison function compares the values of the key property on each pair of objects (a and b) in the array.
6. Inside the comparison function, the values of the key property (valueA and valueB) are extracted from the objects a and b, respectively.
7. The comparison is performed based on the types of valueA and valueB:

- If both values are strings, the localeCompare method is used to perform a string comparison, and the result is returned.
- If both values are numbers, a numerical comparison is performed by subtracting one value from the other.
- If the values have different types or are not strings or numbers, a default value of 0 is returned.

8. Finally, the sortedList, which is the list that we rearranged just now, is returned.

> some tips about generic in ts <!-- prettier-ignore -->
{:.prompt-tip}

- utilize the `T extends Record<number, string>` syntax in TypeScript to indicate that the generic type T can be an object with keys that are of type number, similar to the example object provided

```ts
const myObj = {
  1: "first",
  second: "second",
};
```
