// This has caused me way more pain then it should have. I am so done with life right now.
class repoObj
{
    constructor(name,desc,updated,lastCommit) {
        this.name = name;
        this.desc = desc;
        this.lastUpdate = updated;
        this.lastCommit = lastCommit;
    }
}

const user = 'Powerboy2015';
const repoContainer = document.querySelector('div.repos');

// fetches user repo list and returns a list of the repo names.
async function getRepoData(user) {
    const response = await fetch('https://api.github.com/users/'+user+'/repos');
    const repoData = await response.json();
    let Names = [];
    for(i=0;i != repoData.length; i++) {
        Names.push(repoData[i]);
    }
    return Names;
}

// requests information about the repo commits.
async function fetchLastCommit(user,repo){
    const response = await fetch('https://api.github.com/repos/'+user+'/'+repo+'/commits');
    const commits = await response.json();
    return commits[0].commit.message;
}


async function FetchRepoInfo() {
    const repoNames = await getRepoData(user);
    const repos = [];
    for (i=0; i != repoNames.length;i++) {
        const repo = repoNames[i];
        // const lastCommit = await fetchLastCommit(user,repo.name);

        let time = repo.updated_at.split('T')
        repos.push(new repoObj(repo.name,repo.description,time[0]));
    }
    return repos;
}

function getCookie(name){
    if(document.cookie != '') {
            let cookies = document.cookie.split('; ')
        .find((row) =>
            row.startsWith(name+'='))

        // if It can't find a row it will it will put 'undefined' into cookies. 
        // if we can't split it we return undefined.
        try{
            let cookieSplit = cookies.split(/=(.*)/s,2);
            return JSON.parse(cookieSplit[1]);
        } catch{
            return undefined;
        }

        // returns an error if cookies are empty.
    } else{ 
        return undefined;
    };
}

// creates a function with a duration.
function createCookie(name,value,duration){
    document.cookie = name+'='+JSON.stringify(value)+'; max-age='+duration;
}

// sets the expiration date of a cookie to a date that has already past, making it basically self destruct.
function deleteCookie(name){
    document.cookie = name +'=; expires=Thu, 01 Jan 1970 00:00:00;';
}

// creates a Element for the repoData.
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
    repoDesc.innerHTML = repoData.desc;

    //creates an p element with the last time the repo was updated.
    let repoLUpdated = document.createElement('p');
    repoLUpdated.classList.add('LatestUpdate');
    repoLUpdated.innerHTML = repoData.lastUpdate;


    // appends all Elements
    repository.appendChild(repoTitle);
    repository.appendChild(repoDesc);
    repository.appendChild(repoLUpdated);
    section.appendChild(repository)
    return toElement.appendChild(section);
}

function buildRepoDivs(cookieName){
    const repoArray = getCookie(cookieName);
    for (i=0; i != repoArray.length; i++) {
        CreateRepoEl(repoArray[i],repoContainer);
    }
}

// if the user cookie isnt set, start making a cookie for it.
if(getCookie(user) == undefined) {
    FetchRepoInfo().then((data) =>{
        console.log(data);
        createCookie(user,data,1500);
        buildRepoDivs(user);
    })
} else {
    buildRepoDivs(user);
}
console.log(getCookie(user));



