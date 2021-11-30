class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
      this.state = this.state * 1.5;
    }

    get state() {
        return this._state;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if ((book.state > 30) && (this.books.length === 0)) {
             this.books = [book];
        } else if ((book.state > 30) && (this.books.length !== 0)) {
             this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBook = this.books.find(book => book[type] === value);
        if (findBook != undefined) {
            return findBook;
        } else if (findBook == undefined) {
            return null;
        }
    }

    giveBookByName(bookName) {
        let book = this.books.find(findBook => findBook.name === bookName);
        if (book != undefined) {
            this.books.splice(this.books.indexOf(book), 1);
            return book;

        } else if (book == undefined) {
            return null;
        }
    }
}

class Student {
  constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
      this.subjects = {};
  }


  setSubject(subject) {
      return this.subjects[subject] = [];
  }

  addMark(mark, subject) {
      if ((this.subjects[subject] === undefined) && (mark > 0) && (mark < 6)) {
           return this.subjects[subject] = [mark];
      } else if ((mark > 0) && (mark < 6)){
           return this.subjects[subject].push(mark);
      } else {
           "Ошибка, оценка должна быть числом от 1 до 5";
      }
  }

  getAverageBySubject(subject) {
      return this.subjects[subject].reduce((sum, elem) => sum + elem) / this.subjects[subject].length;
  }

  getAverage() {
    let sum = [];
    for (let prop in this.subjects) {
      let value = this.subjects[prop];
      sum = sum.concat(value);
    }
    return sum.reduce((sum, elem) => sum + elem) / sum.length;
}

  exclude(reason) {
      delete this.subject;
      this.excluded = reason;
  }
}

    /*addMarks() {
        if (this.marks === undefined) {
            this.marks = Array.from(arguments);
        } else {
            (Array.from(arguments)).forEach(elem => this.marks.push(elem));
        }
    }*/
