let hands = []
hands.push(document.querySelector('#secondhand > *'))
hands.push(document.querySelector('#minutehand > *'))
hands.push(document.querySelector('#hourhand > *'))

let cx = 100
let cy = 100

function shifter (val) {
    return [val, cx, cy].join(' ')
}

let date = new Date()
let hoursAngle = 360 * date.getHours() / 12 + date.getMinutes() / 2
let minuteAngle = 360 * date.getMinutes() / 60
let secAngle = 360 * date.getSeconds() / 60

hands[0].setAttribute('from', shifter(secAngle))
hands[0].setAttribute('to', shifter(secAngle + 360))
hands[1].setAttribute('from', shifter(minuteAngle))
hands[1].setAttribute('to', shifter(minuteAngle + 360))
hands[2].setAttribute('from', shifter(hoursAngle))
hands[2].setAttribute('to', shifter(hoursAngle + 360))

for (let i = 1; i <= 12; i++) {
    let el = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    el.setAttribute('x1', '100')
    el.setAttribute('y1', '30')
    el.setAttribute('x2', '100')
    el.setAttribute('y2', '40')
    el.setAttribute('transform', 'rotate(' + (i * 360 / 12) + ' 100 100)')
    el.setAttribute('style', 'stroke: #ffffff;')
    document.querySelector('svg').appendChild(el)
}
