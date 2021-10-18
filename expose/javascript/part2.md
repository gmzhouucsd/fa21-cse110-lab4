1. Line 12 will print "3" because "var i" has been incremented 3 times in the for loop. The reason why it stays at "3" is because i is of var type which has no block scope.
2. Line 13 will print "150" because the last iteration of the for loop set "var discountedPrice" to 150 (300 * 0.5). Again, discountedPrice stays at "150" because discountedPrice is of var type which has no block scope.
3. Line 14 will print "150" because the last iteration of the for loop set "var finalPrice" to 150 (Math.round(150 * 100 / 100)). finalPrice stays at "150" because it is of type var which has no block schope.
4. The function will return the array [50, 100, 150] because each iteration of the for loop pushes the calculated discounted price of each inputted price into the discounted array. (100 * 0.5), (200 * 0.5), and (300 * 0.5) are all added into the array. "discounted" is of type var, so it is able to return this array with values.
5. Line 12 returns an error because "let i" is defined in the for loop and cannot be accessed outside of the for loop.
6. Line 13 returns an error because "discountedPrice is defined in the for loop and cannot be accesed outside of the for loop.
7. Line 14 returns "150" because finalPrice is declared outside of the for loop. "150" is specifically returned because it was the last value assigned to finalPrice in the for loop (Math.round(150 * 100 / 100).
8. The function will return the array [50, 100, 150] because each iteration of the for loop pushes the calculated discounted price of each inputted price into the discounted array. (100 * 0.5), (200 * 0.5), and (300 * 0.5) are all added into the array. "discounted" is declared before the for loop, so it is able to return this array with values.
9. Line 11 returns an error because "let i" is defined in the for loop, which cannot be accessed outside of the for loop.
10. Line 12 returns "3" because "const length" is defined as the length of prices, which is 3.
11. The function will return the array [50, 100, 150] because each iteration of the for loop pushes the calculated discounted price of each inputted price into the discounted array. (100 * 0.5), (200 * 0.5), and (300 * 0.5) are all added into the array. "discounted" is declared as a const before the for loop, so it is able to return this array with values.
12.
- A. student.name
- B. student['Grad Year']
- C. student:greeting();
- D. student['Favorite Teacher'].name
- E. student.courseLoad[0]
13.
- A. 32 because 2 converts to a string and concatenates onto 3.
- B. 1 because 3 converts to an integer and is subtracted by 2. This happens because subtraction is uniquely a math operation.
- C. 3 because null converts to 0 when performing math operations.
- D. 3null because null converts to a string and concatenates to the string '3'.
- E. 4 because true converts to 1 in math operations.
- F. 0 because null and false both convert to 0 in math operations.
- G. 3undefined because undefined converts to a string and concatenates to the string '3'.
- H. NaN because undefined converts to NaN in math operations.
14.
- A. true because '2' converts to the integer 2, which is greater than 1.
- B. false because '2' is bigger than the 1 in '12' in terms of the alphabet
- C. true because '2' converts to the integer 2, which is equal to 2.
- D. false because '2' and 2 are not equal as one is a string and the other is an integer
- E. true because true and Boolean(2) are both boolean types, and Boolean(2) returns true.
15. == compares two values and automatically converts types if they're different. === compares two values if and only if they are the same type. If they are of different types, it automatically returns false.
17. [2,4,6]. The for loop in modifyArray iterates through the input array and adds it into another array newArr. Before each addition to newArr, however, callback is run on the element of the input array, multiplying it by 2. Thus, we get [2,4,6].
19.
1
4
2
3
