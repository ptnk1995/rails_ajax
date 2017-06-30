$(document).ready(function(){
  // $('.btn_destroy_ajax').click(function(event){
  //   // html = '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h3>Delete Product</h3></div><div class="modal-body"><ul class="errors"></ul>Are you sure you wish to delete <b>fds2</b>?</div><div class="modal-footer"><a class="btn btn-danger" data-remote="true" rel="nofollow" data-method="delete" href="/products/46">Yes, Delete This Product</a><a class="btn btn-default" data-dismiss="modal" href="#">No, Please Don\'t</a></div></div></div>';

  //   // debugger
  //   // if(confirm("Are you sure?")){
  //   //   var id = $(this).parents('tr').data('id');
  //   //   $.ajax({
  //   //     url: '/products/' + id,
  //   //     type: 'DELETE',
  //   //     success: function(data) {
  //   //     }
  //   //   });
  //   // }

  //   event.preventDefault();
  //   dataConfirmModal.confirm({
  //     title: 'Are you sure?',
  //     text: 'This will show a popup if canceled or display funny text if confirmed',
  //     commit: 'Yes do it',
  //     cancel: 'Not really',

  //     onConfirm: function() {
  //       debugger
  //       var id = $(this).parents('tr').data('id');
  //       $.ajax({
  //         url: '/products/' + id,
  //         type: 'DELETE',
  //         success: function(data) {
  //         }
  //       });
  //     },
  //     onCancel: function() {
  //       alert('OK, canceling!');
  //     }
  //   });
  // });

  function deleteProduct(id,event) {
    event.preventDefault();
    dataConfirmModal.confirm({
      title: 'Are you sure?',
      text: 'This will show a popup if canceled or display funny text if confirmed',
      commit: 'Yes do it',
      cancel: 'Not really',

      onConfirm: function() {
        $.ajax({
          url: '/products/' + id,
          type: 'DELETE',
          success: function(data) {
          }
        });
      },
      onCancel: function() {

      }
    });
  }


  jQuery('.btn_destroy_ajax').on('click', function(event) {
    var id = $(this).parents('tr').data('id');
    deleteProduct(id,event);
  });

});


