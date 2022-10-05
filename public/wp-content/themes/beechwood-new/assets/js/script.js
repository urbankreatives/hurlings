jQuery(document).ready(function ($) {
    consoleMessage: {
        console.log('%cCreated by %cTWK%cwww.thewebkitchen.co.uk', 'background: #13212E; color: #FFFFFF; padding: 5px 0px 5px 10px; margin: 25px 0px;', 'background: #13212E; color: #05E5C8; padding: 5px 10px 5px 0px; font-weight: bold;', 'background: #FFFFFF; padding: 5px 10px;');
    }
	slider: {
		$('.banner__slider').slick({
			dots: false,
      arrows: false,
      fade: true,
			autoplay: true,
			autoplaySpeed: 4500
		});
    $('.news-slider').slick({
			dots: true,
      arrows: false,
      fade: true,
			autoplay: true,
			autoplaySpeed: 4500
		});

	}
	anchorlinks: {

    $(document).on('click', '.js-scroll-to', function () {
			//event.preventDefault();
			$('html, body').animate({
				scrollTop: $('.home-headteacher').offset().top
			}, 500);
		});
    $(document).on('click', '.news-slider__nav a', function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 500);
		});

    $(document).on('click', '.js-open-contact-info', function (event) {
			event.preventDefault();
			$(this).toggleClass('active');
      $(this).parent().toggleClass('active');
      $('body').toggleClass('no-scroll');
      $('.contact-info-popup').toggleClass('active');
      $('.page-overlay').toggleClass('active');
		});

    $(document).on('click', '.page-overlay.active', function (event) {
      $('.js-open-contact-info').toggleClass('active');
      $('body').toggleClass('no-scroll');
      $('.contact-info-popup').toggleClass('active');
      $('.page-overlay').toggleClass('active');
    });

    $('.js-remove-alert').click(function() {
      $('.notification-box').css({
        'display': 'none'
      });
      $('.banner__scroll.notification-active').removeClass('notification-active')
      $('.page-overlay').removeClass('active-mobile');
		});
    $(document).on('click', '.page-overlay.active-mobile', function (event) {
      $('.notification-box').css({
        'display': 'none'
      });
      $('.page-overlay').toggleClass('active-mobile');
    });


	}
  accordion: {
    var allPanels = $('.accordion__section > .accordion__body').hide();
    var allPanelsTwo = $('.accordion__section');
    $('.accordion__section.active > .accordion__body').slideDown();
    $('.accordion').on('click', '.accordion__header', function() {
      if ( $(this).parent().hasClass('active') ) {
        allPanels.slideUp();
        allPanelsTwo.removeClass('active');
      } else {
        allPanels.slideUp();
        allPanelsTwo.removeClass('active');
        $(this).parent().toggleClass('active');
        $(this).next().slideToggle(
          'slow', function () {
            $('html,body').animate({
                scrollTop: $(this).offset().top-200
            }, 'slow')
        });
      }
    });
  }
	fixedheader: {
		$(function () {
			$(window).scroll(function () {
				if ($(window).scrollTop() >= 150) {
					$('.header').addClass('fixed-header');
				}
				if ($(window).scrollTop() >= 160) {
					$('.header').addClass("transform-none");
				}
				else {
					$('.header').removeClass('fixed-header');
					$('.header').removeClass("transform-none");
				}
			});
		});
	}
  mobile: {
    // Mobile menu
    var $mobileMenu = $(".mobile-menu-button");
    $mobileMenu.on("click", function(e) {
      $mobileMenu.toggleClass("is-active");
      $('.mobile-menu-button-wrapper').toggleClass('is-active');
      $('.mobile-menu-wrapper').toggleClass('is-active');

      // Close menu on click outside
      $('body').bind("click touchstart", function(e) {
  			if ( $(e.target).closest('.mobile-menu-wrapper').length === 0 &&  $(e.target).closest('.mobile-menu-button-wrapper').length === 0  ) {
          $('.mobile-menu-wrapper').removeClass('is-active');
          $('.mobile-menu-button').removeClass('is-active');
          $('.mobile-menu-button-wrapper').removeClass('is-active');
  			}
  		});

      // Open sub-nav on click on menu item with children
      $(".top-nav .menu-main-menu-container .menu-item.menu-item-has-children > a").on("click", function(e) {
        e.preventDefault();
        $(this).parent().find('.sub-menu-wrap').toggleClass('is-active');
      });
      // Close sub-nav on click on back button
      $(".top-nav .menu-main-menu-container .menu-item.menu-item-has-children .back-menu").on("click", function(e) {
        e.preventDefault();
        $(this).parent().parent().toggleClass('is-active');
      });

    });
	}
  magnific: {
    ///IFRAME
    $('.magnific-video').magnificPopup({
      type: 'iframe'
      , mainClass: 'mfp-fade'
      , removalDelay: 160
      , preloader: false
      , fixedContentPos: false
    });
    // GALLERY IMAGE
    $('.magnific-gallery-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      },
      gallery:{
        enabled:true
      }
    });
    ///INLINE
    $('.magnific-inline').magnificPopup({
      type: 'inline',
      midClick: true,
    });
  }
  /*
  tabs: {
    const tabs = document.querySelectorAll('[role="tab"]');
    const tabList = document.querySelector('[role="tablist"]');

    // Add a click event handler to each tab
    tabs.forEach(tab => {
      tab.addEventListener("click", changeTabs);
    });

    // Enable arrow navigation between tabs in the tab list
    let tabFocus = 0;

    tabList.addEventListener("keydown", e => {
      // Move right
      if (e.keyCode === 39 || e.keyCode === 37) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        if (e.keyCode === 39) {
          tabFocus++;
          // If we're at the end, go to the start
          if (tabFocus >= tabs.length) {
            tabFocus = 0;
          }
          // Move left
        } else if (e.keyCode === 37) {
          tabFocus--;
          // If we're at the start, move to the end
          if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
          }
        }

        tabs[tabFocus].setAttribute("tabindex", 0);
        tabs[tabFocus].focus();
      }
    });

    function changeTabs(e) {
      console.info('tabs clicked');
      const target = e.target;
      const parent = target.parentNode;
      const grandparent = parent.closest('.tabs');


      console.info(grandparent);
      // Remove all current selected tabs
      parent
      .querySelectorAll('[aria-selected="true"]')
      .forEach(t => t.setAttribute("aria-selected", false));

      // Set this tab as selected
      target.setAttribute("aria-selected", true);

      // Hide all tab panels
      grandparent
      .querySelectorAll('[role="tabpanel"]')
      .forEach(p => p.setAttribute("hidden", true));

      // Show the selected panel
      grandparent.parentNode
      .querySelector(`#${target.getAttribute("aria-controls")}`)
      .removeAttribute("hidden");
    }
  }
  */
	externallinks: {
		$('a[href^="mailto:"]').each(function () {
			$(this).addClass('email-link');
		});

	    $('a:not(.magnific-video, .email-link)').each(function () {
	      var a = new RegExp('/' + window.location.host + '/');

	      if (!a.test(this.href)) {
	        $(this).click(function (event) {
	          event.preventDefault();
	          window.open(this.href, '_blank');
	        });
	      }
	    });
		pdfs: {
			///OPEN PDFS IN NEW WINDOW
			$(function () {
				$('a[href$=".pdf"]').prop('target', '_blank');
			});
		}
	}
	search: {
		$('.search-icon').on('click', function (e) {
			$('.searchform').toggleClass('search-open');
			$(this).toggleClass('submit-zindex');
			$('.select-lang').removeClass('transform-height');
			$('#menu-main-menu-top, .lang_dropdown').fadeOut();
			$("#s").focus();
			setTimeout(function () {
				$('.close-search').fadeIn();
			}, 300);
		});
		$('.close-search').on('click', function (e) {
			$(this).fadeOut();
			$('.searchform').removeClass('search-open');
			$('.search-icon').removeClass('submit-zindex');
			$('#menu-main-menu-top, .lang_dropdown').fadeIn();
		});
	}
	loadingAnimations: {
		$.fn.isOnScreen = function () {
			var win = $(window);
			var viewport = {
				top: win.scrollTop()
			, };
			viewport.bottom = viewport.top + win.height() - 100;
			var bounds = this.offset();
			bounds.bottom = bounds.top + this.outerHeight();
			return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
		};
		$(window).scroll(function () {
			$('.off-screen').each(function (index) {
				if ($(this).isOnScreen()) {
					$(this).removeClass('off-screen--hide');
				}
			});
		});
	}
	onLoad: {
		$(document).ready(function () {
			$('.off-screen').each(function (index) {
				if ($(this).isOnScreen()) {
					$(this).removeClass('off-screen--hide');
				}
			});
		});
	}

  calendar: {
    /********************************************\
    # CALENDAR FUNCTIONS
    \********************************************/
    if($('body.page-template-tpl-calendar').length || $('body.page-id-80').length) {
      mainCalendar();
      calendarLightbox();
    }
    function mainCalendar() {
      var DDMonthEdit = true;
      // On Month Change dropdown
      $(document).on('change', ".month-dd-list", function(e){
        var month = $(this).val();
        DDMonthEdit = false;
        $('.tribe-mini-calendar-nav-link.prev-month').attr('data-month',month).trigger('click');
      });


      // On "Event next month click" trigger
      $('.trigger-week,.trigger-next, .trigger-current').click(function(e){
        var d = new Date();

        // Add 1 month to current date if click on "display next month"
        $(this).hasClass('trigger-next') ? d.setMonth(d.getMonth() + 1): '';

        var yr    = d.getFullYear();
        var month = d.getMonth()+1;
        month = month < 10 ? '0' + month : month;
        var newD  = yr + '-' + month + '-01';

        // Add Class to triggered btn if it's week-view (will let us change the query to show 7 days only)
        $(this).hasClass('trigger-week') ? $('.tribe-mini-calendar-nav-link.next-month').addClass('week-view') : '';

        $('.tribe-mini-calendar-nav-link.next-month').attr('data-month',newD).trigger('click');

        $('.calendar-nav .active-item').removeClass('active-item');
        $(this).addClass('active-item');

        e.preventDefault();
      })


      //This load event for a month or a day
      $(document).on("click",".tribe-mini-calendar-nav a, .tribe-mini-calendar-day-link", function(e){

        $('.calendar-nav .active-item').removeClass('active-item');
        if($(this).is("[data-month]"))
        var type = "month";
        else
        {
          var type = "day";
          $('.tribe-events-present').removeClass('tribe-events-present'); // Remove background color of today date when click an another day
        }


        //------------------------------------------------------------------------------------
        // If sports filters has a specific category (other than all)…
        if($('.subcat-events-filters').val() != 'all')
        {
          var subCat = $('.subcat-events-filters').val() // get that cat
          var divCat = $('.events-filters').val(); // get main cat
          var cat = {
            "cat1" : subCat,
            "cat2" : divCat,
          };
        }
        else // otherwise…
        var cat = $('.events-filters').val(); // get main cat
        //------------------------------------------------------------------------------------
        //var cat = $('option[data-selected=true]').val();

        var start_date = $(this).attr('data-'+type);

        // Check if user requested week view
        var week = false;
        if($(this).hasClass('week-view'))
        {
          week = true;
          $(this).removeClass('week-view');
        }

        // Change month Dropdown selection
        // if(type == "month" && DDMonthEdit)
        if($(this).hasClass('tribe-mini-calendar-nav-link') && DDMonthEdit)
        {
          $('.month-dd-list option').removeAttr('selected');
          $('.month-dd-list option[value="'+start_date+'"]').attr('selected','selected');
        }

        loadEvents(start_date, type, cat, week);

        DDMonthEdit = true;
        e.preventDefault();
      });


      // This filter events
      $(document).on("change",".events-filters",function(e){
        $('.events-filters option').removeAttr('data-selected');
        $('option:selected',this).attr('data-selected',true);

        var type = $('.ajax-events').attr('data-type');
        var start_date = $('.ajax-events').attr('data-date');
        var cat = $(this).val();

        //------------------------------------------------------------------------------------
        // NEW: SHOW SUBCAT FILTERS IF…
        var subcat_filter_wrapper = $('.subcat-filter-wrapper');

        // Delete subcat filters when change main filter
        if(subcat_filter_wrapper.length) { subcat_filter_wrapper.remove(); }

        if($('option:selected',this).attr('data-children') === 'true') // If main has subcat
        {
          var termid = $('option:selected',this).attr('data-termid');

          // Populate subcat filters…
          $.ajax({
            url: location.origin+'/wp-admin/admin-ajax.php',
            data:{
              'action':'termchildren_ajax',
              'termid':termid,
            },
            type: "GET",
            dataType: 'JSON',
            success:function(data){
              // $('.allfilters').prepend(data);
              $('.allfilters').append(data);
            },
            error: function(errorThrown){
              console.log(errorThrown);
            }
          });
        }

        // Reset sport filters to default everytime user change main cat
        $('.subcat-events-filters').prop('selectedIndex',0);
        //------------------------------------------------------------------------------------

        loadEvents(start_date, type, cat);
      });


      // This is sport filter
      $(document).on("change",".subcat-events-filters",function(e){
        $('.subcat-events-filters option').removeAttr('data-selected');
        $('option:selected',this).attr('data-selected',true);

        var type = $('.ajax-events').attr('data-type');
        var start_date = $('.ajax-events').attr('data-date');


        //------------------------------------------------------------------------------------
        // NEW: IF USER SELECT A SUBCAT
        if($(this).val() != 'all') // If subcat filter has a category (other than all)
        {
          var divCat = $('.events-filters').val();
          var cat = {
            "cat1" : $(this).val(),
            "cat2" : divCat,
          };
        }
        else // If user switch back to all then show events from the main cat
        var cat = $('.events-filters').val();
        //------------------------------------------------------------------------------------

        loadEvents(start_date, type, cat);
      });
    }

    function loadEvents(start_date, type, cat, week)
    {
      cat = cat || "all"; // Set to all if no cat specified
      week = week || false; // Set to false if not specified

      var calendar = $('.ob-calendar').length ? 'ob-calendar' : 'main-calendar';

      $('.ajax-events').html('<img src="'+php_vars.themeDirUrl+'/assets/img/loader.gif" width="200px" height="200px" style="display: block; margin: 0 auto;" />')

      $.ajax({
        url: location.origin+'/wp-admin/admin-ajax.php',
        data:{
          'action':'events_ajax',
          'start_date':start_date,
          'type':type,
          'cat':cat,
          'week':week,
          'calendar':calendar,
        },
        type: "GET",
        dataType: 'JSON',
        success:function(data){
          $('.ajax-events').html(data.content).attr({
            // Set data-type and data-date to grab the date for filter
            'data-type':data.type,
            'data-date':data.ndate,
          });

          // Change export month button
          // Convert yyyy-mm-dd hh:ii:ss to yyyy/mm/dd to make it cross browsers (not working in IE & Safari)
          var date = data.ndate;
          var date = date.split(" ");
          var date = date[0];
          var date = date.replace(/\-/g,'/');

          var date    = new Date(date);
          var yr      = date.getFullYear();
          var month   = parseInt(date.getMonth()+1);
          month   = month < 10 ? '0' + month : month;
          var newDate = yr + '-' + month;

          // if(data.cat)
          //     $('.export-month').attr('href','/events/'+newDate+'?ical=1&tribe_year='+yr+'&tribe_month='+month+'&tribe_cat='+data.cat);
          // else
          //     $('.export-month').attr('href','/events/'+newDate+'?ical=1&tribe_year='+yr+'&tribe_month='+month);

          //console.log(data.cat);

          if(data.cat)
          {
            if(jQuery.isPlainObject(data.cat))
            $('.export-month.filtered').attr('href','/events/?ical=1&filtered=1&tribe_cat[]='+data.cat.cat1+'&tribe_cat[]='+data.cat.cat2);
            else
            $('.export-month.filtered').attr('href','/events/?ical=1&filtered=1&tribe_cat='+data.cat);
          }
        },
        error: function(errorThrown){
          console.log(errorThrown);
        }
      });
    }

    function calendarLightbox()
    {
      $(document).on('click touchstart','.ajax-events.caltpl .event a', function(e){

        var item = $(
          '<div class="custom-lightbox">'+
          '<div class="custom-lightbox__container box-shadow entry flex" style="height:auto">'+
          '<i class="custom-lightbox__close"></i>'+
          '<div class="custom-lighbox__content is_calendar flex">'+
          '<div id="content-area">'+
          '<img src="'+php_vars.themeDirUrl+'/assets/img/loader.gif" class="loadergif" />'+
          '</div>'+
          '</div>'+
          '</div>'+
          '<div class="custom-lightbox__background"></div>'+
          '</div>'
        ).hide();

        $('body').prepend(item);
        item.fadeIn(200);

        var $item = $(this);
        var url = $item.attr('href');

        // $('#calendar-lightbox .calendar-lightbox__content').load(url+" #ajax-cal-content");
        $('#content-area').load(url+" #ajax-cal-content");

        e.preventDefault();
      });


      // Close when click the cross
      $(document).on('click touchstart', '.custom-lightbox__close', function(){ closeCalendarLightbox(); });

      // Close when click outside the lightbox
      $(document).on('click touchstart','.custom-lightbox',function(){ closeCalendarLightbox(); });
      $(document).on('click touchstart','.custom-lightbox__container',function(event){ event.stopPropagation(); });

      // Close when click ESC
      $(document).keyup(function(e) { if (e.keyCode == 27) closeCalendarLightbox(); });
    }

    function closeCalendarLightbox()
    {
      $('.custom-lightbox').fadeOut(200,function(){
        $('.calendar-lightbow__content').fadeOut(200,function(){
          $('.custom-lightbox, .calendar-lightbox__content').remove();
        });
      });
    }
  }
});
