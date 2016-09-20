var string = {
  name: 'string',
  pluralize: function(word) {
    if(word.substring(word.length-1)=='y'){
       var newword = word.replace("y","ies");
      console.log(newword);
       }
    else{
      var newword = word + "s";
      console.log(newword);
    }
  
  }
};
  