document.querySelector('.item1').addEventListener('click', hideOtherMeals)
document.querySelector('.item2').addEventListener('click', hideOtherMeals1)
document.querySelector('.item5').addEventListener('click', hideOtherMeals4)
document.querySelector('.item4').addEventListener('click', hideOtherMeals3)
document.querySelector('.item3').addEventListener('click', hideOtherMeals2)
document.querySelector('#show-menu').addEventListener('click',showMenu)
document.querySelector('#hide-btn').addEventListener('click', hideMenu)
const items = (document.querySelector('.item1').style.color = 'orange')

function showMenu(){
    document.querySelector('.mobile-menu').style.display='block'
    document.querySelector('#hide-btn').style.display = 'block'
    document.querySelector('#show-menu').style.display = 'none'
}
function hideMenu(){
    document.querySelector('.mobile-menu').style.display='none'
    document.querySelector('#show-menu').style.display = 'block'
    document.querySelector('#hide-btn').style.display = 'none'
}

function hideOtherMeals() {
    document.querySelector('#meal1').style.display = 'block'
    document.querySelector('#meal2').style.display = 'none'
    document.querySelector('#meal3').style.display = 'none'
    document.querySelector('#meal4').style.display = 'none'
    document.querySelector('#meal5').style.display = 'none'
    document.querySelector('.item1').style.color = 'orange'
    document.querySelector('.item2').style.color = 'white'
    document.querySelector('.item3').style.color = 'white'
    document.querySelector('.item4').style.color = 'white'
    document.querySelector('.item5').style.color = 'white'
}

function hideOtherMeals1() {
    document.querySelector('#meal1').style.display = 'none'
    document.querySelector('#meal2').style.display = 'block'
    document.querySelector('#meal3').style.display = 'none'
    document.querySelector('#meal4').style.display = 'none'
    document.querySelector('#meal5').style.display = 'none'
    document.querySelector('.item2').style.color = 'orange'
    document.querySelector('.item1').style.color = 'white'
    document.querySelector('.item3').style.color = 'white'
    document.querySelector('.item4').style.color = 'white'
    document.querySelector('.item5').style.color = 'white'
}

function hideOtherMeals2() {
    document.querySelector('#meal1').style.display = 'none'
    document.querySelector('#meal2').style.display = 'none'
    document.querySelector('#meal3').style.display = 'block'
    document.querySelector('#meal4').style.display = 'none'
    document.querySelector('#meal5').style.display = 'none'
    document.querySelector('.item3').style.color = 'orange'
    document.querySelector('.item1').style.color = 'white'
    document.querySelector('.item2').style.color = 'white'
    document.querySelector('.item4').style.color = 'white'
    document.querySelector('.item5').style.color = 'white'
}
function hideOtherMeals3() {
    document.querySelector('#meal1').style.display = 'none'
    document.querySelector('#meal2').style.display = 'none'
    document.querySelector('#meal3').style.display = 'none'
    document.querySelector('#meal4').style.display = 'block'
    document.querySelector('#meal5').style.display = 'none'
    document.querySelector('.item4').style.color = 'orange'
    document.querySelector('.item1').style.color = 'white'
    document.querySelector('.item2').style.color = 'white'
    document.querySelector('.item3').style.color = 'white'
    document.querySelector('.item5').style.color = 'white'
}
function hideOtherMeals4() {
    document.querySelector('#meal1').style.display = 'none'
    document.querySelector('#meal2').style.display = 'none'
    document.querySelector('#meal3').style.display = 'none'
    document.querySelector('#meal4').style.display = 'none'
    document.querySelector('#meal5').style.display = 'block'
    document.querySelector('.item5').style.color = 'orange'
    document.querySelector('.item1').style.color = 'white'
    document.querySelector('.item2').style.color = 'white'
    document.querySelector('.item3').style.color = 'white'
    document.querySelector('.item4').style.color = 'white'
    
}

