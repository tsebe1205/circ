const boxes = document.getElementsByClassName('box')

const btn = document.getElementsByTagName('button')[0]

const colors = ["red", "green", "blue", "black", "yellow", 'green']

const changeColor = () => {
    const shift = colors.shift();
    colors.push(shift);

    for (let i = 0; i < boxes.length; i++) {

        boxes[i].style.backgroundColor = colors[i]

    }

}
btn.onclick = changeColor

setInterval(changeColor, 1000)

