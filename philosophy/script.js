// Philosophy Quotes Array
const quotes = [
    "\"The unexamined life is not worth living.\" - Socrates",
    "\"I think, therefore I am.\" - René Descartes",
    "\"Happiness is not an ideal of reason but of imagination.\" - Immanuel Kant",
    "\"God is dead! God remains dead! And we have killed him.\" - Friedrich Nietzsche",
    "\"The only thing I know is that I know nothing.\" - Socrates",
    "\"To be or not to be, that is the question.\" - William Shakespeare",
    "\"The truth is rarely pure and never simple.\" - Oscar Wilde",
    "\"Man is condemned to be free.\" - Jean-Paul Sartre",
    "\"The life of man is of no greater importance to the universe than that of an oyster.\" - David Hume",
    "\"We are what we repeatedly do. Excellence, then, is not an act, but a habit.\" - Aristotle"
];

// Philosopher Details
const philosopherDetails = {
    socrates: {
        title: "Socrates",
        description: "Socrates (c. 470–399 BC) was a Greek philosopher from Athens who is credited as one of the founders of Western philosophy. He is known for his Socratic method, a form of cooperative argumentative dialogue between individuals, based on asking and answering questions to stimulate critical thinking and to draw out ideas and underlying presuppositions. He was sentenced to death for corrupting the minds of the youth of Athens and not believing in the gods of the state."
    },
    plato: {
        title: "Plato",
        description: "Plato (c. 428–348 BC) was an Athenian philosopher during the Classical period in Ancient Greece. He was the founder of the Academy in Athens, the first institution of higher learning in the Western world. He is widely considered the pivotal figure in the history of Ancient Greek and Western philosophy, along with his teacher, Socrates, and his most famous student, Aristotle. Plato has also often been cited as one of the founders of Western religion and spirituality."
    },
    aristotle: {
        title: "Aristotle",
        description: "Aristotle (384–322 BC) was a Greek philosopher and polymath during the Classical period in Ancient Greece. He was a student of Plato and teacher of Alexander the Great. His writings cover many subjects, including physics, biology, zoology, metaphysics, logic, ethics, aesthetics, poetry, theater, music, rhetoric, linguistics, politics and government. Along with Socrates and Plato, Aristotle is one of the most important founding figures in Western philosophy."
    },
    descartes: {
        title: "René Descartes",
        description: "René Descartes (1596–1650) was a French philosopher, mathematician, and scientist. A native of the Kingdom of France, he spent about 20 years of his life in the Dutch Republic after serving for a while in the Dutch States Army. One of the most notable intellectual figures of the Dutch Golden Age, Descartes is also widely regarded as one of the founders of modern philosophy. His meditations on First Philosophy continue to be a standard text at most university philosophy departments."
    },
    kant: {
        title: "Immanuel Kant",
        description: "Immanuel Kant (1724–1804) was a German philosopher and one of the central Enlightenment thinkers. Kant's comprehensive and systematic works in epistemology, metaphysics, ethics, and aesthetics have made him one of the most influential figures in modern Western philosophy. In his doctrine of transcendental idealism, Kant argued that space and time are mere 'forms of intuition' which structure all experience, and therefore that, although we can know the structure of experience, we cannot know things as they are in themselves."
    },
    nietzsche: {
        title: "Friedrich Nietzsche",
        description: "Friedrich Nietzsche (1844–1900) was a German philosopher, cultural critic, composer, poet, philologist, and Latin and Greek scholar whose work has exerted a profound influence on modern intellectual history. He began his career as a classical philologist before turning to philosophy. He became the youngest ever to hold the Chair of Classical Philology at the University of Basel in 1869 at the age of 24. Nietzsche's writing spans philosophical polemics, poetry, cultural criticism, and fiction while displaying a fondness for aphorism and irony."
    }
};

// Quiz Questions
const quizQuestions = [
    {
        question: "What is the study of knowledge called?",
        options: ["Epistemology", "Metaphysics", "Ethics", "Logic"],
        correct: 0,
        explanation: "Epistemology is the branch of philosophy concerned with knowledge, including its nature, origin, and limits."
    },
    {
        question: "Who is known for the statement 'I think, therefore I am'?",
        options: ["Socrates", "Plato", "Descartes", "Aristotle"],
        correct: 2,
        explanation: "René Descartes famously stated 'Cogito ergo sum' (I think, therefore I am) in his Discourse on Method."
    },
    {
        question: "What branch of philosophy deals with moral principles?",
        options: ["Aesthetics", "Ethics", "Logic", "Political Philosophy"],
        correct: 1,
        explanation: "Ethics, also called moral philosophy, studies concepts of right and wrong behavior."
    },
    {
        question: "Who was the teacher of Aristotle?",
        options: ["Socrates", "Plato", "Descartes", "Kant"],
        correct: 1,
        explanation: "Plato was Aristotle's teacher at the Academy in Athens."
    },
    {
        question: "What does 'tabula rasa' mean?",
        options: ["Blank slate", "Divine right", "Categorical imperative", "Will to power"],
        correct: 0,
        explanation: "Tabula rasa, meaning 'blank slate' in Latin, is the theory that individuals are born without built-in mental content."
    },
    {
        question: "Who wrote 'Critique of Pure Reason'?",
        options: ["Hegel", "Kant", "Nietzsche", "Sartre"],
        correct: 1,
        explanation: "Immanuel Kant's Critique of Pure Reason is a landmark work in epistemology and metaphysics."
    },
    {
        question: "What is utilitarianism?",
        options: ["The greatest happiness for the greatest number", "Duty for duty's sake", "Life is meaningless", "Knowledge is power"],
        correct: 0,
        explanation: "Utilitarianism is an ethical theory that states the best action is the one that maximizes utility, usually defined as that which produces the greatest well-being."
    },
    {
        question: "Who coined the phrase 'God is dead'?",
        options: ["Marx", "Nietzsche", "Heidegger", "Camus"],
        correct: 1,
        explanation: "Friedrich Nietzsche famously declared 'God is dead' in his work Thus Spoke Zarathustra."
    },
    {
        question: "What is metaphysics?",
        options: ["Study of society", "Study of beauty", "Study of reality", "Study of arguments"],
        correct: 2,
        explanation: "Metaphysics is the branch of philosophy that studies the fundamental nature of reality and existence."
    },
    {
        question: "Who founded the Academy in Athens?",
        options: ["Socrates", "Plato", "Aristotle", "Pythagoras"],
        correct: 1,
        explanation: "Plato founded the Academy in Athens, the first institution of higher learning in the Western world."
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const icon = document.querySelector('#dark-mode-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.className = 'fas fa-moon';
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Search Functionality
function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const sections = ['home', 'branches', 'philosophers', 'quotes', 'experiments', 'quiz', 'contact'];
    
    // Simple search - scroll to relevant section based on keywords
    if (query.includes('home') || query.includes('start')) {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('branch') || query.includes('metaphysics') || query.includes('epistemology') || query.includes('ethics')) {
        document.getElementById('branches').scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('philosopher') || query.includes('socrates') || query.includes('plato') || query.includes('aristotle')) {
        document.getElementById('philosophers').scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('quote') || query.includes('wisdom')) {
        document.getElementById('quotes').scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('experiment') || query.includes('thought')) {
        document.getElementById('experiments').scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('quiz') || query.includes('test')) {
        document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('contact') || query.includes('email')) {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
}

// Show Philosopher Detail
function showPhilosopherDetail(philosopher) {
    const detail = document.getElementById('philosopher-detail');
    const title = document.getElementById('philosopher-title');
    const description = document.getElementById('philosopher-description');

    title.textContent = philosopherDetails[philosopher].title;
    description.textContent = philosopherDetails[philosopher].description;

    detail.classList.remove('hidden');
    detail.scrollIntoView({ behavior: 'smooth' });
}

// Quiz Functions
function checkAnswer(selectedIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const resultDiv = document.getElementById('quiz-result');
    const questionDiv = document.getElementById('quiz-question');
    
    if (selectedIndex === currentQuestion.correct) {
        score++;
        document.getElementById('result-text').textContent = 'Correct!';
    } else {
        document.getElementById('result-text').textContent = 'Incorrect!';
    }
    
    document.getElementById('result-explanation').textContent = currentQuestion.explanation;
    
    questionDiv.classList.add('hidden');
    resultDiv.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    const resultDiv = document.getElementById('quiz-result');
    const questionDiv = document.getElementById('quiz-question');
    
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
        questionDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
    } else {
        showFinalScore();
    }
    
    updateProgress();
}

function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    document.getElementById('question-text').textContent = question.question;
    
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, index) => {
        btn.textContent = question.options[index];
    });
}

function updateProgress() {
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
}

function showFinalScore() {
    const resultDiv = document.getElementById('quiz-result');
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    document.getElementById('result-text').textContent = `Quiz Complete! Your score: ${score}/${quizQuestions.length} (${percentage}%)`;
    document.getElementById('result-explanation').textContent = 
        percentage >= 80 ? 'Excellent! You have a strong grasp of philosophy.' :
        percentage >= 60 ? 'Good job! You know quite a bit about philosophy.' :
        'Keep learning! Philosophy is a vast and fascinating field.';
    
    document.getElementById('next-btn').style.display = 'none';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    updateProgress();
    document.getElementById('quiz-question').classList.remove('hidden');
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('next-btn').style.display = 'inline-block';
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // In a real application, you would send this data to a server
    alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
    
    // Clear form
    document.getElementById('contact-form').reset();
}

// Branch Details
const branchDetails = {
    metaphysics: {
        title: "Metaphysics",
        description: "Metaphysics is the branch of philosophy that studies the fundamental nature of reality, including the relationship between mind and matter, substance and attribute, and potentiality and actuality. It asks questions like: What is the nature of existence? What is real? What is the relationship between mind and body?"
    },
    epistemology: {
        title: "Epistemology",
        description: "Epistemology is the branch of philosophy concerned with knowledge. It studies the nature, origin, and limits of human knowledge. Key questions include: What is knowledge? How do we acquire knowledge? What are the limits of what we can know?"
    },
    ethics: {
        title: "Ethics",
        description: "Ethics, also called moral philosophy, is concerned with what is good for individuals and society. It involves systematizing, defending, and recommending concepts of right and wrong behavior. Main questions: What makes an action right or wrong? What is moral duty?"
    },
    logic: {
        title: "Logic",
        description: "Logic is the study of correct reasoning. It examines the principles of valid inference and demonstration. Logic provides the rules for correct and incorrect reasoning, helping us distinguish between good and bad arguments."
    },
    aesthetics: {
        title: "Aesthetics",
        description: "Aesthetics is the branch of philosophy dealing with the nature of beauty, art, and taste, and with the creation and appreciation of beauty. It asks: What is beauty? What is art? How do we judge aesthetic value?"
    },
    political: {
        title: "Political Philosophy",
        description: "Political philosophy is the study of topics such as politics, liberty, justice, property, rights, law, and the enforcement of a legal code by authority. It examines questions about the role of government, the rights of individuals, and the best form of society."
    }
};

// Experiment Details
const experimentDetails = {
    trolley: {
        title: "The Trolley Problem",
        description: "Imagine you see a runaway trolley moving toward five people who will be killed if it proceeds on its path. You have the option to pull a lever that will divert the trolley onto another track, where it will kill one person instead. What do you do? This thought experiment explores moral dilemmas and utilitarianism vs. deontology."
    },
    schrodinger: {
        title: "Schrödinger's Cat",
        description: "A cat is placed in a sealed box with a radioactive atom, a Geiger counter, a hammer, and a vial of poison. If the atom decays, the hammer smashes the vial, killing the cat. According to quantum mechanics, the atom is in a superposition of decayed and not decayed states until observed. Thus, the cat is both alive and dead until the box is opened. This illustrates the paradoxes of quantum superposition."
    },
    brain: {
        title: "Brain in a Vat",
        description: "Suppose you are a brain kept alive in a vat of nutrients by neuroscientists. Electrodes are connected to your brain, simulating experiences of the external world. You would have no way of knowing whether your perceptions are real or simulated. This thought experiment questions the nature of reality and skepticism about knowledge."
    }
};

// Generate Random Quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').textContent = quotes[randomIndex];
}

// Show Branch Detail
function showBranch(branch) {
    const detail = document.getElementById('branch-detail');
    const title = document.getElementById('branch-title');
    const description = document.getElementById('branch-description');

    title.textContent = branchDetails[branch].title;
    description.textContent = branchDetails[branch].description;

    detail.classList.remove('hidden');
    detail.scrollIntoView({ behavior: 'smooth' });
}

// Start Experiment
function startExperiment(experiment) {
    const detail = document.getElementById('experiment-detail');
    const title = document.getElementById('experiment-title');
    const description = document.getElementById('experiment-description');

    title.textContent = experimentDetails[experiment].title;
    description.textContent = experimentDetails[experiment].description;

    detail.classList.remove('hidden');
    detail.scrollIntoView({ behavior: 'smooth' });
}

// Canvas Animation for Philosophy Visualization
function initCanvas() {
    const canvas = document.getElementById('philosophy-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.color = `rgba(${102 + Math.random() * 50}, ${110 + Math.random() * 50}, ${234 + Math.random() * 20}, 0.7)`;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Event Listeners
document.getElementById('search-btn').addEventListener('click', performSearch);
document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
document.getElementById('contact-form').addEventListener('submit', handleContactForm);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    generateQuote();
    loadQuestion();
    updateProgress();
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.querySelector('#dark-mode-toggle i').className = 'fas fa-sun';
    }
    
    // Add loading animation
    document.body.classList.add('loading');
});