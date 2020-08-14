import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initNavItems();
    this.initMainMenu();
  }

  initNavItems(): void {
    const $navLinks = $('.nav-item > .nav-link');
    $navLinks.each((index) => {
      const $currentNavLink = $navLinks.eq(index);
      const hrefValue = $currentNavLink.attr('href');
      if (this.router.url.includes(hrefValue)) {
        $('.nav').find('.active').removeClass('active');
        $(`.nav-link[href="${hrefValue}"]`).parent().addClass('active');
      }
    });
  }
  initMainMenu(): void {
    // Cache selectors
    let lastId;
    const topMenu = $('#main-menu');
    const topMenuHeight = topMenu.outerHeight() + 15;
    // All list items
    const menuItems = topMenu.find('a');
    // Anchors corresponding to menu items
    const scrollItems = menuItems.map(function(): JQuery<HTMLElement> {
      const item = $($(this).attr('href'));
      if (item.length) {
        return item;
      }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function(e): void {
      const href = $(this).attr('href');
      const offsetTop =
        href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1;
      $('html, body').stop().animate(
        {
          scrollTop: offsetTop,
        },
        300
      );
      e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function(): void {
      // Get container scroll position
      const fromTop = $(this).scrollTop() + topMenuHeight;

      // Get id of current scroll item
      const cur = scrollItems.map(function(): JQuery<HTMLElement> {
        if ($(this).offset().top < fromTop) {
          return this;
        }
      });
      // Get the id of the current element
      const curMap = cur[cur.length - 1];
      const id = curMap && curMap.length ? curMap[0].id : '';

      if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
          .parent()
          .removeClass('active')
          .end()
          .filter('[href=\'#' + id + '\']')
          .parent()
          .addClass('active');
      }
    });
  }
}
