
let ox = 0;
const rectObjs = [
    {
        x: ox,
        y: 0,
        width: 100,
        height: 100,
        type: 'project',
        id: 'zdog-ui',
        title: 'Zdog Ui',
        color: 'rgba(165, 42, 42, .4)',
        caption: '',
        tools: '',
        link: '',
        icon: [
            { el: 'svg', attributes: [['id', 'zdog-ui-icon'], ['width', '100'], ['height', '100']] },
        ]
    },
    {
        x: ox,
        y: 0,
        width: 100,
        height: 100,
        type: 'project',
        id: 'wednesday-words',
        title: 'Wednesday Words',
        color: 'rgba(0, 0, 0, 1)',
        caption: '',
        tools: '',
        link: '',
        icon: [
            { el: 'rect', attributes: [['x', 15 + ox], ['y', 40], ['rx', "2"], ['ry', "2"], ['width', '10'], ['height', '10']] },
            { el: 'rect', attributes: [['x', 27 + ox], ['y', 40], ['rx', "2"], ['ry', "2"], ['width', '10'], ['height', '10']] },
            { el: 'rect', attributes: [['x', 39 + ox], ['y', 40], ['rx', "2"], ['ry', "2"], ['width', '10'], ['height', '10']] },
            { el: 'rect', attributes: [['x', 51 + ox], ['y', 40], ['rx', "2"], ['ry', "2"], ['width', '10'], ['height', '10']] },
            { el: 'rect', attributes: [['x', 63 + ox], ['y', 40], ['rx', "2"], ['ry', "2"], ['width', '10'], ['height', '10']] },
            { el: 'rect', attributes: [['x', 51 + ox], ['y', 28], ['rx', "2"], ['ry', "2"], ['width', '10'], ['height', '10']] },
            { el: 'rect', attributes: [['x', 51 + ox], ['y', 52], ['rx', "2"], ['ry', "2"], ['width', '10'], ['height', '10']] },
            { el: 'rect', attributes: [['x', 51 + ox], ['y', 64], ['rx', "2"], ['ry', "2"], ['width', '10'], ['height', '10']] }
        ]
    },
    {
        x: ox,
        y: 0,
        width: 100,
        height: 100,
        type: 'project',
        id: 'chart-access',
        title: 'Chart Access',
        color: 'rgba(242, 241, 243, 1)',
        caption: '',
        tools: '',
        link: '',
        icon: [
            { el: 'rect', attributes: [['x', 63 + ox], ['y', 50], ['rx', "2"], ['ry', "2"], ['width', '8'], ['height', '25']] },
            { el: 'rect', attributes: [['x', 27 + ox], ['y', 40], ['rx', "2"], ['ry', "2"], ['width', '8'], ['height', '35']] },
            { el: 'rect', attributes: [['x', 39 + ox], ['y', 25], ['rx', "2"], ['ry', "2"], ['width', '8'], ['height', '50']] },
            //{ el: 'rect', attributes: [['x', 40 + ox], ['y', 60], ['rx', "2"], ['ry', "2"], ['width', '40'], ['height', '6']] },
            { el: 'rect', attributes: [['x', 51 + ox], ['y', 35], ['rx', "2"], ['ry', "2"], ['width', '8'], ['height', '40']] }
            //{ el: 'rect', attributes: [['x', 40 + ox], ['y', 80], ['rx', "2"], ['ry', "2"], ['width', '40'], ['height', '6']] }
        ]
    },
    {
        x: ox,
        y: 0,
        width: 100,
        height: 100,
        type: 'project',
        id: 'coffee-map',
        title: 'Coffee Map',
        color: 'rgba(117, 98, 98, 0.4)',
        caption: 'Map of coffee places',
        tools: 'ReactJS, Mapbox GL JS',
        link: 'https://github.com/oriane212/coffee-map',
        icon: [
            
            //{ el: 'polygon', attributes: [['points', `${ox + 46},${40} ${ox + 54},${40}, ${ox + 50.5},${55} ${ox + 49.5},${55}`]] },
            { el: 'ellipse', attributes: [['cx', ox + 40 + 8], ['cy', 40+8], ['rx', '8'], ['ry', '5']] },
            { el: 'rect', attributes: [['x', ox + 40 - 8], ['y', 40], ['width', '16'], ['height', '16']] },
            //{ el: 'ellipse', attributes: [['cx', ox + 50], ['cy', 40], ['rx', '8'], ['ry', '4']] },
            //{ el: 'circle', attributes: [['cx', ox + 50], ['cy', 40], ['r', '4']] },
            { el: 'ellipse', attributes: [['cx', ox + 60 + 8], ['cy', 75+8], ['rx', '8'], ['ry', '5']] },
            { el: 'rect', attributes: [['x', ox + 60 - 8], ['y', 75], ['width', '16'], ['height', '16']] },
            //{ el: 'ellipse', attributes: [['cx', ox + 60], ['cy', 75], ['rx', '4'], ['ry', '2']] },
            //{ el: 'circle', attributes: [['cx', ox + 60], ['cy', 75], ['r', '4']] },
            //{ el: 'polygon', attributes: [['points', `${ox + 56},${75} ${ox + 64},${75}, ${ox + 60.5},${90} ${ox + 59.5},${90}`]] },
            { el: 'ellipse', attributes: [['cx', ox + 75 + 8], ['cy', 25+8], ['rx', '8'], ['ry', '5']] },
            { el: 'rect', attributes: [['x', ox + 75 - 8], ['y', 25], ['width', '16'], ['height', '16']] }
            //{ el: 'ellipse', attributes: [['cx', ox + 80], ['cy', 25], ['rx', '4'], ['ry', '2']] }
            //{ el: 'circle', attributes: [['cx', ox + 80], ['cy', 25], ['r', '4']] }
            //{ el: 'polygon', attributes: [['points', `${ox + 76},${25} ${ox + 84},${25}, ${ox + 80.5},${40} ${ox + 79.5},${40}`]] }
        ]
    },
    {
        x: ox,
        y: 0,
        width: 100,
        height: 100,
        type: 'project',
        id: 'myReads',
        title: 'My Reads',
        color: 'rgba(48, 176, 213, 0.4)',
        caption: 'Bookshelves app',
        tools: 'ReactJS, React-Bootstrap',
        link: 'https://github.com/oriane212/myReads',
        icon: [
            { el: 'rect', attributes: [['x', 10 + ox], ['y', 30], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '25']] },
            { el: 'rect', attributes: [['x', 30 + ox], ['y', 30], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '25']] },
            { el: 'rect', attributes: [['x', 50 + ox], ['y', 30], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '25']] }
        ]
    },
    {
        x: ox,
        y: 0,
        width: 100,
        height: 100,
        type: 'project',
        id: 'frogger',
        title: 'Frogger Game',
        color: 'rgba(79, 98, 212, 0.4)',
        caption: 'Star Wars themed game',
        tools: 'HTML, CSS, JS',
        link: 'https://github.com/oriane212/frogger',
        icon: [
            { el: 'circle', attributes: [['cx', 50 + ox], ['cy', -10], ['r', '30']] },
            { el: 'circle', attributes: [['cx', 50 + ox], ['cy', 85], ['r', '5']] }
        ]
    },
    {
        x: ox,
        y: 0,
        width: 100,
        height: 100,
        type: 'project',
        id: 'personalized-language-learning',
        title: 'Personalized Language Learning',
        color: 'rgba(0, 0, 0, 0.3)',
        caption: 'UX design for mobile app',
        tools: 'Balsamiq, Sketch, Flinto',
        link: 'https://github.com/oriane212/personalized-language-learning',
        icon: [
            { el: 'rect', attributes: [['x', 40 + ox], ['y', 40], ['rx', "2"], ['ry', "2"], ['width', '5'], ['height', '20']] },
            { el: 'rect', attributes: [['x', 50 + ox], ['y', 40], ['rx', "2"], ['ry', "2"], ['width', '10'], ['height', '20']] },
            { el: 'rect', attributes: [['x', 65 + ox], ['y', 40], ['rx', "2"], ['ry', "2"], ['width', '20'], ['height', '20']] }
        ]
    },
    {
        x: ox,
        y: 0,
        width: 100,
        height: 100,
        type: 'project',
        id: 'memory-game',
        title: 'Memory Game',
        color: 'rgba(96, 206, 187, 0.4)',
        caption: 'Web game of matching cards',
        tools: 'HTML, CSS, JS',
        link: 'https://github.com/oriane212/memory-game',
        icon: [
            { el: 'rect', attributes: [['x', 33 + ox], ['y', 30], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']] },
            { el: 'rect', attributes: [['x', 33 + ox], ['y', 50], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']] },
            { el: 'rect', attributes: [['x', 53 + ox], ['y', 30], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']] },
            { el: 'rect', attributes: [['x', 53 + ox], ['y', 50], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']] }
        ]
    },
    {
        x: ox,
        y: 0,
        width: 100,
        height: 100,
        type: 'project',
        id: 'restaurant-reviews',
        title: 'Restaurant Reviews',
        color: 'rgba(255, 152, 0, 0.2)',
        link: 'https://github.com/oriane212/restaurant-reviews',
        icon: [
            { el: 'rect', attributes: [['x', 23 + ox], ['y', 20], ['rx', "2"], ['ry', "2"], ['width', '55'], ['height', '25']] },
            { el: 'rect', attributes: [['x', 23 + ox], ['y', 55], ['rx', "2"], ['ry', "2"], ['width', '55'], ['height', '10']] },
            { el: 'rect', attributes: [['x', 23 + ox], ['y', 70], ['rx', "2"], ['ry', "2"], ['width', '55'], ['height', '10']] }
        ]
    }
]

function createSVGicon(repo_name) {

    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add('projecticon');
    svg.setAttribute('id', repo_name + `_icon`);
    svg.setAttribute('x', 0);
    svg.setAttribute('y', 0);
    svg.setAttribute('width', 100);
    svg.setAttribute('height', 100);

    let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

    let pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
    pattern.setAttribute('id', 'dhatch');
    pattern.setAttribute('width', .03);
    pattern.setAttribute('height', .03);
    pattern.setAttribute('x', 0);
    pattern.setAttribute('y', 0);

    let hatchline = document.createElementNS("http://www.w3.org/2000/svg", "line");
    hatchline.setAttribute('x1', 0);
    hatchline.setAttribute('x2', 100);
    hatchline.setAttribute('y1', 1);
    hatchline.setAttribute('y2', 1);
    hatchline.setAttribute('stroke', 'rgba(0,0,0,0.5)');
    hatchline.setAttribute('stroke-width', '0.25');
    hatchline.setAttribute('stroke-dasharray', 100);
    hatchline.setAttribute('stroke-dashoffset', 100);
    hatchline.classList.add('diagonalhatch');

    pattern.appendChild(hatchline);
    defs.appendChild(pattern);

    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    //rect.setAttribute('fill', 'rgba(0,0,0,0.1)');
    //rect.setAttribute('fill', 'white');
    rect.setAttribute('fill', 'url(#dhatch)');
    rect.setAttribute('stroke', 'rgba(0,0,0,0.5)');
    rect.setAttribute('stroke-width', '0.25');

    rect.setAttribute('x', 0);
    rect.setAttribute('y', 0);
    rect.setAttribute('width', 150);
    rect.setAttribute('height', 150);

    rect.classList.add('rotate');

    svg.append(defs, rect);

    rectObjs.forEach((repo) => {
        if (repo.id === repo_name) {

            // create unique svg icon elements
            let svgGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
            svgGroup.setAttribute('role', 'img');
            svgGroup.setAttribute('fill', 'white');
            svgGroup.setAttribute('stroke', 'rgba(0,0,0,1)');
            svgGroup.setAttribute('stroke-width', '0.25');

            for (let icon of repo.icon) {
                let iconEl = document.createElementNS("http://www.w3.org/2000/svg", icon.el);
                for (let attribute of icon.attributes) {
                    iconEl.setAttribute(attribute[0], attribute[1]);
                }
                //console.log(iconEl);
                svgGroup.appendChild(iconEl);
            }

            svg.appendChild(svgGroup);

        }

        return svg;
    })

    return svg;

}


// list of Github repo names to create project links from
const gh_repos = [
    'zdog-ui', 'wednesday-words', 'chart-access', 'coffee-map', 'myReads', 'frogger', 'memory-game', 'personalized-language-learning', 'restaurant-reviews'
]

/**
 * Get data for Github repos
 * @param {array} repo_names
 */

function getFromGH(repo_names) {
    console.log(repo_names);
    // initialize project
    let repos_filtered = [];
    // adding this header is necessary for accessing 'topics' property for each repo
    let headers = new Headers();
    headers.set("Accept", "application/vnd.github.mercy-preview+json");

    let requestData = {
        method: 'GET',
        headers: headers,
        mode: 'cors'
    }


    // request for all repos
    let request = new Request(`https://api.github.com/users/oriane212/repos?sort="created"`, requestData);

    // fetch and filter repos by names in gh_repos list
    fetch(request)
        .then(resp => resp.json())
        .then((myJson) => {
            console.log(myJson);
            myJson.map((repo) => {
                repo_names.map((name) => {
                    if (name === repo.name) {
                        repos_filtered.push(repo);
                    }
                })
            })
            console.log(repos_filtered);
            createProjectLinks(repos_filtered);
            //return repos_filtered;
        })
    /*
    .then((repos_filtered) => {
        console.log(repos_filtered);
        //this.createProjectLinks(repos_filtered);
    })*/
}

/**
 * Insert a dash before the uppercase in camelCase str
 * Returns either a new string with a dash before the uppercase or the original string passed
 * Note: only works for camelCase str with a single uppercase (written for 'myReads')
 * @param {string} str
 */

function insertDashAtUpperCase(str) {
    let newstr = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i).toUpperCase() === str.charAt(i) && str.charAt(i) !== '-') {
            newstr = str.replace(str.charAt(i), `-${str.charAt(i)}`);
            console.log('uppercase replaced - ' + newstr);
        }
    }
    if (newstr.length > 0) {
        return newstr;
    } else {
        return str;
    }
}

/**
 * Splits repo name on dash and rejoins with spaces
 * Returns a new string with every dash replaced by a space
 * @param {string} str
 */
function replaceDash(str) {
    let splitOnDash = str.split('-');
    let newstr = splitOnDash.join(' ');
    return newstr;
}

/**
 * Creates project links from filtered repo data
 * Appends HTML el to DOM
 * @param {array} repos_filtered 
 */

function createProjectLinks(repos_filtered) {
    console.log(repos_filtered);

    let myreads;
    repos_filtered.forEach((repo, i)=> {
        if (repo.name === 'myReads') {
            myreads = repos_filtered.splice(i, 1);
            console.log(myreads);
        }
    });
    
    let repos_reordered = repos_filtered.splice(0,2);
    repos_reordered.push(myreads[0]);
    repos_filtered.unshift(repos_reordered[0], repos_reordered[1], repos_reordered[2]);
    console.log(repos_filtered);

    //let project_links = [];
    let $div_projects = document.getElementById('projects');
    //let repos_filtered = getFromGH(repo_names);
    repos_filtered.map((repo) => {
        // create link el
        let $a = document.createElement('a');
        $a.setAttribute('href', repo.html_url);
        $a.setAttribute('id', repo.name);
        $a.setAttribute('target', '_blank');
        //$a.classList.add('project');


        // create project icon
        let $div_icon = document.createElement('div');
        $div_icon.classList.add('icon');
        let $svg_icon = createSVGicon(repo.name);
        $div_icon.appendChild($svg_icon);

        // create article el
        let $article = document.createElement('article');
        // create text
        let $hgroup = document.createElement('hgroup');
        let $h2 = document.createElement('h2');
        // create repo name
        let newstring = replaceDash(insertDashAtUpperCase(repo.name));
        $h2.innerText = newstring;

        let $h3 = document.createElement('h3');
        $h3.innerText = repo.description;

        // topics
        let $p = document.createElement('p');
        $p.innerText = repo.topics.join(', ');
        $p.classList.add('topics');

        // append all
        $hgroup.append($h2, $h3);
        $article.append($hgroup, $p);
        $a.append($div_icon, $article);

        //project_links.push($a);

        $div_projects.append($a);

        if (repo.name === 'zdog-ui') {
            createZdogUI_icon();
        }
    })

}

function createZdogUI_icon() {
     // illo.js

        // create illo
        let illo = new Zdog.Illustration({
            // set canvas with id 'illo'
            element: "#zdog-ui-icon",
            zoom: .35,
            dragRotate: false,
            rotate: {
                x: 0,
                y: 0,
                z: 0
            }
        });

        // add shapes

        let shape0 = new Zdog['Box']({
            "color": "#5C5C5C",
            "backface": true,
            "stroke": "0.25",
            "fill": false,
            "translate": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotate": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "width": 100,
            "height": 100,
            "depth": 100,
            "frontFace": "#000000",
            "rearFace": "#000000",
            "topFace": "#000000",
            "bottomFace": "#000000",
            "leftFace": "#000000",
            "rightFace": "#000000",
            "addTo": illo
        })
                
        let shape1 = new Zdog['Box']({
            "color": "#5C5C5C",
            "backface": true,
            "stroke": "1",
            "fill": true,
            "translate": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotate": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "width": "98",
            "height": "98",
            "depth": "98",
            "frontFace": "#ffffff",
            "rearFace": "#cecece",
            "topFace": "#f5f5f5",
            "bottomFace": "#bfbfbf",
            "leftFace": "#e0e0e0",
            "rightFace": "#e0e0e0",
            "addTo": shape0
        })
        

        illo.updateRenderGraph();

        /* Zdog animate fn for easeInOut */

        let ticker = 0;
        let cycleCount = 450;

        function animate() {
            let progress = ticker / cycleCount;
            // apply easing to rotation
            let tween = Zdog.easeInOut(progress % 1, 5);

            illo.rotate.y = 0 + (tween * Zdog.TAU);
            illo.rotate.z = 0 + (tween * Zdog.TAU);
            ticker++;

            illo.updateRenderGraph();
            requestAnimationFrame(animate);
        }

        setTimeout(animate, 5000);
        //animate();
}

getFromGH(gh_repos);



console.log('testing');