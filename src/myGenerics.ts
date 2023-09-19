const workingDay: Array<string> = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const workingHours: Array<number> = [8, 9, 10, 10];

function identityOne(val: string | number): string | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

// the problem here is that we dont't have control on the output of the function
// to implement a function which will return the same type as we pass arguments in that function,
// function identityTwo(val: any): any {
//   return val;
// } 
// this is  not a good way to solve our problem
// Generics in typescript helps us to bind the type with the function

function identityThree<Type>(val: Type): Type {
  return val; // this will return the same type which will be passed in the function as arguments
}
identityThree("pass string as argument");
identityThree(2);

// we can also use anything instead of Type;
function identityFour<T>(val: T): T {
    return val;//this will work fine but its bad practice
}

interface flat {
  name?: string;
  rooms: number;
  kithen: boolean;
}
// 
identityFour<flat>({ rooms: 1, kithen: true });


function getSearchProduct<T>(val: Array<T>): T {
    return val[4] ;  
}

const getSearchMoreProducts = <T,>(val: Array<T>): T => {
    return val.slice(-3)[-1];   
}