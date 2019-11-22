var database = firebase.database();

const writeDatabase = (location, data) => {
    firebase.database()
    .ref(location)
    set(data);
}