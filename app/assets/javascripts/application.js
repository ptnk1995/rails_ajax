// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require bootstrap
//= require_tree .
//= require data-confirm-modal

// $(document).ready(function(){
//   $('.destroy').on('click', function(){
//     if(confirm("Are you sure?")){
//       $.ajax({
//         url: '/products/' + this.parents('td').id,
//         type: 'DELETE',
//         success: function(data) {
//         }
//       });
//     }
//   });
// });

$(document).ready(function(){
  $('#submit_new_product').click(function(){
    var name = $('#name_product').val();
    var price = $('#price_product').val();
    $.ajax({
      url: '/products',
      type: 'POST',
      dataType: 'json',
      data: {
        product: {
          name: name,
          price: price
        }
      },
      success: function(response){
        id = response.id_product;
        html = $('tbody').html();
        html += '<tr data-id="'+id+'"><td>'+name+'</td><td>$'+price+'</td>'+
          '<td><a class="btn btn-default" data-remote="true" href="/products/'+id+
          '/edit">Edit</a></td><td><a class="btn btn-danger" data-remote="true" href="/products/'+id+
          '/delete">Delete</a></td><td><a class="btn btn-danger btn_destroy_ajax" href="">Delete Jquery Ajax</a></td></tr>';
        html = $('tbody').html(html);
      },
      error: function(response){
        alert("error");
      }
    })
  });
});
