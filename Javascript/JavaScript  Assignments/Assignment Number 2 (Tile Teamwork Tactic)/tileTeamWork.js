const possibleBonus= (a,b) => {
    let player1=a;
    let player2=b;
    for(let i =1;i<=6;i++)
    {
        player1 = player1+ 1;
        if(player1===player2)
        {
            console.log("Possibility Of Bonus " + true)
            return true
        }
    }
    console.log("Possibility Of Bonus " + false)
    return false;
};

possibleBonus(3, 7);// True
possibleBonus(1, 9);  // False
possibleBonus(5, 3);  // False

/* 
* OUTPUT
* possibleBonus(3, 7); Possibility Of Bonus true
* possibleBonus(1, 9); Possibility Of Bonus false 
* possibleBonus(5, 3); Possibility Of Bonus false
 */