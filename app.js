var score = 0;
var cats = [{name: 'Chewie', image: 'cat1.jpg'},
 {name: 'Brownie', image: 'cat2.jpg'},
 {name: 'Tiger', image: 'cat3.jpg'},
 {name: 'Mewth', image: 'cat4.jpg'},
 {name: 'Smelly', image: 'cat5.jpg'}]

 function dynamicSort(property) {
     var sortOrder = 1;
     if(property[0] === "-") {
         sortOrder = -1;
         property = property.substr(1);
     }
     return function (a,b) {
         var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
         return result * sortOrder;
     }
 }
cats.sort(dynamicSort("name"));

document.body.innerHTML = '';
for(var i = 0; i < cats.length; i++){
  var cat = cats[i];
  var nom = document.createElement('h4');
  nom.textContent = cat.name;
  var img = document.createElement('img');
  img.src = cat.image;
  var scr = document.createElement('p');
  img.addEventListener('click', (function(scoreCopy,scrCopy){
    return function(){
      scoreCopy +=1;
      scrCopy.innerHTML = scoreCopy;
    }
  })(score,scr));
  document.body.appendChild(nom);
  document.body.appendChild(img);
  document.body.appendChild(scr);
};
