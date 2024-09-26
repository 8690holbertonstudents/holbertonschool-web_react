interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [property: string]: any;
}

const teacher1: Teacher = {
  firstName: 'Luke',
  lastName: 'Skywalker',
  fullTimeEmployee: true,
  location: 'Polis Massa',
  contract: true,
};

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Sheev',
  lastName: 'Palpatine',
  fullTimeEmployee: true,
  location: 'Naboo',
  numberOfReports: 47,
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student1 = new StudentClass('Anakin', 'Skywalker');
console.log(student1.workOnHomework());
console.log(student1.displayName());
