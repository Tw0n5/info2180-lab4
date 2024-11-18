window.addEventListener('load', () => {
    document.querySelector("button#btn").addEventListener("click", (event) => {
        event.preventDefault();
        const searchField = document.getElementById('searchField').value.trim(); 
        const results = document.getElementById('results'); 

        let url = 'superheroes.php';
        if (searchField !== "") {
            
            url += `?query=${encodeURIComponent(searchField)}`;
        }
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
    });
});