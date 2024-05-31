# Module 4 JavaScript Coursebook Assignments 


### Assignment Number 1 - Tower of Hanoi There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk.
Create a function that takes a number discs as an argument and 
returns the minimum amount of steps needed to complete the game.
Examples
towerHanoi(3) ➞ 7
towerHanoi(5) ➞ 31
towerHanoi(0) ➞ 0
Notes
• The amount of discs is always a positive integer.
• 1 disc can be changed per move

![Module 4 Assignment Number 1](https://user-images.githubusercontent.com/104457295/208126658-8ebe338a-ba32-464d-af0b-e5d5ff9be1bd.png)



### Assignment Number 2 - Tile Teamwork Tactics In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus. Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.
Examples
possibleBonus(3, 7) ➞ true
possibleBonus(1, 9) ➞ false
possibleBonus(5, 3) ➞ false
Notes
• You cannot move backward (which is why example #3 doesn't work).
• If you are already on the same tile, return false, as you would be advancing away.
• Expect only positive integer inputs

![Module 4 Assignment Number 2](https://user-images.githubusercontent.com/104457295/208127217-468dbf62-c04a-44a4-a851-4d1acd721083.png)



### Assignment Number 3 - Matchstick Houses This challenge will help you interpret mathematical relationships both algebraically and geometrically.Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Examples
matchHouses(1) ➞ 6
matchHouses(4) ➞ 21
matchHouses(87) ➞ 436
Notes
• Step 0 returns 0 matchsticks.
• The input (step) will always be a non-negative integer.
• Think of the input (step) as the total number of houses that have been connected together.

![Module 4 Assigmnent Number 3](https://user-images.githubusercontent.com/104457295/208127737-75af5b2c-75b7-45da-aa31-375e32f31cfb.png)



### Assignment Number 4 - Power Calculator Create a function that takes voltage and current and returns the calculated power.
Examples
circuitPower(230, 10) ➞ 2300
circuitPower(110, 3) ➞ 330
circuitPower(480, 20) ➞ 9600

![Module 4 Assignment Number 4 js](https://user-images.githubusercontent.com/104457295/208128376-9ddd8cd1-f393-46c1-a9a9-3ab49f25744e.png)

![Module 4 Assignment 4 Output](https://user-images.githubusercontent.com/104457295/208128397-75c133c1-1723-40ff-9f16-1af5316087fc.png)
