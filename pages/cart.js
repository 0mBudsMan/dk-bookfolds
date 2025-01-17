const fetchData = () => new Promise((resolve) => setTimeout(() => resolve("Data"), 1000));
fetchData()
    .then((data) => {
        console.log("Received:", data);
        return data + " processed";
    })
    .then((processedData) => {
        console.log("Processed:", processedData);
    })
    .catch((error) => {
        console.error("Error:", error);
    });
