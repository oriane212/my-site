
let ox = 0;
const rectObjs = [
    {
        x: ox,
        y: 0,
        width: 100,
        height: 100,
        type: 'project',
        id: 'chart-access',
        title: 'Chart Access',
        caption: '',
        tools: '',
        link: '',
        icon: [
            { el: 'rect', attributes: [['x', 15 + ox], ['y', 40], ['rx', "2"], ['ry', "2"], ['width', '8'], ['height', '15']] },
            { el: 'rect', attributes: [['x', 27 + ox], ['y', 30], ['rx', "2"], ['ry', "2"], ['width', '8'], ['height', '25']] },
            { el: 'rect', attributes: [['x', 39 + ox], ['y', 15], ['rx', "2"], ['ry', "2"], ['width', '8'], ['height', '40']] },
            //{ el: 'rect', attributes: [['x', 40 + ox], ['y', 60], ['rx', "2"], ['ry', "2"], ['width', '40'], ['height', '6']] },
            { el: 'rect', attributes: [['x', 40 + ox], ['y', 70], ['rx', "2"], ['ry', "2"], ['width', '40'], ['height', '6']] }
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
        caption: 'Map of coffee places',
        tools: 'ReactJS, Mapbox GL JS',
        link: 'https://github.com/oriane212/coffee-map',
        icon: [
            { el: 'circle', attributes: [['cx', ox + 50], ['cy', 40], ['r', '4']] },
            { el: 'polygon', attributes: [['points', `${ox + 46},${40} ${ox + 54},${40}, ${ox + 50.5},${55} ${ox + 49.5},${55}`]] },
            { el: 'circle', attributes: [['cx', ox + 60], ['cy', 75], ['r', '4']] },
            { el: 'polygon', attributes: [['points', `${ox + 56},${75} ${ox + 64},${75}, ${ox + 60.5},${90} ${ox + 59.5},${90}`]] },
            { el: 'circle', attributes: [['cx', ox + 80], ['cy', 25], ['r', '4']] },
            { el: 'polygon', attributes: [['points', `${ox + 76},${25} ${ox + 84},${25}, ${ox + 80.5},${40} ${ox + 79.5},${40}`]] }
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
        caption: 'Web game of matching cards',
        tools: 'HTML, CSS, JS',
        link: 'https://github.com/oriane212/memory-game',
        icon: [
            { el: 'rect', attributes: [['x', 33 + ox], ['y', 30], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']] },
            { el: 'rect', attributes: [['x', 33 + ox], ['y', 50], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']] },
            { el: 'rect', attributes: [['x', 53 + ox], ['y', 30], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']] },
            { el: 'rect', attributes: [['x', 53 + ox], ['y', 50], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']] }
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

    let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute('fill', 'rgba(0,0,0,0.1)');
    rect.setAttribute('x', 0);
    rect.setAttribute('y', 0);
    rect.setAttribute('width', 100);
    rect.setAttribute('height', 100);

    svg.appendChild(rect);

    rectObjs.forEach((repo) => {
        if (repo.id === repo_name) {

            // create unique svg icon elements
            let svgGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
            svgGroup.setAttribute('role', 'img');
            svgGroup.setAttribute('fill', 'white');

            for (let icon of repo.icon) {
                let iconEl = document.createElementNS("http://www.w3.org/2000/svg", icon.el);
                for (let attribute of icon.attributes) {
                    iconEl.setAttribute(attribute[0], attribute[1]);
                }
                console.log(iconEl);
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
    'chart-access', 'coffee-map', 'myReads', 'frogger', 'memory-game', 'personalized-language-learning'
]

/**
 * Get data for Github repos
 * @param {array} repo_names
 */

function getFromGH(repo_names) {
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
    let request = new Request('https://api.github.com/users/oriane212/repos', requestData);

    // fetch and filter repos by names in gh_repos list
    fetch(request)
        .then(resp => resp.json())
        .then((myJson) => {
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
    })


    /*
    let coffeeIcon = createSVGicon('coffee-map');
    console.log(coffeeIcon);

    let coffee = document.querySelector("#coffee-map .icon");
    console.log(coffee);
    coffee.appendChild(coffeeIcon);
    */

    //coffee.insertAdjacentElement('afterbegin', coffeeIcon);

    //return project_links;
}

// console.log(window.innerWidth);

// TODO: finish responsive styling for projects - only basic styling has been added so far

// TODO: add topics in Github to projects!

// TODO: add viewport breakpoints
// should the createProjectLinks function just return the link El and another function handles the responsive layout and appending to the DOM?

getFromGH(gh_repos);

// project.description
// project.html_url (repo page)
// project.homepage (GitHub page), if !== ''
// project.topics (array)


// TODO: write createProjectIcon function