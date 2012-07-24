$(function() {
  $('input.cb').live('click', function() {
    var lbl = $('label[for=' + this.id + ']');

    // Remove hover style in all cases.
    $(lbl).removeClass('cb_off');

    if($(lbl).hasClass('cb_on')) {
      $(lbl).removeClass('cb_on');
      $(lbl).addClass('cb_hover');
    }
    else {
      $(lbl).removeClass('cb_hover');
      $(lbl).addClass('cb_on');
    }
  });

  $('#button_ListChecked').on('click', function() {
    alert('Items checked: ' + $('input.cb:checked').length);
  });

  $('label img').hover(
    function() {
      if(!$(this).parent().hasClass('cb_on')) {
        $(this).parent().toggleClass('cb_hover')
        $(this).parent().toggleClass('cb_off')
      }
    }, 
    function() {
      if(!$(this).parent().hasClass('cb_on')) {
        $(this).parent().toggleClass('cb_hover')
        $(this).parent().toggleClass('cb_off')
      }
    }
  );


  $('#button_ListChecked').hover(
    function() {
      $(this).toggleClass('button_out')
      $(this).toggleClass('button_over')
    }, 
    function() {
      $(this).toggleClass('button_out')
      $(this).toggleClass('button_over')
    }
  );

});