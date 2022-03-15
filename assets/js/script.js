let boring_text = document.querySelector('.boring-text'),
    sandwicheto_text = document.querySelector('.sandwicheto-text'),
    funfoods_text = document.querySelector('.funfoods-text'),
    foodmagic_text = document.querySelector('.foodmagic-text'),
    sad_sonali = document.querySelector('.sad-sonali'),
    happy_sonali = document.querySelector('.happy-sonali'),
    chef = document.querySelector('.chef'),
    sandwich3 = document.querySelector('.sandwich3'),
    sandwich2 = document.querySelector('.sandwich2'),
    sandwich1 = document.querySelector('.sandwich1'),
    knife = document.querySelector('.knife'),
    mayo = document.querySelector('.mayo'),
    plate = document.querySelector('.plate'),
    recipe = document.querySelector('.recipe'),
    hat = document.querySelector('.hat'),
    mayo_bottle = document.querySelector('.mayo-bottle');

setTimeout(()=>{
    plate.style.transform = "translateX(0)";
    setTimeout(()=>{
        sad_sonali.style.transform = "translateX(0)";
        boring_text.style.transform = "translateX(0)";
        setTimeout(()=>{
            plate.style.transform = "translateX(-300px)";
        },1600);
        setTimeout(()=>{
            sad_sonali.style.transform = "translateX(300px)";
            boring_text.style.transform = "translateX(-300px)";
            sandwich1.style.transform = "translateX(0)";
            sandwich2.style.transform = "translateX(0)";
            sandwich3.style.transform = "translateX(0)";
            setTimeout(()=>{
                sandwich3.style.bottom = "12%";
                knife.style.transform = "translateX(0)";
                setTimeout(()=>{
                    knife.style.left = "40%";
                    setTimeout(()=>{
                    mayo.style.transform = "translateX(0)";
                     knife.style.display = "none";  
                     setTimeout(()=>{
                        sandwich3.style.bottom = "8%";
                        mayo.style.zIndex = "0";
                        setTimeout(()=>{
                            sandwicheto_text.style.transform = "translate(0)";
                            happy_sonali.style.transform = "translateX(0)";
                            setTimeout(()=>{
                                sandwicheto_text.style.transform = "translate(-300px)";
                                happy_sonali.style.transform = "translateX(300px)";
                                setTimeout(()=>{
                                    funfoods_text.style.transform = "translate(0)";
                                    chef.style.transform = "translate(0)";
                                },500);
                                
                            },1000);
                        },1500);
                     },100) 
                    },50);
                },1000);
            },2000);
        },2000);
    },2000);
},2000);

