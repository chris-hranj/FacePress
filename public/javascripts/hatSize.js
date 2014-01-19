/*Calculates a hat size based on circumference in centimeters.
 *
 * Returns an object with a fitted size and an easy fit size.*/
var calculateSize = function(circumference){

  var hatSizeObject = {};

  if(circumference <= 20){
    hatSizeObject.fitted = null;
    hatSizeObject.easyFit= null; // Too small to be a size
    hatSizeObject.link = null;
  }else if(circumference <= 22){
    hatSizeObject.fitted = "6 5/8";
    hatSizeObject.easyFit= "X-Small";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_658";
  }else if(circumference <= 24){
    hatSizeObject.fitted = "6 3/4";
    hatSizeObject.easyFit= "Small";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_634";
  }else if(circumference <= 28){
    hatSizeObject.fitted = "6 7/8";
    hatSizeObject.easyFit= "Small";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_678";
  }else if(circumference <= 32){
    hatSizeObject.fitted = "7";
    hatSizeObject.easyFit= "Medium";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_7";
  }else if(circumference <= 36){
    hatSizeObject.fitted = "7 1/8";
    hatSizeObject.easyFit= "Medium";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_718";
  }else if(circumference <= 40){
    hatSizeObject.fitted = "7 1/4";
    hatSizeObject.easyFit= "Large";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_714";
  }else if(circumference <= 44){
    hatSizeObject.fitted = "7 3/8";
    hatSizeObject.easyFit= "Large";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_738";
  }else if(circumference <= 48){
    hatSizeObject.fitted = "7 1/2";
    hatSizeObject.easyFit= "X-Large";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_712";
  }else if(circumference <= 52){
    hatSizeObject.fitted = "7 5/8";
    hatSizeObject.easyFit= "X-Large";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_758";
  }else if(circumference <= 60){
    hatSizeObject.fitted = "7 3/4";
    hatSizeObject.easyFit= "XX-Large";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_734";
  }else if(circumference <= 64){
    hatSizeObject.fitted = "7 7/8";
    hatSizeObject.easyFit= "XX-Large";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_778";
  }else if(circumference <= 68){
    hatSizeObject.fitted = "8";
    hatSizeObject.easyFit= "XXX-Large";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_8";
  }else if(circumference <= 72){
    hatSizeObject.fitted = "8 1/8";
    hatSizeObject.easyFit= "XXX-Large";
    hatSizeObject.link = "http://www.lids.com/search/size/Hats/Department_fitted/Size_818";
  }else {
    hatSizeObject.fitted = null;
    hatSizeObject.easyFit = null; //too big to be a size
    hatSizeObject.fitted = null;
  }

  return hatSizeObject;

}
