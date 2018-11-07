$(function() {
  $('#user-search-field').on("keyup", function() {
    var input = $('#user-search-field').val();
    console.log(this)
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
  });
});
