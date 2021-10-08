//position int and function
function Shape(){
    this.Y = 0
    this.X = 0
}

Shape.prototype.move = (x,y) => {
    this.X = x
    this.Y = y
    return x
}

//rectangle(int,function)
function Rectangle(){
    this.width = 0
    this.height = 0
}

Rectangle.prototype = new Shape()
Rectangle.prototype.__proto__ = Shape.prototype

Rectangle.prototype.area = function() {
    return this.width*this.height
}

//circle(int,function)
function Circle() {
    this.radius = 0
}

Circle.prototype = new Shape()
Circle.prototype.__proto__ = Shape.prototype

Circle.prototype.area = function(){
    return 3.14*this.radius*this.radius
}

exports.createReactangle = () => {
    return new Rectangle()
}

exports.createCircle = () => {
    return new Circle()
}

//test rectangle
// var r = new Rectangle()
// r.width = 2
// r.height = 4
// console.log(r.area())

// //test circle
// var c = new Circle()
// c.radius = 2
// console.log(c.area())