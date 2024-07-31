interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // This allows any additional properties
}

const teacher: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher);

// Directors interface extends Teacher interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director);

// print a teacher name
function printTeacher(firstName: string, lastName: string): void {
  const name = `${firstName[0]}. ${lastName}`;
  console.log(name);
}

// define an interface for printTeacher function
interface PrintTeacherFunction {
  printTeacher: (firstName: string, lastName: string) => void;
}

printTeacher('John', 'Doe');
