const logo = document.querySelector('.logoss'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt_window'),
    clone = document.querySelector('.clone'),
    cata_text = document.querySelector('.cata_text')

logo.addEventListener('click', function () {
    receipt.style = `display:block`

    setTimeout(() => {
        receipt.style.opacity = `1`
        receiptWindow.classList.add('actv')
    }, 200);
})

clone.addEventListener('click', () => {
    receiptWindow.classList.remove('actv')
    receipt.style = `display:none`
    receipt.style.opacity = `1`

})

let str = cata_text.innerHTML
cata_text.innerHTML = ''

function texts(i = 0) {
    cata_text.innerHTML += str[i]
    i++
    if (i < str.length) {
        setTimeout(() => {
            texts(i)
        }, 30);

    }

}
setTimeout(() => {
    texts()
}, 1000);


const section = document.querySelector('.section'),
    item = document.querySelectorAll('.item'),
    item_1 = document.querySelector('.item_1'),
    item_2 = document.querySelector('.item_2'),
    item_3 = document.querySelector('.item_3'),
    item_4 = document.querySelector('.item_4'),
    sectionTitle = document.querySelector('.section-title')






let zero = 0
window.addEventListener('scroll', function scroll() {
    if (scrollY > section.offsetTop - section.clientHeight / 2.2) {
        item_1.style.transform = `translateX(${zero}px)`
        item_2.style.transform = `translateX(${zero}px)`
        item_3.style.transform = `translateX(${zero}px)`
        item_4.style.transform = `translateX(${zero}px)`

        item_1.style.opacity = "1"
        item_2.style.opacity = "1"
        item_3.style.opacity = "1"
        item_4.style.opacity = "1"
        item_1.style.transition = "1s"
        item_2.style.transition = "1s"
        item_3.style.transition = "1s"
        item_4.style.transition = "1s"
        sectionTitle.style.transform = `scale(${1})`
        sectionTitle.style.transition = '1s'

    }



})

const navUser = document.querySelector('.nav_user'),
    icon = document.querySelector('.icons'),
    navuserspan = document.querySelector('.navuser_span'),
    navuserpanTwo = document.querySelector('.navuser_span_two'),
    root = document.querySelector(':root')

navUser.addEventListener('click', function () {
    navUser.classList.toggle('active')
    navUser.classList.forEach(item => {
        if (item == "active") {
            root.style.setProperty('--yellow', "seagreen")
            root.style.setProperty('--green', "#F4CB38")
            root.style.setProperty('--yellow2', "seagreen")
            root.style.setProperty('--black', 'white')
        } else {
            root.style.setProperty('--yellow', "#F4CB38")
            root.style.setProperty('--yellow2', "#F4A938")
            root.style.setProperty('--black', '#2D2D2D')
            root.style.setProperty('--green', "seagreen")
        }
    })
})




const sectiontwotitle = document.querySelector('.sectiontwo_title'),
    boxTwoitem = document.querySelector('.box-2__item'),
    textt = document.querySelector('.textt'),
    sectionTwo = document.querySelector('.section-2'),
    boxitemTwo = document.querySelectorAll('.box-2__item')


window.addEventListener('scroll', function scrolls() {
    if (scrollY > sectionTwo.offsetTop - sectionTwo.clientHeight / 2) {
        sectiontwotitle.style.transform = `translateY(${zero}px)`
        sectiontwotitle.style.transition = "1s"
        boxitemTwo.forEach(boxitemTwos => {
            boxitemTwos.style.transform = `translate(${zero}px)`
            boxitemTwos.style.transition = "2s"
            boxitemTwos.style.opacity = "1"
        })
    }
})



const boxitemTree = document.querySelectorAll('.box-3__item'),
    sectionTree = document.querySelector('.section-3')
window.addEventListener('scroll', function () {
    if (scrollY > sectionTree.offsetTop - sectionTree.clientHeight / 2.3) {
        boxitemTree.forEach(boxitemTrees => {
            boxitemTrees.style.transform = `translate(${zero}px)`
            boxitemTrees.style.transition = "2s"
            sectionTree.style.opacity = "1"
            setTimeout(() => {
                boxitemTrees.style.opacity = "1"
            }, 500);
        })
    }
})



const boxitemfour = document.querySelectorAll('.box-4__item'),
    sectionfour = document.querySelector('.section-4')

window.addEventListener('scroll', function () {
    if (scrollY > sectionfour.offsetTop - sectionfour.clientHeight / 4) {
        boxitemfour.forEach(boxitemfours => {
            boxitemfours.style.opacity = "1"
            boxitemfours.style.transform = `translate(${zero}px)`
            boxitemfours.style.transition = "3s"

        })
    }
})