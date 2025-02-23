// Decorators
function ClassDecorator(target: any) {
  console.log("Class decorator called");
  console.log(`Called for class: ${target.name}`);
}

function MethodDecorator(target: any, methodName: string, desc: PropertyDescriptor) {
  console.log("Method decorator called");
  return desc;
}

@ClassDecorator
class ABC {
  constructor() {
    console.log("This is a constructor");
  }

  @MethodDecorator
  test() {
    console.log("This is a test method");
  }
}

const abc = new ABC();
abc.test();