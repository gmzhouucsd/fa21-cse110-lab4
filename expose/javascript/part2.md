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
  a. student.name
  b. student['Grad Year']
  c. student:greeting();
  d. student['Favorite Teacher'].name
  e. student.courseLoad[0]
