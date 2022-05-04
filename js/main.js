/* What happens when somebody clicks the "Features" button */

$(`.feat-btn`).click(function () {
    $(`.features-content`).slideToggle();
    $(`.feat-img`).toggleClass(`active-img`);
    $(`.feat-btn`).toggleClass(`active`);
});

/* What happens when somebody clicks the "Company" button */

$(`.comp-btn`).click(function () {
    $(`.company-content`).slideToggle();
    $(`.comp-img`).toggleClass(`active-img`);
    $(`.comp-btn`).toggleClass(`active`);
});

/* When clicking out of the "Features" and "Company" buttons respectively, 
everything returns at its initial state */

$(document).on(`click`, function (e) {
    if (!$(`.features`).is(e.target) && !$(`.features`).has(e.target).length &&
        !$(`.company`).is(e.target) && !$(`.company`).has(e.target).length) {
        $(`.features-content`).slideUp();
        $(`.company-content`).slideUp();
        $(`.feat-img`).removeClass(`active-img`);
        $(`.comp-img`).removeClass(`active-img`);
        $(`.feat-btn`).removeClass(`active`);
        $(`.comp-btn`).removeClass(`active`);
    }
});

/* The side navigation menu opens up when clicking at the menu button */

$(`.menu-btn`).click(function () {
    $(`body`).toggleClass(`menu-open`);
    $(`.menu`).addClass(`activated-menu`).toggleClass(`active-menu`);
    $(`.menu-img`).toggleClass(`active-menu-img`);
    $(`.menu-img`).attr(`src`, function (_, attr) {
        return attr == `./images/icon-close-menu.svg` ?
            `./images/icon-menu.svg` : `./images/icon-close-menu.svg`
    });
});

/* When clicking out of the side navigation menu, 
everything returns at its initial state */

$(document).on(`click`, function (e) {
    if (!$(`.menu`).is(e.target) && !$(`.menu`).has(e.target).length &&
        !$(`.menu-btn`).is(e.target) && !$(`.menu-btn`).has(e.target).length) {
        $(`.menu`).removeClass(`active-menu`);
        $(`.menu-img`).removeClass(`active-menu-img`);
        $(`.menu-img`).attr(`src`, `./images/icon-menu.svg`);
        $(`body`).removeClass(`menu-open`);
    }
});

/* On window resizing */

$(window).on(`resize`, function () {

    /* In order to keep the shadow effect over the rest of the body section when side nav-menu is open, 
    during window resizing*/
    let activeMenu = $(`.active-menu`);
    if (activeMenu) {
        if (Modernizr.mq(`(max-width:870px)`)) {
            $(`body`).addClass(`menu-open`);
        }
    }
    // This line of code prevents the side nav-menu transformation effect to be visible during window rezing
    if (Modernizr.mq(`(max-width:870px)`)) $(`.menu`).removeClass(`activated-menu`);

    // This line of code prevents the shadow efect of the side nav-menu to take place when resizng to over 870px
    if (Modernizr.mq(`(min-width:870px)`)) $(`body`).removeClass(`menu-open`);

    // Change of image source in speciic widths
    if (Modernizr.mq(`(max-width:1110px)`)) {
        $(`.main-image`).attr(`src`, `./images/image-hero-mobile.png`);
    } else if (Modernizr.mq(`(min-width:1110px)`)) {
        $(`.main-image`).attr(`src`, `./images/image-hero-desktop.png`);
    }

    // Some changes in the HTML in specific widths
    if (Modernizr.mq(`(max-width:565px)`)) {
        $(`.header`).html(`Make remote work`);
        $(`.paragraph`).html(`Get your team in sync, no matter your location.
        Streamline processes, create team rituals, and
        watch productivity soar.`);
    } else if (Modernizr.mq(`(min-width:565px)`)) {
        $(`.header`).html(`Make<br>remote&nbsp;work`);
        $(`.paragraph`).html(`Get your team in sync, no matter your location.<br>
        Streamline processes, create team rituals, and<br>
        watch productivity soar.`);
    }
});


