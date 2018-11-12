    $(function(){

  function buildHTML(message){
    if (message.image_url || message.content){
  var image = message.image_url ? `<img src="${message.image_url}" class='lower-message__image'>` : "";
  var html = `<div class="message">
              <div class="upper-message">
                <div class="upper-message__user-name">
                  ${message.user_name}
                </div>
                <div class="upper-message__date">
                  ${message.created_at}
                </div>
              <div class="lower-message">
                <p class="lower-message__content">
                   ${message.content}
                </p>
              </div>
              ${image}
              </div>`;
  return html;
  }else{
    alert("値が入力されていません");
  }
  }

  $('#item_form').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages.js-messages').append(html);
      $('#item_form')[0].reset();
      // $(function(){
      //   $(".messages.js-messages").animate({scrollTop: $(".messages.js-messages")[0].scrollHeight}, 'slow');
      // })
    })
    .fail(function(){
      alert('error');
    })
    .always(function(){
      $('.form__submit').prop("disabled", false);
    })
  });
});

