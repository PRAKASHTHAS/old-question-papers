// Step 1: Define your "database" of question papers.
const questionPapers = [
    {
        subject: 'Cloud Computing',
        year: 2023,
        title: 'Cloud Computing Question Paper 2023',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/blob/main/Cloud%20Computing-2023.pdf'
    },
    {
        subject: 'Cloud Computing',
        year: 2024,
        title: 'Cloud Computing Question Paper 2024',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/blob/main/Cloud%20Computing-2024.pdf'
    },
    {
        subject: 'Data Structures',
        year: 2022,
        title: 'Data Structures Question Paper 2022',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/blob/main/Data%20Structures-2022.pdf'
                     
    },
    {
        subject: 'Data Structures',
        year: 2024,
        title: 'Data Structures Question Paper 2024',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/blob/main/Data%20Structures-2024.pdf'
    },
    {
        subject: 'Database Management Systems',
        year: 2023,
        title: 'Database Management Systems Paper 2023',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/blob/main/Database%20Management%20Systems-2023.pdf'
    },
    {
        subject: 'Database Management Systems',
        year: 2024,
        title: 'Database Management Systems Paper 2024',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/blob/main/Database%20Management%20Systems-2024.pdf'
    },
    {
        subject: 'Web Technology',
        year: 2019,
        title: 'Web Technology Question Paper 2019',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/blob/main/web%20technology-2019.pdf'
    },
    {
        subject: 'Web Technology',
        year: 2020,
        title: 'Web Technology Question Paper 2020',
        url: 'https://github.com/PRAKASHTHAS/old-question-papers/blob/main/web%20technology-2020.pdf.pdf'
    }
];

// Get references to the HTML elements for the search functionality.
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');

// Add a "click" event listener to the search button.
searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase().trim();
    resultsContainer.innerHTML = '';

    if (query === '') {
        resultsContainer.innerHTML = '<p>Please enter a subject to search.</p>';
        return;
    }

    const results = questionPapers.filter(paper => 
        paper.subject.toLowerCase().includes(query)
    );

    if (results.length > 0) {
        results.forEach(paper => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            
            resultItem.innerHTML = `
                <div>
                    <strong>${paper.title}</strong>
                    <p>Subject: ${paper.subject} | Year: ${paper.year}</p>
                </div>
                <a href="${paper.url}" class="download-button" download>Download</a>
            `;
            
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>Sorry, no question papers found for that subject.</p>';
    }
});


/* JavaScript for Modals */

// Get the modal elements
const contactModal = document.getElementById("contactModal");
const foundersModal = document.getElementById("foundersModal");
const helpModal = document.getElementById("helpModal");
const aboutCollegeModal = document.getElementById("aboutCollegeModal"); // New modal

// Get the button elements
const contactBtn = document.getElementById("contactBtn");
const foundersBtn = document.getElementById("foundersBtn");
const helpBtn = document.getElementById("helpBtn");
const aboutCollegeBtn = document.getElementById("aboutCollegeBtn"); // New button

// Get all the close buttons
const closeBtns = document.getElementsByClassName("close-btn");

// Function to open a modal
function openModal(modal) {
    modal.style.display = "block";
}

// Function to close all modals
function closeAllModals() {
    contactModal.style.display = "none";
    foundersModal.style.display = "none";
    helpModal.style.display = "none";
    aboutCollegeModal.style.display = "none";
}

// Event listeners for the buttons
contactBtn.onclick = function() {
    openModal(contactModal);
}
foundersBtn.onclick = function() {
    openModal(foundersModal);
}
helpBtn.onclick = function() {
    openModal(helpModal);
}
aboutCollegeBtn.onclick = function() {
    openModal(aboutCollegeModal);
}

// Event listener for all close buttons
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = function() {
        closeAllModals();
    }
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == contactModal || event.target == foundersModal || event.target == helpModal || event.target == aboutCollegeModal) {
        closeAllModals();
    }
}
