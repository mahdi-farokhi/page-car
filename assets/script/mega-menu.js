$(document).ready(async function () {
  var megaMenu = [];
  await $.ajax({
    url: "mega-menu.json",
    success: function (result) {
      megaMenu = result;
    },
  });
  var sideTemplate = ``;
  megaMenu.forEach((item, index) => {
    sideTemplate += `<li class="mega__menu__side__item" id="${index}">
        <a href="${item.link}" class="mega__menu__side__link" >${item.name}</a>
    </li>`;
  });
  $(".mega__menu__side").append(sideTemplate);
    $(".mega__menu__btn").hover(function () {
      $(".mega__menu").fadeIn();
    });
    $(".nav").mouseleave(function () {
      $(".mega__menu").fadeOut();
    });
  $(".mega__menu__side__item").mouseenter(function () {
    var hoverItem = $(this).attr("id");
    var level1 = megaMenu[hoverItem];
    var itemsTemplate = ``;
    var level2template = ``;
    level1.children.forEach((item, index) => {
      level2template = ``;
      item.children.forEach((level2Child) => {
        level2template += `<li class="mega__menu__items__child__item" >
            <a href="${level2Child.link}" class="mega__menu__items__child__link" >${level2Child.name}</a>
        </li>`;
      });
      itemsTemplate += `<div class="mega__menu__items__container" id="${index}">
      <li class="mega__menu__items__item">
            <a href="${item.link}" class="mega__menu__items__link" >${item.name}</a>
      </li>
            ${level2template}
        </div>`;
    });
    $(".mega__menu__items").empty();
    $(".mega__menu__items").append(itemsTemplate);
  });
});
