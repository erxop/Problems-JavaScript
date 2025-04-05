function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = {}
    this.draw = function() {
        console.log('draw');
    };
}
const circle = new Circle(10);