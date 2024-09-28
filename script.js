async function getSong() {
    const userResponses = {
        intro: document.getElementById("intro").value,
        mood: document.getElementById("mood").value,
        theme: document.getElementById("theme").value,
        duree: document.getElementById("duree").value,
        type: document.getElementById("type").value,
        tempo: document.getElementById("tempo").value,
        annee: document.getElementById("annee").value
    };

    try {
        const response = await fetch('chansons.csv');
        const csvData = await response.text();

        const songs = parseCSV(csvData);

        let bestMatches = [];
        let maxMatches = 0;

        songs.forEach(song => {
            let matches = 0;
            Object.keys(userResponses).forEach(question => {
                if (userResponses[question] === song[question] || 
                    userResponses[question] === "Peu importe" || 
                    song[question] === "Peu importe") {
                    matches++;
                }
            });

            if (matches > maxMatches) {
                maxMatches = matches;
                bestMatches = [song];
            } else if (matches === maxMatches) {
                bestMatches.push(song);
            }
        });

        const chosenSong = bestMatches[Math.floor(Math.random() * bestMatches.length)];

        const songData = encodeURIComponent(JSON.stringify(chosenSong));
        window.location.href = `result.html?song=${songData}`;
    } catch (error) {
        console.error('Erreur lors du chargement des chansons :', error);
        document.getElementById('result').textContent = 'Erreur lors du chargement des chansons.';
    }
}

function parseCSV(csv) {
    const lines = csv.split("\n");
    const headers = lines[0].split(",");
    const songs = [];

    for (let i = 1; i < lines.length; i++) {
        const data = lines[i].split(",");
        const song = {};

        headers.forEach((header, index) => {
            song[header.trim()] = data[index].trim();
        });

        songs.push(song);
    }

    return songs;
}