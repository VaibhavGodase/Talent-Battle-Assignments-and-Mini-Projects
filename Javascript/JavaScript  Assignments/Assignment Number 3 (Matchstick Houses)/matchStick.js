const matchHouse = (n) => {
    if(n===0)
    {
        console.log("Step 0 returns 0 Matchsticks");
    }
    else if(n<0)
    {
        console.log("The Input (Step) Will Always Be NON NEGATIVE NUMBER ");
    }
    else if(typeof n!== "number")
    {
        console.log("The Input (Step) Cannot Be A STRING or NUMERIC STRING ");
    }
    else{
        let matchStick;
        matchStick= (5*n) +1;
        console.log(matchStick);
    }
};

matchHouse(1);
matchHouse(2);
matchHouse(4);
matchHouse(8);
matchHouse(436);
matchHouse(0);
matchHouse("0");
matchHouse(-5);

/* 
 * OUTPUT
 * 6
 * 11
 * 21
 * 41
 * 2181
 * Step 0 returns 0 Matchsticks
 * The Input (Step) Cannot Be A STRING or NUMERIC STRING 
 * The Input (Step) Will Always Be NON NEGATIVE NUMBER  
 */

