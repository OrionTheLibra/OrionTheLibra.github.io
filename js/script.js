// Sample data to populate the website
const candidates = [
    { name: 'John Doe', office: 'Governor', party: 'Democratic' },
    { name: 'Jane Smith', office: 'Senator', party: 'Republican' },
];

const ballotQuestions = [
    { question: 'Question 1: Should the Nevada Constitution be amended to ...?', type: 'Statewide' },
    { question: 'Question 2: Should Washoe County ...?', type: 'County' }
];

// Function to dynamically load candidates into the page
function loadCandidates() {
    const candidateList = document.getElementById('candidate-list');
    candidates.forEach(candidate => {
        const candidateItem = document.createElement('div');
        candidateItem.innerHTML = `<h3>${candidate.name} (${candidate.party})</h3><p>Running for: ${candidate.office}</p>`;
        candidateList.appendChild(candidateItem);
    });
}

// Function to dynamically load ballot questions into the page
function loadBallotQuestions() {
    const questionList = document.getElementById('question-list');
    ballotQuestions.forEach(question => {
        const questionItem = document.createElement('div');
        questionItem.innerHTML = `<h3>${question.type}</h3><p>${question.question}</p>`;
        questionList.appendChild(questionItem);
    });
}

// Load content on page load
window.onload = function() {
    loadCandidates();
    loadBallotQuestions();
};
