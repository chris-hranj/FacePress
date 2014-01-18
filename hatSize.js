/*Calculates a hat size based on circumference in centimeters.
 *
 * Returns an object with a fitted size and an easy fit size.*/
var calculateSize = function(circumference){

  var hatSizeObject = {};

  if(circumference <= 54){
    hatSizeObject.fitted = "6 3/4";
    hatSizeObject.easyFit= "Small";
  }else if(circumference <= 55){
    hatSizeObject.fitted = "6 7/8";
    hatSizeObject.easyFit= "Small";
  }else if(circumference <= 55.9){
    hatSizeObject.fitted = "7";
    hatSizeObject.easyFit= "Medium";
  }else if(circumference <= 56.8){
    hatSizeObject.fitted = "7 1/8";
    hatSizeObject.easyFit= "Medium";
  }else if(circumference <= 57.8){
    hatSizeObject.fitted = "7 1/4";
    hatSizeObject.easyFit= "Large";
  }else if(circumference <= 58.7){
    hatSizeObject.fitted = "7 3/8";
    hatSizeObject.easyFit= "Large";
  }else if(circumference <= 59.7){
    hatSizeObject.fitted = "7 1/2";
    hatSizeObject.easyFit= "XL";
  }else if(circumference <= 60.6){
    hatSizeObject.fitted = "7 5/8";
    hatSizeObject.easyFit= "XL";
  }else if(circumference <= 61.6){
    hatSizeObject.fitted = "7 3/4";
    hatSizeObject.easyFit= "XXL";
  }else if(circumference <= 62.5){
    hatSizeObject.fitted = "7 7/8";
    hatSizeObject.easyFit= "XXL";
  }else if(circumference <= 63.5){
    hatSizeObject.fitted = "8";
    hatSizeObject.easyFit= "XXL";
  }

  return hatSizeObject;

}
