var link = document.querySelector('.login');
var popup = document.querySelector('.pop-up-login');
var close = document.querySelector('.pop-up-login__close');
var login = popup.querySelector('.pop-up-login__field-login');
var password = popup.querySelector('.pop-up-login__field-password');
var form = popup.querySelector('form');
var temp1 = localStorage.getItem('login');

link.addEventListener('click', function(event) {
	event.preventDefault(); //запрещает исполнение дефолтного, предопределённого в браузере действия
	popup.classList.toggle('hidden');
	login.focus();
	if (temp1) {
		login.value = temp1;
		password.focus();
	}
} );

close.addEventListener('click', function(event) {
	event.preventDefault();
	popup.classList.add('hidden');
});

form.addEventListener('submit', function(event) {
	if (!(login.value && password.value)) {
		event.preventDefault();
		popup.classList.add('error');
	}
	else {
		localStorage.setItem('login', login.value);
		popup.classList.remove('error');
	}
} );

window.addEventListener('keydown', function() {
	if (event.keyCode == 27) {
		if (!( popup.classList.contains('hidden') ) ) {
			popup.classList.add('hidden');
		}
	}
});