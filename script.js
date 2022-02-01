var models = fetch("./text.json")
.then(response => {
   return response.json();
})
.then(data => localStorage.setItem('data.models',JSON.stringify(data.models))
);

models = JSON.parse(localStorage.getItem('data.models'));



var index = 0;
var slaytCount = models.length;
var interval;

var settings={
    duration : '4000',
    random : false
};

init(settings);

function init(settings){

    var prev;
    interval=setInterval(function(){
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            // artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)
}


function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.name').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);  
    src="img/k1.png"  

    document.querySelector('.price').textContent=models[index].price;    

    document.querySelector('.container').setAttribute("style", "background-image: url('" +models[index].bg + "'); ");    
   
}











