function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
   this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (arguments) {
  if (this.marks === undefined) {
    this.marks = Array.from(arguments);
  } else {
    this.marks.push(Array.from(arguments));
  }
}

