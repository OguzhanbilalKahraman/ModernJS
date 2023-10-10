var models = [
    {
        name : 'BMW 116i',
        image : 'img/bmw.jpg',
        link : 'https://www.sahibinden.com/ilan/vasita-otomobil-bmw-2014-bmv-1.16i-hatasiz-boyasiz-sunroof-g.g-kamerasi-100bin-km-1127670139/detay'
    },
    {
        name : 'BMW 416i',
        image : 'img/416i.jpg',
        link : 'https://www.caranddriver.com/bmw/4-series-gran-coupe-2022'
    },
    {
        name : 'G Class',
        image : 'img/gclass.jpg',
        link : 'https://www.carexpert.com.au/car-reviews/2022-mercedes-benz-g-class-review'
    },
    {
        name : 'Mazda RX-7',
        image : 'img/rx7.jpg',
        link : 'https://tr.motor1.com/news/131326/gecmise-bakis-mazda-rx-7-fd'
    },
    {
        name : 'BMW M5 CS',
        image : 'img/m5cs.jpg',
        link : 'https://www.bmw.com.tr/tr/all-models/m-serisi/m5-sedan/2021/bmw-5-serisi-sedan-m-otomobilleri-bir-bakista.html'
    },
    {
        name : 'GTR R34',
        image : 'img/r34.jpg',
        link : 'https://www.arabam.com/blog/genel/nissan-gtr-r34-hakkinda-bilinmeyen-6-ozellik/'
    },

];





var count = models.length;

var interval;



var settings={
    duration : '1000',
    random : false
};


var index=0;

init(settings);


document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index --;
    slide(index);
    console.log(index);
});


document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){

    index ++;
    slide(index);
    console.log(index);

});


document.querySelectorAll('.arrow').forEach(function(item){

    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })

})

function init(settings){

    var previous;

   interval = setInterval(function(){

        if(settings.random){

            do{
                index = Math.floor(Math.random() * count);

            }while(index == previous)
            {
                previous = index;

            }


            

        }else{
            //artan index
            if( count = index + 1 ){
                index = -1;
            }
            slide(index);
            console.log(index);
            index++;

        }
       // console.log(index);
        slide(index);

    },settings.duration)


}
function slide(i){

    index = i;

    if(i<0){
        index = count -1;
    }

    if(i >= count){
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);


    document.querySelector('.card-link').setAttribute('href',models[index].link);

}


