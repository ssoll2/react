const aboutMenu = document.querySelector(".main-header ul li:first-of-type")
const portfolioMenu = document.querySelector(".main-header ul li:nth-of-type(2)")
const contactMenu = document.querySelector(".main-header ul li:last-of-type")

const aboutElem = document.querySelector(".main-about")
const portfolioElem = document.querySelector(".main-portfolio")
const contactElem = document.querySelector(".footer")


// console.log(aboutElem.offsetTop) 스크롤바 길이 확인
// window.scrollTo(0, aboutElem.offsetTop)

//헤더 메뉴바 링크를 누르면 스크롤 이동

// ? 이벤트 핸들러 함수에서 첫번째 매개변수는 Event 객체다.
// ? 기본 이벤트를 막아주는 메서드가 있다. => 이벤트 객체.preventDefault
// => (링크이동을 막아준다.)

// ? 메서드는 객체 안에 있는 함수를 말한다.
// behavior: smoooth 부드럽게 이동


const elems = [
    {menu: aboutMenu, y: aboutElem.offsetTop },
    {menu: portfolioMenu, y: portfolioElem.offsetTop },
    {menu: contactMenu, y: contactElem.offsetTop }

]

elems.forEach(elem => elem.menu.addEventListener("click", (event) => {
    event.preventDefault()
    window.scrollTo({ top: elem.y, behavior: "smooth"})

}))

// ? => 위에가 줄인 것
// aboutMenu.addEventListener("click", (event) => {
//     event.preventDefault()
//     window.scrollTo({ top: aboutElem.offsetTop, behavior: "smooth"})
    
// })

// portfolioMenu.addEventListener("click", (event) => {
//     event.preventDefault()
//     window.scrollTo({top: portfolioElem.offsetTop, behavior: "smooth"})
    
// })

// contactMenu.addEventListener("click", (event) => {
//     event.preventDefault()
//     window.scrollTo( {top: contactElem.offsetTop, behavior: "smooth"})
    
// })

// ? 스크롤바 내리면 얼마나 읽었는지

const progressBar = document.querySelector(".progress-bar") // 표시되는 대상
const body = document.querySelector("body")

// ? 요소.clientHeight를 사용하면 해당하는 요소의 높이를 알 수 있다.
// ? window.innerHeight => 내 화면의 높이를 알 수 있다.
// ! pageYoffset, scrollY는 문서 페이지의 스크롤 양을 나타낸다.

function progress() {
    // console.log(window.scrollY / body.clientHeight * 100);
    // ? 보고있는 화면의 높이를 빼줘야함.
    // console.log(window.scrollY, body.clientHeight)
    // ! 스크롤한 양 / 문서높이 * 100
    const ratio = window.scrollY / (body.clientHeight - window.innerHeight) * 100;
    progressBar.style.height = `${ratio}%`;

    // console.log((window.scrollY / (body.clientHeight - window.innerHeight) * 100))

}

window.addEventListener("scroll", progress)


/**
 * ? 스크롤하면 Portfolio 영역에 있는 이미지들이 투명도가 0에서 1로 바뀌게
 * ? 조건 => 내가 보이는 화면에서 스크롤 할때 애니메이션(투명도가 0에서 1로)
 * 내가 스크롤한 값 이미지 높이
 * ? 내가 스크롤한 양이 이미지의 높이보다 높으면 투명도를 1로 바꿔주면 된다.
 */

// const tower = document.querySelector(".tower img")
// const art = document.querySelector(".art-img img ")
// const glamp = document.querySelector(".glamp-img img")

// console.log(tower.offsetTop)

const images = document.querySelectorAll(".port-img img")



function scrollAnimation() {
    // window.scrollY 내개 스크롤한 양
    // tower.offsetTop 이미지의 높이
    // console.log(window.scrollY >= tower.offsetTop - 400)

    images.forEach(image => {
        if(window.scrollY >= image.offsetTop - 400) image.classList.add("opacity")
    })


    // if (window.scrollY >= tower.offsetTop - 400) {
    //     // tower.style.opacity = 1;
    //     tower.classList.add("opacity")
        

    // }
    // if (window.scrollY >= art.offsetTop - 400) {
    //     // art.style.opacity = 1;
    //     art.classList.add("opacity")

    // }
    // if (window.scrollY >= glamp.offsetTop - 400) {
    //     // glamp.style.opacity = 1;
    //     glamp.classList.add("opacity")

    // }

     

}

window.addEventListener("scroll", scrollAnimation)



