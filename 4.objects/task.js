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

Student.prototype.addMarks = function () {
  if (this.marks === undefined) {
    this.marks = Array.from(arguments);
  } else {
    (Array.from(arguments)).forEach(elem => this.marks.push(elem));
  }
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((sum, elem) => sum + elem) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
