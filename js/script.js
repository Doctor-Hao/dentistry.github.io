
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});;
window.addEventListener("DOMContentLoaded", function() {
	[].forEach.call( document.querySelectorAll('.tel'), function(input) {
	var keyCode;
	function mask(event) {
		 event.keyCode && (keyCode = event.keyCode);
		 var pos = this.selectionStart;
		 if (pos < 3) event.preventDefault();
		 var matrix = "+7 (___) ___-__-__"
			  i = 0,
			  def = matrix.replace(/\D/g, ""),
			  val = this.value.replace(/\D/g, ""),
			  new_value = matrix.replace(/[_\d]/g, function(a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a
			  });
		 i = new_value.indexOf("_");
		 if (i != -1) {
			  i < 5 && (i = 3);
			  new_value = new_value.slice(0, i)
		 }
		 var reg = matrix.substr(0, this.value.length).replace(/_+/g,
			  function(a) {
					return "\\d{1," + a.length + "}"
			  }).replace(/[+()]/g, "\\$&");
		 reg = new RegExp("^" + reg + "$");
		 if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
		 if (event.type == "blur" && this.value.length < 5)  this.value = ""
	}

	input.addEventListener("input", mask, false);
	input.addEventListener("focus", mask, false);
	input.addEventListener("blur", mask, false);
	input.addEventListener("keydown", mask, false)

 });

});;

//<Burger>===========================================================================
let burger = document.querySelector('.icon-menu');
burger.addEventListener("click", function (e) {
	let burger_icon = document.querySelector('.icon-menu');
	let menu = document.querySelector('.info-content');

	burger_icon.classList.toggle('_active');
	menu.classList.toggle('_active');
});
//</Burger>===========================================================================

//<Popup_popularity>===========================================================================
let register = document.querySelector('.popularity__letf');
register.addEventListener("click", function (e) {
	let popap = document.querySelector('.popularity__popup');
	let lock = document.querySelector('body');

	lock.classList.toggle('_bg');
	//открытие попапа
	popap.classList.toggle('_active');

	//закрытие на темную область
	popap.addEventListener("click", function (e) {
		if (!e.target.closest('.content-popup__youtube')) {
			popap.classList.remove('_active')
			lock.classList.remove('_bg');
		}
	});

});

//Крестик
let popupClose = document.querySelector('.close');
popupClose.addEventListener("click", function (e) {
	let popap = document.querySelector('.popularity__popup');
	let lock = document.querySelector('body');

	popap.classList.remove('_active')
	lock.classList.remove('_bg');
});

//</Popup_popularity>===========================================================================

//<Popup_smile>===========================================================================
let registerSmile = document.querySelector('.smile__images');
registerSmile.addEventListener("click", function (e) {
	let popupSmile = document.querySelector('.popup__smile');
	let lockSmile = document.querySelector('body');

	lockSmile.classList.toggle('_bg');
	//открытие попапа
	popupSmile.classList.toggle('_active');

	//закрытие на темную область
	popupSmile.addEventListener("click", function (e) {
		if (!e.target.closest('.slider')) {
			popupSmile.classList.remove('_active')
			lockSmile.classList.remove('_bg');
		}
	});

});

//Крестик
let popupCloseSmile = document.querySelector('.close-smile');
popupCloseSmile.addEventListener("click", function (e) {
	let popupSmile = document.querySelector('.popup__smile');
	let lockSmile = document.querySelector('body');

	popupSmile.classList.remove('_active')
	lockSmile.classList.remove('_bg');
});
//</Popup_smile>===========================================================================
//<Swiper>===========================================================================
document.addEventListener('DOMContentLoaded', function () {
	// инициализация слайдера
	var slider = new SimpleAdaptiveSlider('.slider', {
		autoplay: false,
		interval: 5000,
		swipe: true,
	});
});
//</Swiper>===========================================================================


//<Popup_clinic>===========================================================================
let registerClinic = document.querySelector('.clinic__grid');
registerClinic.addEventListener("click", function (e) {
	let popupClinic = document.querySelector('.popup__clinic');
	let lockClinic = document.querySelector('body');

	lockClinic.classList.toggle('_bg');
	//открытие попапа
	popupClinic.classList.toggle('_active');

	//закрытие на темную область
	popupClinic.addEventListener("click", function (e) {
		if (!e.target.closest('.slider')) {
			popupClinic.classList.remove('_active')
			lockClinic.classList.remove('_bg');
		}
	});

});

//Крестик
let popupCloseClinic = document.querySelector('.close-clinic');
popupCloseClinic.addEventListener("click", function (e) {
	let popupClinic = document.querySelector('.popup__clinic');
	let lockClinic = document.querySelector('body');

	popupClinic.classList.remove('_active')
	lockClinic.classList.remove('_bg');
});
//</Popup_clinic>===========================================================================

//<Swiper-clinic>===========================================================================
document.addEventListener('DOMContentLoaded', function () {
	// инициализация слайдера
	var slider = new SimpleAdaptiveSlider('.slider-clinic', {
		autoplay: false,
		interval: 5000,
		swipe: true,
	});
});
//</Swiper-clinic>===========================================================================


//<Popup_main>===========================================================================
let registerPopup = document.querySelector('.popup__image');
registerPopup.addEventListener("click", function (e) {
	let popupPopup = document.querySelector('.popup__main');

	//открытие попапа
	popupPopup.classList.toggle('_active');

	//закрытие на темную область
	popupPopup.addEventListener("click", function (e) {
		if (!e.target.closest('.content-popup-main__callback')) {
			popupPopup.classList.remove('_active')
		}
	});

});

let registerPopupCall = document.querySelector('.info-content__order');
registerPopupCall.addEventListener("click", function (e) {
	let popupPopup = document.querySelector('.popup__main');

	//открытие попапа
	popupPopup.classList.toggle('_active');

	//закрытие на темную область
	popupPopup.addEventListener("click", function (e) {
		if (!e.target.closest('.content-popup-main__callback')) {
			popupPopup.classList.remove('_active')
		}
	});

});


//Крестик
let popupClosePopup = document.querySelector('.close-popup');
popupClosePopup.addEventListener("click", function (e) {
	let popupPopup = document.querySelector('.popup__main');

	popupPopup.classList.remove('_active')
});
//</Popup_main>===========================================================================