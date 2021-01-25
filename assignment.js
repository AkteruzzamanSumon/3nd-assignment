//Convert kilometer to meter;

var kilometer = 10;
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000; // 1 kilometer = 1000 meter;
    return meter;
}


//create a budgetCalculator;

function budgetCalculator(watch, phone, laptop){
    var watch = 15 * 50;  //15 watch and each price 50 taka;
    var phone = 10 * 100; //10 watch and each price 100 taka;
    var laptop = 5 * 500; //5 watch and each price 500 taka;
    var total = watch + phone + laptop;
    return total;
}



//create a megaFriend;

var friends = ['linon', 'sumon', 'ali', 'hossan', 'sumi', 'ikboll', 'farukhok', 'rebel','akteruzzama sumon',  'Sumnpna'];

function megaFriend(friends){
    var maxWord = friends[0];
    for (var i = 0; i < friends.length; i++){
        var element = friends[i];
        if(element.length > maxWord.length){
            maxWord = element;
        }
    }
    return maxWord;
}
