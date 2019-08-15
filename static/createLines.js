
//const intro = document.querySelector('.intro');
const main = document.querySelector('main');
const container = document.querySelector('.container');
const wiw = window.innerWidth;
let lw = wiw;

function createHLine(id, beforebeginEl, x1, x2) {
    // create the bottom horizontal line
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("h-line");
    svg.setAttribute("id", id);
    svg.setAttribute("width", wiw);
    svg.setAttribute("height", 2);
    let bottom = document.createElementNS("http://www.w3.org/2000/svg", "line");
    bottom.setAttribute("x1", x1);
    bottom.setAttribute("x2", x2);
    bottom.setAttribute("y1", 0);
    bottom.setAttribute("y2", 0);
    bottom.setAttribute("stroke-dasharray", lw);
    bottom.setAttribute("stroke-dashoffset", lw);

    svg.append(bottom);
    beforebeginEl.insertAdjacentElement('beforebegin', svg);
}

// header line 1
createHLine("headerline1", main, 0, wiw);

// header line 2
createHLine("headerline2", container, wiw, 0);


///////// TODO: ////////

// fix position for #headerline1 responsively
// add delay for its animation