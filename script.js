const students = [
  { 
    id: 1,
    name: "Tom", 
    age: 18, 
    city: "Bishkek",
    grades: [5, 4, 3, 5],
    hobbies: ["football", "gaming"],
    isGraduated: false
  },
  { 
    id: 2,
    name: "Anna", 
    age: 20, 
    city: "Osh",
    grades: [3, 2, 4, 3],
    hobbies: ["reading", "painting", "yoga"],
    isGraduated: true
  },
  { 
    id: 3,
    name: "Bob", 
    age: 19, 
    city: "Karakol",
    grades: [5, 5, 5, 4],
    hobbies: [],
    isGraduated: false
  },
  { 
    id: 4,
    name: "Lisa", 
    age: 22, 
    city: "Bishkek",
    grades: [4, 5, 5, 5],
    hobbies: ["volleyball", "travel"],
    isGraduated: true
  },
  { 
    id: 5,
    name: "John", 
    age: 21, 
    city: "Talas",
    grades: [2, 3, 2, 4],
    hobbies: ["movies", "football"],
    isGraduated: false
  },
   { 
    id: 6,
    name: "Mila", 
    age: 23, 
    city: "Osh",
    grades: [5, 4, 4, 5],
    hobbies: ["reading", "cooking"],
    isGraduated: true
  },
  { 
    id: 7,
    name: "Alex", 
    age: 19, 
    city: "Naryn",
    grades: [3, 3, 4, 3],
    hobbies: ["music", "football"],
    isGraduated: false
  },
  { 
    id: 8,
    name: "Kate", 
    age: 20, 
    city: "Bishkek",
    grades: [4, 4, 5, 5],
    hobbies: ["dance", "photography"],
    isGraduated: true
  },
  { 
    id: 9,
    name: "Nick", 
    age: 18, 
    city: "Talas",
    grades: [5, 5, 4, 5],
    hobbies: ["gaming", "reading"],
    isGraduated: false
  },
  { 
    id: 10,
    name: "Sara", 
    age: 21, 
    city: "Osh",
    grades: [4, 5, 3, 4],
    hobbies: ["travel", "yoga"],
    isGraduated: true
  }
];

const container = document.querySelector("#students");

students.forEach((student) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const statusColor = student.isGraduated ? "green" : "red";

  card.innerHTML = `
    <h3>${student.name}</h3>
    <p>Age: ${student.age}</p>
    <p>City: ${student.city}</p>
    <p>Grades: ${student.grades.join(", ")}</p>
    <p>Hobbies: ${student.hobbies.length ? student.hobbies.join(", ") : "None"}</p>
    <span class="status ${statusColor}"></span>
  `;

  container.append(card);
});

const input = document.querySelector("#searchInput");
const button = document.querySelector("#searchBtn");

button.addEventListener("click", () => {
  const value = input.value.toLowerCase();

  const index = students.findIndex(
    (student) => student.name.toLowerCase() === value
  );

  if (index !== -1) {
    alert(`Индекс студента: ${index}`);
  } else {
    alert("Пользователь не найден");
  }
});

const names = students.map((student) => student.name);
console.log(names);

const name1 = students.map((student) => student.name);
console.log(name1);

const studentsGrades = students.map((student) => {
  const sum = student.grades.reduce((acc, grade) => acc + grade, 0);

  const average = sum / student.grades.length;

  return {
    id: student.id,
    name: student.name,
    grade: average
  };
});

console.log(studentsGrades);

const oldest = students.reduce((acc, student) =>
  student.age > acc.age ? student : acc
);

const youngest = students.reduce((acc, student) =>
  student.age < acc.age ? student : acc
);

const difference = oldest.age - youngest.age;
console.log(difference);

const graduatedCount = students.filter(
  (student) => student.isGraduated
).length;
console.log(graduatedCount);

const reversedStudents = [...students].reverse();
console.log(reversedStudents);