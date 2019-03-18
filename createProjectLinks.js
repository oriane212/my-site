
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
            return repos_filtered;
        })
}

let project = getFromGH(gh_repos);

// TODO: write createProjectLinks function

// project.description
// project.html_url (repo page)
// project.homepage (GitHub page), if !== ''
// project.topics (array)