//Javascript

function myf(name,age){
    console.log('Hello ' + name + ' I am ' + age);
}
myf('Muaz', 12);
myf('Reshmi', 19);



function isSubscribe(){
    console.log("Subscribe");
}

document.getElementById('btn') .addEventListener ('click',isSubscribe)

function Subscribe() {
   document.getElementById("text").innerHTML ="👋Thanks for Subscribe.And fast like";
   document.getElementById("btn").innerHTML ="Subscribed";
   document.getElementById("btn").style.backgroundColor ="#262626";

}

function like() {
   document.getElementById("text").innerHTML ="👋Thanks for Subscribe.And thanks for like";
   document.getElementById("like").innerHTML = '<i class="fa-solid fa-thumbs-up"></i> liked ';
   document.getElementById("like").style.backgroundColor ="#262626";
}

function key(){
   alert('Teshing');
    document.getElementById('text').innerHTML='Website loaded';
}

function onScroll(){
    document.getElementById('text').innerHTML='Scrolling😊';
}




