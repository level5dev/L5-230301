(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _custom_its_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom/its-category */ "./assets/js/theme/custom/its-category.js");
/* harmony import */ var _custom_toggle_category_listing_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom/toggle-category-listing-view */ "./assets/js/theme/custom/toggle-category-listing-view.js");
/* harmony import */ var _custom_its_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom/its-global */ "./assets/js/theme/custom/its-global.js");
/* harmony import */ var _custom_custom_sidebar_filter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom/custom-sidebar-filter.js */ "./assets/js/theme/custom/custom-sidebar-filter.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);

    /**
     * IntuitSolutions - Custom Category
     */
    _this.ITSCategory = new _custom_its_category__WEBPACK_IMPORTED_MODULE_5__["default"](context);
    _this.toggleCategoryListingView = new _custom_toggle_category_listing_view__WEBPACK_IMPORTED_MODULE_6__["default"](context);
    return _this;
  }
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      "aria-live": ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$("[data-shop-by-price]").length) return;
    if ($(".navList-action").hasClass("is-active")) {
      $("a.navList-action.is-active").focus();
    }
    $("a.navList-action").on("click", function () {
      return _this2.setLiveRegionAttributes($("span.price-filter-message"), "status", "assertive");
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    // this.populateGridProduct();
    this.validateProductsCount();
    this.dynamicResizeProductGrid();
    $('[data-button-type="add-cart"]').on("click", function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), "status", "polite");
    });
    this.makeShopByPriceFilterAccessible();
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($("#facetedSearch").length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on("sortBy-submitted", this.onSortBySubmit);
    }
    $("a.reset-btn").on("click", function () {
      return _this3.setLiveRegionsAttributes($("span.reset-message"), "status", "polite");
    });
    this.ariaNotifyNoProducts();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $("[data-no-products-notification]");
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this4 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $("#product-listing-container");
    var $facetedSearchContainer = $("#faceted-search-container");
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: this.toggleCategoryListingView.getRequestTemplateType("category"),
        sidebar: "category/sidebar"
      },
      showMore: "category/show-more"
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $("body").triggerHandler("compareReset");
      $("html, body").animate({
        scrollTop: 0
      }, 100);

      /**
       * IntuitSolutions - Category Update
       */
      _this4.ITSCategory.afterFacetUpdate();
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
    $("body").on("productViewModeChanged", function () {
      var NewOpts = {
        config: {
          category: {
            shop_by_price: true,
            products: {
              limit: productsPerPage
            }
          }
        },
        template: {
          productListing: _this4.toggleCategoryListingView.getRequestTemplateType("category"),
          sidebar: "category/sidebar"
        },
        showMore: "category/show-more"
      };
      _this4.facetedSearch.updateRequestOptions(NewOpts);
    });
  }

  //resize
  ;
  _proto.dynamicResizeProductGrid = function dynamicResizeProductGrid() {
    // const filter = $(".actionBar.filter--section").width();
    // const wrapper = $("#product-listing-container").width();
    // $("#product-block").width(wrapper - filter);
    // console.log(wrapper - filter);
  }

  //SSCODE: Populate Product Grid in category.html
  ;
  _proto.validateProductsCount = function validateProductsCount() {
    var products = this.context.products;
    var body = this;
    var UUIDcatc = this.context.UUIDcatc;
    var categoryId = this.context.categoryId;
    var num = this.context.num;
    // console.log(products);
    var existProdId = [];
    products.forEach(function (pr) {
      existProdId.push(pr.id);
    });
    $(".filter--container").css("opacity", "70%");

    // console.log(existProdId);
    axios.get("https://sufri.autocode.run/l5t@dev/getATProduct/", {
      params: {
        id: categoryId
      }
    }).then(function (response) {
      var data = response.data.product;
      data.forEach(function (pr) {
        if (existProdId.includes(pr["id"])) {
          var $item = $(".product[data-entity-id=\"" + pr["id"] + "\"]");
          $item.attr("data-best-selling", "" + pr["total_sold"]);
          $item.attr("data-date-created", "" + pr["date_created"]);
        } else if (products.length > 99) {
          var template = constructTemplate(pr, num);
          num = num + 1;
          $("#isotope-container").append(template);
        }
      });
      $("#loader-block").hide();
      body.newConfigureIsotopeForAll();
      body.startGlobal();
      // body.disableViewDetailButton();
    })["catch"](function (error) {
      console.log(error);
    });
    function constructTemplate(pr, num) {
      var img = {};
      for (var i = 0; i < pr["images"].length; i++) {
        if (pr["images"][i]["is_thumbnail"]) {
          img = pr["images"][i];
          break;
        }
      }
      var actionSection = "";
      if (pr["variants"].length > 1) {
        actionSection = "<button type=\"button\" class=\"button button--primary quickview button--quickview\" data-product-id=\"" + pr["id"] + "\">View Options</button>";
      } else {
        actionSection = "\n            <div class=\"card-atc js-card-atc\">\n              <div class=\"card-atc__section card-atc__section--qty\">\n                <label for=\"card-atc__qty-" + pr["id"] + "-" + UUIDcatc + "\" class=\"card-atc__label is-srOnly\">Quantity:</label>\n                <div class=\"card-atc-increment card-atc-increment--has-buttons js-card-atc-increment\">\n\n                  <input type=\"tel\" class=\"form-input card-atc__input card-atc__input--total js-card-atc__input--total\" name=\"card-atc__qty-" + pr["id"] + "-" + UUIDcatc + "\" id=\"card-atc__qty-" + pr["id"] + "-" + UUIDcatc + "\" value=\"1\" min=\"1\" pattern=\"[0-9]*\" aria-live=\"polite\">\n                  <div class=\"card-atc-button-wrapper\">\n                    <button class=\"button button--icon\" data-action=\"inc\" type=\"button\">\n                      <span class=\"is-srOnly\">Increase Quantity of undefined</span>\n                      <span class=\"icon-wrapper\" aria-hidden=\"true\">\n                        <svg class=\"icon\">\n                          <use xlink:href=\"#icon-add\"></use>\n                        </svg>\n                      </span>\n                    </button>\n                    <button class=\"button button--icon\" data-action=\"dec\" type=\"button\">\n                      <span class=\"is-srOnly\">Decrease Quantity of undefined</span>\n                      <span class=\"icon-wrapper\" aria-hidden=\"true\">\n                        <svg class=\"icon\">\n                          <use xlink:href=\"#icon-minus\"></use>PP\n                        </svg>\n                      </span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"card-atc__section card-atc__section--action\">\n                <button type=\"button\" class=\"card-atc__button button button--primary js-card-atc__button\" id=\"card-atc__add-" + pr["id"] + "-" + UUIDcatc + "\" data-default-message=\"Add to Cart\" data-wait-message=\"Adding to cart\u2026\" data-added-message=\"Add to Cart\" value=\"Add to Cart\" data-card-add-to-cart=\"/cart.php?action=add&amp;product_id=" + pr["id"] + "\" data-event-type=\"product-click\">Add to Cart</button>\n                <span class=\"product-status-message aria-description--hidden\">Adding to cart\u2026 The item has been added</span>\n              </div>\n          </div>";
      }
      var template = "\n          <div id=\"product-" + pr["id"] + "\" sort-order=\"" + pr["sort_order"] + "\" \n          class=\"product\"\n          product-data-category=\"" + pr["categories"] + "\" \n          product-data-name=\"" + pr["fake-heading"] + "\" \n          product-data-review=\"" + (pr["reviews_count"] === 0 ? 0 : pr["reviews_rating_sum"] / pr["reviews_count"]) + "\"\n          product-review-count=\"" + pr["reviews_count"] + "\" \n          product-data-price=\"" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\" \n          product-date-created=\"" + pr["date_created"] + "\" \n          product-is-featured=\"" + pr["is_featured"] + "\" \n          product-best-selling=\"" + pr["total_sold"] + "\"\n          product-custom-sort-order=\"" + pr["custom-sort-order"] + "\"\n          data-custom-num=\"" + num + "\"\n          \n          product-filter-IAT=\"\"\n          product-filter-FBS=\"\"\n          product-filter-FBC=\"\"\n          product-filter-CAT=\"\"\n          product-filter-NCF=\"\"\n          product-filter-NCP=\"\"\n          product-filter-NSI=\"\"\n          product-filter-HT=\"\"\n          >\n              <div class=\"card-wrapper\">\n                  <article class=\"card\" data-test=\"card-" + pr["id"] + "\">\n                      <figure class=\"card-figure\">\n                          <div class=\"sale-flag-sash\" style=\"display: " + (pr["variants"][0].sale_price !== 0 ? "block;" : "none;") + " \"><span class=\"sale-text\">On Sale</span></div>\n                          <a href=\"" + pr["custom_url"]["url"] + "\" \n                          class=\"card-figure__link\" \n                          aria-label=\"" + pr["name"] + ", \n                          $" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\">\n                              <div class=\" card-img-container\">\n                                  <img src=\"" + img["url_thumbnail"] + "\" \n                                  alt=\"img[\"description\"]\" title=\"" + pr["fake-heading"] + "\" \n                                  data-sizes=\"auto\" \n                                  srcset=\"" + img["url_standard"] + " 80w, \n                                  " + img["url_standard"] + " 160w, \n                                  " + img["url_standard"] + " 320w, \n                                  " + img["url_standard"] + " 640w, \n                                  " + img["url_standard"] + " 960w, \n                                  " + img["url_standard"] + " 1280w, \n                                  " + img["url_standard"] + " 1920w, \n                                  " + img["url_standard"] + " 2560w\" \n                                  data-srcset=\"" + img["url_standard"] + " 80w, \n                                  " + img["url_standard"] + " 160w, \n                                  " + img["url_standard"] + " 320w, \n                                  " + img["url_standard"] + " 640w, \n                                  " + img["url_standard"] + " 960w, \n                                  " + img["url_standard"] + " 1280w, \n                                  " + img["url_standard"] + " 1920w, \n                                  " + img["url_standard"] + " 2560w\" \n                                  class=\"card-image lazyautosizes lazyloaded\" sizes=\"248px\">\n                              </div>\n                          </a>\n                         <figcaption class=\"card-figcaption\">\n                              <div class=\"card-figcaption-body\"></div>\n                         </figcaption>\n                      </figure>\n                      <div class=\"card-body\">\n                          <p class=\"productView-type-title h4\" \n                          product-name=\"\">" + pr["fake-heading"] + "</p>\n                          <h3 class=\"card-title \">\n                              <a aria-label=\"" + pr["name"] + ", \n                                $" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\" \n                              href=\"" + pr["custom_url"]["url"] + "\">\n                              " + pr["name"] + "</a>\n                          </h3>\n                          <p class=\"card-text card-text--sku\">\n                              <span> SKU#: " + pr["sku"] + " </span>\n                          </p>\n                          <div class=\"card-text card-text--price\" data-test-info-type=\"price\">\n                              <div class=\"price-section price-section--withoutTax rrp-price--withoutTax h4\" style=\"display: block;\">\n                                  <span class=\"is-srOnly\"> MSRP: </span>\n                                  <span data-product-rrp-price-without-tax=\"\" class=\"price price--rrp h5\">\n                                    " + (pr["variants"][0].sale_price !== 0 ? "$" + pr["variants"][0].retail_price : "") + "\n                                  </span>\n                              </div>\n                              <div class=\"price-section price-section--withoutTax non-sale-price--withoutTax h5\" style=\"display: none;\">\n                                <span class=\"is-srOnly\"> Was: </span>\n                                <span data-product-non-sale-price-without-tax=\"\" class=\"price price--non-sale\"></span>\n                              </div>\n                              <div class=\"price-section price-section--withoutTax h4\">\n                                <span class=\"price-label is-srOnly\"></span>\n                                <span class=\"price-now-label is-srOnly\" style=\"display: none;\">Now:</span>\n                                <span data-product-price-without-tax=\"\" class=\"price price--withoutTax\">$" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "</span>\n                              </div>\n                          </div>\n                          <p class=\"card-text card-text--extra\" style=\"display: " + (pr["custom_fields"].find(function (field) {
        return field["name"] === "__card-extra-info";
      }) !== undefined ? "relative;" : "none;") + " \"> \n                          " + (pr["custom_fields"].find(function (field) {
        return field["name"] === "__card-extra-info";
      }) !== undefined ? pr["custom_fields"].find(function (field) {
        return field["name"] === "__card-extra-info";
      }).value : "") + "</p>\n                         <div class=\"card-action-wrapper\">\n                              " + actionSection + "\n                              <button type=\"button\" onclick=\"window.location.href=" + pr["custom_url"]["url"] + "\" \n                              class=\"button button--primary\" >View Details</button>\n                         </div>\n                      </div>\n                  </article>\n              </div>\n          </div>";
      return template;
    }
  };
  _proto.startGlobal = function startGlobal() {
    Object(_custom_its_global__WEBPACK_IMPORTED_MODULE_7__["default"])(this.context);
  }

  // check if mobile user
  // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
  ;
  _proto.checkMobile = function checkMobile() {
    var check = false;
    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };
  _proto.resetSectionCssForMobileView = function resetSectionCssForMobileView() {
    if (screen.width < 600) {
      $("[section-view]").attr("id", "");
      $("[section-view]").attr("class", "");
    } else {
      $("[section-view]").attr("id", "product-listing-container");
      $("[section-view]").attr("class", "container");
    }
  };
  _proto.dynamicGridWidthSizingForIsotope = function dynamicGridWidthSizingForIsotope() {
    var width = window.innerWidth;
    if (width > 1300) {
      width = 1200;
    } else if (width < 320) {
      width = 320;
    } else if (width < 600) {
      // purposely empty block
    } else {
      width = width - 320;
    }
    this.resetSectionCssForMobileView();
    // console.log(width);

    $("#grid-all-product").css("width", width + "px");
  };
  _proto.newConfigureIsotopeForAll = function newConfigureIsotopeForAll() {
    // $(".grid").css("display", "grid");
    //   $(".lds-block").hide();
    var grid = document.getElementById("isotope-container");
    var body = this;

    // for testing, comment this section and call the runImageTest()
    var iso;
    runIsotope();
    Object(_custom_custom_sidebar_filter_js__WEBPACK_IMPORTED_MODULE_8__["customSidebar"])();
    $(".filter--container").css("opacity", "100%");
    $("#all-sort-select, #all-sort-select").prop("disabled", false);
    // if (this.checkMobile()) {
    //   runImageTest();
    // } else {
    //   $(".grid").css("display", "grid");
    //   $(".lds-block").hide();
    //   runIsotope();
    // }

    // runImageTest();

    // it will call runIsotope() if all images are loaded
    function runImageTest() {
      //   $(".grid").css("display", "grid");
      //   $(".lds-block").hide();

      var imgLoaded = true;
      var testImgInt = setInterval(function () {
        var cardImgs = document.querySelectorAll("#grid-all-product .card-image");
        if (cardImgs.length > 0) {
          for (var i = 0; i < cardImgs.length; i++) {
            var nonZero = true;
            if (cardImgs[i].offsetHeight < 100) {
              imgLoaded = false;
              nonZero = false;
              break;
            }
            if (nonZero) {
              imgLoaded = true;
            }
          }
        } else {
          imgLoaded = false;
        }
        if (imgLoaded) {
          clearInterval(testImgInt);
          runIsotope();
          // body.configureIsotopeForAll();
          // body.startGlobal();
          // $(".lds-block").hide();
        }
      }, 0);
    }
    function runIsotope() {
      // $(window).load(function () {
      // setTimeout(function () {

      iso = new Isotope(grid, {
        // options...
        itemSelector: ".product",
        layoutMode: "fitRows",
        getSortData: {
          name: function name(itemElem) {
            return itemElem.getAttribute("data-name");
          },
          price: function price(itemElem) {
            return Number(itemElem.getAttribute("data-product-price"));
          },
          review: function review(itemElem) {
            return itemElem.getAttribute("data-rating");
          },
          best_selling: function best_selling(itemElem) {
            return Number(itemElem.getAttribute("data-best-selling"));
          },
          newest: function newest(itemElem) {
            return itemElem.getAttribute("data-date-created");
          },
          custom_sort_order: function custom_sort_order(itemElem) {
            return Number(itemElem.getAttribute("data-custom-sort"));
          },
          custom_sort_num: function custom_sort_num(itemElem) {
            return Number(itemElem.getAttribute("data-custom-num"));
          }
        }
      });
      // });
      // }, 0);

      $("#all-sort-select, #all-sort-select-mobile").change(function () {
        var val = $(this).val().split("-");
        if (val[0] === "review") {
          iso.arrange({
            sortBy: [val[0], "rating_count"],
            sortAscending: {
              review: false,
              rating_count: false
            }
          });
        } else {
          iso.arrange({
            sortBy: val[0],
            sortAscending: val[1] === "asc"
          });
        }
      });
      $("#all-sort-select, #sort-button").prop("disabled", false);
      setTimeout(function () {
        if (body.context.subcategories.length === 0) {
          iso.arrange({
            sortBy: "custom_sort_order",
            sortAscending: true
          });
        } else {
          iso.arrange({
            sortBy: "custom_sort_num",
            sortAscending: true
          });
        }
      }, 3);
      var resizeLayout = false;
      addEventListener("resize", function (event) {
        resizeLayout = true;
      });
      iso.on("layoutComplete", function () {
        if (resizeLayout) {
          resizeLayout = false;
          iso.arrange();
          return;
        }
        return;
      });
    }
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);
/*
  configureIsotopeForAll() {
    // $(".grid").css("display", "grid");
    //   $(".lds-block").hide();
    let grid = document.getElementById("grid-all-product");
    const body = this;

    // for testing, comment this section and call the runImageTest()
    let iso;
    if (this.checkMobile()) {
      runImageTest();
    } else {
      $(".grid").css("display", "grid");
      $(".lds-block").hide();
      runIsotope();
    }

    // $("[input-filter]").on("change", getIsotopeFilter);
    // CheckboxUpdated

    window.addEventListener("CheckboxUpdated", () => {
      getIsotopeFilter();
    });

    body.dynamicGridWidthSizingForIsotope();
    let resized = true;
    $(window).resize(function () {
      resized = true;
      body.dynamicGridWidthSizingForIsotope();
    });

    // runImageTest();

    // it will call runIsotope() if all images are loaded
    function runImageTest() {
      $(".grid").css("display", "grid");
      $(".lds-block").hide();

      let imgLoaded = true;

      let testImgInt = setInterval(() => {
        var cardImgs = document.querySelectorAll(
          "#grid-all-product .card-image"
        );
        if (cardImgs.length > 0) {
          for (var i = 0; i < cardImgs.length; i++) {
            var nonZero = true;
            if (cardImgs[i].offsetHeight < 100) {
              imgLoaded = false;
              nonZero = false;
              break;
            }
            if (nonZero) {
              imgLoaded = true;
            }
          }
        } else {
          imgLoaded = false;
        }

        if (imgLoaded) {
          clearInterval(testImgInt);
          runIsotope();
          // body.configureIsotopeForAll();
          // body.startGlobal();
          // $(".lds-block").hide();
        }
      }, 0);
    }

    function runIsotope() {
      // $(window).load(function () {
      // setTimeout(function () {

      iso = new Isotope(grid, {
        // options...
        itemSelector: ".product",
        layoutMode: "fitRows",
        getSortData: {
          name: function (itemElem) {
            return itemElem.getAttribute("product-data-name");
          },
          price: function (itemElem) {
            return Number(itemElem.getAttribute("product-data-price"));
          },
          review: function (itemElem) {
            return itemElem.getAttribute("product-data-review");
          },
          category: function (itemElem) {
            return itemElem.getAttribute("product-data-category");
          },
          best_selling: function (itemElem) {
            return Number(itemElem.getAttribute("product-best-selling"));
          },
          newest: function (itemElem) {
            return itemElem.getAttribute("product-date-created");
          },
          custom_sort_order: function (itemElem) {
            return Number(itemElem.getAttribute("product-custom-sort-order"));
          },
        },
      });
      // });
      // }, 0);

      $("#all-sort-select, #all-sort-select-mobile").change(function () {
        const val = $(this).val().split("-");

        if (val[0] === "review") {
          iso.arrange({
            sortBy: [val[0], "rating_count"],
            sortAscending: {
              review: false,
              rating_count: false,
            },
          });
        } else {
          iso.arrange({
            sortBy: val[0],
            sortAscending: val[1] === "asc",
          });
        }
      });

      const filter_arr = [];

      $("[checkbox-filter-all]").change(function () {
        const isfeatured = $("#featured-checkbox:checked").length > 0;
        if ($(this).attr("id") !== "featured-checkbox") {
          if (this.checked) {
            filter_arr.push($(this).attr("filter-value"));
          } else {
            const index = filter_arr.indexOf($(this).attr("filter-value"));
            if (index > -1) {
              // only splice array when item is found
              filter_arr.splice(index, 1); // 2nd parameter means remove one item only
            }
          }
        }

        if (filter_arr.length > 0) {
          iso.arrange({
            // item element provided as argument
            filter: function (itemElem) {
              const val = itemElem.getAttribute("product-data-category");
              for (let i = 0; i < filter_arr.length; i++) {
                if (val.includes(filter_arr[i])) {
                  if (isfeatured) {
                    return (
                      itemElem.getAttribute("product-is-featured") === "true"
                    );
                  } else {
                    return true;
                  }
                }
              }

              return false;
            },
          });
        } else if (isfeatured) {
          iso.arrange({
            filter: function (itemElem) {
              return itemElem.getAttribute("product-is-featured") === "true";
            },
          });
        } else {
          iso.arrange({ filter: "*" });
        }
      });

      iso.on("layoutComplete", function () {
        if (resized) {
          resized = false;
          iso.arrange();
          return;
        }
        return;
      });

      setTimeout(function () {
        if (body.context.subcategories.length === 0) {
          iso.arrange({
            sortBy: "custom_sort_order",
            sortAscending: true,
          });
        } else {
          iso.arrange({
            sortBy: "best_selling",
            sortAscending: false,
          });
        }
      }, 3);
    }

    function getIsotopeFilter() {
      if ($("[input-filter]:checked").length <= 0) {
        console.log("*");
        return;
      }

      let final = "";
      const arrayInput = [
        { name: "product-filter-IAT", array: [] },
        { name: "product-filter-FBS", array: [] },
        { name: "product-filter-FBC", array: [] },
        { name: "product-filter-CAT", array: [] },
        { name: "product-filter-NCF", array: [] },
        { name: "product-filter-NCP", array: [] },
        { name: "product-filter-NSI", array: [] },
        { name: "product-filter-HT", array: [] },
      ];
      const temp_dict = {};
      function findCombinations(arrays, result = "", currentIndex = 0) {
        if (currentIndex === arrays.length) {
          final = final + result.trim().split(" ").join("") + " ";
          // console.log(result.trim());
          return;
        }
        const currentArray = arrays[currentIndex];
        for (let i = 0; i < currentArray.array.length; i++) {
          const currentElement = currentArray.array[i];
          let currentResult = result;
          if (currentElement !== "") {
            currentResult = `${result}[${currentArray.name}='${currentElement}'] `;
          }
          findCombinations(arrays, currentResult, currentIndex + 1);
        }
      }

      $("[input-filter]:checked").each(function () {
        const val = $(this).val();

        const type = $(this).attr("input-filter");
        if (temp_dict[type] === undefined) {
          temp_dict[type] = [$(this).val()];
        } else {
          temp_dict[type].push($(this).val());
        }
      });

      arrayInput.forEach((x) => {
        const _temp = x["name"].split("-");
        const k = _temp[_temp.length - 1].toLowerCase();
        x["array"] = temp_dict[k] === undefined ? [""] : temp_dict[k];
      });
      final = "";
      findCombinations(arrayInput);
      console.log(final);
    }
  }
*/

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/custom/custom-sidebar-filter.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/custom/custom-sidebar-filter.js ***!
  \*********************************************************/
/*! exports provided: customSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customSidebar", function() { return customSidebar; });
var customSidebar = function customSidebar() {
  var createEvent = new Event("CheckboxUpdated", {});
  var title = {
    // Include Automatic Taper?
    YT: "Taper Included",
    NT: "No Taper",
    // Flat Box Set Sizes:
    710: "7\"/10\" Boxes",
    1012: "10\"/12\" Boxes",
    71012: "7\"/10\"/12\" Boxes",
    // Flat Box Capacities:
    SF: "Standard",
    MF: "MEGA",
    // Corner Applicator Type:
    MA: "MiniShot™",
    "7A": '7" Corner Box',
    "8A": '8" Corner Box',
    // # of Corner Finishers:
    "03": "3\" Corner Finisher",
    "0335": "3\"/3.5\" Corner Finishers",
    // # of Compound Pumps:
    "1P": "1 Pump",
    "2P": "2 Pumps",
    // Nail Spotter Included?
    YN: "Nail Spotter",
    NN: "No Nail Spotter",
    // Handle Type:
    FH: "FL Handles",
    EH: "Ext Handles"
  };
  $(".filter--show_button").each(function () {
    $(this).click(function () {
      var block = $("[filter-block=\"" + $(this).attr("filter-button") + "\"]");
      if (block.css("display") === "none") {
        block.css("display", "grid");
      } else {
        block.css("display", "none");
      }
      // console.log("clicked");
    });
  });

  $(".tag_title--block").click(function () {
    var input = $(this).siblings().find("input");
    if (input.is(":checked")) {
      input.prop("checked", false);
    } else {
      input.prop("checked", true);
    }
    fillFilterList();
  });
  $("[input-filter]").on("change", fillFilterList);
  function clearFilterAtTop(val) {
    $("[input-filter][value=\"" + val + "\"]").prop("checked", false);
    fillFilterList();
  }
  function fillFilterList() {
    var temp = [];
    $(".filter-list_container").empty();
    $("[input-filter]:checked").each(function () {
      var val = $(this).val();
      temp.push(val);
      $(".filter-list_container").append("<li class=\"filter-list\" data=\"" + val + "\"\">\n      <div>\n      " + title[val] + "\n      <div>x</div>\n      </div></li>");
      setTimeout(function () {
        $(".filter-list[data=\"" + val + "\"]").click(function () {
          clearFilterAtTop(val);
        });
      }, 0);
    });
    window.dispatchEvent(createEvent);
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/custom/its-category.js":
/*!************************************************!*\
  !*** ./assets/js/theme/custom/its-category.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ITSCategory; });
var ITSCategory = /*#__PURE__*/function () {
  function ITSCategory(context) {
    this.context = context;
  }
  var _proto = ITSCategory.prototype;
  _proto.afterFacetUpdate = function afterFacetUpdate() {};
  return ITSCategory;
}();


/***/ }),

/***/ "./assets/js/theme/custom/toggle-category-listing-view.js":
/*!****************************************************************!*\
  !*** ./assets/js/theme/custom/toggle-category-listing-view.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ToggleCategoryListingView; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");


var ToggleCategoryListingView = /*#__PURE__*/function () {
  function ToggleCategoryListingView(context) {
    var _this = this;
    this.context = context;
    this.defaultViewType = this.context.defaultViewType;
    this.oppositeViewType = this.defaultViewType !== 'grid' ? 'grid' : 'list';
    this.productsPerPage = this.context.categoryProductsPerPage;
    this.loadingOverlay = $('.loadingOverlay.loadingOverlay--product-listing');
    $('body').on('facetedSearchRefresh', function () {
      _this.addToggleEvents();
    });
    this.init();
  }
  var _proto = ToggleCategoryListingView.prototype;
  _proto.getStoredViewType = function getStoredViewType() {
    return sessionStorage.getItem('category-view-type') || null;
  };
  _proto.getRequestTemplateType = function getRequestTemplateType(type) {
    var pageType = this.getStoredViewType();
    return !pageType ? type + "/product-listing" : "custom/category-" + pageType + "-view";
  };
  _proto.storeViewType = function storeViewType(type) {
    sessionStorage.setItem('category-view-type', type);
  };
  _proto.getCategoryPage = function getCategoryPage(pageType) {
    var _this2 = this;
    var config = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: this.productsPerPage
          }
        }
      },
      template: "custom/category-" + pageType + "-view"
    };
    this.loadingOverlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["api"].getPage(_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getUrl(), config, function (err, content) {
      if (err) {
        throw new Error(err);
      }
      $('#product-listing-container').html(content);
      _this2.loadingOverlay.hide();
      _this2.storeViewType(pageType);
      _this2.addToggleEvents();
      $('body').triggerHandler('productViewModeChanged');
    });
  };
  _proto.addToggleEvents = function addToggleEvents() {
    var _this3 = this;
    $('.js-category__toggle-view').on('click', function (e) {
      var type = $(e.currentTarget).data('view-type');
      if ($(e.currentTarget).hasClass('active-category-view')) return;
      _this3.getCategoryPage(type, _this3.addToggleEvents);
    });
  };
  _proto.init = function init() {
    var storedViewType = this.getStoredViewType();
    if (storedViewType === this.defaultViewType || !storedViewType) {
      return this.addToggleEvents();
    }
    this.getCategoryPage(this.oppositeViewType);
  };
  return ToggleCategoryListingView;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9jdXN0b20tc2lkZWJhci1maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9pdHMtY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS90b2dnbGUtY2F0ZWdvcnktbGlzdGluZy12aWV3LmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJJVFNDYXRlZ29yeSIsInRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXciLCJUb2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3IiwiX3Byb3RvIiwicHJvdG90eXBlIiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJhdHRyIiwicm9sZSIsIm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUiLCJfdGhpczIiLCIkIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJmb2N1cyIsIm9uIiwib25SZWFkeSIsIl90aGlzMyIsInZhbGlkYXRlUHJvZHVjdHNDb3VudCIsImR5bmFtaWNSZXNpemVQcm9kdWN0R3JpZCIsImUiLCJjdXJyZW50VGFyZ2V0IiwibmV4dCIsImNvbXBhcmVQcm9kdWN0cyIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJzZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMiLCJhcmlhTm90aWZ5Tm9Qcm9kdWN0cyIsIiRub1Byb2R1Y3RzTWVzc2FnZSIsIl90aGlzNCIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsImdldFJlcXVlc3RUZW1wbGF0ZVR5cGUiLCJzaWRlYmFyIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiYWZ0ZXJGYWNldFVwZGF0ZSIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiTmV3T3B0cyIsInVwZGF0ZVJlcXVlc3RPcHRpb25zIiwiYm9keSIsIlVVSURjYXRjIiwiY2F0ZWdvcnlJZCIsIm51bSIsImV4aXN0UHJvZElkIiwiZm9yRWFjaCIsInByIiwicHVzaCIsImlkIiwiY3NzIiwiYXhpb3MiLCJnZXQiLCJwYXJhbXMiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwicHJvZHVjdCIsImluY2x1ZGVzIiwiJGl0ZW0iLCJjb25zdHJ1Y3RUZW1wbGF0ZSIsImFwcGVuZCIsImhpZGUiLCJuZXdDb25maWd1cmVJc290b3BlRm9yQWxsIiwic3RhcnRHbG9iYWwiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJpbWciLCJpIiwiYWN0aW9uU2VjdGlvbiIsInRvRml4ZWQiLCJzYWxlX3ByaWNlIiwicmV0YWlsX3ByaWNlIiwiZmluZCIsImZpZWxkIiwidW5kZWZpbmVkIiwidmFsdWUiLCJjdXN0b21HbG9iYWwiLCJjaGVja01vYmlsZSIsImNoZWNrIiwiYSIsInRlc3QiLCJzdWJzdHIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJ3aW5kb3ciLCJvcGVyYSIsInJlc2V0U2VjdGlvbkNzc0Zvck1vYmlsZVZpZXciLCJzY3JlZW4iLCJ3aWR0aCIsImR5bmFtaWNHcmlkV2lkdGhTaXppbmdGb3JJc290b3BlIiwiaW5uZXJXaWR0aCIsImdyaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaXNvIiwicnVuSXNvdG9wZSIsImN1c3RvbVNpZGViYXIiLCJwcm9wIiwicnVuSW1hZ2VUZXN0IiwiaW1nTG9hZGVkIiwidGVzdEltZ0ludCIsInNldEludGVydmFsIiwiY2FyZEltZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9uWmVybyIsIm9mZnNldEhlaWdodCIsImNsZWFySW50ZXJ2YWwiLCJJc290b3BlIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsImdldFNvcnREYXRhIiwibmFtZSIsIml0ZW1FbGVtIiwiZ2V0QXR0cmlidXRlIiwicHJpY2UiLCJOdW1iZXIiLCJyZXZpZXciLCJiZXN0X3NlbGxpbmciLCJuZXdlc3QiLCJjdXN0b21fc29ydF9vcmRlciIsImN1c3RvbV9zb3J0X251bSIsImNoYW5nZSIsInZhbCIsInNwbGl0IiwiYXJyYW5nZSIsInNvcnRCeSIsInNvcnRBc2NlbmRpbmciLCJyYXRpbmdfY291bnQiLCJzZXRUaW1lb3V0Iiwic3ViY2F0ZWdvcmllcyIsInJlc2l6ZUxheW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIkNhdGFsb2dQYWdlIiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImFyZ3VtZW50cyIsIkpTT04iLCJwYXJzZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5IiwicG9wIiwicmVkdWNlIiwiYWNjIiwiY3JlYXRlRXZlbnQiLCJFdmVudCIsInRpdGxlIiwiWVQiLCJOVCIsIlNGIiwiTUYiLCJNQSIsIllOIiwiTk4iLCJGSCIsIkVIIiwiZWFjaCIsImNsaWNrIiwiYmxvY2siLCJpbnB1dCIsInNpYmxpbmdzIiwiaXMiLCJmaWxsRmlsdGVyTGlzdCIsImNsZWFyRmlsdGVyQXRUb3AiLCJ0ZW1wIiwiZW1wdHkiLCJkaXNwYXRjaEV2ZW50IiwiZGVmYXVsdFZpZXdUeXBlIiwib3Bwb3NpdGVWaWV3VHlwZSIsImxvYWRpbmdPdmVybGF5IiwiYWRkVG9nZ2xlRXZlbnRzIiwiaW5pdCIsImdldFN0b3JlZFZpZXdUeXBlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidHlwZSIsInBhZ2VUeXBlIiwic3RvcmVWaWV3VHlwZSIsInNldEl0ZW0iLCJnZXRDYXRlZ29yeVBhZ2UiLCJzaG93IiwiYXBpIiwiZ2V0UGFnZSIsInVybFV0aWxzIiwiZ2V0VXJsIiwiZXJyIiwiRXJyb3IiLCJzdG9yZWRWaWV3VHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNvQjtBQUNKO0FBQ21DO0FBQ3ZDO0FBQzhCO0FBQy9CO0FBQ21CO0FBQUEsSUFFN0NBLFFBQVEsMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixRQUFB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QUksQ0FBQ2pCLGVBQWUsRUFBRTtJQUNqQztJQUVBLElBQUksQ0FBQ1MsZUFBZSxDQUFDLElBQUksQ0FBQ1gsZ0JBQWdCLENBQUM7RUFDL0MsQ0FBQztFQUFBLE9BQUFsTix5QkFBQTtBQUFBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSBcIkBiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzXCI7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSBcIi4vY2F0YWxvZ1wiO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tIFwiLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0c1wiO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSBcIi4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoXCI7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tIFwiLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlsc1wiO1xuaW1wb3J0IElUU0NhdGVnb3J5IGZyb20gXCIuL2N1c3RvbS9pdHMtY2F0ZWdvcnlcIjtcbmltcG9ydCBUb2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3IGZyb20gXCIuL2N1c3RvbS90b2dnbGUtY2F0ZWdvcnktbGlzdGluZy12aWV3XCI7XG5pbXBvcnQgY3VzdG9tR2xvYmFsIGZyb20gXCIuL2N1c3RvbS9pdHMtZ2xvYmFsXCI7XG5pbXBvcnQgeyBjdXN0b21TaWRlYmFyIH0gZnJvbSBcIi4vY3VzdG9tL2N1c3RvbS1zaWRlYmFyLWZpbHRlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG5cbiAgICAvKipcbiAgICAgKiBJbnR1aXRTb2x1dGlvbnMgLSBDdXN0b20gQ2F0ZWdvcnlcbiAgICAgKi9cbiAgICB0aGlzLklUU0NhdGVnb3J5ID0gbmV3IElUU0NhdGVnb3J5KGNvbnRleHQpO1xuICAgIHRoaXMudG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldyA9IG5ldyBUb2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3KGNvbnRleHQpO1xuICB9XG5cbiAgc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGVsZW1lbnQsIHJvbGVUeXBlLCBhcmlhTGl2ZVN0YXR1cykge1xuICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICBcImFyaWEtbGl2ZVwiOiBhcmlhTGl2ZVN0YXR1cyxcbiAgICB9KTtcbiAgfVxuXG4gIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XG4gICAgaWYgKCEkKFwiW2RhdGEtc2hvcC1ieS1wcmljZV1cIikubGVuZ3RoKSByZXR1cm47XG5cbiAgICBpZiAoJChcIi5uYXZMaXN0LWFjdGlvblwiKS5oYXNDbGFzcyhcImlzLWFjdGl2ZVwiKSkge1xuICAgICAgJChcImEubmF2TGlzdC1hY3Rpb24uaXMtYWN0aXZlXCIpLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgJChcImEubmF2TGlzdC1hY3Rpb25cIikub24oXCJjbGlja1wiLCAoKSA9PlxuICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcyhcbiAgICAgICAgJChcInNwYW4ucHJpY2UtZmlsdGVyLW1lc3NhZ2VcIiksXG4gICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgIFwiYXNzZXJ0aXZlXCJcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgb25SZWFkeSgpIHtcbiAgICAvLyB0aGlzLnBvcHVsYXRlR3JpZFByb2R1Y3QoKTtcbiAgICB0aGlzLnZhbGlkYXRlUHJvZHVjdHNDb3VudCgpO1xuICAgIHRoaXMuZHluYW1pY1Jlc2l6ZVByb2R1Y3RHcmlkKCk7XG5cbiAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oXCJjbGlja1wiLCAoZSkgPT5cbiAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoXG4gICAgICAgICQoZS5jdXJyZW50VGFyZ2V0KS5uZXh0KCksXG4gICAgICAgIFwic3RhdHVzXCIsXG4gICAgICAgIFwicG9saXRlXCJcbiAgICAgIClcbiAgICApO1xuXG4gICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XG5cbiAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcblxuICAgIGlmICgkKFwiI2ZhY2V0ZWRTZWFyY2hcIikubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgaG9va3Mub24oXCJzb3J0Qnktc3VibWl0dGVkXCIsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgICQoXCJhLnJlc2V0LWJ0blwiKS5vbihcImNsaWNrXCIsICgpID0+XG4gICAgICB0aGlzLnNldExpdmVSZWdpb25zQXR0cmlidXRlcygkKFwic3Bhbi5yZXNldC1tZXNzYWdlXCIpLCBcInN0YXR1c1wiLCBcInBvbGl0ZVwiKVxuICAgICk7XG5cbiAgICB0aGlzLmFyaWFOb3RpZnlOb1Byb2R1Y3RzKCk7XG4gIH1cblxuICBhcmlhTm90aWZ5Tm9Qcm9kdWN0cygpIHtcbiAgICBjb25zdCAkbm9Qcm9kdWN0c01lc3NhZ2UgPSAkKFwiW2RhdGEtbm8tcHJvZHVjdHMtbm90aWZpY2F0aW9uXVwiKTtcbiAgICBpZiAoJG5vUHJvZHVjdHNNZXNzYWdlLmxlbmd0aCkge1xuICAgICAgJG5vUHJvZHVjdHNNZXNzYWdlLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgY29uc3Qge1xuICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJChcIiNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyXCIpO1xuICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJChcIiNmYWNldGVkLXNlYXJjaC1jb250YWluZXJcIik7XG4gICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgY29uZmlnOiB7XG4gICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgIHByb2R1Y3RMaXN0aW5nOlxuICAgICAgICAgIHRoaXMudG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldy5nZXRSZXF1ZXN0VGVtcGxhdGVUeXBlKFwiY2F0ZWdvcnlcIiksXG4gICAgICAgIHNpZGViYXI6IFwiY2F0ZWdvcnkvc2lkZWJhclwiLFxuICAgICAgfSxcbiAgICAgIHNob3dNb3JlOiBcImNhdGVnb3J5L3Nob3ctbW9yZVwiLFxuICAgIH07XG5cbiAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChcbiAgICAgIHJlcXVlc3RPcHRpb25zLFxuICAgICAgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcblxuICAgICAgICAkKFwiYm9keVwiKS50cmlnZ2VySGFuZGxlcihcImNvbXBhcmVSZXNldFwiKTtcblxuICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIDEwMFxuICAgICAgICApO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnR1aXRTb2x1dGlvbnMgLSBDYXRlZ29yeSBVcGRhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuSVRTQ2F0ZWdvcnkuYWZ0ZXJGYWNldFVwZGF0ZSgpO1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcblxuICAgICQoXCJib2R5XCIpLm9uKFwicHJvZHVjdFZpZXdNb2RlQ2hhbmdlZFwiLCAoKSA9PiB7XG4gICAgICBjb25zdCBOZXdPcHRzID0ge1xuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgcHJvZHVjdExpc3Rpbmc6XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcuZ2V0UmVxdWVzdFRlbXBsYXRlVHlwZShcImNhdGVnb3J5XCIpLFxuICAgICAgICAgIHNpZGViYXI6IFwiY2F0ZWdvcnkvc2lkZWJhclwiLFxuICAgICAgICB9LFxuICAgICAgICBzaG93TW9yZTogXCJjYXRlZ29yeS9zaG93LW1vcmVcIixcbiAgICAgIH07XG5cbiAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaC51cGRhdGVSZXF1ZXN0T3B0aW9ucyhOZXdPcHRzKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vcmVzaXplXG4gIGR5bmFtaWNSZXNpemVQcm9kdWN0R3JpZCgpIHtcbiAgICAvLyBjb25zdCBmaWx0ZXIgPSAkKFwiLmFjdGlvbkJhci5maWx0ZXItLXNlY3Rpb25cIikud2lkdGgoKTtcbiAgICAvLyBjb25zdCB3cmFwcGVyID0gJChcIiNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyXCIpLndpZHRoKCk7XG4gICAgLy8gJChcIiNwcm9kdWN0LWJsb2NrXCIpLndpZHRoKHdyYXBwZXIgLSBmaWx0ZXIpO1xuICAgIC8vIGNvbnNvbGUubG9nKHdyYXBwZXIgLSBmaWx0ZXIpO1xuICB9XG5cbiAgLy9TU0NPREU6IFBvcHVsYXRlIFByb2R1Y3QgR3JpZCBpbiBjYXRlZ29yeS5odG1sXG4gIHZhbGlkYXRlUHJvZHVjdHNDb3VudCgpIHtcbiAgICBjb25zdCBwcm9kdWN0cyA9IHRoaXMuY29udGV4dC5wcm9kdWN0cztcbiAgICBjb25zdCBib2R5ID0gdGhpcztcbiAgICBjb25zdCBVVUlEY2F0YyA9IHRoaXMuY29udGV4dC5VVUlEY2F0YztcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5SWQ7XG4gICAgbGV0IG51bSA9IHRoaXMuY29udGV4dC5udW07XG4gICAgLy8gY29uc29sZS5sb2cocHJvZHVjdHMpO1xuICAgIGNvbnN0IGV4aXN0UHJvZElkID0gW107XG4gICAgcHJvZHVjdHMuZm9yRWFjaCgocHIpID0+IHtcbiAgICAgIGV4aXN0UHJvZElkLnB1c2gocHIuaWQpO1xuICAgIH0pO1xuXG4gICAgJChcIi5maWx0ZXItLWNvbnRhaW5lclwiKS5jc3MoXCJvcGFjaXR5XCIsIFwiNzAlXCIpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZXhpc3RQcm9kSWQpO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9zdWZyaS5hdXRvY29kZS5ydW4vbDV0QGRldi9nZXRBVFByb2R1Y3QvXCIsIHtcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBjYXRlZ29yeUlkIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhLnByb2R1Y3Q7XG4gICAgICAgIGRhdGEuZm9yRWFjaCgocHIpID0+IHtcbiAgICAgICAgICBpZiAoZXhpc3RQcm9kSWQuaW5jbHVkZXMocHJbXCJpZFwiXSkpIHtcbiAgICAgICAgICAgIGNvbnN0ICRpdGVtID0gJChgLnByb2R1Y3RbZGF0YS1lbnRpdHktaWQ9XCIke3ByW1wiaWRcIl19XCJdYCk7XG4gICAgICAgICAgICAkaXRlbS5hdHRyKFwiZGF0YS1iZXN0LXNlbGxpbmdcIiwgYCR7cHJbXCJ0b3RhbF9zb2xkXCJdfWApO1xuICAgICAgICAgICAgJGl0ZW0uYXR0cihcImRhdGEtZGF0ZS1jcmVhdGVkXCIsIGAke3ByW1wiZGF0ZV9jcmVhdGVkXCJdfWApO1xuICAgICAgICAgIH0gZWxzZSBpZiAocHJvZHVjdHMubGVuZ3RoID4gOTkpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gY29uc3RydWN0VGVtcGxhdGUocHIsIG51bSk7XG4gICAgICAgICAgICBudW0gPSBudW0gKyAxO1xuICAgICAgICAgICAgJChcIiNpc290b3BlLWNvbnRhaW5lclwiKS5hcHBlbmQodGVtcGxhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIjbG9hZGVyLWJsb2NrXCIpLmhpZGUoKTtcbiAgICAgICAgYm9keS5uZXdDb25maWd1cmVJc290b3BlRm9yQWxsKCk7XG4gICAgICAgIGJvZHkuc3RhcnRHbG9iYWwoKTtcbiAgICAgICAgLy8gYm9keS5kaXNhYmxlVmlld0RldGFpbEJ1dHRvbigpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG5cbiAgICBmdW5jdGlvbiBjb25zdHJ1Y3RUZW1wbGF0ZShwciwgbnVtKSB7XG4gICAgICBsZXQgaW1nID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByW1wiaW1hZ2VzXCJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChwcltcImltYWdlc1wiXVtpXVtcImlzX3RodW1ibmFpbFwiXSkge1xuICAgICAgICAgIGltZyA9IHByW1wiaW1hZ2VzXCJdW2ldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBhY3Rpb25TZWN0aW9uID0gXCJcIjtcbiAgICAgIGlmIChwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgYWN0aW9uU2VjdGlvbiA9IGA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgcXVpY2t2aWV3IGJ1dHRvbi0tcXVpY2t2aWV3XCIgZGF0YS1wcm9kdWN0LWlkPVwiJHtwcltcImlkXCJdfVwiPlZpZXcgT3B0aW9uczwvYnV0dG9uPmA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3Rpb25TZWN0aW9uID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYXRjIGpzLWNhcmQtYXRjXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0Y19fc2VjdGlvbiBjYXJkLWF0Y19fc2VjdGlvbi0tcXR5XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhcmQtYXRjX19xdHktJHtwcltcImlkXCJdfS0ke1VVSURjYXRjfVwiIGNsYXNzPVwiY2FyZC1hdGNfX2xhYmVsIGlzLXNyT25seVwiPlF1YW50aXR5OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYXRjLWluY3JlbWVudCBjYXJkLWF0Yy1pbmNyZW1lbnQtLWhhcy1idXR0b25zIGpzLWNhcmQtYXRjLWluY3JlbWVudFwiPlxuXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGNsYXNzPVwiZm9ybS1pbnB1dCBjYXJkLWF0Y19faW5wdXQgY2FyZC1hdGNfX2lucHV0LS10b3RhbCBqcy1jYXJkLWF0Y19faW5wdXQtLXRvdGFsXCIgbmFtZT1cImNhcmQtYXRjX19xdHktJHtwcltcImlkXCJdfS0ke1VVSURjYXRjfVwiIGlkPVwiY2FyZC1hdGNfX3F0eS0ke3ByW1wiaWRcIl19LSR7VVVJRGNhdGN9XCIgdmFsdWU9XCIxXCIgbWluPVwiMVwiIHBhdHRlcm49XCJbMC05XSpcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0Yy1idXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0taWNvblwiIGRhdGEtYWN0aW9uPVwiaW5jXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+SW5jcmVhc2UgUXVhbnRpdHkgb2YgdW5kZWZpbmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi13cmFwcGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1hZGRcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uXCIgZGF0YS1hY3Rpb249XCJkZWNcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5EZWNyZWFzZSBRdWFudGl0eSBvZiB1bmRlZmluZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXdyYXBwZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpY29uLW1pbnVzXCI+PC91c2U+UFBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0Y19fc2VjdGlvbiBjYXJkLWF0Y19fc2VjdGlvbi0tYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYXJkLWF0Y19fYnV0dG9uIGJ1dHRvbiBidXR0b24tLXByaW1hcnkganMtY2FyZC1hdGNfX2J1dHRvblwiIGlkPVwiY2FyZC1hdGNfX2FkZC0ke3ByW1wiaWRcIl19LSR7VVVJRGNhdGN9XCIgZGF0YS1kZWZhdWx0LW1lc3NhZ2U9XCJBZGQgdG8gQ2FydFwiIGRhdGEtd2FpdC1tZXNzYWdlPVwiQWRkaW5nIHRvIGNhcnTigKZcIiBkYXRhLWFkZGVkLW1lc3NhZ2U9XCJBZGQgdG8gQ2FydFwiIHZhbHVlPVwiQWRkIHRvIENhcnRcIiBkYXRhLWNhcmQtYWRkLXRvLWNhcnQ9XCIvY2FydC5waHA/YWN0aW9uPWFkZCZhbXA7cHJvZHVjdF9pZD0ke3ByW1wiaWRcIl19XCIgZGF0YS1ldmVudC10eXBlPVwicHJvZHVjdC1jbGlja1wiPkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXN0YXR1cy1tZXNzYWdlIGFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkFkZGluZyB0byBjYXJ04oCmIFRoZSBpdGVtIGhhcyBiZWVuIGFkZGVkPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdC0ke3ByW1wiaWRcIl19XCIgc29ydC1vcmRlcj1cIiR7cHJbXCJzb3J0X29yZGVyXCJdfVwiIFxuICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFwiXG4gICAgICAgICAgcHJvZHVjdC1kYXRhLWNhdGVnb3J5PVwiJHtwcltcImNhdGVnb3JpZXNcIl19XCIgXG4gICAgICAgICAgcHJvZHVjdC1kYXRhLW5hbWU9XCIke3ByW1wiZmFrZS1oZWFkaW5nXCJdfVwiIFxuICAgICAgICAgIHByb2R1Y3QtZGF0YS1yZXZpZXc9XCIke1xuICAgICAgICAgICAgcHJbXCJyZXZpZXdzX2NvdW50XCJdID09PSAwXG4gICAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgICA6IHByW1wicmV2aWV3c19yYXRpbmdfc3VtXCJdIC8gcHJbXCJyZXZpZXdzX2NvdW50XCJdXG4gICAgICAgICAgfVwiXG4gICAgICAgICAgcHJvZHVjdC1yZXZpZXctY291bnQ9XCIke3ByW1wicmV2aWV3c19jb3VudFwiXX1cIiBcbiAgICAgICAgICBwcm9kdWN0LWRhdGEtcHJpY2U9XCIke1xuICAgICAgICAgICAgcHJbXCJ2YXJpYW50c1wiXS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgID8gcHJbXCJ2YXJpYW50c1wiXVswXVtcImNhbGN1bGF0ZWRfcHJpY2VcIl0udG9GaXhlZCgyKVxuICAgICAgICAgICAgICA6IHByW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgfVwiIFxuICAgICAgICAgIHByb2R1Y3QtZGF0ZS1jcmVhdGVkPVwiJHtwcltcImRhdGVfY3JlYXRlZFwiXX1cIiBcbiAgICAgICAgICBwcm9kdWN0LWlzLWZlYXR1cmVkPVwiJHtwcltcImlzX2ZlYXR1cmVkXCJdfVwiIFxuICAgICAgICAgIHByb2R1Y3QtYmVzdC1zZWxsaW5nPVwiJHtwcltcInRvdGFsX3NvbGRcIl19XCJcbiAgICAgICAgICBwcm9kdWN0LWN1c3RvbS1zb3J0LW9yZGVyPVwiJHtwcltcImN1c3RvbS1zb3J0LW9yZGVyXCJdfVwiXG4gICAgICAgICAgZGF0YS1jdXN0b20tbnVtPVwiJHtudW19XCJcbiAgICAgICAgICBcbiAgICAgICAgICBwcm9kdWN0LWZpbHRlci1JQVQ9XCJcIlxuICAgICAgICAgIHByb2R1Y3QtZmlsdGVyLUZCUz1cIlwiXG4gICAgICAgICAgcHJvZHVjdC1maWx0ZXItRkJDPVwiXCJcbiAgICAgICAgICBwcm9kdWN0LWZpbHRlci1DQVQ9XCJcIlxuICAgICAgICAgIHByb2R1Y3QtZmlsdGVyLU5DRj1cIlwiXG4gICAgICAgICAgcHJvZHVjdC1maWx0ZXItTkNQPVwiXCJcbiAgICAgICAgICBwcm9kdWN0LWZpbHRlci1OU0k9XCJcIlxuICAgICAgICAgIHByb2R1Y3QtZmlsdGVyLUhUPVwiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZFwiIGRhdGEtdGVzdD1cImNhcmQtJHtwcltcImlkXCJdfVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJjYXJkLWZpZ3VyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FsZS1mbGFnLXNhc2hcIiBzdHlsZT1cImRpc3BsYXk6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJbXCJ2YXJpYW50c1wiXVswXS5zYWxlX3ByaWNlICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmxvY2s7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gXCI+PHNwYW4gY2xhc3M9XCJzYWxlLXRleHRcIj5PbiBTYWxlPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtwcltcImN1c3RvbV91cmxcIl1bXCJ1cmxcIl19XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1maWd1cmVfX2xpbmtcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiR7cHJbXCJuYW1lXCJdfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1widmFyaWFudHNcIl0ubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgY2FyZC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZ1tcInVybF90aHVtYm5haWxcIl19XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1nW1wiZGVzY3JpcHRpb25cIl1cIiB0aXRsZT1cIiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcltcImZha2UtaGVhZGluZ1wiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNpemVzPVwiYXV0b1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldD1cIiR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA4MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxNjB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMzIwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDY0MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA5NjB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTI4MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxOTIwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDI1NjB3XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmNzZXQ9XCIke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gODB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTYwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDMyMHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA2NDB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gOTYwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDEyODB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTkyMHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAyNTYwd1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWFnZSBsYXp5YXV0b3NpemVzIGxhenlsb2FkZWRcIiBzaXplcz1cIjI0OHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uLWJvZHlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RWaWV3LXR5cGUtdGl0bGUgaDRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC1uYW1lPVwiXCI+JHtwcltcImZha2UtaGVhZGluZ1wiXX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiJHtwcltcIm5hbWVcIl19LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJbXCJ2YXJpYW50c1wiXS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByW1widmFyaWFudHNcIl1bMF1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxjdWxhdGVkX3ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3ByW1wiY3VzdG9tX3VybFwiXVtcInVybFwiXX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJbXCJuYW1lXCJdfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgY2FyZC10ZXh0LS1za3VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBTS1UjOiAke3ByW1wic2t1XCJdfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLXRleHQtLXByaWNlXCIgZGF0YS10ZXN0LWluZm8tdHlwZT1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IHJycC1wcmljZS0td2l0aG91dFRheCBoNFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj4gTVNSUDogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ycnAgaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1widmFyaWFudHNcIl1bMF0uc2FsZV9wcmljZSAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIkXCIgKyBwcltcInZhcmlhbnRzXCJdWzBdLnJldGFpbF9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheCBoNVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj4gV2FzOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IGg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtbGFiZWwgaXMtc3JPbmx5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLW5vdy1sYWJlbCBpcy1zck9ubHlcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+Tm93Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPiQke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1widmFyaWFudHNcIl0ubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsY3VsYXRlZF9wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcltcImNhbGN1bGF0ZWRfcHJpY2VcIl0udG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLXRleHQtLWV4dHJhXCIgc3R5bGU9XCJkaXNwbGF5OiAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1wiY3VzdG9tX2ZpZWxkc1wiXS5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpZWxkKSA9PiBmaWVsZFtcIm5hbWVcIl0gPT09IFwiX19jYXJkLWV4dHJhLWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJlbGF0aXZlO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcltcImN1c3RvbV9maWVsZHNcIl0uZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWVsZCkgPT4gZmllbGRbXCJuYW1lXCJdID09PSBcIl9fY2FyZC1leHRyYS1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJbXCJjdXN0b21fZmllbGRzXCJdLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbXCJuYW1lXCJdID09PSBcIl9fY2FyZC1leHRyYS1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7YWN0aW9uU2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJ3aW5kb3cubG9jYXRpb24uaHJlZj0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcltcImN1c3RvbV91cmxcIl1bXCJ1cmxcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiID5WaWV3IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gIH1cblxuICBzdGFydEdsb2JhbCgpIHtcbiAgICBjdXN0b21HbG9iYWwodGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIG1vYmlsZSB1c2VyXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExMzgxNjczL2RldGVjdGluZy1hLW1vYmlsZS1icm93c2VyXG4gIGNoZWNrTW9iaWxlKCkge1xuICAgIGxldCBjaGVjayA9IGZhbHNlO1xuICAgIChmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKFxuICAgICAgICAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChcbiAgICAgICAgICBhXG4gICAgICAgICkgfHxcbiAgICAgICAgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChcbiAgICAgICAgICBhLnN1YnN0cigwLCA0KVxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIGNoZWNrID0gdHJ1ZTtcbiAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbiAgICByZXR1cm4gY2hlY2s7XG4gIH1cblxuICByZXNldFNlY3Rpb25Dc3NGb3JNb2JpbGVWaWV3KCkge1xuICAgIGlmIChzY3JlZW4ud2lkdGggPCA2MDApIHtcbiAgICAgICQoXCJbc2VjdGlvbi12aWV3XVwiKS5hdHRyKFwiaWRcIiwgXCJcIik7XG4gICAgICAkKFwiW3NlY3Rpb24tdmlld11cIikuYXR0cihcImNsYXNzXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiW3NlY3Rpb24tdmlld11cIikuYXR0cihcImlkXCIsIFwicHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lclwiKTtcbiAgICAgICQoXCJbc2VjdGlvbi12aWV3XVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG4gICAgfVxuICB9XG5cbiAgZHluYW1pY0dyaWRXaWR0aFNpemluZ0Zvcklzb3RvcGUoKSB7XG4gICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBpZiAod2lkdGggPiAxMzAwKSB7XG4gICAgICB3aWR0aCA9IDEyMDA7XG4gICAgfSBlbHNlIGlmICh3aWR0aCA8IDMyMCkge1xuICAgICAgd2lkdGggPSAzMjA7XG4gICAgfSBlbHNlIGlmICh3aWR0aCA8IDYwMCkge1xuICAgICAgLy8gcHVycG9zZWx5IGVtcHR5IGJsb2NrXG4gICAgfSBlbHNlIHtcbiAgICAgIHdpZHRoID0gd2lkdGggLSAzMjA7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldFNlY3Rpb25Dc3NGb3JNb2JpbGVWaWV3KCk7XG4gICAgLy8gY29uc29sZS5sb2cod2lkdGgpO1xuXG4gICAgJChcIiNncmlkLWFsbC1wcm9kdWN0XCIpLmNzcyhcIndpZHRoXCIsIGAke3dpZHRofXB4YCk7XG4gIH1cblxuICBuZXdDb25maWd1cmVJc290b3BlRm9yQWxsKCkge1xuICAgIC8vICQoXCIuZ3JpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZ3JpZFwiKTtcbiAgICAvLyAgICQoXCIubGRzLWJsb2NrXCIpLmhpZGUoKTtcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXNvdG9wZS1jb250YWluZXJcIik7XG4gICAgY29uc3QgYm9keSA9IHRoaXM7XG5cbiAgICAvLyBmb3IgdGVzdGluZywgY29tbWVudCB0aGlzIHNlY3Rpb24gYW5kIGNhbGwgdGhlIHJ1bkltYWdlVGVzdCgpXG4gICAgbGV0IGlzbztcbiAgICBydW5Jc290b3BlKCk7XG4gICAgY3VzdG9tU2lkZWJhcigpO1xuICAgICQoXCIuZmlsdGVyLS1jb250YWluZXJcIikuY3NzKFwib3BhY2l0eVwiLCBcIjEwMCVcIik7XG4gICAgJChcIiNhbGwtc29ydC1zZWxlY3QsICNhbGwtc29ydC1zZWxlY3RcIikucHJvcChcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICAvLyBpZiAodGhpcy5jaGVja01vYmlsZSgpKSB7XG4gICAgLy8gICBydW5JbWFnZVRlc3QoKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgJChcIi5ncmlkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJncmlkXCIpO1xuICAgIC8vICAgJChcIi5sZHMtYmxvY2tcIikuaGlkZSgpO1xuICAgIC8vICAgcnVuSXNvdG9wZSgpO1xuICAgIC8vIH1cblxuICAgIC8vIHJ1bkltYWdlVGVzdCgpO1xuXG4gICAgLy8gaXQgd2lsbCBjYWxsIHJ1bklzb3RvcGUoKSBpZiBhbGwgaW1hZ2VzIGFyZSBsb2FkZWRcbiAgICBmdW5jdGlvbiBydW5JbWFnZVRlc3QoKSB7XG4gICAgICAvLyAgICQoXCIuZ3JpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZ3JpZFwiKTtcbiAgICAgIC8vICAgJChcIi5sZHMtYmxvY2tcIikuaGlkZSgpO1xuXG4gICAgICBsZXQgaW1nTG9hZGVkID0gdHJ1ZTtcblxuICAgICAgbGV0IHRlc3RJbWdJbnQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHZhciBjYXJkSW1ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgXCIjZ3JpZC1hbGwtcHJvZHVjdCAuY2FyZC1pbWFnZVwiXG4gICAgICAgICk7XG4gICAgICAgIGlmIChjYXJkSW1ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXJkSW1ncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5vblplcm8gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGNhcmRJbWdzW2ldLm9mZnNldEhlaWdodCA8IDEwMCkge1xuICAgICAgICAgICAgICBpbWdMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgbm9uWmVybyA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub25aZXJvKSB7XG4gICAgICAgICAgICAgIGltZ0xvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltZ0xvYWRlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltZ0xvYWRlZCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGVzdEltZ0ludCk7XG4gICAgICAgICAgcnVuSXNvdG9wZSgpO1xuICAgICAgICAgIC8vIGJvZHkuY29uZmlndXJlSXNvdG9wZUZvckFsbCgpO1xuICAgICAgICAgIC8vIGJvZHkuc3RhcnRHbG9iYWwoKTtcbiAgICAgICAgICAvLyAkKFwiLmxkcy1ibG9ja1wiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklzb3RvcGUoKSB7XG4gICAgICAvLyAkKHdpbmRvdykubG9hZChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgaXNvID0gbmV3IElzb3RvcGUoZ3JpZCwge1xuICAgICAgICAvLyBvcHRpb25zLi4uXG4gICAgICAgIGl0ZW1TZWxlY3RvcjogXCIucHJvZHVjdFwiLFxuICAgICAgICBsYXlvdXRNb2RlOiBcImZpdFJvd3NcIixcbiAgICAgICAgZ2V0U29ydERhdGE6IHtcbiAgICAgICAgICBuYW1lOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmljZTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvZHVjdC1wcmljZVwiKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXZpZXc6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcImRhdGEtcmF0aW5nXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYmVzdF9zZWxsaW5nOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1iZXN0LXNlbGxpbmdcIikpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbmV3ZXN0OiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRhdGUtY3JlYXRlZFwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1c3RvbV9zb3J0X29yZGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1jdXN0b20tc29ydFwiKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXN0b21fc29ydF9udW06IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWN1c3RvbS1udW1cIikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gfSwgMCk7XG5cbiAgICAgICQoXCIjYWxsLXNvcnQtc2VsZWN0LCAjYWxsLXNvcnQtc2VsZWN0LW1vYmlsZVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB2YWwgPSAkKHRoaXMpLnZhbCgpLnNwbGl0KFwiLVwiKTtcblxuICAgICAgICBpZiAodmFsWzBdID09PSBcInJldmlld1wiKSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgc29ydEJ5OiBbdmFsWzBdLCBcInJhdGluZ19jb3VudFwiXSxcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IHtcbiAgICAgICAgICAgICAgcmV2aWV3OiBmYWxzZSxcbiAgICAgICAgICAgICAgcmF0aW5nX2NvdW50OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgc29ydEJ5OiB2YWxbMF0sXG4gICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB2YWxbMV0gPT09IFwiYXNjXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkKFwiI2FsbC1zb3J0LXNlbGVjdCwgI3NvcnQtYnV0dG9uXCIpLnByb3AoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYm9keS5jb250ZXh0LnN1YmNhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgc29ydEJ5OiBcImN1c3RvbV9zb3J0X29yZGVyXCIsXG4gICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICAgIHNvcnRCeTogXCJjdXN0b21fc29ydF9udW1cIixcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDMpO1xuXG4gICAgICBsZXQgcmVzaXplTGF5b3V0ID0gZmFsc2U7XG5cbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHJlc2l6ZUxheW91dCA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIGlzby5vbihcImxheW91dENvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHJlc2l6ZUxheW91dCkge1xuICAgICAgICAgIHJlc2l6ZUxheW91dCA9IGZhbHNlO1xuICAgICAgICAgIGlzby5hcnJhbmdlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vKlxuICBjb25maWd1cmVJc290b3BlRm9yQWxsKCkge1xuICAgIC8vICQoXCIuZ3JpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZ3JpZFwiKTtcbiAgICAvLyAgICQoXCIubGRzLWJsb2NrXCIpLmhpZGUoKTtcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JpZC1hbGwtcHJvZHVjdFwiKTtcbiAgICBjb25zdCBib2R5ID0gdGhpcztcblxuICAgIC8vIGZvciB0ZXN0aW5nLCBjb21tZW50IHRoaXMgc2VjdGlvbiBhbmQgY2FsbCB0aGUgcnVuSW1hZ2VUZXN0KClcbiAgICBsZXQgaXNvO1xuICAgIGlmICh0aGlzLmNoZWNrTW9iaWxlKCkpIHtcbiAgICAgIHJ1bkltYWdlVGVzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiLmdyaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImdyaWRcIik7XG4gICAgICAkKFwiLmxkcy1ibG9ja1wiKS5oaWRlKCk7XG4gICAgICBydW5Jc290b3BlKCk7XG4gICAgfVxuXG4gICAgLy8gJChcIltpbnB1dC1maWx0ZXJdXCIpLm9uKFwiY2hhbmdlXCIsIGdldElzb3RvcGVGaWx0ZXIpO1xuICAgIC8vIENoZWNrYm94VXBkYXRlZFxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJDaGVja2JveFVwZGF0ZWRcIiwgKCkgPT4ge1xuICAgICAgZ2V0SXNvdG9wZUZpbHRlcigpO1xuICAgIH0pO1xuXG4gICAgYm9keS5keW5hbWljR3JpZFdpZHRoU2l6aW5nRm9ySXNvdG9wZSgpO1xuICAgIGxldCByZXNpemVkID0gdHJ1ZTtcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc2l6ZWQgPSB0cnVlO1xuICAgICAgYm9keS5keW5hbWljR3JpZFdpZHRoU2l6aW5nRm9ySXNvdG9wZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gcnVuSW1hZ2VUZXN0KCk7XG5cbiAgICAvLyBpdCB3aWxsIGNhbGwgcnVuSXNvdG9wZSgpIGlmIGFsbCBpbWFnZXMgYXJlIGxvYWRlZFxuICAgIGZ1bmN0aW9uIHJ1bkltYWdlVGVzdCgpIHtcbiAgICAgICQoXCIuZ3JpZFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiZ3JpZFwiKTtcbiAgICAgICQoXCIubGRzLWJsb2NrXCIpLmhpZGUoKTtcblxuICAgICAgbGV0IGltZ0xvYWRlZCA9IHRydWU7XG5cbiAgICAgIGxldCB0ZXN0SW1nSW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB2YXIgY2FyZEltZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgIFwiI2dyaWQtYWxsLXByb2R1Y3QgLmNhcmQtaW1hZ2VcIlxuICAgICAgICApO1xuICAgICAgICBpZiAoY2FyZEltZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2FyZEltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBub25aZXJvID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChjYXJkSW1nc1tpXS5vZmZzZXRIZWlnaHQgPCAxMDApIHtcbiAgICAgICAgICAgICAgaW1nTG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIG5vblplcm8gPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9uWmVybykge1xuICAgICAgICAgICAgICBpbWdMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbWdMb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbWdMb2FkZWQpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHRlc3RJbWdJbnQpO1xuICAgICAgICAgIHJ1bklzb3RvcGUoKTtcbiAgICAgICAgICAvLyBib2R5LmNvbmZpZ3VyZUlzb3RvcGVGb3JBbGwoKTtcbiAgICAgICAgICAvLyBib2R5LnN0YXJ0R2xvYmFsKCk7XG4gICAgICAgICAgLy8gJChcIi5sZHMtYmxvY2tcIikuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5Jc290b3BlKCkge1xuICAgICAgLy8gJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgIGlzbyA9IG5ldyBJc290b3BlKGdyaWQsIHtcbiAgICAgICAgLy8gb3B0aW9ucy4uLlxuICAgICAgICBpdGVtU2VsZWN0b3I6IFwiLnByb2R1Y3RcIixcbiAgICAgICAgbGF5b3V0TW9kZTogXCJmaXRSb3dzXCIsXG4gICAgICAgIGdldFNvcnREYXRhOiB7XG4gICAgICAgICAgbmFtZTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRhLW5hbWVcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwcmljZTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1wcmljZVwiKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXZpZXc6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1yZXZpZXdcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjYXRlZ29yeTogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRhLWNhdGVnb3J5XCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYmVzdF9zZWxsaW5nOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1iZXN0LXNlbGxpbmdcIikpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbmV3ZXN0OiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGUtY3JlYXRlZFwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGN1c3RvbV9zb3J0X29yZGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1jdXN0b20tc29ydC1vcmRlclwiKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgICAvLyB9LCAwKTtcblxuICAgICAgJChcIiNhbGwtc29ydC1zZWxlY3QsICNhbGwtc29ydC1zZWxlY3QtbW9iaWxlXCIpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9ICQodGhpcykudmFsKCkuc3BsaXQoXCItXCIpO1xuXG4gICAgICAgIGlmICh2YWxbMF0gPT09IFwicmV2aWV3XCIpIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgICBzb3J0Qnk6IFt2YWxbMF0sIFwicmF0aW5nX2NvdW50XCJdLFxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzoge1xuICAgICAgICAgICAgICByZXZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgICByYXRpbmdfY291bnQ6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgICBzb3J0Qnk6IHZhbFswXSxcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IHZhbFsxXSA9PT0gXCJhc2NcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZpbHRlcl9hcnIgPSBbXTtcblxuICAgICAgJChcIltjaGVja2JveC1maWx0ZXItYWxsXVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBpc2ZlYXR1cmVkID0gJChcIiNmZWF0dXJlZC1jaGVja2JveDpjaGVja2VkXCIpLmxlbmd0aCA+IDA7XG4gICAgICAgIGlmICgkKHRoaXMpLmF0dHIoXCJpZFwiKSAhPT0gXCJmZWF0dXJlZC1jaGVja2JveFwiKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgZmlsdGVyX2Fyci5wdXNoKCQodGhpcykuYXR0cihcImZpbHRlci12YWx1ZVwiKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZmlsdGVyX2Fyci5pbmRleE9mKCQodGhpcykuYXR0cihcImZpbHRlci12YWx1ZVwiKSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAvLyBvbmx5IHNwbGljZSBhcnJheSB3aGVuIGl0ZW0gaXMgZm91bmRcbiAgICAgICAgICAgICAgZmlsdGVyX2Fyci5zcGxpY2UoaW5kZXgsIDEpOyAvLyAybmQgcGFyYW1ldGVyIG1lYW5zIHJlbW92ZSBvbmUgaXRlbSBvbmx5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpbHRlcl9hcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICAgIC8vIGl0ZW0gZWxlbWVudCBwcm92aWRlZCBhcyBhcmd1bWVudFxuICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsID0gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRhLWNhdGVnb3J5XCIpO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbHRlcl9hcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsLmluY2x1ZGVzKGZpbHRlcl9hcnJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaXNmZWF0dXJlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtaXMtZmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGlzZmVhdHVyZWQpIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1pcy1mZWF0dXJlZFwiKSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzby5hcnJhbmdlKHsgZmlsdGVyOiBcIipcIiB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlzby5vbihcImxheW91dENvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHJlc2l6ZWQpIHtcbiAgICAgICAgICByZXNpemVkID0gZmFsc2U7XG4gICAgICAgICAgaXNvLmFycmFuZ2UoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYm9keS5jb250ZXh0LnN1YmNhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgc29ydEJ5OiBcImN1c3RvbV9zb3J0X29yZGVyXCIsXG4gICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICAgIHNvcnRCeTogXCJiZXN0X3NlbGxpbmdcIixcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCAzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRJc290b3BlRmlsdGVyKCkge1xuICAgICAgaWYgKCQoXCJbaW5wdXQtZmlsdGVyXTpjaGVja2VkXCIpLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgZmluYWwgPSBcIlwiO1xuICAgICAgY29uc3QgYXJyYXlJbnB1dCA9IFtcbiAgICAgICAgeyBuYW1lOiBcInByb2R1Y3QtZmlsdGVyLUlBVFwiLCBhcnJheTogW10gfSxcbiAgICAgICAgeyBuYW1lOiBcInByb2R1Y3QtZmlsdGVyLUZCU1wiLCBhcnJheTogW10gfSxcbiAgICAgICAgeyBuYW1lOiBcInByb2R1Y3QtZmlsdGVyLUZCQ1wiLCBhcnJheTogW10gfSxcbiAgICAgICAgeyBuYW1lOiBcInByb2R1Y3QtZmlsdGVyLUNBVFwiLCBhcnJheTogW10gfSxcbiAgICAgICAgeyBuYW1lOiBcInByb2R1Y3QtZmlsdGVyLU5DRlwiLCBhcnJheTogW10gfSxcbiAgICAgICAgeyBuYW1lOiBcInByb2R1Y3QtZmlsdGVyLU5DUFwiLCBhcnJheTogW10gfSxcbiAgICAgICAgeyBuYW1lOiBcInByb2R1Y3QtZmlsdGVyLU5TSVwiLCBhcnJheTogW10gfSxcbiAgICAgICAgeyBuYW1lOiBcInByb2R1Y3QtZmlsdGVyLUhUXCIsIGFycmF5OiBbXSB9LFxuICAgICAgXTtcbiAgICAgIGNvbnN0IHRlbXBfZGljdCA9IHt9O1xuICAgICAgZnVuY3Rpb24gZmluZENvbWJpbmF0aW9ucyhhcnJheXMsIHJlc3VsdCA9IFwiXCIsIGN1cnJlbnRJbmRleCA9IDApIHtcbiAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gYXJyYXlzLmxlbmd0aCkge1xuICAgICAgICAgIGZpbmFsID0gZmluYWwgKyByZXN1bHQudHJpbSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpICsgXCIgXCI7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LnRyaW0oKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRBcnJheSA9IGFycmF5c1tjdXJyZW50SW5kZXhdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRBcnJheS5hcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRFbGVtZW50ID0gY3VycmVudEFycmF5LmFycmF5W2ldO1xuICAgICAgICAgIGxldCBjdXJyZW50UmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudCAhPT0gXCJcIikge1xuICAgICAgICAgICAgY3VycmVudFJlc3VsdCA9IGAke3Jlc3VsdH1bJHtjdXJyZW50QXJyYXkubmFtZX09JyR7Y3VycmVudEVsZW1lbnR9J10gYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZmluZENvbWJpbmF0aW9ucyhhcnJheXMsIGN1cnJlbnRSZXN1bHQsIGN1cnJlbnRJbmRleCArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICQoXCJbaW5wdXQtZmlsdGVyXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB2YWwgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSAkKHRoaXMpLmF0dHIoXCJpbnB1dC1maWx0ZXJcIik7XG4gICAgICAgIGlmICh0ZW1wX2RpY3RbdHlwZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRlbXBfZGljdFt0eXBlXSA9IFskKHRoaXMpLnZhbCgpXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wX2RpY3RbdHlwZV0ucHVzaCgkKHRoaXMpLnZhbCgpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGFycmF5SW5wdXQuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICBjb25zdCBfdGVtcCA9IHhbXCJuYW1lXCJdLnNwbGl0KFwiLVwiKTtcbiAgICAgICAgY29uc3QgayA9IF90ZW1wW190ZW1wLmxlbmd0aCAtIDFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHhbXCJhcnJheVwiXSA9IHRlbXBfZGljdFtrXSA9PT0gdW5kZWZpbmVkID8gW1wiXCJdIDogdGVtcF9kaWN0W2tdO1xuICAgICAgfSk7XG4gICAgICBmaW5hbCA9IFwiXCI7XG4gICAgICBmaW5kQ29tYmluYXRpb25zKGFycmF5SW5wdXQpO1xuICAgICAgY29uc29sZS5sb2coZmluYWwpO1xuICAgIH1cbiAgfVxuKi9cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiIsImNvbnN0IGN1c3RvbVNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgY3JlYXRlRXZlbnQgPSBuZXcgRXZlbnQoXCJDaGVja2JveFVwZGF0ZWRcIiwge30pO1xyXG4gIGNvbnN0IHRpdGxlID0ge1xyXG4gICAgLy8gSW5jbHVkZSBBdXRvbWF0aWMgVGFwZXI/XHJcbiAgICBZVDogXCJUYXBlciBJbmNsdWRlZFwiLFxyXG4gICAgTlQ6IFwiTm8gVGFwZXJcIixcclxuXHJcbiAgICAvLyBGbGF0IEJveCBTZXQgU2l6ZXM6XHJcbiAgICA3MTA6IGA3XCIvMTBcIiBCb3hlc2AsXHJcbiAgICAxMDEyOiBgMTBcIi8xMlwiIEJveGVzYCxcclxuICAgIDcxMDEyOiBgN1wiLzEwXCIvMTJcIiBCb3hlc2AsXHJcblxyXG4gICAgLy8gRmxhdCBCb3ggQ2FwYWNpdGllczpcclxuICAgIFNGOiBgU3RhbmRhcmRgLFxyXG4gICAgTUY6IGBNRUdBYCxcclxuXHJcbiAgICAvLyBDb3JuZXIgQXBwbGljYXRvciBUeXBlOlxyXG4gICAgTUE6IFwiTWluaVNob3TihKJcIixcclxuICAgIFwiN0FcIjogJzdcIiBDb3JuZXIgQm94JyxcclxuICAgIFwiOEFcIjogJzhcIiBDb3JuZXIgQm94JyxcclxuXHJcbiAgICAvLyAjIG9mIENvcm5lciBGaW5pc2hlcnM6XHJcbiAgICBcIjAzXCI6IGAzXCIgQ29ybmVyIEZpbmlzaGVyYCxcclxuICAgIFwiMDMzNVwiOiBgM1wiLzMuNVwiIENvcm5lciBGaW5pc2hlcnNgLFxyXG5cclxuICAgIC8vICMgb2YgQ29tcG91bmQgUHVtcHM6XHJcbiAgICBcIjFQXCI6IFwiMSBQdW1wXCIsXHJcbiAgICBcIjJQXCI6IFwiMiBQdW1wc1wiLFxyXG5cclxuICAgIC8vIE5haWwgU3BvdHRlciBJbmNsdWRlZD9cclxuICAgIFlOOiBcIk5haWwgU3BvdHRlclwiLFxyXG4gICAgTk46IFwiTm8gTmFpbCBTcG90dGVyXCIsXHJcblxyXG4gICAgLy8gSGFuZGxlIFR5cGU6XHJcbiAgICBGSDogXCJGTCBIYW5kbGVzXCIsXHJcbiAgICBFSDogXCJFeHQgSGFuZGxlc1wiLFxyXG4gIH07XHJcblxyXG4gICQoXCIuZmlsdGVyLS1zaG93X2J1dHRvblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBibG9jayA9ICQoYFtmaWx0ZXItYmxvY2s9XCIkeyQodGhpcykuYXR0cihcImZpbHRlci1idXR0b25cIil9XCJdYCk7XHJcbiAgICAgIGlmIChibG9jay5jc3MoXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgIGJsb2NrLmNzcyhcImRpc3BsYXlcIiwgXCJncmlkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGJsb2NrLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLnRhZ190aXRsZS0tYmxvY2tcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgaW5wdXQgPSAkKHRoaXMpLnNpYmxpbmdzKCkuZmluZChcImlucHV0XCIpO1xyXG4gICAgaWYgKGlucHV0LmlzKFwiOmNoZWNrZWRcIikpIHtcclxuICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5wdXQucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBmaWxsRmlsdGVyTGlzdCgpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiW2lucHV0LWZpbHRlcl1cIikub24oXCJjaGFuZ2VcIiwgZmlsbEZpbHRlckxpc3QpO1xyXG5cclxuICBmdW5jdGlvbiBjbGVhckZpbHRlckF0VG9wKHZhbCkge1xyXG4gICAgJChgW2lucHV0LWZpbHRlcl1bdmFsdWU9XCIke3ZhbH1cIl1gKS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICBmaWxsRmlsdGVyTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsbEZpbHRlckxpc3QoKSB7XHJcbiAgICBjb25zdCB0ZW1wID0gW107XHJcbiAgICAkKFwiLmZpbHRlci1saXN0X2NvbnRhaW5lclwiKS5lbXB0eSgpO1xyXG5cclxuICAgICQoXCJbaW5wdXQtZmlsdGVyXTpjaGVja2VkXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICB0ZW1wLnB1c2godmFsKTtcclxuICAgICAgJChcIi5maWx0ZXItbGlzdF9jb250YWluZXJcIikuYXBwZW5kKFxyXG4gICAgICAgIGA8bGkgY2xhc3M9XCJmaWx0ZXItbGlzdFwiIGRhdGE9XCIke3ZhbH1cIlwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAke3RpdGxlW3ZhbF19XHJcbiAgICAgIDxkaXY+eDwvZGl2PlxyXG4gICAgICA8L2Rpdj48L2xpPmBcclxuICAgICAgKTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChgLmZpbHRlci1saXN0W2RhdGE9XCIke3ZhbH1cIl1gKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBjbGVhckZpbHRlckF0VG9wKHZhbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgd2luZG93LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGN1c3RvbVNpZGViYXIgfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVRTQ2F0ZWdvcnkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICBhZnRlckZhY2V0VXBkYXRlKCkge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4uL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuZGVmYXVsdFZpZXdUeXBlID0gdGhpcy5jb250ZXh0LmRlZmF1bHRWaWV3VHlwZTtcbiAgICAgICAgdGhpcy5vcHBvc2l0ZVZpZXdUeXBlID0gdGhpcy5kZWZhdWx0Vmlld1R5cGUgIT09ICdncmlkJyA/ICdncmlkJyA6ICdsaXN0JztcbiAgICAgICAgdGhpcy5wcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIHRoaXMubG9hZGluZ092ZXJsYXkgPSAkKCcubG9hZGluZ092ZXJsYXkubG9hZGluZ092ZXJsYXktLXByb2R1Y3QtbGlzdGluZycpO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignZmFjZXRlZFNlYXJjaFJlZnJlc2gnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFRvZ2dsZUV2ZW50cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yZWRWaWV3VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3J5LXZpZXctdHlwZScpIHx8IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdFRlbXBsYXRlVHlwZSh0eXBlKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VUeXBlID0gdGhpcy5nZXRTdG9yZWRWaWV3VHlwZSgpO1xuICAgICAgICByZXR1cm4gIXBhZ2VUeXBlID8gYCR7dHlwZX0vcHJvZHVjdC1saXN0aW5nYCA6IGBjdXN0b20vY2F0ZWdvcnktJHtwYWdlVHlwZX0tdmlld2A7XG4gICAgfVxuXG4gICAgc3RvcmVWaWV3VHlwZSh0eXBlKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NhdGVnb3J5LXZpZXctdHlwZScsIHR5cGUpO1xuICAgIH1cblxuICAgIGdldENhdGVnb3J5UGFnZShwYWdlVHlwZSkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMucHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBjdXN0b20vY2F0ZWdvcnktJHtwYWdlVHlwZX0tdmlld2AsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nT3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIGNvbmZpZywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpLmh0bWwoY29udGVudCk7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZ092ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3JlVmlld1R5cGUocGFnZVR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZFRvZ2dsZUV2ZW50cygpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ3Byb2R1Y3RWaWV3TW9kZUNoYW5nZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkVG9nZ2xlRXZlbnRzKCkge1xuICAgICAgICAkKCcuanMtY2F0ZWdvcnlfX3RvZ2dsZS12aWV3Jykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAkKGUuY3VycmVudFRhcmdldCkuZGF0YSgndmlldy10eXBlJyk7XG5cbiAgICAgICAgICAgIGlmICgkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2FjdGl2ZS1jYXRlZ29yeS12aWV3JykpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5nZXRDYXRlZ29yeVBhZ2UodHlwZSwgdGhpcy5hZGRUb2dnbGVFdmVudHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzdG9yZWRWaWV3VHlwZSA9IHRoaXMuZ2V0U3RvcmVkVmlld1R5cGUoKTtcblxuICAgICAgICBpZiAoc3RvcmVkVmlld1R5cGUgPT09IHRoaXMuZGVmYXVsdFZpZXdUeXBlIHx8ICFzdG9yZWRWaWV3VHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkVG9nZ2xlRXZlbnRzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldENhdGVnb3J5UGFnZSh0aGlzLm9wcG9zaXRlVmlld1R5cGUpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=