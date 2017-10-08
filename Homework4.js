//Reverse triangle
const triangleStars = function(x){
  if(x===0) return "";
  const s = function( token , arg){
  if(arg <= 0) return "";
  return token + s(token, --arg);
  };
  const conc = function (x, arg1, arg2) {
    if(x<=0)return '';
    console.log(s(" ", arg1) + s("*", arg2));
    conc(--x, ++arg1, arg2-2);
  };
  conc(x, 0, 2*x-1);
};
//Example
triangleStars(10);

//Checkerboard
const checkerboard = function (x) {
  const evenLines = function (x){
    if(x<=0) return "";
     return  " " + "*"+ evenLines(--x);
     
  };
const oddLines = function (x){
    if(x<=0) return "";
     return  "*" + " "+ oddLines(--x);
  };
const res = function (x, y) {
    if(x<=0) return "";
    if(y%2 === 0){
    console.log (oddLines(y))+console.log(evenLines(y));
    res(x-2, y);}
    else {
      if(x<=1) return console.log (oddLines(y));
      console.log (oddLines(y))+console.log(evenLines(y));
       res(x-2, y);
        
  }
   
    };
  return res(x,x);
};
//Example
checkerboard(7);

//Power
const pow = function (base, n) {
  if(n<1) return 'Enter a postive power';
  const main = function (base,n){
  if(n===0) return 1;
  return base * main(base, --n);
  };
  console.log(main(base,n));
};
//Example
pow(3,2);

//Reverse
const reverse = function (str) {
  const main = function (str, n){
    if(n===-1) return "";
   return  str[n]+ main(str, --n);
  }
return console.log(main(str, str.length-1));
};
//Example
reverse("olleh");

//Sailboat
const boat = function (x){
  if(x < 6) return " Enter a greater number";
  const s = function (token, arg) {
    if (arg <= 0) return "";
    return token + s(token, --arg);
  }; 
  const sail = function (x){
    const conc= function (x, spaces, aster) {
      if(aster >= 8*x) return console.log(s(' ', spaces) + "O");
      if(x<=0) return '';
      console.log(s(' ', spaces) + 'O' + s("**", aster));
      return conc(--x, spaces, ++aster);
    };
    return conc(x*0.5, x*0.8,0);
  };
  sail(x);
  
  const hull = function(x){
    const conc = function (x, spaces, aster) {
    if(x <= 0)return '';
    console.log(s(' ', spaces) + s('*', aster));
    conc(--x, ++spaces, aster-2);
  };
  conc(x*0.3, 0, 2*x-1);
};
hull(x);
};
//example
boat(20);
