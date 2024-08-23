/*!
* Başlangıç Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Telif Hakkı 2013-2023 Start Bootstrap
* MIT Lisansı altında (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scriptler
//

window.addEventListener('DOMContentLoaded', event => {

    // Navbar küçültme fonksiyonu
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Navbar'ı küçült
    navbarShrink();

    // Sayfa kaydırıldığında navbar'ı küçült
    document.addEventListener('scroll', navbarShrink);

    // Ana nav elemanı üzerinde Bootstrap scrollspy'yi etkinleştir
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Toggler görünürken duyarlı navbar'ı daralt
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
