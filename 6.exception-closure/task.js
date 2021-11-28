function parseCount(something) {
  let num = Number.parseInt(something, 10);
  if (Number.isNaN(num)) {
    throw new Error ("Невалидное значение");
  } else {
    return num;
  }
}

function validateCount(some) {
  try {
    return parseCount(some);
  }
  catch(error) {
    return error;
  }
}

class Triangle {
    constructor(a, b, c) {
        if (a >= b + c) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        if (b >= a + c) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.b = b;
        if (c >= a + b) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() * 0.5;
        return +((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  }
  catch(Error) {
    return {
      getArea: () => 'Ошибка! Треугольник не существует',
      getPerimeter: () => 'Ошибка! Треугольник не существует'
    };
  }
}
