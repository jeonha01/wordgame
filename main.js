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
        a++
    }
    if (tdArray.includes('td82') && tdArray.includes('td93')) {
        document.querySelector('#td82').style.backgroundColor = "orange"
        document.querySelector('#td93').style.backgroundColor = "orange"
        a++
    }
    if (tdArray.includes('td65') && tdArray.includes('td75') && tdArray.includes('td85')) {
        document.querySelector('#td65').style.backgroundColor = "yellow"
        document.querySelector('#td75').style.backgroundColor = "yellow"
        document.querySelector('#td85').style.backgroundColor = "yellow"
        a++
    }
    if (tdArray.includes('td60') && tdArray.includes('td61')) {
        document.querySelector('#td60').style.backgroundColor = "green"
        document.querySelector('#td61').style.backgroundColor = "green"
        a++
    }
    if (tdArray.includes('td63') && tdArray.includes('td73') && tdArray.includes('td83')) {
        document.querySelector('#td63').style.backgroundColor = "blue"
        document.querySelector('#td73').style.backgroundColor = "blue"
        document.querySelector('#td83').style.backgroundColor = "blue"
        a++
    }
    if (tdArray.includes('td56') && tdArray.includes('td66') && tdArray.includes('td76')) {
        document.querySelector('#td56').style.backgroundColor = "mediumslateblue"
        document.querySelector('#td66').style.backgroundColor = "mediumslateblue"
        document.querySelector('#td76').style.backgroundColor = "mediumslateblue"
        a++
    }
    if (tdArray.includes('td18') && tdArray.includes('td28') && tdArray.includes('td38')) {
        document.querySelector('#td18').style.backgroundColor = "blueviolet"
        document.querySelector('#td28').style.backgroundColor = "blueviolet"
        document.querySelector('#td38').style.backgroundColor = "blueviolet"
        a++
    }
    if (tdArray.includes('td86') && tdArray.includes('td97') && tdArray.includes('td108')) {
        document.querySelector('#td86').style.backgroundColor = "pink"
        document.querySelector('#td97').style.backgroundColor = "pink"
        document.querySelector('#td108').style.backgroundColor = "pink"
        a++
    }
    if (tdArray.includes('td110') && tdArray.includes('td111')) {
        document.querySelector('#td110').style.backgroundColor = "aqua"
        document.querySelector('#td111').style.backgroundColor = "aqua"
        a++
    }
    if (tdArray.includes('td102') && tdArray.includes('td103') && tdArray.includes('td104') && tdArray.includes('td105')) {
        document.querySelector('#td102').style.backgroundColor = "brown"
        document.querySelector('#td103').style.backgroundColor = "brown"
        document.querySelector('#td104').style.backgroundColor = "brown"
        document.querySelector('#td105').style.backgroundColor = "brown"
        a++
    }
    if (tdArray.includes('td25') && tdArray.includes('td36') && tdArray.includes('td47') && tdArray.includes('td58')) {
        document.querySelector('#td25').style.backgroundColor = "gray"
        document.querySelector('#td36').style.backgroundColor = "gray"
        document.querySelector('#td47').style.backgroundColor = "gray"
        document.querySelector('#td58').style.backgroundColor = "gray"
        a++
    }
    if (a == 11) {
        setTimeout(() => alert('단어를 다 찾았습니다!!'), 300)
    }
}

