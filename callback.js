function fetchData(callback) {
    console.log("Fetching data...");

    setTimeout(function() {
        const data = { id: 1, name: "Aman" };
        console.log("Data fetched!");

        callback(data);
    }, 2000);
}

function processData(data) {
    console.log("Processing data...");
    console.log("ID:", data.id);
    console.log("Name:", data.name);
}

fetchData(processData);
