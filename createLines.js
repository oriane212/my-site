
const intro = document.querySelector('.intro');
const container = document.querySelector('.container');
const wiw = window.innerWidth;
let lw = wiw;

// create the bottom horizontal line
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.classList.add("h-line");
svg.setAttribute("width", wiw);
svg.setAttribute("height", 2);
let bottom = document.createElementNS("http://www.w3.org/2000/svg", "line");
bottom.setAttribute("x1", wiw);
bottom.setAttribute("x2", 0);
bottom.setAttribute("y1", 0);
bottom.setAttribute("y2", 0);
bottom.setAttribute("stroke-dasharray", lw);
bottom.setAttribute("stroke-dashoffset", lw);

svg.append(bottom);
container.insertAdjacentElement('beforebegin', svg);