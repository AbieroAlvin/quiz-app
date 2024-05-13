const questions = [
  {
    question: "What is the capital of France?",
    options: [
      { id: 1, text: "Paris", isCorrect: true },
      { id: 2, text: "London" },
      { id: 3, text: "Berlin" },
      { id: 4, text: "Madrid" },
    ],
  },
  {
    question: "What is the largest planet in our solar system?",
    options: [
      { id: 1, text: "Earth" },
      { id: 2, text: "Jupiter", isCorrect: true },
      { id: 3, text: "Mars" },
      { id: 4, text: "Venus" },
    ],
  },
  {
    question: "What is the smallest continent by land area?",
    options: [
      { id: 1, text: "Asia" },
      { id: 2, text: "Africa" },
      { id: 3, text: "Australia", isCorrect: true },
      { id: 4, text: "Europe" },
    ],
  },
  {
    question: 'Who painted the famous artwork "Mona Lisa"?',
    options: [
      { id: 1, text: "Michelangelo" },
      { id: 2, text: "Vincent van Gogh" },
      { id: 3, text: "Leonardo da Vinci", isCorrect: true },
      { id: 4, text: "Pablo Picasso" },
    ],
  },
  {
    question: "What is the rarest blood type?",
    options: [
      { id: 1, text: "O" },
      { id: 2, text: "A" },
      { id: 3, text: "B" },
      { id: 4, text: "AB", isCorrect: true },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      { id: 1, text: "Atlantic Ocean" },
      { id: 2, text: "Indian Ocean" },
      { id: 3, text: "Arctic Ocean" },
      { id: 4, text: "Pacific Ocean", isCorrect: true },
    ],
  },
  {
    question: "Which is the longest river in the world?",
    options: [
      { id: 1, text: "Amazon River" },
      { id: 2, text: "Nile River", isCorrect: true },
      { id: 3, text: "Mississippi River" },
      { id: 4, text: "Yangtze River" },
    ],
  },
  {
    question: "What is the smallest country in the world by land area?",
    options: [
      { id: 1, text: "Monaco" },
      { id: 2, text: "Vatican City", isCorrect: true },
      { id: 3, text: "Nauru" },
      { id: 4, text: "Tuvalu" },
    ],
  },
  {
    question: "What is the tallest mammal?",
    options: [
      { id: 1, text: "Giraffe", isCorrect: true },
      { id: 2, text: "Elephant" },
      { id: 3, text: "Hippopotamus" },
      { id: 4, text: "Rhinoceros" },
    ],
  },
  {
    question: "Which is the fastest land animal?",
    options: [
      { id: 1, text: "Cheetah", isCorrect: true },
      { id: 2, text: "Lion" },
      { id: 3, text: "Leopard" },
      { id: 4, text: "Gazelle" },
    ],
  },
  {
    question: "What is the name of the longest river in Asia?",
    options: [
      { id: 1, text: "Mekong River" },
      { id: 2, text: "Yangtze River", isCorrect: true },
      { id: 3, text: "Indus River" },
      { id: 4, text: "Ganges River" },
    ],
  },
  {
    question: "What is the name of the largest waterfall in the world?",
    options: [
      { id: 1, text: "Niagara Falls" },
      { id: 2, text: "Victoria Falls" },
      { id: 3, text: "Angel Falls", isCorrect: true },
      { id: 4, text: "Iguazu Falls" },
    ],
  },
  {
    question: "What is the name of the largest island in the world?",
    options: [
      { id: 1, text: "Greenland", isCorrect: true },
      { id: 2, text: "Borneo" },
      { id: 3, text: "Madagascar" },
      { id: 4, text: "New Guinea" },
    ],
  },
  {
    question: "What is the name of the largest ocean current?",
    options: [
      { id: 1, text: "Gulf Stream" },
      { id: 2, text: "Kuroshio Current" },
      { id: 3, text: "Agulhas Current" },
      { id: 4, text: "Antarctic Circumpolar Current", isCorrect: true },
    ],
  },
  {
    question: "What is the largest desert in the world?",
    options: [
      { id: 1, text: "Gobi Desert" },
      { id: 2, text: "Sahara Desert", isCorrect: true },
      { id: 3, text: "Atacama Desert" },
      { id: 4, text: "Kalahari Desert" },
    ],
  },
  {
    question: "What is the currency of Japan?",
    options: [
      { id: 1, text: "Peso" },
      { id: 2, text: "Euro" },
      { id: 3, text: "Yen", isCorrect: true },
      { id: 4, text: "Dollar" },
    ],
  },
  {
    question: "What is the name of the tallest mountain in the world?",
    options: [
      { id: 1, text: "K2" },
      { id: 2, text: "Everest", isCorrect: true },
      { id: 3, text: "Kilimanjaro" },
      { id: 4, text: "Denali" },
    ],
  },
  {
    question: 'Who painted the famous artwork "The Starry Night"?',
    options: [
      { id: 1, text: "Pablo Picasso" },
      { id: 2, text: "Vincent van Gogh", isCorrect: true },
      { id: 3, text: "Leonardo da Vinci" },
      { id: 4, text: "Michelangelo" },
    ],
  },
  {
    question: "What is the largest bone in the human body?",
    options: [
      { id: 1, text: "Femur", isCorrect: true },
      { id: 2, text: "Tibia" },
      { id: 3, text: "Humerus" },
      { id: 4, text: "Fibula" },
    ],
  },
  {
    question: 'Who wrote the novel "Pride and Prejudice"?',
    options: [
      { id: 1, text: "Jane Austen", isCorrect: true },
      { id: 2, text: "Charlotte Brontë" },
      { id: 3, text: "Emily Brontë" },
      { id: 4, text: "Mary Shelley" },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    options: [
      { id: 1, text: "Ag" },
      { id: 2, text: "Cu" },
      { id: 3, text: "Fe" },
      { id: 4, text: "Au", isCorrect: true },
    ],
  },
  {
    question: "What is the largest mammal in the world?",
    options: [
      { id: 1, text: "Blue Whale", isCorrect: true },
      { id: 2, text: "Elephant" },
      { id: 3, text: "Giraffe" },
      { id: 4, text: "Hippopotamus" },
    ],
  },
  {
    question: "What is the smallest planet in our solar system?",
    options: [
      { id: 1, text: "Mercury", isCorrect: true },
      { id: 2, text: "Venus" },
      { id: 3, text: "Mars" },
      { id: 4, text: "Pluto" },
    ],
  },
];

export default questions;
