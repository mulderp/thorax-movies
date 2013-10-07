define(['handlebarsCore'], function ( Handlebars ) {
  function selectHelper( context, val ) {
    console.log(context);
    console.log(val);
    return context ? "selected" : "";
  }
  Handlebars.registerHelper( 'select', selectHelper );
  return Handlebars;
});
