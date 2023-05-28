var slides = [
    {
        name: 'Kongre ve Kültür Merkezi',
        image: 'denizli1.jpg',
        yazi: 'Denizli Büyükşehir Belediyesinin hayata geçirdiği en önemli projelerden biri olan Denizli Büyükşehir Belediyesi Nihat Zeybekci Kongre ve Kültür Merkezinin yapımı tamamlandı. Ege Bölgesi’nin en büyük kongre ve kültür merkezi olan tesisin basın tanıtımı yapıldı. Tanıtıma Denizli Büyükşehir Belediye Başkanı Osman Zolan, Denizli Milletvekili Nilgün Ök, Denizli Büyükşehir Belediyesi Meclis Başkan Vekili Ali Değirmenci, Genel Sekreter Yardımcısı Ali Aydın ve daire başkanları ile çok sayıda basın mensubu katıldı. 85.000 metrekare kapalı alana sahip Denizli Büyükşehir Belediyesi Nihat Zeybekci Kongre ve Kültür Merkezindeki 500 kişilik, 1000 kişilik ve 2000 kişilik dev salonların incelenmesiyle başlayan gezi özellikle çocukların uzayla ilgili merak ettiklerini öğrenebilmeleri ve yeni bilgiler edinebilmeleri için uzay gösteriminin yapıldığı planetaryum (gezegen evi) ile devam etti.'
    },
    {
        name: 'Denizli Yeşil Bayrak',
        image: 'denizli2.jpg',
        yazi: 'İngiltere ve Galler’deki park ve yeşil alanlarda ulusal bir standart oluşturmak için 1996 yılında tasarlanan daha sonra tüm dünyaya yayılan Yeşil Bayrak ödülü ile Türkiye de ilk kez Denizli Büyükşehir Belediyesi buluştu. İncilipınar Parkı ile Yeşil Bayrak ödülünü alan Türkiye deki ilk kurum olan Denizli Büyükşehir Belediyesi, İngiltere deki bağımsız sivil toplum kuruluşu Keep Britain Tidy tarafından ödülünü aldı. Yüksek çevre standartlarını sağlamada, diğer kurum ve kuruluşlara örnek olan Yeşil Bayrak ın rekreasyonel yeşil alanlarda mükemmellik ölçeğini temsil ettiği ifade edilirken, ödülün aynı zamanda bir tanıtım aracı olduğu da kaydedildi.'
    },
    {
        name: 'Denizli Honaz Tüneli',
        image: 'denizli3.jpg',
        yazi: 'Honaz Tüneli, Türkiye nin Denizli ilinde bulunan bir karayolu tünelidir. Denizli Acıpayam Yolu ile Denizli Çevreyolu arasında yer almakta olup çevreyolunun son halkasıdır. Yapımına 2 Kasım 2011 de başlanan tünelin 28 Ocak 2023 te hizmete girmiştir. Tünelin toplam uzunluğu 2.640 metredir.'
    }
];

var index = 0;
var slideCount = slides.length;

var settings={
    duration : '1500',
    random : true
};

init(settings);

document.querySelector(".fa-arrow-circle-left").addEventListener('click', function(){
    console.log("deneme");
    index--;
    showSlide(index);
});

document.querySelector(".fa-arrow-circle-right").addEventListener('click', function(){
    index++;
    showSlide(index);
});

function init(_settings){

    setInterval(function(){
        if(settings.random){
            //random index üretilmesi
            index = Math.floor(Math.random() * slideCount);
        }
        else{
            //random : false olursa
        }

        showSlide(index);

    },settings.duration)
}

function showSlide(i){

    index = i;
    //index değeri ilk slaytın indexinden küçükse
    if(i < 0){
        index = slideCount-1;
    }
    //index numarası son slaytın indexin büyük olduğunda en baştaki slayta döner
    if(i >= slideCount){
        index=0;
    }

    //indexe göre slides' tan isim ve fotoğraf konumlarını çekme
    document.querySelector(".card-title").textContent = slides[index].name;
    document.querySelector(".card-img-top").setAttribute('src', "/img/" + slides[index].image);

    //indexe göre yazı metninin değişmesi 
    document.getElementById("yazi").textContent = slides[index].yazi;
};























