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
const repoContainer = document.querySelector('div.repos')

// requests all the information about the users repo's
async function getRepoNames(user) {
    const response = await fetch('https://api.github.com/users/'+user+'/repos');
    return response.json();
}

// requests information about the repo commits
async function getRepoCommits(user,repo){
    const response = await fetch('https://api.github.com/repos/'+user+'/'+repo+'/commits');
    const commits = await response.json();
    return commits[0].commit.message;
}

// returns either undefined or the cookie name data. 
// the return will always be in the form of the object.
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

// creates an new cookie with a limited duration in JSON format
function createCookie(name,value,duration){
    document.cookie = name+'='+JSON.stringify(value)+'; max-age='+duration;
}

// sets the expiration date of a cookie to a date that has already past, making it basically self destruct.
function deleteCookie(name){
    document.cookie = name +'=; expires=Thu, 01 Jan 1970 00:00:00;';
}

console.log(document.cookie);
console.log(getCookie(user));
console.log(getCookie("ColoredSquareChanger"));

// deleteCookie(user);

// ifUserNotExist(user);



// getRepoCommits(user,repoInfo.name)
// .then((commits) => {
//     console.log(commits[0].commit.message);
//     let repoObj = new repoData(repoInfo.name,repoInfo.description,repoInfo.updated_at,commits[0].commit.message);
//     repo.push(repoObj);
// })


// we check if the user cookie exists, if it does not, 
// it will create one in the form of an array with the user repository names.
async function ifUserNotExist(user) {
    if(getCookie(user) == undefined) {
        // gets repoData
        const repoNames = []
        await getRepoNames(user).then((RepoData) =>{
            // foreach repodata object
            for (i=0; i != RepoData.length; i++) {
                let please = RepoData[i];
                getRepoCommits(user,please.name).then((commit) =>{
                    let repoObject = new repoObj(please.name,please.description,please.updated_at,commit);
                    repoNames.push(repoObject);
                })
            }
        })
        return repoNames;
    } else {
        return await false;
    }
}

async function WHY() {
    const response = await ifUserNotExist(user);
    const repoNames = response;
    if (repoNames != false) {
        createCookie(user,repoNames,500);
    }
}


WHY();

console.log(document.cookie);


// // we check if the user cookie exists, if it does not, 
// // it will create one in the form of an array with the user repository names.
// function ifUserNotExist(user) {
//     if(getCookie(user) == undefined) {
//         getRepoNames(user).then((repos) =>{
//             let repo = []
//             // creates the repo array that gets returned.
        
//             // basically an foreach loop, but it won't let me use a foreach loop.
//             for(let i=0; i != repos.length; i++) {
//                 repoInfo = repos[i];
//                 repo.push(repoInfo.name);

//                 // Current issue is that because of the functions being async, they don't wait for the lastCommitMessage.
//                 getRepoCommits(user,repoInfo.name).then((commits) =>{
//                     let repoObj = new repoData(repoInfo.name,repoInfo.description,repoInfo.updated_at,commits[0].commit.message);
//                     createCookie(repoObj.name,repoObj,500);
//                 })
//             }
//             createCookie(user,repo,500);
//         })
//     } else {
//         console.log('user cookie exists');
//     }
// }




// just start an v3 at this point, we have to overhaul alot again.