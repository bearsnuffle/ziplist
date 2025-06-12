"use strict";
function zipList(listA, listB) {
    let i = 0;
    const retList = [];
    while (i < listA.length) {
        retList.push(listA[i]);
        retList.push(listB[i]);
        i++;
    }
    return retList;
}
function zipListTheFunctionalWay(listA, listB) {
    const retList = [];
    listA.forEach((val, index) => {
        retList.push(val);
        retList.push(listB[index]);
    });
    return retList;
}
console.log(zipList([1, 2, 3, 4], ['a', 'b', 'c', 'd']));
console.log(zipListTheFunctionalWay([1, 2, 3, 4], ['a', 'b', 'c', 'd']));
