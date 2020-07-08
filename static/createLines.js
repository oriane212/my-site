
//const intro = document.querySelector('.intro');
const main = document.querySelector('main');
const container = document.querySelector('.container');
const wiw = window.innerWidth;
let lw = wiw;

function createHLine(id, beforebeginEl, x1, x2, delay=false) {
    // create the horizontal line
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("h-line");
    svg.setAttribute("id", id);
    svg.setAttribute("width", wiw);
    svg.setAttribute("height", 2);
    let hline = document.createElementNS("http://www.w3.org/2000/svg", "line");
    if (delay) {
        hline.classList.add('delay');
    }
    hline.setAttribute("x1", x1);
    hline.setAttribute("x2", x2);
    hline.setAttribute("y1", 0);
    hline.setAttribute("y2", 0);
    hline.setAttribute("stroke-dasharray", lw);
    hline.setAttribute("stroke-dashoffset", lw);

    svg.append(hline);
    beforebeginEl.insertAdjacentElement('beforebegin', svg);
}

// header line 1
createHLine("headerline1", main, 0, wiw);

// header line 2
createHLine("headerline2", container, wiw, 0, true);


///////// TODO: ////////

// fix position for #headerline1 responsively
// add delay for its animation