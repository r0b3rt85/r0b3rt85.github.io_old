$( ".logo" ).hover(
  function() {
    $( ".my-logo-span" ).addClass( "animated bounce infinite" );
  }, function() {
    $( ".my-logo-span" ).removeClass( "animated bounce infinite" );
  }
);
