let table = document.querySelector('.table'),
    boring_text = document.querySelector('.boring-text'),
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

let promise = new Promise((resolve, reject) => {
    resolve();
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            table.style.opacity = "1";
            resolve();
        }, 10)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            plate.style.transform = "translateX(0)";
            resolve();
        }, 1000)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            sad_sonali.style.transform = "translateX(0)";
            boring_text.style.transform = "translateX(0)";
            resolve();
        }, 500)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            plate.style.transform = "translateX(-500px)";
            resolve();
        }, 1600)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            sad_sonali.style.transform = "translateX(500px)";
            boring_text.style.transform = "translateX(-500px)";
            sandwich1.style.transform = "translateX(0)";
            sandwich2.style.transform = "translateX(0)";
            sandwich3.style.transform = "translateX(0)";
            resolve();
        }, 400)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            sandwich3.style.bottom = "12%";
            knife.style.transform = "translateX(0)";
            knife.style.left = "40%";
            mayo.style.transform = "translateX(0)";
            resolve();
        }, 2000)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            knife.style.left = "40%";
            resolve();
        }, 1000)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            knife.style.display = "none";
            mayo.style.zIndex = "0";
            sandwich3.style.bottom = "8%";
            resolve();
        }, 50)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            sandwicheto_text.style.transform = "translateX(0)";
            happy_sonali.style.transform = "translateX(0)";
            resolve();
        }, 1500)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            sandwicheto_text.style.transform = "translateX(-500px)";
            happy_sonali.style.transform = "translateX(500px)";
            resolve();
        }, 2000)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            funfoods_text.style.transform = "translateX(0)";
            chef.style.transform = "translateX(0)";
            resolve();
        }, 500)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            funfoods_text.style.transform = "translateX(-500px)";
            chef.style.transform = "translateX(500px)";
            sandwich1.style.transform = "translateX(-500px)";
            sandwich2.style.transform = "translateX(-500px)";
            sandwich3.style.transform = "translateX(-500px)";
            mayo.style.transform = "translateX(-500px)";
            resolve();
        }, 2000)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            mayo_bottle.style.transform = "translateX(0)";
            foodmagic_text.style.transform = "translateX(0)";
            resolve();
        }, 500)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hat.style.transform = "translateX(0)";
            resolve();
        }, 2000)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hat.style.top = "60%";
            resolve();
        }, 500)
    })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            recipe.style.transform = "translate(0)";
            resolve();
        }, 1000)
    })
}).catch(err => console.log(err));

// setTimeout(() => {
//     plate.style.transform = "translateX(0)";
//     setTimeout(() => {
//         sad_sonali.style.transform = "translateX(0)";
//         boring_text.style.transform = "translateX(0)";
//         setTimeout(() => {
//             plate.style.transform = "translateX(-500px)";
//         }, 1600);
// setTimeout(() => {
//     sad_sonali.style.transform = "translateX(500px)";
//     boring_text.style.transform = "translateX(-500px)";
//     sandwich1.style.transform = "translateX(0)";
//     sandwich2.style.transform = "translateX(0)";
//     sandwich3.style.transform = "translateX(0)";
// setTimeout(() => {
//     sandwich3.style.bottom = "12%";
//     knife.style.transform = "translateX(0)";
//     knife.style.left = "40%";
//     mayo.style.transform = "translateX(0)";
// setTimeout(() => {
//     knife.style.left = "40%";

// setTimeout(() => {
//     knife.style.display = "none";
//     mayo.style.zIndex = "0";
// setTimeout(() => {
//     sandwich3.style.bottom = "8%";

// setTimeout(() => {
//     sandwicheto_text.style.transform = "translateX(0)";
//     happy_sonali.style.transform = "translateX(0)";
// setTimeout(() => {
//     sandwicheto_text.style.transform = "translateX(-500px)";
//     happy_sonali.style.transform = "translateX(500px)";
// setTimeout(() => {
//     funfoods_text.style.transform = "translateX(0)";
//     chef.style.transform = "translateX(0)";
// setTimeout(() => {
//     funfoods_text.style.transform = "translateX(-500px)";
//     chef.style.transform = "translateX(500px)";
//     sandwich1.style.transform = "translateX(-500px)";
//     sandwich2.style.transform = "translateX(-500px)";
//     sandwich3.style.transform = "translateX(-500px)";
//     mayo.style.transform = "translateX(-500px)";
// setTimeout(() => {
//     mayo_bottle.style.transform = "translateX(0)";
//     foodmagic_text.style.transform = "translateX(0)";
// setTimeout(() => {
//     hat.style.transform = "translateX(0)";
// setTimeout(() => {
//     hat.style.top = "60%";
//                                                         setTimeout(() => {
//                                                             recipe.style.transform = "translate(0)";
//                                                         }, 1000);
//                                                     }, 500)
//                                                 }, 2000);
//                                             }, 500);
//                                         }, 2000);
//                                     }, 500);
//                                 }, 2000);
//                             }, 1500);
//                         }, 100)
//                     }, 50);
//                 }, 1000);
//             }, 2000);
//         }, 2000);
//     }, 500);
// }, 1000);