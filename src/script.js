const navHam = document.querySelector('.mobile-nav-ham');
const mobNav = document.querySelector('.mobile-nav'); 
const mobBtn = document.querySelector('.mobile-navbar__closebtn')


navHam.addEventListener('click', function() {
    mobNav.classList.toggle('visible')
})

mobBtn.addEventListener('click', function() {
    mobNav.classList.remove('visible')
})

// NAVBAR INTERSECTION OBSERVER 
const oneContainer = document.querySelector('.one__container');
const hero = document.querySelector('.hero');  

function obsNavCallBack(entries, observe) {
    const [entry] = entries

    if(!entry.isIntersecting) {
        oneContainer.classList.add('sticky')
    } else { 
        oneContainer.classList.remove('sticky')        
    }
}

let options = {
    root: null, 
    rootMargin: '10px', 
    threshold: 0.1
}

const navObserver = new IntersectionObserver(obsNavCallBack, options)

navObserver.observe(hero)


// SECTION TWO OBSERVER 

const sectionTwo = document.querySelector('.two');
const sectionTwoHeading = document.querySelector('.two__container__heading');  

function obsSectionTwo(entries, observer) {
    const [entry] = entries

    if(!entry.isIntersecting) {
        sectionTwoHeading.classList.remove('translate')
    } else {
        sectionTwoHeading.classList.add('translate')
        observer.unobserve(sectionTwoHeading)
    }
}

let secTwoOption = {
    root: null, 
    threshold: 0.1
}

const sectionTwoObserver = new IntersectionObserver(obsSectionTwo, secTwoOption)

sectionTwoObserver.observe(sectionTwoHeading)


// SECTION THREE OBSERVER 
const columOneHeading = document.querySelector('.three__container__text-heading'); 

function columOne(entries, observer) {
    const [entry] = entries 
    
   if(!entry.isIntersecting) {
    columOneHeading.classList.remove('transform')
   } else {
    columOneHeading.classList.add('transform')
    observer.unobserve(columOneHeading)
   }
}

let secThColOneOption = {
    root: null, 
    threshold: 0.1, 
}

const secThreeColOneObsv = new IntersectionObserver(columOne, secThColOneOption)

secThreeColOneObsv.observe(columOneHeading)


const columTwoHeadings = document.querySelectorAll('.colm-two-heading'); 


function columTwo(entries, observer) {
    const [entry] = entries 

    if(!entry.isIntersecting) {
        entry.target.classList.remove('transform')
    } else {
        entry.target.classList.add('transform')
        observer.unobserve(entry.target)
    }

}

const secThColTwoOptions = {
    root: null, 
    threshold: 0.1
}

const secThreeColTwoObsv = new IntersectionObserver(columTwo, secThColTwoOptions)

columTwoHeadings.forEach((colum) => {
    secThreeColTwoObsv.observe(colum)
})


const columThreeHeading = document.querySelector('.colm-three-heading')

console.log(columThreeHeading)

function columThree(entries, observer) {
    const [entry] = entries; 
    console.log(entry)
    if(!entry.isIntersecting) {
        columThreeHeading.classList.remove('transform')
    } else {
        columThreeHeading.classList.add('transform')
        observer.unobserve(columThreeHeading)
    }
}

const secThColThreeOptions = {
    root: null, 
    threshold: 0.1
}

const secThreeColThridObs = new IntersectionObserver(columThree, secThColThreeOptions)

secThreeColThridObs.observe(columThreeHeading)

