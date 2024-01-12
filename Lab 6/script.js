// Part 1
class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        console.log(this.sides * this.sideLength);
        return this.sides * this.sideLength;
    }
}

const square1 = new Shape("square", 4, 5);
square1.calcPerimeter();

const triangle1 = new Shape("triangle", 3, 3);
triangle1.calcPerimeter();


// Part 2
class Square extends Shape {
    constructor(sideLength) {
        super("square", 4, sideLength)
    }
    calcArea() {
        return 4 * this.sideLength
    }
}

const square2 = new Square(50);
console.log(square2.calcArea()); // prints 200 


// Part 3
class Triple {
    static customName = "Tripler";
    static description = "I triple any number you provide";
    static calculate(n = 1) {
        return n * 3
    }
}

class SquaredTriple extends Triple {
    static longDescription;
    static description = "I square the triple of any number you provide";
    static calculate(n) {
        return super.calculate(n) ** 2;
    }
}



console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName);

