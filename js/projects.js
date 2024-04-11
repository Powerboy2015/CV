//gets all the user data from my github.
const user = 'Powerboy2015';
async function getRepos(user) {
    const response = await fetch('https://api.github.com/users/'+user+'/repos');
    return response.json();
}

async function getRepoCommits(user,repo){
    const response = await fetch('https://api.github.com/repos/'+user+'/'+repo);
    return response.json()
}

function CreateRepoEl(repoData,toElement) {
    // creates outer layer of repoCard
    let section = document.createElement('section');
    section.classList.add('col-6');
    section.classList.add('outer');
    
    // adds class to inner div
    let repository = document.createElement('div');
    repository.classList.add('repo');

    // creates h2 element with repo name.
    let repoTitle = document.createElement('h2');
    repoTitle.innerHTML = repoData.name;

    // creates an p element with the repo description.
    let repoDesc = document.createElement('p');
    repoDesc.classList.add('desc');
    repoDesc.innerHTML = repoData.description;

    //creates an p element with the last time the repo was updated.
    let repoLUpdated = document.createElement('p');
    repoLUpdated.classList.add('LatestUpdate');
    let cleanTime = repoData.commit.committer.date.split('T');
    repoLUpdated.innerHTML = cleanTime[0]; 

    //creates an p element with the latest commit description.
    let repoLCommit = document.createElement('p');
    repoLCommit.classList.add('lastCommit');
    repoLCommit.innerHTml = repoData.commit.message;

    // appends all Elements
    repository.appendChild(repoTitle);
    repository.appendChild(repoDesc);
    repository.appendChild(repoLUpdated);
    repository.appendChild(repoLCommit);

    section.appendChild(repository)
    return toElement.appendChild(section);
}

const repoContainer = document.querySelector('div.repos')

// make an if statement to check if there's a cookie that exists with information about the github.
const cookies = document.cookie;
function newCookie(name, value) {
    document.cookie = name+'='+value;
}

function deleteCookie(name){
    document.cookie = name+'=; Max-age=-999999;';
}

// find a cookie with the appropriate name.
function getCookie(name){
    if(document.cookie != '') {
            let cookies = document.cookie.split('; ')
        .find((row) =>
            row.startsWith(name+'='))
        try{
            let cookieSplit = cookies.split(/=(.*)/s);
            return JSON.parse(cookieSplit[1]);
        } catch{
            return undefined;
        }

        // returns an error of cookies are empty.
    } else{ 
        console.error('empty cookies')};
}

// if the the user cookie is not set, fetch repository names from the user, and put them inside a cookie.
if (getCookie(user) == undefined) {
    const repos = []
    getRepos(user)
        .then((data) => {
            data.forEach((repo) =>{
                console.log(repo.name)
                repos.push(repo.name);
            });
            newCookie(user,JSON.stringify(repos));
        });
}

//we retrieve the list of repos made by the user that has been set under the username of the user.
// in the current scenario there are two of them: CV and ColoredSquareChanger.
const repos = getCookie(user);
console.log(repos);


// we go through each of them to see if there is and cookie with it's name. If not, we retrieve the repo and put it in a cookie.
// this is literally a foreach loop, but a usual foreach loop does not work here.
for(let i=0; i != repos.length; i++){
    let repo = repos[i];
    if (getCookie(repo) == undefined) {
        getRepoCommits(user,repo)
            .then((commits) => {
                let requiredInfo = {};
                requiredInfo['Title'] = commits.name;
                requiredInfo['Desc'] = commits.description;
                requiredInfo['Update'] = commits.updated_at; 

                console.log(commits);


                newCookie(repo,JSON.stringify(requiredInfo));
        }) 
        console.log('sucess')
    } else {
        let repoData = getCookie(repo);
        // CreateRepoEl(repoData,repoContainer);
        console.log(repoData);

    }
}

console.log(document.cookie);




//         data.forEach(repository => {
//             
// })



// for (let key in repos) {
//     console.log(key);
//     console.log(repos[key]);
// }
// console.log(document.cookie)


