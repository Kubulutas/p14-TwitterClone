// console.log('bağlantı kontol')

const placeholder = document.querySelector('.placeholder');
//console.log(placeholder)
//Neler oluyor kısmı

const editableInput = document.querySelector('.editable');
//console.log('editableInput')
//tweet içerik girdiğimiz yer 




const tweetButton = document.querySelector('.button');
//console.log(tweetButton)

const counter = document.getElementById('counter');
//console.log(counter)




const readonly = document.querySelector('.readonly');




editableInput.addEventListener('click', ()=>{
    placeholder.style.color = "#98a5b1";
});

editableInput.onblur = () =>{ //dışarıya tıkladığımızda tekrar eski rengine gelmesi onblur ile
    placeholder.style.color = "#333";
};





editableInput.onkeypress = (e) =>{ //içine tıklandığında placeholderın gitmesi none ile
    //console.log(e)
    placeholder.style.display="none";
    inputValidate(e.target.innerText); // içindekiler silindikten sonra Neler Oluyor? yazının gelmesi ise validate fonksiyonu ile oluyor  
};

editableInput.onkeyup = (e) =>{    // keyup parmak placeholdern kalktığı an demek
    placeholder.style.display="none";
    inputValidate(e.target.innerText);
};



const inputValidate = (tweet)=>{
    //console.log(tweet)

    const tweetLength = tweet.length;
    //console.log(tweetLength)

 const tweetLimit = 10
 const currentLimit = tweetLimit - tweetLength

    if(tweetLength <=0){
        placeholder.style.display = "block";
        tweetButton.classList.remove("active");
        counter.style.display = ("none"); // yazılar silince saymayı counter sıfırlansın
    }
    else{
        tweetButton.classList.add('active');
        counter.style.display = "block";
        counter.innerText = currentLimit
    }

    





    let newTweet;
// substr, sizden 2değer istiyor.2den başlasın ve 4e kadar gitsin.bunu bir dizi olarak döndürüyor

    if(tweetLength>tweetLimit){

        let overTweet = tweet.substr(tweetLimit, tweetLength)
        //console.log(overTweet) 
        //taşan karakterleri tespit etme işlemi ok

        //taşan karakterlerin arkaplanı red olsun
        let overTweetElement = '<span class="overTweet">${overTweet}</span> ';
        //console.log(overTweetElement)



       newTweet = tweet.substr(0, tweetLimit) + overTweetElement;
       readonly.style.zIndex = '1'

        counter.style.color = "red";
        tweetButton.classList.remove("active");
    }
    else{ counter.style.color= "#333";
        readonly.style.zIndex = '-5'
}


    readonly.innerHTML = newTweet

};

