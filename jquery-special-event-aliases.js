/**
* jQuery Special Event Aliases
* @license Copyright 2013 Enideo. Released under dual MIT and GPL licenses.
*/


$.specialEventAliases = function(){

  for(var specialEventName in $.event.special ){

    if( !(specialEventName in $.fn) ){

      $.fn[specialEventName] = function(callback) {
        if(callback){
          return this.bind(specialEventName, callback);
        }else{
          return this.trigger(specialEventName);
        }
      };

    }

  }

};
