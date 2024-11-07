
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;  
            // const success = false;  
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 2000);
    });
}



function promise() {
    console.log("Fetching data with .then()...");
    fetchData()
        .then(response => {
            console.log("Response:", response);
        })
        .catch(error => {
            console.error("Error:", error);
        });
}


async function AsyncAwait() {
    console.log("Fetching data with async/await...");
    try {
        const response = await fetchData();
        console.log("Response:", response);
    } catch (error) {
        console.error("Error:", error);
    }
}

promise();
AsyncAwait();
