console.warn('Array HomeWork!');

function findMinNumber(array) {
    var min = array[0];
    array.forEach(function(nr){
        if(min > nr) {
            min = nr;
        }
    });

    console.info('min = ', min);
}

var repetenti4B = [-2, 5, 3, 0, 2, 6, 1, 9, -4];
findMinNumber(repetenti4B);

var repetenti7C = [5, 3, 2, 6, 1, 9];
findMinNumber(repetenti7C);

findMinNumber([3, 5, 2, 7, 9]);



// =========== sort ==========

function sortAsc(array) {
    console.warn('sorting:', array);
    //array.sort();
    for(var j = 0; j < array.length; j++) {
        for(var i = 0; i < array.length - 1 - j; i++) {
            console.info('compare', array[i], array[i+1], i);
            if(array[i] > array[i+1]) {
                console.info('change....', i);
                var tmp = array[i];
                array[i] = array[i+1];
                array[i+1] = tmp;
            }
        }
        console.log('intermediary:', array, i, j);
    }
    console.info('sorted:', array);
}

sortAsc([1, 2, 3, 4, 5]);
sortAsc([5, 4, 3, 2, 1]);
sortAsc([1, 3, 2, 5, 4]);