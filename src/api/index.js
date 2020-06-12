
export function getBio(userName) {
    const user = userName.toLowerCase().trim();
    const url = `https://api.github.com/users/${userName}`;
    return fetch(url)
            .then((res) => res.json())
            .catch((e) => console.log(e));
}

export function getRepos(userName) {
    const user = userName.toLowerCase().trim();
    const url = `https://api.github.com/users/${userName}/repos`;
    return fetch(url)
        .then((res) => res.json())
        .catch((e) => console.log(e));
}