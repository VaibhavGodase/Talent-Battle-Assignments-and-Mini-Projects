const towerOfHanoi= (n) => {
    let a = (Math.pow(2,n))-1;
    console.log("Minimum Amount Of Steps Required For " + n + " Number Of Disc's is " + a);
};

towerOfHanoi(1);
towerOfHanoi(2);
towerOfHanoi(3);
towerOfHanoi(4);
towerOfHanoi(5);
towerOfHanoi(0);

/* 
* OUTPUT
* Minimum Amount Of Steps Required For 1 Number Of Disc's is 1
* Minimum Amount Of Steps Required For 2 Number Of Disc's is 3
* Minimum Amount Of Steps Required For 3 Number Of Disc's is 7
* Minimum Amount Of Steps Required For 4 Number Of Disc's is 15
* Minimum Amount Of Steps Required For 5 Number Of Disc's is 31
* Minimum Amount Of Steps Required For 0 Number Of Disc's is 0 
 */
