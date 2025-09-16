// Step 1: Define your "database" of question papers.
// This data is generated from the URLs you provided.
const questionPapers = [
    {
        subject: 'Cloud Computing',
        year: 2023,
        title: 'Cloud Computing Question Paper 2023',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/raw/main/Cloud%20Computing-2023.pdf'
    },
    {
        subject: 'Cloud Computing',
        year: 2024,
        title: 'Cloud Computing Question Paper 2024',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/raw/main/Cloud%20Computing-2024.pdf'
    },
    {
        subject: 'Data Structures',
        year: 2022,
        title: 'Data Structures Question Paper 2022',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/raw/main/Data%20Structures-2022.pdf'
    },
    {
        subject: 'Data Structures',
        year: 2024,
        title: 'Data Structures Question Paper 2024',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/raw/main/Data%20Structures-2024.pdf'
    },
    {
        subject: 'Database Management Systems',
        year: 2023,
        title: 'Database Management Systems Paper 2023',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/raw/main/Database%20Management%20Systems-2023.pdf'
    },
    {
        subject: 'Database Management Systems',
        year: 2024,
        title: 'Database Management Systems Paper 2024',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/raw/main/Database%20Management%20Systems-2024.pdf'
    },
    {
        subject: 'Web Technology',
        year: 2019,
        title: 'Web Technology Question Paper 2019',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/raw/main/web%20technology-2019.pdf'
    },
    {
        subject: 'Web Technology',
        year: 2020,
        title: 'Web Technology Question Paper 2020',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/raw/main/web%20technology-2020.pdf'
    }
    // To add more papers, just add a new comma and {} block here.
];

// Step 2: Get references to the HTML elements we need to work with.
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

// Step 3: Add a "click" event listener to the search button.
searchButton.addEventListener('click', () => {
    // Get the user's search query and convert it to lower case for easy matching.
    const query = searchInput.value.toLowerCase().trim();

    // Clear any previous results.
    resultsContainer.innerHTML = '';

    if (query === '') {
        resultsContainer.innerHTML = '<p>Please enter a subject to search.</p>';
        return;
    }

    // Filter the array to find papers where the subject includes the search query.
    const results = questionPapers.filter(paper => 
        paper.subject.toLowerCase().includes(query)
    );

    // Step 4: Display the results.
    if (results.length > 0) {
        results.forEach(paper => {
            // For each result, create a new div element.
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item'; // Use the class we styled in CSS.
            
            // Set the content of the div using HTML.
            resultItem.innerHTML = `
                <div>
                    <strong>${paper.title}</strong>
                    <p>Subject: ${paper.subject} | Year: ${paper.year}</p>
                </div>
                <a href="${paper.url}" class="download-button" download>Download</a>
            `;
            
            // Add the new div to our results container.
            resultsContainer.appendChild(resultItem);
        });
    } else {
        // If no results were found, show a message.
        resultsContainer.innerHTML = '<p>Sorry, no question papers found for that subject.</p>';
    }
});