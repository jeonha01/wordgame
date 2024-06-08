const school = document.querySelector('#school')
const weightlifting = document.querySelector('#weightlifting')
const france = document.querySelector('#france')
const study = document.querySelector('#study')
const cat = document.querySelector('#cat')
const Gayageum = document.querySelector('#Gayageum')
const tadpole = document.querySelector('#tadpole')
const car = document.querySelector('#car')
const workout = document.querySelector('#workout')
const Cambodia = document.querySelector('#Cambodia')
const Ecuador = document.querySelector('#Ecuador')

const wordArray = [school, weightlifting, france, study, cat, Gayageum, tadpole, car, workout, Cambodia, Ecuador]

function line(event) {
    for (let i = 0; i < wordArray.length; i++) {
        if (event == i) {
            wordArray[i].style.textDecoration = 'line-through';
            return
        }
    }
}

const tdArray = []

function idExtraction(event) {

    let tdtd = event.target.id
    let tdcolor = event.target
    console.log(tdtd)

    if (tdcolor.style.backgroundColor == "lightyellow") {
        tdcolor.style.backgroundColor = ""
        tdArray.pop(tdtd)
    } else {
        tdcolor.style.backgroundColor = "lightyellow"
        tdArray.push(tdtd)
    }
    console.log(tdArray)
    let a = 0

    if (tdArray.includes('td05') && tdArray.includes('td16')) {
        document.querySelector('#td05').style.backgroundColor = "red"
        document.querySelector('#td16').style.backgroundColor = "red"
        line(0)
        a++
    }
    if (tdArray.includes('td82') && tdArray.includes('td93')) {
        document.querySelector('#td82').style.backgroundColor = "orange"
        document.querySelector('#td93').style.backgroundColor = "orange"
        a++
        line(1)
    }
    if (tdArray.includes('td65') && tdArray.includes('td75') && tdArray.includes('td85')) {
        document.querySelector('#td65').style.backgroundColor = "yellow"
        document.querySelector('#td75').style.backgroundColor = "yellow"
        document.querySelector('#td85').style.backgroundColor = "yellow"
        a++
        line(2)
    }
    if (tdArray.includes('td60') && tdArray.includes('td61')) {
        document.querySelector('#td60').style.backgroundColor = "green"
        document.querySelector('#td61').style.backgroundColor = "green"
        a++
        line(3)
    }
    if (tdArray.includes('td63') && tdArray.includes('td73') && tdArray.includes('td83')) {
        document.querySelector('#td63').style.backgroundColor = "blue"
        document.querySelector('#td73').style.backgroundColor = "blue"
        document.querySelector('#td83').style.backgroundColor = "blue"
        a++
        line(4)
    }
    if (tdArray.includes('td56') && tdArray.includes('td66') && tdArray.includes('td76')) {
        document.querySelector('#td56').style.backgroundColor = "mediumslateblue"
        document.querySelector('#td66').style.backgroundColor = "mediumslateblue"
        document.querySelector('#td76').style.backgroundColor = "mediumslateblue"
        a++
        line(5)
    }
    if (tdArray.includes('td18') && tdArray.includes('td28') && tdArray.includes('td38')) {
        document.querySelector('#td18').style.backgroundColor = "blueviolet"
        document.querySelector('#td28').style.backgroundColor = "blueviolet"
        document.querySelector('#td38').style.backgroundColor = "blueviolet"
        a++
        line(6)
    }
    if (tdArray.includes('td86') && tdArray.includes('td97') && tdArray.includes('td108')) {
        document.querySelector('#td86').style.backgroundColor = "pink"
        document.querySelector('#td97').style.backgroundColor = "pink"
        document.querySelector('#td108').style.backgroundColor = "pink"
        a++
        line(7)
    }
    if (tdArray.includes('td110') && tdArray.includes('td111')) {
        document.querySelector('#td110').style.backgroundColor = "aqua"
        document.querySelector('#td111').style.backgroundColor = "aqua"
        a++
        line(8)
    }
    if (tdArray.includes('td102') && tdArray.includes('td103') && tdArray.includes('td104') && tdArray.includes('td105')) {
        document.querySelector('#td102').style.backgroundColor = "brown"
        document.querySelector('#td103').style.backgroundColor = "brown"
        document.querySelector('#td104').style.backgroundColor = "brown"
        document.querySelector('#td105').style.backgroundColor = "brown"
        a++
        line(9)
    }
    if (tdArray.includes('td25') && tdArray.includes('td36') && tdArray.includes('td47') && tdArray.includes('td58')) {
        document.querySelector('#td25').style.backgroundColor = "gray"
        document.querySelector('#td36').style.backgroundColor = "gray"
        document.querySelector('#td47').style.backgroundColor = "gray"
        document.querySelector('#td58').style.backgroundColor = "gray"
        a++
        line(10)
    }
    if (a == 11) {
        setTimeout(() => alert('단어를 다 찾았습니다!!'), 300)
    }
}

