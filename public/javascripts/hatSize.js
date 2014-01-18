/*Calculates a hat size based on circumference in centimeters.
 *
 * Returns an object with a fitted size and an easy fit size.*/
var calculateSize = function(circumference){

  var hatSizeObject = {};

  if(circumference <= 50){
    hatSizeObject.fitted = null;
    hatSizeObject.easyFit= null; // Too small to be a size
  }else if(circumference <= 52){
    hatSizeObject.fitted = "6 7/8";
    hatSizeObject.easyFit= "Small";
  }else if(circumference <= 54){
    hatSizeObject.fitted = "7";
    hatSizeObject.easyFit= "Medium";
  }else if(circumference <= 56){
    hatSizeObject.fitted = "7 1/8";
    hatSizeObject.easyFit= "Medium";
  }else if(circumference <= 58){
    hatSizeObject.fitted = "7 1/4";
    hatSizeObject.easyFit= "Large";
  }else if(circumference <= 60){
    hatSizeObject.fitted = "7 3/8";
    hatSizeObject.easyFit= "Large";
  }else if(circumference <= 62){
    hatSizeObject.fitted = "7 1/2";
    hatSizeObject.easyFit= "XL";
  }else if(circumference <= 64){
    hatSizeObject.fitted = "7 5/8";
    hatSizeObject.easyFit= "XL";
  }else if(circumference <= 66){
    hatSizeObject.fitted = "7 3/4";
    hatSizeObject.easyFit= "XXL";
  }else if(circumference <= 68){
    hatSizeObject.fitted = "7 7/8";
    hatSizeObject.easyFit= "XXL";
  }else if(circumference <= 70){
    hatSizeObject.fitted = "8";
    hatSizeObject.easyFit= "XXL";
  }else if(circumference > 70){
    hatSizeObject.fitted = "8";
    hatSizeObject.easyFit= "Giant head";
  }else {
    hatSizeObject.fitted = null;
    hatSizeObject.easyFit = null; //too big to be a size
  }

  return hatSizeObject;

}
