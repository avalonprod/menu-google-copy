const aside = document.querySelector('.aside')
const dropdown = document.querySelectorAll('.dropdown')
const dropdownTarget = document.querySelectorAll('.dropdown-top')
const pages = document.querySelectorAll('.page')

dropdownTarget.forEach((item, i) => {
    item.addEventListener('click', ()=>{
        aside.classList.add('active')
        let j = 0;
        dropdown[i].classList.toggle('menu-active')
        for(j; j<dropdownTarget.length; j++) {
            if(dropdown[j] !== dropdown[i]){
                dropdown[j].classList.remove('menu-active')
            }
        }
    })
})

const links = document.querySelectorAll('.link')

links.forEach((item, i) => {
    item.addEventListener('click', ()=>{
        aside.classList.add('active')
        let j = 0;
        for(j; j<links.length; j++) {
            links[j].classList.remove('active')
            links[j].parentElement.parentElement.parentElement.parentElement.classList.remove('child-active')
            pages[j].classList.remove('active')
        }
        links[i].classList.add('active')
        links[i].parentElement.parentElement.parentElement.parentElement.classList.add('child-active')
        if(links[i].getAttribute('href')){
            let att = links[i].getAttribute('href').split('#')
            document.querySelector(`#${att[1]}`).classList.add('active')
        }
    })
})

document.addEventListener('click', (e)=>{
    if(e.target?.attributes?.class?.value && e.target.attributes.class.value == 'aside-nav'){
        aside.classList.toggle('active')
        console.log(e.target)
        let j = 0
        for(j; j<links.length; j++) {
            links[j].parentElement.parentElement.parentElement.parentElement.classList.remove('menu-active')
        }
        links.forEach(item =>{
            if(item.classList.contains('active')){
                item.parentElement.parentElement.parentElement.parentElement.classList.add('menu-active')
            }
        })
    }
})


const iconToggle = document.querySelector('.icon-close')

iconToggle.addEventListener('click', ()=>{
    aside.classList.toggle('active')
})