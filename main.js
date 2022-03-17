document.querySelector('.item1').addEventListener('click','select', hideOtherMeals)
document.querySelector('.item2').addEventListener('click','select', hideOtherMeals1)
document.querySelector('.item5').addEventListener('click','select', hideOtherMeals4)
document.querySelector('.item4').addEventListener('click','select', hideOtherMeals3)
document.querySelector('.item3').addEventListener('click','select', hideOtherMeals2)
const items = (document.querySelector('.item1').style.color = 'orange')

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

