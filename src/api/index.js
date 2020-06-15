
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

export function getNotes(userName) {
    const user = userName.toLowerCase().trim();
    const url = `FIREBASE_URL`
    return fetch(url)
            .then(res => res.json())
            .catch(e => console.log(e))
}

export function addNote(userName, note) {
    const user = userName.toLowerCase().trim();
    const url = `FIREBASE_URL`
    return fetch(url, {
            method: 'POST',
            body: JSON.stringify(note)
            })
            .then(res => res.json())
            .catch(e => console.log(e))
}