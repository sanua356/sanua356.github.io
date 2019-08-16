jQuery('document').ready(function() {
	jQuery('footer').on('click', function(){
		jQuery('body').append('<a class="errors" href="chroferr.php">Отладочная ссылка</a>');
	}); 
});