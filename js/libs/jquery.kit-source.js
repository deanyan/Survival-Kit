/*global jQuery */
/*!	
* Lettering.JS 0.6.1
*
* Crawl the elements page and show example source code
*/
(function($){
	$('article.element .content').each(function(){
	  $(this).after('<div class="show-source"><div class="show-hide">show source</div><textarea class="show-source-textarea">'+ $(this).html() +'</textarea></div>');
    $(this).find('+ .show-source textarea.show-source-textarea').height($(this).height()).hide();
    $(this).find('+ .show-source .show-hide').toggle(function(){
      $(this).html('hide source');
      $(this).find('+ textarea.show-source-textarea').slideDown();
    }, function(){
      $(this).html('show source');
      $(this).find('+ textarea.show-source-textarea').slideUp();
    });
	});
})(jQuery);