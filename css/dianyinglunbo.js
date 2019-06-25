var obefore = document.getElementById('before1')
var onext = document.getElementById('next1')
var beforemovie = document.getElementById('moviepicbox')
var nextmovie = document.getElementById('moviepicbox1')

		obefore.onclick = function(){
			beforemovie.style.display = 'block';
			nextmovie.style.display = 'none';
		}
		onext.onclick = function(){
			nextmovie.style.display = 'block';
			beforemovie.style.display = 'none';
		}
		
