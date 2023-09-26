function findAreaTriangle(x,y){
    return x * y / 2; 
}

findAreaTriangle = (x,y) =>{
    x * y / 2;
    return x * y / 2;

}
console.log('b = 3 :' + 'h = 4:' + ' ' + findAreaTriangle(3,4).toFixed(1));
console.log('b = 5 :' + 'h = 7:' + ' ' + findAreaTriangle(5,7).toFixed(1));

function volumeOfSphere(radius){
    return 4/3 * Math.PI * radius^3 ; 
}

volumeOfSphere = (radius) =>{
    
    4 / 3 * Math.PI * radius ** 3 ;
    return 4 / 3 * Math.PI * radius ** 3 ;

}
console.log(Math.PI);

console.log('r = 3:' + ' ' + volumeOfSphere(3).toFixed(1));
console.log('r = 5:' + ' '  + volumeOfSphere(5).toFixed(1));


function distanceToMeters(d,u){

    return d,u ; 
}

distanceToMeters = (d,u) =>{
    let distance = 0  ;
    let units = 'm';
    if (distance != 0 && units != 'm' ) {
    switch(units){
        case 'km' :
            distance = distance * 1000 ;
            break ;
        case 'm' :
            distance = distance * 1 ;
            break ;
        case 'y':
            distance = distance * 0.9144;
            break;
        case 'mi':
            distance = distance * 1609.344;
            break;
        default:
            break;
    }

}
distance = distance * 1000 ;
distance = distance * 1 ; 
distance = distance * 0.9144;  
distance = distance * 1609.344;
    return distance ;

}

console.log('distance : 50', 'unit: m' + ' ' + distanceToMeters(50,'m').toFixed(2));
console.log('distance : 100', 'unit: y' + ' '  + distanceToMeters(100,'y').toFixed(2));
console.log('distance : 1', 'unit: mi' + ' ' + distanceToMeters(1,'mi').toFixed(2));
console.log('distance : 1.234', 'unit: km' + ' '  + distanceToMeters(1.234,'km').toFixed(2));


function string to seconds(d,u){

    return d,u ; 
}
