// Sample candidate data with four candidates per office
const presidentCandidates = [
    { name: 'N/A', party: 'N/A', bio: 'N/A', website: 'https://www.google.com' },
    { name: 'N/A', party: 'N/A', bio: 'N/A', website: 'https://www.google.com' },
];

const senateCandidates = [
    { name: 'N/A', party: 'N/A', bio: 'N/A', website: 'https://www.google.com' },
    { name: 'N/A', party: 'N/A', bio: 'N/A', website: 'https://www.google.com' },
];

const representativesCandidates = [
    { name: 'N/A', party: 'N/A', bio: 'N/A', website: 'https://www.google.com' },
    { name: 'N/A', party: 'N/A', bio: 'N/A', website: 'https://www.google.com' },
];

// Sample ballot questions with numbering
const stateBallotQuestions = [
    { 
        number: 'Question 1', 
        question: "Asks if the Nevada Constitution should be changed to give the state Legislature more control over Nevada's public universities, specifically by changing how the Board of Regents operates. Right now, the Board of Regents (a group that manages public universities like the University of Nevada) is mentioned in the state Constitution. This change would remove that specific mention, making it easier for the Legislature to oversee the universities and require regular audits (reviews) of how the schools manage their money.", 
        type: '', 
        description: `
			<br>
            <strong>Some supporters believe:</strong>
            <ul>
                <li><strong>More Accountability:</strong> A "yes" vote would allow the Legislature to have more direct oversight of public universities, which could help address financial mismanagement or inefficiencies that may occur within the Nevada System of Higher Education (NSHE). Regular audits could increase transparency and ensure that taxpayer and student funds are being used properly.</li>
                <li><strong>Legislative Flexibility:</strong> It would make it easier for the Legislature to change policies for public universities, allowing for potentially faster responses to problems or emerging needs within the education system.</li>
            </ul>
            <br>
            <strong>Some opposers believe:</strong>
            <ul>
                <li><strong>Political Influence:</strong> Some fear that giving the Legislature more control could lead to more political influence over the universities. Universities traditionally prioritize academic freedom, research, and education, and critics worry that more legislative control could lead to decisions based on politics rather than what's best for education.</li>
                <li><strong>Stability of the Board:</strong> The Board of Regents would no longer be enshrined in the Constitution, making it easier for the Legislature to change how the board operates. While the board would still hold a lot of power over the university system, it could be subject to more changes in its structure, duties, or even whether its members are elected or appointed.</li>
            </ul>
			<br>
			<strong>Finances:</strong>
			<br>
			The exact cost of requiring regular audits can’t be determined, but there would be some financial effect on the state government.
        `
    },
    { 
        number: 'Question 2', 
        question: "Asks if the Nevada Constitution should be updated to change outdated terms for people with disabilities and to include a broader group of people who could benefit from state support. Right now, the Constitution uses terms like “insane,” “deaf and dumb,” and “blind.” This measure would replace those terms with language that some believe to be more respectful and modern.", 
        type: ' ', 
        description: `
			<br>
            <strong>Some supporters believe:</strong>
            <ul>
                <li><strong>Respectful Language:</strong> This change would modernize the Constitution by replacing outdated terms with more respectful language.</li>
                <li><strong>Broader Inclusion:</strong> Adding intellectual and developmental disabilities ensures broader support for people who need assistance.</li>
            </ul>
            <br>
            <strong>Some opposers believe:</strong>
            <ul>
                <li><strong>Limited Impact:</strong> Some may view this change as mostly symbolic and feel it doesn’t affect the practical services provided.</li>
                <li><strong>Constitutional Changes:</strong> Some may prefer to keep amendments to the Constitution minimal and view language updates as unnecessary.</li>
            </ul>
			<br>
			<strong>Finances:</strong>
			<br>
			There isn’t a clear financial impact, since the measure is mainly about updating language. However, the Legislature might have to pass laws to make sure the state is supporting the newly added groups.
        `
    },
    { 
        number: 'Question 3', 
        question: 'Proposes a major change to Nevada’s election system by introducing open primaries and ranked-choice voting (RCV) in the general election. In an open primary, all candidates, regardless of party affiliation, appear on a single primary ballot that all voters, regardless of party affiliation, can access, allowing them to choose any candidate. The top five candidates from this open primary then move on to the general election. In the general election, ranked-choice voting would enable voters to rank candidates by preference rather than selecting just one, though a voter may still only choose one candidate or none of these candidates if they wish. If no candidate wins more than 50% of the vote in the first round, the candidate with the fewest votes is eliminated, and their votes are redistributed to each voter’s next choice. This process continues until a candidate has over 50% support. <a href="https://www.rcvresources.org/what-is-rcv/" target="_blank">Click here</a> for more info on RCV.',
        type: ' ', 
        description: `
			<br>
            <strong>Some supporters believe:</strong>
            <ul>
                <li><strong>Increased Participation:</strong> Open primaries allow non-partisan and independent voters to participate in the primary process, potentially leading to more representative and moderate candidates.</li>
                <li><strong>Majority Representation:</strong> RCV can ensure that the winning candidate has broad support, as it allows voters to rank their preferences.</li>
				<li><strong>Less Extremism:</strong> Many believe that this measure will reduce polarization, as candidates would need to appeal to a wider base of voters across party lines to make it to the general election and potentially win.</li>
            </ul>
            <br>
            <strong>Some opposers believe:</strong>
            <ul>
                <li><strong>Complexity:</strong> RCV may be confusing for some voters, potentially leading to more spoiled ballots.</li>
                <li><strong>Longer Counting Process:</strong> Close races may take longer to count, as ranked choices must be tallied.</li>
            </ul>
			<br>
			<strong>Finances:</strong>
			<br>
			The exact costs of implementing ranked-choice voting and open primaries are expected to be significant. The state would need to spend millions on voter education, updates to voting systems, and more. It is possible there could also be ongoing costs for things like software licensing and ballot printing.
        `
    },
    { 
        number: 'Question 4', 
        question: "Proposes to amend the Nevada Constitution to remove language that allows slavery and involuntary servitude as a form of punishment for crimes. Currently, the Constitution includes provisions that permit these practices as part of criminal sentences.", 
        type: ' ', 
        description: `
			<br>
            <strong>Some supporters believe:</strong>
            <ul>
                <li><strong>Moral and Ethical Standards:</strong> Many argue that slavery and involuntary servitude are fundamentally wrong and should not be permitted under any circumstances, even as punishment.</li>
                <li><strong>Modernization:</strong> Removing this language is seen as a necessary step to modernize the Constitution and align it with contemporary values of human rights and dignity.</li>
				<li><strong>Prevention of Exploitation:</strong> It would ensure that no one can be subjected to forced labor as part of a criminal punishment, preventing potential abuse within the penal system.</li>
            </ul>
            <br>
            <strong>Some opposers believe:</strong>
            <ul>
                <li><strong>Historical Context:</strong> Some might argue that this language reflects historical context, even if it’s no longer used in practice.</li>
                <li><strong>Minimal Impact:</strong> The removal is largely symbolic since current legal interpretations already oppose involuntary servitude.</li>
				<li><strong>Legal Precedents:</strong> Others may be concerned about the potential implications for existing laws and whether removing this language could create legal ambiguities.</li>
            </ul>
			<br>
			<strong>Finances:</strong>
			<br>
			There is no anticipated financial impact from this amendment. It mainly focuses on changing constitutional language and ensuring alignment with modern human rights standards.
        `
    },
    { 
        number: 'Question 5', 
        question: "proposes to exempt child and adult diapers from certain taxes in Nevada. This means that if you buy diapers, you wouldn't have to pay sales tax on them.", 
        type: ' ', 
        description: `
			<br>
            <strong>Some supporters believe:</strong>
            <ul>
                <li><strong>Financial Relief:</strong> Removing the tax on diapers would reduce costs for families and individuals who need these products.</li>
                <li><strong>Health and Accessibility:</strong> Reducing the cost could help improve access to essential hygiene products and encourage their use.</li>
            </ul>
            <br>
            <strong>Some opposers believe:</strong>
            <ul>
                <li><strong>Reduced Tax Revenue:</strong> This exemption could decrease state revenue, potentially impacting other funded services.</li>
                <li><strong>Setting a Precedent:</strong> Exempting diapers could lead to similar requests for other necessities, complicating tax structures.</li>
            </ul>
			<br>
			<strong>Finances:</strong>
			<br>
			The financial impact is likely to be limited but could reduce state revenue slightly from sales taxes. However, the potential increase in affordability and access to essential products could offset these concerns.
        `
    },
    { 
        number: 'Question 6', 
        question: "Proposes to amend the Nevada Constitution to establish abortion access as an individual right. This measure aims to guarantee the right to seek and obtain an abortion in Nevada.", 
        type: ' ', 
        description: `
			<br>
            <strong>Some supporters believe:</strong>
            <ul>
                <li><strong>Protecting Rights:</strong> This would safeguard abortion rights at the state level, even if federal policies change.</li>
                <li><strong>Public Health and Autonomy:</strong> Ensures access to safe abortion services and supports reproductive freedom.</li>
            </ul>
            <br>
            <strong>Some opposers believe:</strong>
            <ul>
                <li><strong>Ethical and Moral Some opposers believe:</strong> Opponents may oppose abortion on moral or religious grounds.</li>
                <li><strong>Regulatory Limitations:</strong> Some opponents argue that enshrining abortion rights in the Constitution could limit the ability of future legislatures to regulate the procedure in ways that might be seen as necessary for public health.</li>
            </ul>
			<br>
			<strong>Finances:</strong>
			<br>
			The financial implications are likely minimal directly related to this amendment. However, it could influence state funding for reproductive health services and the legal costs associated with defending the amendment if challenged.
        `
    },
    { 
        number: 'Question 7', 
        question: "Proposes that voters in Nevada be required to show identification (ID) when voting, either in person or by mail, with specific forms of acceptable ID to be presented depending on the voting method. For in-person voting, voters would need to provide a government-issued photo ID, such as a driver's license, state ID card, passport, or military ID. The goal is to confirm each voter's identity to help prevent potential cases of impersonation at the polls. For mail-in voting, the requirement may include providing a state-issued ID number or partial Social Security number as verification, rather than a physical ID card, to confirm eligibility while accommodating those voting remotely.",
        type: ' ', 
        description: `
			<br>
            <strong>Some supporters believe:</strong>
            <ul>
                <li><strong>Preventing Fraud:</strong> Requiring ID can help ensure that only eligible voters participate.</li>
                <li><strong>Public Confidence:</strong> ID requirements may boost public trust in election integrity.</li>
            </ul>
            <br>
            <strong>Some opposers believe:</strong>
            <ul>
                <li><strong>Disenfranchisement:</strong> ID requirements may disproportionately affect minorities, low-income individuals, the elderly, and the homeless.</li>
                <li><strong>Limited Evidence of Fraud:</strong> Research suggests that voter fraud is rare, so an ID requirement may be unnecessary. For more info on voter fraud, <a href="docs/Amici_Curiae_Voting_Brief.pdf" download="Voter_Fraud_Report.pdf" class="download-link" target="_blank">click here</a>.</li>
            </ul>
			<br>
			<strong>Finances:</strong>
			<br>
			The implementation of ID requirements could incur costs related to public education about the new rules, updating voting systems, and potentially providing IDs to those who lack them.
        `
    }
];

const countyBallotQuestions = [
    { 
        number: 'Washoe County Question 1', 
        question: "Asks if the Washoe County Board of County Commissioners should be allowed to continue an existing property tax rate of $0.02 per $100 of assessed valuation for 30 years. This rate was previously approved by voters in 1994 and has been used to fund library operations and improvements. The funds raised (approximately $4.5 million in fiscal year 2025-2026) would continue to be used for various library-related purposes, including the renovation and improvements to existing libraries (South Valleys and Spanish Springs), the construction of a new library in the North Valleys, and the expansion of services through Bookmobile and Book Vending Machine services.", 
        type: '', 
        description: `
			<br>
            <strong>Some supporters believe:</strong>
            <ul>
                <li><strong>Enhanced Library Services:</strong> Provides a stable funding source for library expansions, updates, and improvements.</li>
                <li><strong>No Additional Taxes:</strong> Renews an existing rate, rather than adding an extra tax burden to residents.</li>
            </ul>
            <br>
            <strong>Some opposers believe:</strong>
            <ul>
                <li><strong>Reduced Taxpayer Oversight:</strong> Limits taxpayer control by providing dedicated funding without annual approvals.</li>
                <li><strong>Alternative Funding:</strong> Suggestion that libraries seek private funding instead of relying on taxes.</li>
            </ul>
			<br>
			<strong>Finances:</strong>
			<br>
			The proposed tax is within the current statutory maximum and would not increase the tax burden on residents. It represents a continuation of existing funding rather than an increase.
        `
    },
    { 
        number: 'Carson City Question 1', 
        question: "Coming soon.", 
        type: '', 
        description: `
			<br>
            <strong>Some supporters believe:</strong>
            <ul>
                <li><strong>Coming soon:</strong> Coming soon.</li>
            </ul>
            <br>
            <strong>Some opposers believe:</strong>
            <ul>
                <li><strong>Coming soon:</strong> Coming soon.</li>
            </ul>
			<br>
			<strong>Finances:</strong>
			<br>
			Coming soon.
        `
    }
    // Additional county questions here
];



// Function to dynamically load candidates by office
function loadCandidates(candidates, elementId) {
    const candidateList = document.getElementById(elementId);
    candidates.forEach(candidate => {
        const candidateCard = document.createElement('div');
        candidateCard.classList.add('card');
        candidateCard.innerHTML = `
            <h3>${candidate.name} (${candidate.party})</h3>
            <p>${candidate.bio}</p>
            <a href="${candidate.website}" target="_blank">Visit Campaign Website</a>
        `;
        candidateList.appendChild(candidateCard);
    });
}

// Function to load questions by type
function loadQuestions(questions, elementId) {
    const questionList = document.getElementById(elementId);
    questions.forEach(question => {
        const questionCard = document.createElement('div');
        questionCard.classList.add('card');
        questionCard.innerHTML = `
            <h3>${question.number} ${question.type}</h3>
            <p><strong>${question.question}</strong></p>
            <p>${question.description}</p>
        `;
        questionList.appendChild(questionCard);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Load content on page load
window.onload = function() {
    loadCandidates(presidentCandidates, 'president-list');
    loadCandidates(senateCandidates, 'senate-list');
    loadCandidates(representativesCandidates, 'representatives-list');
    loadQuestions(stateBallotQuestions, 'state-question-list');
    loadQuestions(countyBallotQuestions, 'county-question-list');
};