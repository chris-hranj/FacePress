/*Calculates a hat size based on circumference in centimeters.
 *
 * Returns an object with a fitted size and an easy fit size.*/
var calculateSize = function(circumference){

  var hatSizeObject = {};

  if(circumference <= 47){
    hatSizeObject.fitted = null;
    hatSizeObject.easyFit= null; // Too small to be a size
  }else if(circumference <= 49){
    hatSizeObject.fitted = "6 5/8";
    hatSizeObject.easyFit= "X-Small";
  }else if(circumference <= 51){
    hatSizeObject.fitted = "6 3/4";
    hatSizeObject.easyFit= "Small";
  }else if(circumference <= 53){
    hatSizeObject.fitted = "6 7/8";
    hatSizeObject.easyFit= "Small";
  }else if(circumference <= 55){
    hatSizeObject.fitted = "7";
    hatSizeObject.easyFit= "Medium";
  }else if(circumference <= 57){
    hatSizeObject.fitted = "7 1/8";
    hatSizeObject.easyFit= "Medium";
  }else if(circumference <= 59){
    hatSizeObject.fitted = "7 1/4";
    hatSizeObject.easyFit= "Large";
  }else if(circumference <= 61){
    hatSizeObject.fitted = "7 3/8";
    hatSizeObject.easyFit= "Large";
  }else if(circumference <= 63){
    hatSizeObject.fitted = "7 1/2";
    hatSizeObject.easyFit= "X-Large";
  }else if(circumference <= 65){
    hatSizeObject.fitted = "7 5/8";
    hatSizeObject.easyFit= "X-Large";
  }else if(circumference <= 67){
    hatSizeObject.fitted = "7 3/4";
    hatSizeObject.easyFit= "XX-Large";
  }else if(circumference <= 69){
    hatSizeObject.fitted = "7 7/8";
    hatSizeObject.easyFit= "XX-Large";
  }else if(circumference <= 71){
    hatSizeObject.fitted = "8";
    hatSizeObject.easyFit= "XXX-Large";
  }else if(circumference <= 73){
    hatSizeObject.fitted = "8 1/8";
    hatSizeObject.easyFit= "XXX-Large";
  }else {
    hatSizeObject.fitted = null;
    hatSizeObject.easyFit = null; //too big to be a size
  }

  return hatSizeObject;

}
