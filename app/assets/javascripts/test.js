$(document).ready(function(){
  $('.btn_destroy_ajax').click(function(){
    if(confirm("Are you sure?")){
      var id = $(this).parents('tr').data('id');
      $.ajax({
        url: '/products/' + id,
        type: 'DELETE',
        success: function(data) {
        }
      });
    }
  });

});
