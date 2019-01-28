function findMinNumber(){
var min = array[0];
// for (var i =0; i < array.length; i++){
//     if (min > array[i]) {
//         min = array[i];
//     }
//     }
array.forEach(function(nr){
    if(min > nr) {
        min = nr;
    }
});
    console.info(min);
}
var array = [5, 3, 2, 6, 1, 9];
findMinNumber(array);


/////////// sort //////////

function sortAsc(array) {
    console.warn('sorting ...', array);
    for (var j = 0; j < array.length; j++){
for(var i = 0; i < array.length -1 -j; i++){
console.info('compare', array[i], array[i+1]);
if(array[i] > array[i+1]){
    console.info('change ....');
    var tmp = array[i];
    array[i] = array[i+1];
    array[i+1] = tmp;
}
}
console.warn('intermediary', array);
}

    console.info('sorted ....', array);
}

sortAsc([1, 2, 3, 4, 5]);
sortAsc([5, 4, 3, 2, 1]);
sortAsc([1, 3, 2, 5, 4]);