window.onload = function() {

    var ninjas = ["shaun", "crystal", "yoshi", "ryu", "yoshi", "ryu"];

    var refinedNinjas = new Set(ninjas);

    console.log(refinedNinjas);

    ninjas = [..refinedNinjas];//spread operator to spreat elements off the set

    console.log(ninjas);//now we have an array (in output) of ninjas with no duplicats

}
