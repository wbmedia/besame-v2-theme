window.addEventListener("scroll", function () {
  var header = document.getElementById("navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function hideAnnouncementBar() {
  var bar = (document.getElementById("hide-announcement-bar").style =
    "display: none");
  return bar;
}

function showClearSearch() {
  var show = document.getElementById("clear-search");
  var val = show.value;
  console.log(val);
  textLength = show.value.length;
  var hidden = (document.getElementById("close").style = "display: none");
  if (show.value != "" && textLength > 0) {
    var close = (document.getElementById("close").style = "display: block");
    return close;
  } else {
    return hidden;
  }
}

function openMenuShop() {
  document.getElementById("shopMenu").style = "display: block";
  const blur = document.getElementById("PageContainer")
  blur.classList.toggle('active')
}

function closeMenuShop() {
  document.getElementById("shopMenu").style = "display: none";
  const removeBlur = document.getElementById("PageContainer")
  removeBlur.classList.remove('active');
}

function openDiscoveryMenu() {
  document.getElementById("discoverMenu").style = "display: block";
  const blur = document.getElementById("PageContainer")
  blur.classList.toggle('active')
}

function closeDiscoveryMenu() {
  document.getElementById("discoverMenu").style = "display: none";
  const removeBlur = document.getElementById("PageContainer")
  removeBlur.classList.remove('active');
}

("use strict");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var NewsletterPopupSection = function () {
  function NewsletterPopupSection(element) {
    _classCallCheck(this, NewsletterPopupSection);

    this.element = element;
    this.delegateElement = new domDelegate.Delegate(this.element);
    this.options = JSON.parse(element.getAttribute('data-section-settings'));

    // If the popup has been already displayed, we do not display it
    try {
      if (window.location.hash === '#newsletter-popup' && window.theme.template !== null) {
        this._openPopup();
      } else if (!this.options['showOnlyOnce'] || this.options['showOnlyOnce'] && localStorage.getItem('themePopup') === null) {
        setTimeout(this._openPopup.bind(this), this.options['apparitionDelay'] * 1000);
      }
    } catch (error) {
      // Some browsers (especially in private mode) throw an exception when trying to access local storage, so we protect ourselves here
    }

    this._attachListeners();
  }

  _createClass(NewsletterPopupSection, [{
    key: 'onUnload',
    value: function onUnload() {
      this.delegateElement.off();
    }
  }, {
    key: 'onSelect',
    value: function onSelect() {
      this._openPopup();
    }
  }, {
    key: 'onDeselect',
    value: function onDeselect() {
      this._closePopup();
    }
  }, {
    key: '_attachListeners',
    value: function _attachListeners() {
      this.delegateElement.on('click', '[data-action="close-popup"]', this._closePopup.bind(this));
    }
  }, {
    key: '_openPopup',
    value: function _openPopup() {
      this.element.setAttribute('aria-hidden', 'false');
      localStorage.setItem('themePopup', 'true');
    }
  }, {
    key: '_closePopup',
    value: function _closePopup() {
      this.element.setAttribute('aria-hidden', 'true');
    }
  }]);

  return NewsletterPopupSection;
}();
