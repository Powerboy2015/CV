//gets all the user data from my github.\
const user = 'Powerboy2015';
async function getRepos(user) {
    const response = await fetch('https://api.github.com/users/'+user+'/repos');
    return response.json();
}

async function getRepoCommits(user,repo){
    const response = await fetch('https://api.github.com/repos/'+user+'/'+repo+'/commits');
    return response.json()
}

function CreateRepoDiv(repoData,toElement) {
    // creates outer layer of repocard
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
    let cleanTime = repoData.updated_at.split('T');
    repoLUpdated.innerHTML = cleanTime[0]; 

    //creates an p element with the latest commit description.
    let repoLCommit = document.createElement('p');
    repoLCommit.classList.add('lastCommit');
    getRepoCommits(user,repoData.name).then((commits) =>{
        repoLCommit.innerHTML = commits[0].commit.message;
    })



    
    // appends all Elements
    repository.appendChild(repoTitle);
    repository.appendChild(repoDesc);
    repository.appendChild(repoLUpdated);
    repository.appendChild(repoLCommit);

    section.appendChild(repository)
    return toElement.appendChild(section);
}

const repoContainer = document.querySelector('div.repos')

getRepos(user)
    //puts all the repo's in data
    .then((data) => {
        console.log(data[0]);
        data.forEach(repository => {
            CreateRepoDiv(repository, repoContainer);
        });
    })


getRepoCommits(user,'CV')
    .then((commits) =>{
        console.log(commits[0].commit.message);
})