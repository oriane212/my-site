
// list of Github repo names to create project links from
const gh_repos = [
    'coffee-map', 'myReads', 'restaurant-reviews', 'frogger', 'memory-game', 'personalized-language-learning'
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
    for (let i=0; i < str.length; i++){
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
    let $section_projects = document.getElementById('projects');
    //let repos_filtered = getFromGH(repo_names);
    repos_filtered.map((repo) => {
        // create link el
        let $a = document.createElement('a');
        //$a.setAttribute('href', repo.html_url).setAttribute('id', repo.name);
        //$a.classList.add('project');
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

        // TODO:
        // create svg icon

        // append all
        $hgroup.append($h2, $h3);
        $article.append($hgroup, $p);
        $a.append($article);
        $section_projects.append($a);
    })
}

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