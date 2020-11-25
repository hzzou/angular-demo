
export function Decorator(color){
  console.log(color);
  return (target) => {
    console.log(target);
    target.color = color;
  };
}

export function Debounce(time){
  console.log(time);
  return (target, name, descriptor) => {
    console.log(target);
    console.log(name);
    console.log(descriptor);
  };
}
