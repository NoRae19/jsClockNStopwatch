const secondArrow = document.querySelector('.s'),
      minuteArrow = document.querySelector('.m'),
      hourArrow = document.querySelector('.h'),
      hoursBox = document.querySelector('.hours'),
      minutesBox = document.querySelector('.minutes')
  
      
// new Date() - встроенный глобальный объект (class), который выдает информацию о дате и времени
      
function clock() {
    let time = new Date()
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours = time.getHours()
    
    secondArrow.style = `transform: rotate(${seconds*6}deg)`
    minuteArrow.style = `transform: rotate(${minutes*6}deg)`
    hourArrow.style = `transform: rotate(${hours*30}deg)`
    
    hoursBox.innerHTML = hours
    minutesBox.innerHTML = minutes
    
    hoursBox.innerHTML = hours < 10 ? `0 ${hours}` : hours
    minutesBox.innerHTML = minutes < 10 ? `0 ${minutes}` : minutes
  
    setTimeout(() => {
        clock()
    }, 1000);
}
      
clock()



let links = document.querySelectorAll('.tabsItem')
let tabs = document.querySelectorAll('.tabsContentItem')

links.forEach((el, i) => {
    el.addEventListener('click', () => {
    removeActive()
    el.classList.add('active')
    tabs[i].classList.add('active')
    })
})

function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}


//2

let timerSec = document.querySelector('.stopwatch__seconds'),
    timerMin = document.querySelector('.stopwatch__minutes'),
    timerHour = document.querySelector('.stopwatch__hours'),
    btn = document.querySelector('.stopwatch__btn'),
    span = document.querySelector('.tabsLink__span')
    
    
    let i = 0;
    
    
    btn.addEventListener('click', () => {
        if(btn.innerHTML == 'start') {
            btn.innerHTML = 'stop'
            span.classList.add('active')
            setTimeout(() => start(btn,i), 1000);
        }else if(btn.innerHTML == 'stop') {
            btn.innerHTML = 'clear'
            span.classList.remove('active')
            span.classList.add('active_clear')
        }else {
            btn.innerHTML = 'start'
            span.classList.remove('active_clear')
            timerSec.innerHTML = 0
            timerMin.innerHTML = 0
            timerHour.innerHTML = 0
        }
    })
    

function start(btn,i) {
    if(btn.innerHTML == 'stop') {
        if(i == 59) {
            i = 0
            timerSec.innerHTML = i
            if (timerMin.innerHTML == 59) {
                timerMin.innerHTML = 0;
                timerHour.innerHTML++
            }else {
                timerMin.innerHTML++
            }
        }else {
            i++
            timerSec.innerHTML = i
        }
        
        setTimeout(() => start(btn,i), 1000);
            
    }
}
