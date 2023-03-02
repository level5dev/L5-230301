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
    this.populateGridProduct();
    this.arrangeFocusOnSortBy();
    Object(_custom_custom_sidebar_filter_js__WEBPACK_IMPORTED_MODULE_8__["customSidebar"])();
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

  //SSCODE: Populate Product Grid in category.html
  ;
  _proto.populateGridProduct = function populateGridProduct() {
    var body = this;
    var UUIDcatc = this.context.UUIDcatc;
    var categoryId = this.context.categoryId;
    axios.get("https://sufri.api.stdlib.com/l5t@dev/getAllProduct/", {
      params: {
        id: categoryId
      }
    }).then(function (response) {
      var gridAllProducts = $("#grid-all-product");
      var data = response.data.product;
      var category = response.data.category;
      console.log(response);
      data.forEach(function (pr) {
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
        var template = "\n          <div id=\"product-" + pr["id"] + "\" sort-order=\"" + pr["sort_order"] + "\" \n          class=\"product\"\n          product-data-category=\"" + getAllCategory(category, pr["categories"]) + "\" \n          product-data-name=\"" + pr["fake-heading"] + "\" \n          product-data-review=\"" + (pr["reviews_count"] === 0 ? 0 : pr["reviews_rating_sum"] / pr["reviews_count"]) + "\"\n          product-review-count=\"" + pr["reviews_count"] + "\" \n          product-data-price=\"" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\" \n          product-date-created=\"" + pr["date_created"] + "\" \n          product-is-featured=\"" + pr["is_featured"] + "\" \n          product-best-selling=\"" + pr["total_sold"] + "\"\n          product-custom-sort-order=\"" + pr["custom-sort-order"] + "\"\n          \n          product-filter-ITA=\"\"\n          product-filter-FBS=\"\"\n          product-filter-FBC=\"\"\n          product-filter-CAT=\"\"\n          product-filter-NCF=\"\"\n          product-filter-NCP=\"\"\n          product-filter-NSI=\"\"\n          product-filter-HT=\"\"\n          >\n              <div class=\"card-wrapper\">\n                  <article class=\"card\" data-test=\"card-" + pr["id"] + "\">\n                      <figure class=\"card-figure\">\n                          <div class=\"sale-flag-sash\" style=\"display: " + (pr["variants"][0].sale_price !== 0 ? "block;" : "none;") + " \"><span class=\"sale-text\">On Sale</span></div>\n                          <a href=\"" + pr["custom_url"]["url"] + "\" \n                          class=\"card-figure__link\" \n                          aria-label=\"" + pr["name"] + ", \n                          $" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\">\n                              <div class=\" card-img-container\">\n                                  <img src=\"" + img["url_thumbnail"] + "\" \n                                  alt=\"img[\"description\"]\" title=\"" + pr["fake-heading"] + "\" \n                                  data-sizes=\"auto\" \n                                  srcset=\"" + img["url_standard"] + " 80w, \n                                  " + img["url_standard"] + " 160w, \n                                  " + img["url_standard"] + " 320w, \n                                  " + img["url_standard"] + " 640w, \n                                  " + img["url_standard"] + " 960w, \n                                  " + img["url_standard"] + " 1280w, \n                                  " + img["url_standard"] + " 1920w, \n                                  " + img["url_standard"] + " 2560w\" \n                                  data-srcset=\"" + img["url_standard"] + " 80w, \n                                  " + img["url_standard"] + " 160w, \n                                  " + img["url_standard"] + " 320w, \n                                  " + img["url_standard"] + " 640w, \n                                  " + img["url_standard"] + " 960w, \n                                  " + img["url_standard"] + " 1280w, \n                                  " + img["url_standard"] + " 1920w, \n                                  " + img["url_standard"] + " 2560w\" \n                                  class=\"card-image lazyautosizes lazyloaded\" sizes=\"248px\">\n                              </div>\n                          </a>\n                         <figcaption class=\"card-figcaption\">\n                              <div class=\"card-figcaption-body\"></div>\n                         </figcaption>\n                      </figure>\n                      <div class=\"card-body\">\n                          <p class=\"productView-type-title h4\" \n                          product-name=\"\">" + pr["fake-heading"] + "</p>\n                          <h3 class=\"card-title \">\n                              <a aria-label=\"" + pr["name"] + ", \n                                $" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\" \n                              href=\"" + pr["custom_url"]["url"] + "\">\n                              " + pr["name"] + "</a>\n                          </h3>\n                          <p class=\"card-text card-text--sku\">\n                              <span> SKU#: " + pr["sku"] + " </span>\n                          </p>\n                          <div class=\"card-text card-text--price\" data-test-info-type=\"price\">\n                              <div class=\"price-section price-section--withoutTax rrp-price--withoutTax h4\" style=\"display: block;\">\n                                  <span class=\"is-srOnly\"> MSRP: </span>\n                                  <span data-product-rrp-price-without-tax=\"\" class=\"price price--rrp h5\">\n                                    " + (pr["variants"][0].sale_price !== 0 ? "$" + pr["variants"][0].retail_price : "") + "\n                                  </span>\n                              </div>\n                              <div class=\"price-section price-section--withoutTax non-sale-price--withoutTax h5\" style=\"display: none;\">\n                                <span class=\"is-srOnly\"> Was: </span>\n                                <span data-product-non-sale-price-without-tax=\"\" class=\"price price--non-sale\"></span>\n                              </div>\n                              <div class=\"price-section price-section--withoutTax h4\">\n                                <span class=\"price-label is-srOnly\"></span>\n                                <span class=\"price-now-label is-srOnly\" style=\"display: none;\">Now:</span>\n                                <span data-product-price-without-tax=\"\" class=\"price price--withoutTax\">$" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "</span>\n                              </div>\n                          </div>\n                          <p class=\"card-text card-text--extra\" style=\"display: " + (pr["custom_fields"].find(function (field) {
          return field["name"] === "__card-extra-info";
        }) !== undefined ? "relative;" : "none;") + " \"> \n                          " + (pr["custom_fields"].find(function (field) {
          return field["name"] === "__card-extra-info";
        }) !== undefined ? pr["custom_fields"].find(function (field) {
          return field["name"] === "__card-extra-info";
        }).value : "") + "</p>\n                         <div class=\"card-action-wrapper\">\n                              " + actionSection + "\n                              <button type=\"button\" onclick=\"window.location.href=" + pr["custom_url"]["url"] + "\" \n                              class=\"button button--primary button--quickview\" >View Details</button>\n                         </div>\n                      </div>\n                  </article>\n              </div>\n          </div>";
        gridAllProducts.append(template);
      });
      body.configureIsotopeForAll();
      body.startGlobal();
    })["catch"](function (error) {
      console.log("error", error);
    });
    function getAllCategory(cat_list, pr_cat) {
      var cat = "";
      for (var i = 0; i < pr_cat.length; i++) {
        if (cat_list[pr_cat[i]] !== undefined) {
          cat = cat + cat_list[pr_cat[i]]["cat_id"].join(" ") + " ";
        }
      }
      return cat;
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
    } else if (width < 600) {} else {
      width = width - 240;
    }
    this.resetSectionCssForMobileView();
    // console.log(width);

    $("#grid-all-product").css("width", width + "px");
  };
  _proto.configureIsotopeForAll = function configureIsotopeForAll() {
    // $(".grid").css("display", "grid");
    //   $(".lds-block").hide();
    var grid = document.getElementById("grid-all-product");
    var body = this;

    // for testing, comment this section and call the runImageTest()
    var iso;
    if (this.checkMobile()) {
      runImageTest();
    } else {
      $(".grid").css("display", "grid");
      $(".lds-block").hide();
      runIsotope();
    }
    body.dynamicGridWidthSizingForIsotope();
    var resized = true;
    $(window).resize(function () {
      resized = true;
      body.dynamicGridWidthSizingForIsotope();
    });

    // runImageTest();

    // it will call runIsotope() if all images are loaded
    function runImageTest() {
      $(".grid").css("display", "grid");
      $(".lds-block").hide();
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
            return itemElem.getAttribute("product-data-name");
          },
          price: function price(itemElem) {
            return Number(itemElem.getAttribute("product-data-price"));
          },
          review: function review(itemElem) {
            return itemElem.getAttribute("product-data-review");
          },
          category: function category(itemElem) {
            return itemElem.getAttribute("product-data-category");
          },
          best_selling: function best_selling(itemElem) {
            return Number(itemElem.getAttribute("product-best-selling"));
          },
          newest: function newest(itemElem) {
            return itemElem.getAttribute("product-date-created");
          },
          custom_sort_order: function custom_sort_order(itemElem) {
            return Number(itemElem.getAttribute("product-custom-sort-order"));
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
      var filter_arr = [];
      $("[checkbox-filter-all]").change(function () {
        var isfeatured = $("#featured-checkbox:checked").length > 0;
        if ($(this).attr("id") !== "featured-checkbox") {
          if (this.checked) {
            filter_arr.push($(this).attr("filter-value"));
          } else {
            var index = filter_arr.indexOf($(this).attr("filter-value"));
            if (index > -1) {
              // only splice array when item is found
              filter_arr.splice(index, 1); // 2nd parameter means remove one item only
            }
          }
        }

        if (filter_arr.length > 0) {
          iso.arrange({
            // item element provided as argument
            filter: function filter(itemElem) {
              var val = itemElem.getAttribute("product-data-category");
              for (var i = 0; i < filter_arr.length; i++) {
                if (val.includes(filter_arr[i])) {
                  if (isfeatured) {
                    return itemElem.getAttribute("product-is-featured") === "true";
                  } else {
                    return true;
                  }
                }
              }
              return false;
            }
          });
        } else if (isfeatured) {
          iso.arrange({
            filter: function filter(itemElem) {
              return itemElem.getAttribute("product-is-featured") === "true";
            }
          });
        } else {
          iso.arrange({
            filter: "*"
          });
        }
      });
      iso.on("layoutComplete", function () {
        if (resized) {
          resized = false;
          iso.arrange();
          console.log("complete");
          return;
        }
        return;
      });
      setTimeout(function () {
        if (body.context.subcategories.length === 0) {
          iso.arrange({
            sortBy: "custom_sort_order",
            sortAscending: true
          });
        } else {
          iso.arrange({
            sortBy: "best_selling",
            sortAscending: false
          });
        }
      }, 3);
    }
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

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

  var checked_list = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9jdXN0b20tc2lkZWJhci1maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9pdHMtY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS90b2dnbGUtY2F0ZWdvcnktbGlzdGluZy12aWV3LmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJJVFNDYXRlZ29yeSIsInRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXciLCJUb2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3IiwiX3Byb3RvIiwicHJvdG90eXBlIiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJhdHRyIiwicm9sZSIsIm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUiLCJfdGhpczIiLCIkIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJmb2N1cyIsIm9uIiwib25SZWFkeSIsIl90aGlzMyIsInBvcHVsYXRlR3JpZFByb2R1Y3QiLCJhcnJhbmdlRm9jdXNPblNvcnRCeSIsImN1c3RvbVNpZGViYXIiLCJlIiwiY3VycmVudFRhcmdldCIsIm5leHQiLCJjb21wYXJlUHJvZHVjdHMiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsImhvb2tzIiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCIkbm9Qcm9kdWN0c01lc3NhZ2UiLCJfdGhpczQiLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwiY29uZmlnIiwiY2F0ZWdvcnkiLCJzaG9wX2J5X3ByaWNlIiwicHJvZHVjdHMiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJnZXRSZXF1ZXN0VGVtcGxhdGVUeXBlIiwic2lkZWJhciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImFmdGVyRmFjZXRVcGRhdGUiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIk5ld09wdHMiLCJ1cGRhdGVSZXF1ZXN0T3B0aW9ucyIsImJvZHkiLCJVVUlEY2F0YyIsImNhdGVnb3J5SWQiLCJheGlvcyIsImdldCIsInBhcmFtcyIsImlkIiwidGhlbiIsInJlc3BvbnNlIiwiZ3JpZEFsbFByb2R1Y3RzIiwiZGF0YSIsInByb2R1Y3QiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsInByIiwiaW1nIiwiaSIsImFjdGlvblNlY3Rpb24iLCJnZXRBbGxDYXRlZ29yeSIsInRvRml4ZWQiLCJzYWxlX3ByaWNlIiwicmV0YWlsX3ByaWNlIiwiZmluZCIsImZpZWxkIiwidW5kZWZpbmVkIiwidmFsdWUiLCJhcHBlbmQiLCJjb25maWd1cmVJc290b3BlRm9yQWxsIiwic3RhcnRHbG9iYWwiLCJlcnJvciIsImNhdF9saXN0IiwicHJfY2F0IiwiY2F0Iiwiam9pbiIsImN1c3RvbUdsb2JhbCIsImNoZWNrTW9iaWxlIiwiY2hlY2siLCJhIiwidGVzdCIsInN1YnN0ciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInZlbmRvciIsIndpbmRvdyIsIm9wZXJhIiwicmVzZXRTZWN0aW9uQ3NzRm9yTW9iaWxlVmlldyIsInNjcmVlbiIsIndpZHRoIiwiZHluYW1pY0dyaWRXaWR0aFNpemluZ0Zvcklzb3RvcGUiLCJpbm5lcldpZHRoIiwiY3NzIiwiZ3JpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpc28iLCJydW5JbWFnZVRlc3QiLCJoaWRlIiwicnVuSXNvdG9wZSIsInJlc2l6ZWQiLCJyZXNpemUiLCJpbWdMb2FkZWQiLCJ0ZXN0SW1nSW50Iiwic2V0SW50ZXJ2YWwiLCJjYXJkSW1ncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJub25aZXJvIiwib2Zmc2V0SGVpZ2h0IiwiY2xlYXJJbnRlcnZhbCIsIklzb3RvcGUiLCJpdGVtU2VsZWN0b3IiLCJsYXlvdXRNb2RlIiwiZ2V0U29ydERhdGEiLCJuYW1lIiwiaXRlbUVsZW0iLCJnZXRBdHRyaWJ1dGUiLCJwcmljZSIsIk51bWJlciIsInJldmlldyIsImJlc3Rfc2VsbGluZyIsIm5ld2VzdCIsImN1c3RvbV9zb3J0X29yZGVyIiwiY2hhbmdlIiwidmFsIiwic3BsaXQiLCJhcnJhbmdlIiwic29ydEJ5Iiwic29ydEFzY2VuZGluZyIsInJhdGluZ19jb3VudCIsImZpbHRlcl9hcnIiLCJpc2ZlYXR1cmVkIiwiY2hlY2tlZCIsInB1c2giLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInNldFRpbWVvdXQiLCJzdWJjYXRlZ29yaWVzIiwiQ2F0YWxvZ1BhZ2UiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiYXJndW1lbnRzIiwiSlNPTiIsInBhcnNlIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJtYXAiLCJrZXkiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiLCJ0aXRsZSIsIllUIiwiTlQiLCJTRiIsIk1GIiwiTUEiLCJZTiIsIk5OIiwiRkgiLCJFSCIsImVhY2giLCJjbGljayIsImJsb2NrIiwiY2hlY2tlZF9saXN0IiwiaW5wdXQiLCJzaWJsaW5ncyIsImlzIiwicHJvcCIsImZpbGxGaWx0ZXJMaXN0IiwiY2xlYXJGaWx0ZXJBdFRvcCIsInRlbXAiLCJlbXB0eSIsImRlZmF1bHRWaWV3VHlwZSIsIm9wcG9zaXRlVmlld1R5cGUiLCJsb2FkaW5nT3ZlcmxheSIsImFkZFRvZ2dsZUV2ZW50cyIsImluaXQiLCJnZXRTdG9yZWRWaWV3VHlwZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInR5cGUiLCJwYWdlVHlwZSIsInN0b3JlVmlld1R5cGUiLCJzZXRJdGVtIiwiZ2V0Q2F0ZWdvcnlQYWdlIiwic2hvdyIsImFwaSIsImdldFBhZ2UiLCJ1cmxVdGlscyIsImdldFVybCIsImVyciIsIkVycm9yIiwic3RvcmVkVmlld1R5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDb0I7QUFDSjtBQUNtQztBQUN2QztBQUM4QjtBQUMvQjtBQUNtQjtBQUFBLElBRTdDQSxRQUFRLDBCQUFBQyxZQUFBO0VB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O0lBQ3RELENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTlELE1BQUEsQ0FFRHdOLGVBQWUsR0FBZixTQUFBQSxnQkFBQSxFQUFrQjtJQUFBLElBQUF4TSxNQUFBO0lBQ2ROLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDSSxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUNNLENBQUMsRUFBSztNQUM5QyxJQUFNeU0sSUFBSSxHQUFHbk4sQ0FBQyxDQUFDVSxDQUFDLENBQUNDLGFBQWEsQ0FBQyxDQUFDMEQsSUFBSSxDQUFDLFdBQVcsQ0FBQztNQUVqRCxJQUFJckUsQ0FBQyxDQUFDVSxDQUFDLENBQUNDLGFBQWEsQ0FBQyxDQUFDVCxRQUFRLENBQUMsc0JBQXNCLENBQUMsRUFBRTtNQUV6REksTUFBSSxDQUFDaU4sZUFBZSxDQUFDSixJQUFJLEVBQUU3TSxNQUFJLENBQUN3TSxlQUFlLENBQUM7SUFDcEQsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBeE4sTUFBQSxDQUVEeU4sSUFBSSxHQUFKLFNBQUFBLEtBQUEsRUFBTztJQUNILElBQU1nQixjQUFjLEdBQUcsSUFBSSxDQUFDZixpQkFBaUIsRUFBRTtJQUUvQyxJQUFJZSxjQUFjLEtBQUssSUFBSSxDQUFDcEIsZUFBZSxJQUFJLENBQUNvQixjQUFjLEVBQUU7TUFDNUQsT0FBTyxJQUFJLENBQUNqQixlQUFlLEVBQUU7SUFDakM7SUFFQSxJQUFJLENBQUNTLGVBQWUsQ0FBQyxJQUFJLENBQUNYLGdCQUFnQixDQUFDO0VBQy9DLENBQUM7RUFBQSxPQUFBdk4seUJBQUE7QUFBQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gXCJAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlsc1wiO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gXCIuL2NhdGFsb2dcIjtcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSBcIi4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHNcIjtcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gXCIuL2NvbW1vbi9mYWNldGVkLXNlYXJjaFwiO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSBcIi4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHNcIjtcbmltcG9ydCBJVFNDYXRlZ29yeSBmcm9tIFwiLi9jdXN0b20vaXRzLWNhdGVnb3J5XCI7XG5pbXBvcnQgVG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldyBmcm9tIFwiLi9jdXN0b20vdG9nZ2xlLWNhdGVnb3J5LWxpc3Rpbmctdmlld1wiO1xuaW1wb3J0IGN1c3RvbUdsb2JhbCBmcm9tIFwiLi9jdXN0b20vaXRzLWdsb2JhbFwiO1xuaW1wb3J0IHsgY3VzdG9tU2lkZWJhciB9IGZyb20gXCIuL2N1c3RvbS9jdXN0b20tc2lkZWJhci1maWx0ZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcbiAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuXG4gICAgLyoqXG4gICAgICogSW50dWl0U29sdXRpb25zIC0gQ3VzdG9tIENhdGVnb3J5XG4gICAgICovXG4gICAgdGhpcy5JVFNDYXRlZ29yeSA9IG5ldyBJVFNDYXRlZ29yeShjb250ZXh0KTtcbiAgICB0aGlzLnRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcgPSBuZXcgVG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldyhjb250ZXh0KTtcbiAgfVxuXG4gIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAkZWxlbWVudC5hdHRyKHtcbiAgICAgIHJvbGU6IHJvbGVUeXBlLFxuICAgICAgXCJhcmlhLWxpdmVcIjogYXJpYUxpdmVTdGF0dXMsXG4gICAgfSk7XG4gIH1cblxuICBtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCkge1xuICAgIGlmICghJChcIltkYXRhLXNob3AtYnktcHJpY2VdXCIpLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgaWYgKCQoXCIubmF2TGlzdC1hY3Rpb25cIikuaGFzQ2xhc3MoXCJpcy1hY3RpdmVcIikpIHtcbiAgICAgICQoXCJhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZVwiKS5mb2N1cygpO1xuICAgIH1cblxuICAgICQoXCJhLm5hdkxpc3QtYWN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoXG4gICAgICAgICQoXCJzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlXCIpLFxuICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICBcImFzc2VydGl2ZVwiXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG4gICAgdGhpcy5wb3B1bGF0ZUdyaWRQcm9kdWN0KCk7XG4gICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuICAgIGN1c3RvbVNpZGViYXIoKTtcblxuICAgICQoJ1tkYXRhLWJ1dHRvbi10eXBlPVwiYWRkLWNhcnRcIl0nKS5vbihcImNsaWNrXCIsIChlKSA9PlxuICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcyhcbiAgICAgICAgJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSxcbiAgICAgICAgXCJzdGF0dXNcIixcbiAgICAgICAgXCJwb2xpdGVcIlxuICAgICAgKVxuICAgICk7XG5cbiAgICB0aGlzLm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKTtcblxuICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgaWYgKCQoXCIjZmFjZXRlZFNlYXJjaFwiKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICBob29rcy5vbihcInNvcnRCeS1zdWJtaXR0ZWRcIiwgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgJChcImEucmVzZXQtYnRuXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzKCQoXCJzcGFuLnJlc2V0LW1lc3NhZ2VcIiksIFwic3RhdHVzXCIsIFwicG9saXRlXCIpXG4gICAgKTtcblxuICAgIHRoaXMuYXJpYU5vdGlmeU5vUHJvZHVjdHMoKTtcbiAgfVxuXG4gIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xuICAgIGNvbnN0ICRub1Byb2R1Y3RzTWVzc2FnZSA9ICQoXCJbZGF0YS1uby1wcm9kdWN0cy1ub3RpZmljYXRpb25dXCIpO1xuICAgIGlmICgkbm9Qcm9kdWN0c01lc3NhZ2UubGVuZ3RoKSB7XG4gICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKFwiI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXJcIik7XG4gICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKFwiI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBjb25maWc6IHtcbiAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgcHJvZHVjdExpc3Rpbmc6XG4gICAgICAgICAgdGhpcy50b2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3LmdldFJlcXVlc3RUZW1wbGF0ZVR5cGUoXCJjYXRlZ29yeVwiKSxcbiAgICAgICAgc2lkZWJhcjogXCJjYXRlZ29yeS9zaWRlYmFyXCIsXG4gICAgICB9LFxuICAgICAgc2hvd01vcmU6IFwiY2F0ZWdvcnkvc2hvdy1tb3JlXCIsXG4gICAgfTtcblxuICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKFxuICAgICAgcmVxdWVzdE9wdGlvbnMsXG4gICAgICAoY29udGVudCkgPT4ge1xuICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICQoXCJib2R5XCIpLnRyaWdnZXJIYW5kbGVyKFwiY29tcGFyZVJlc2V0XCIpO1xuXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgMTAwXG4gICAgICAgICk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludHVpdFNvbHV0aW9ucyAtIENhdGVnb3J5IFVwZGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5JVFNDYXRlZ29yeS5hZnRlckZhY2V0VXBkYXRlKCk7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgJChcImJvZHlcIikub24oXCJwcm9kdWN0Vmlld01vZGVDaGFuZ2VkXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IE5ld09wdHMgPSB7XG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICBwcm9kdWN0TGlzdGluZzpcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldy5nZXRSZXF1ZXN0VGVtcGxhdGVUeXBlKFwiY2F0ZWdvcnlcIiksXG4gICAgICAgICAgc2lkZWJhcjogXCJjYXRlZ29yeS9zaWRlYmFyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dNb3JlOiBcImNhdGVnb3J5L3Nob3ctbW9yZVwiLFxuICAgICAgfTtcblxuICAgICAgdGhpcy5mYWNldGVkU2VhcmNoLnVwZGF0ZVJlcXVlc3RPcHRpb25zKE5ld09wdHMpO1xuICAgIH0pO1xuICB9XG5cbiAgLy9TU0NPREU6IFBvcHVsYXRlIFByb2R1Y3QgR3JpZCBpbiBjYXRlZ29yeS5odG1sXG4gIHBvcHVsYXRlR3JpZFByb2R1Y3QoKSB7XG4gICAgY29uc3QgYm9keSA9IHRoaXM7XG4gICAgY29uc3QgVVVJRGNhdGMgPSB0aGlzLmNvbnRleHQuVVVJRGNhdGM7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IHRoaXMuY29udGV4dC5jYXRlZ29yeUlkO1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9zdWZyaS5hcGkuc3RkbGliLmNvbS9sNXRAZGV2L2dldEFsbFByb2R1Y3QvXCIsIHtcbiAgICAgICAgcGFyYW1zOiB7IGlkOiBjYXRlZ29yeUlkIH0sXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGdyaWRBbGxQcm9kdWN0cyA9ICQoXCIjZ3JpZC1hbGwtcHJvZHVjdFwiKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGEucHJvZHVjdDtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSByZXNwb25zZS5kYXRhLmNhdGVnb3J5O1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKChwcikgPT4ge1xuICAgICAgICAgIGxldCBpbWcgPSB7fTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByW1wiaW1hZ2VzXCJdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocHJbXCJpbWFnZXNcIl1baV1bXCJpc190aHVtYm5haWxcIl0pIHtcbiAgICAgICAgICAgICAgaW1nID0gcHJbXCJpbWFnZXNcIl1baV07XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBhY3Rpb25TZWN0aW9uID0gXCJcIjtcbiAgICAgICAgICBpZiAocHJbXCJ2YXJpYW50c1wiXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBhY3Rpb25TZWN0aW9uID0gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBxdWlja3ZpZXcgYnV0dG9uLS1xdWlja3ZpZXdcIiBkYXRhLXByb2R1Y3QtaWQ9XCIke3ByW1wiaWRcIl19XCI+VmlldyBPcHRpb25zPC9idXR0b24+YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWN0aW9uU2VjdGlvbiA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0YyBqcy1jYXJkLWF0Y1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hdGNfX3NlY3Rpb24gY2FyZC1hdGNfX3NlY3Rpb24tLXF0eVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYXJkLWF0Y19fcXR5LSR7cHJbXCJpZFwiXX0tJHtVVUlEY2F0Y31cIiBjbGFzcz1cImNhcmQtYXRjX19sYWJlbCBpcy1zck9ubHlcIj5RdWFudGl0eTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0Yy1pbmNyZW1lbnQgY2FyZC1hdGMtaW5jcmVtZW50LS1oYXMtYnV0dG9ucyBqcy1jYXJkLWF0Yy1pbmNyZW1lbnRcIj5cblxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBjbGFzcz1cImZvcm0taW5wdXQgY2FyZC1hdGNfX2lucHV0IGNhcmQtYXRjX19pbnB1dC0tdG90YWwganMtY2FyZC1hdGNfX2lucHV0LS10b3RhbFwiIG5hbWU9XCJjYXJkLWF0Y19fcXR5LSR7cHJbXCJpZFwiXX0tJHtVVUlEY2F0Y31cIiBpZD1cImNhcmQtYXRjX19xdHktJHtwcltcImlkXCJdfS0ke1VVSURjYXRjfVwiIHZhbHVlPVwiMVwiIG1pbj1cIjFcIiBwYXR0ZXJuPVwiWzAtOV0qXCIgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hdGMtYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb25cIiBkYXRhLWFjdGlvbj1cImluY1wiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPkluY3JlYXNlIFF1YW50aXR5IG9mIHVuZGVmaW5lZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24td3JhcHBlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPVwiI2ljb24tYWRkXCI+PC91c2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0taWNvblwiIGRhdGEtYWN0aW9uPVwiZGVjXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+RGVjcmVhc2UgUXVhbnRpdHkgb2YgdW5kZWZpbmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi13cmFwcGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1taW51c1wiPjwvdXNlPlBQXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hdGNfX3NlY3Rpb24gY2FyZC1hdGNfX3NlY3Rpb24tLWFjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FyZC1hdGNfX2J1dHRvbiBidXR0b24gYnV0dG9uLS1wcmltYXJ5IGpzLWNhcmQtYXRjX19idXR0b25cIiBpZD1cImNhcmQtYXRjX19hZGQtJHtwcltcImlkXCJdfS0ke1VVSURjYXRjfVwiIGRhdGEtZGVmYXVsdC1tZXNzYWdlPVwiQWRkIHRvIENhcnRcIiBkYXRhLXdhaXQtbWVzc2FnZT1cIkFkZGluZyB0byBjYXJ04oCmXCIgZGF0YS1hZGRlZC1tZXNzYWdlPVwiQWRkIHRvIENhcnRcIiB2YWx1ZT1cIkFkZCB0byBDYXJ0XCIgZGF0YS1jYXJkLWFkZC10by1jYXJ0PVwiL2NhcnQucGhwP2FjdGlvbj1hZGQmYW1wO3Byb2R1Y3RfaWQ9JHtwcltcImlkXCJdfVwiIGRhdGEtZXZlbnQtdHlwZT1cInByb2R1Y3QtY2xpY2tcIj5BZGQgdG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvZHVjdC1zdGF0dXMtbWVzc2FnZSBhcmlhLWRlc2NyaXB0aW9uLS1oaWRkZW5cIj5BZGRpbmcgdG8gY2FydOKApiBUaGUgaXRlbSBoYXMgYmVlbiBhZGRlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdC0ke3ByW1wiaWRcIl19XCIgc29ydC1vcmRlcj1cIiR7cHJbXCJzb3J0X29yZGVyXCJdfVwiIFxuICAgICAgICAgIGNsYXNzPVwicHJvZHVjdFwiXG4gICAgICAgICAgcHJvZHVjdC1kYXRhLWNhdGVnb3J5PVwiJHtnZXRBbGxDYXRlZ29yeShjYXRlZ29yeSwgcHJbXCJjYXRlZ29yaWVzXCJdKX1cIiBcbiAgICAgICAgICBwcm9kdWN0LWRhdGEtbmFtZT1cIiR7cHJbXCJmYWtlLWhlYWRpbmdcIl19XCIgXG4gICAgICAgICAgcHJvZHVjdC1kYXRhLXJldmlldz1cIiR7XG4gICAgICAgICAgICBwcltcInJldmlld3NfY291bnRcIl0gPT09IDBcbiAgICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICAgIDogcHJbXCJyZXZpZXdzX3JhdGluZ19zdW1cIl0gLyBwcltcInJldmlld3NfY291bnRcIl1cbiAgICAgICAgICB9XCJcbiAgICAgICAgICBwcm9kdWN0LXJldmlldy1jb3VudD1cIiR7cHJbXCJyZXZpZXdzX2NvdW50XCJdfVwiIFxuICAgICAgICAgIHByb2R1Y3QtZGF0YS1wcmljZT1cIiR7XG4gICAgICAgICAgICBwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgIDogcHJbXCJjYWxjdWxhdGVkX3ByaWNlXCJdLnRvRml4ZWQoMilcbiAgICAgICAgICB9XCIgXG4gICAgICAgICAgcHJvZHVjdC1kYXRlLWNyZWF0ZWQ9XCIke3ByW1wiZGF0ZV9jcmVhdGVkXCJdfVwiIFxuICAgICAgICAgIHByb2R1Y3QtaXMtZmVhdHVyZWQ9XCIke3ByW1wiaXNfZmVhdHVyZWRcIl19XCIgXG4gICAgICAgICAgcHJvZHVjdC1iZXN0LXNlbGxpbmc9XCIke3ByW1widG90YWxfc29sZFwiXX1cIlxuICAgICAgICAgIHByb2R1Y3QtY3VzdG9tLXNvcnQtb3JkZXI9XCIke3ByW1wiY3VzdG9tLXNvcnQtb3JkZXJcIl19XCJcbiAgICAgICAgICBcbiAgICAgICAgICBwcm9kdWN0LWZpbHRlci1JVEE9XCJcIlxuICAgICAgICAgIHByb2R1Y3QtZmlsdGVyLUZCUz1cIlwiXG4gICAgICAgICAgcHJvZHVjdC1maWx0ZXItRkJDPVwiXCJcbiAgICAgICAgICBwcm9kdWN0LWZpbHRlci1DQVQ9XCJcIlxuICAgICAgICAgIHByb2R1Y3QtZmlsdGVyLU5DRj1cIlwiXG4gICAgICAgICAgcHJvZHVjdC1maWx0ZXItTkNQPVwiXCJcbiAgICAgICAgICBwcm9kdWN0LWZpbHRlci1OU0k9XCJcIlxuICAgICAgICAgIHByb2R1Y3QtZmlsdGVyLUhUPVwiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZFwiIGRhdGEtdGVzdD1cImNhcmQtJHtwcltcImlkXCJdfVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJjYXJkLWZpZ3VyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2FsZS1mbGFnLXNhc2hcIiBzdHlsZT1cImRpc3BsYXk6ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJbXCJ2YXJpYW50c1wiXVswXS5zYWxlX3ByaWNlICE9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmxvY2s7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJub25lO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gXCI+PHNwYW4gY2xhc3M9XCJzYWxlLXRleHRcIj5PbiBTYWxlPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtwcltcImN1c3RvbV91cmxcIl1bXCJ1cmxcIl19XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1maWd1cmVfX2xpbmtcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiR7cHJbXCJuYW1lXCJdfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1widmFyaWFudHNcIl0ubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgY2FyZC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZ1tcInVybF90aHVtYm5haWxcIl19XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1nW1wiZGVzY3JpcHRpb25cIl1cIiB0aXRsZT1cIiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcltcImZha2UtaGVhZGluZ1wiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNpemVzPVwiYXV0b1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldD1cIiR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA4MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxNjB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMzIwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDY0MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA5NjB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTI4MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxOTIwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDI1NjB3XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmNzZXQ9XCIke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gODB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTYwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDMyMHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA2NDB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gOTYwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDEyODB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTkyMHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAyNTYwd1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWFnZSBsYXp5YXV0b3NpemVzIGxhenlsb2FkZWRcIiBzaXplcz1cIjI0OHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uLWJvZHlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RWaWV3LXR5cGUtdGl0bGUgaDRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC1uYW1lPVwiXCI+JHtwcltcImZha2UtaGVhZGluZ1wiXX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiJHtwcltcIm5hbWVcIl19LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJbXCJ2YXJpYW50c1wiXS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByW1widmFyaWFudHNcIl1bMF1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxjdWxhdGVkX3ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3ByW1wiY3VzdG9tX3VybFwiXVtcInVybFwiXX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJbXCJuYW1lXCJdfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgY2FyZC10ZXh0LS1za3VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBTS1UjOiAke3ByW1wic2t1XCJdfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLXRleHQtLXByaWNlXCIgZGF0YS10ZXN0LWluZm8tdHlwZT1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IHJycC1wcmljZS0td2l0aG91dFRheCBoNFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj4gTVNSUDogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ycnAgaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1widmFyaWFudHNcIl1bMF0uc2FsZV9wcmljZSAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIkXCIgKyBwcltcInZhcmlhbnRzXCJdWzBdLnJldGFpbF9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheCBoNVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj4gV2FzOiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IGg0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtbGFiZWwgaXMtc3JPbmx5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLW5vdy1sYWJlbCBpcy1zck9ubHlcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+Tm93Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPiQke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1widmFyaWFudHNcIl0ubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2FsY3VsYXRlZF9wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwcltcImNhbGN1bGF0ZWRfcHJpY2VcIl0udG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLXRleHQtLWV4dHJhXCIgc3R5bGU9XCJkaXNwbGF5OiAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1wiY3VzdG9tX2ZpZWxkc1wiXS5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpZWxkKSA9PiBmaWVsZFtcIm5hbWVcIl0gPT09IFwiX19jYXJkLWV4dHJhLWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJlbGF0aXZlO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcltcImN1c3RvbV9maWVsZHNcIl0uZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWVsZCkgPT4gZmllbGRbXCJuYW1lXCJdID09PSBcIl9fY2FyZC1leHRyYS1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJbXCJjdXN0b21fZmllbGRzXCJdLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbXCJuYW1lXCJdID09PSBcIl9fY2FyZC1leHRyYS1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7YWN0aW9uU2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJ3aW5kb3cubG9jYXRpb24uaHJlZj0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcltcImN1c3RvbV91cmxcIl1bXCJ1cmxcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBidXR0b24tLXF1aWNrdmlld1wiID5WaWV3IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICAgIGdyaWRBbGxQcm9kdWN0cy5hcHBlbmQodGVtcGxhdGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBib2R5LmNvbmZpZ3VyZUlzb3RvcGVGb3JBbGwoKTtcbiAgICAgICAgYm9keS5zdGFydEdsb2JhbCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldEFsbENhdGVnb3J5KGNhdF9saXN0LCBwcl9jYXQpIHtcbiAgICAgIGxldCBjYXQgPSBcIlwiO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcl9jYXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNhdF9saXN0W3ByX2NhdFtpXV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNhdCA9IGNhdCArIGNhdF9saXN0W3ByX2NhdFtpXV1bXCJjYXRfaWRcIl0uam9pbihcIiBcIikgKyBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNhdDtcbiAgICB9XG4gIH1cblxuICBzdGFydEdsb2JhbCgpIHtcbiAgICBjdXN0b21HbG9iYWwodGhpcy5jb250ZXh0KTtcbiAgfVxuXG4gIC8vIGNoZWNrIGlmIG1vYmlsZSB1c2VyXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExMzgxNjczL2RldGVjdGluZy1hLW1vYmlsZS1icm93c2VyXG4gIGNoZWNrTW9iaWxlKCkge1xuICAgIGxldCBjaGVjayA9IGZhbHNlO1xuICAgIChmdW5jdGlvbiAoYSkge1xuICAgICAgaWYgKFxuICAgICAgICAvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChcbiAgICAgICAgICBhXG4gICAgICAgICkgfHxcbiAgICAgICAgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChcbiAgICAgICAgICBhLnN1YnN0cigwLCA0KVxuICAgICAgICApXG4gICAgICApXG4gICAgICAgIGNoZWNrID0gdHJ1ZTtcbiAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbiAgICByZXR1cm4gY2hlY2s7XG4gIH1cblxuICByZXNldFNlY3Rpb25Dc3NGb3JNb2JpbGVWaWV3KCkge1xuICAgIGlmIChzY3JlZW4ud2lkdGggPCA2MDApIHtcbiAgICAgICQoXCJbc2VjdGlvbi12aWV3XVwiKS5hdHRyKFwiaWRcIiwgXCJcIik7XG4gICAgICAkKFwiW3NlY3Rpb24tdmlld11cIikuYXR0cihcImNsYXNzXCIsIFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKFwiW3NlY3Rpb24tdmlld11cIikuYXR0cihcImlkXCIsIFwicHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lclwiKTtcbiAgICAgICQoXCJbc2VjdGlvbi12aWV3XVwiKS5hdHRyKFwiY2xhc3NcIiwgXCJjb250YWluZXJcIik7XG4gICAgfVxuICB9XG5cbiAgZHluYW1pY0dyaWRXaWR0aFNpemluZ0Zvcklzb3RvcGUoKSB7XG4gICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICBpZiAod2lkdGggPiAxMzAwKSB7XG4gICAgICB3aWR0aCA9IDEyMDA7XG4gICAgfSBlbHNlIGlmICh3aWR0aCA8IDMyMCkge1xuICAgICAgd2lkdGggPSAzMjA7XG4gICAgfSBlbHNlIGlmICh3aWR0aCA8IDYwMCkge1xuICAgIH0gZWxzZSB7XG4gICAgICB3aWR0aCA9IHdpZHRoIC0gMjQwO1xuICAgIH1cblxuICAgIHRoaXMucmVzZXRTZWN0aW9uQ3NzRm9yTW9iaWxlVmlldygpO1xuICAgIC8vIGNvbnNvbGUubG9nKHdpZHRoKTtcblxuICAgICQoXCIjZ3JpZC1hbGwtcHJvZHVjdFwiKS5jc3MoXCJ3aWR0aFwiLCBgJHt3aWR0aH1weGApO1xuICB9XG5cbiAgY29uZmlndXJlSXNvdG9wZUZvckFsbCgpIHtcbiAgICAvLyAkKFwiLmdyaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImdyaWRcIik7XG4gICAgLy8gICAkKFwiLmxkcy1ibG9ja1wiKS5oaWRlKCk7XG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWQtYWxsLXByb2R1Y3RcIik7XG4gICAgY29uc3QgYm9keSA9IHRoaXM7XG5cbiAgICAvLyBmb3IgdGVzdGluZywgY29tbWVudCB0aGlzIHNlY3Rpb24gYW5kIGNhbGwgdGhlIHJ1bkltYWdlVGVzdCgpXG4gICAgbGV0IGlzbztcbiAgICBpZiAodGhpcy5jaGVja01vYmlsZSgpKSB7XG4gICAgICBydW5JbWFnZVRlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5ncmlkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJncmlkXCIpO1xuICAgICAgJChcIi5sZHMtYmxvY2tcIikuaGlkZSgpO1xuICAgICAgcnVuSXNvdG9wZSgpO1xuICAgIH1cblxuICAgIGJvZHkuZHluYW1pY0dyaWRXaWR0aFNpemluZ0Zvcklzb3RvcGUoKTtcbiAgICBsZXQgcmVzaXplZCA9IHRydWU7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXNpemVkID0gdHJ1ZTtcbiAgICAgIGJvZHkuZHluYW1pY0dyaWRXaWR0aFNpemluZ0Zvcklzb3RvcGUoKTtcbiAgICB9KTtcblxuICAgIC8vIHJ1bkltYWdlVGVzdCgpO1xuXG4gICAgLy8gaXQgd2lsbCBjYWxsIHJ1bklzb3RvcGUoKSBpZiBhbGwgaW1hZ2VzIGFyZSBsb2FkZWRcbiAgICBmdW5jdGlvbiBydW5JbWFnZVRlc3QoKSB7XG4gICAgICAkKFwiLmdyaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImdyaWRcIik7XG4gICAgICAkKFwiLmxkcy1ibG9ja1wiKS5oaWRlKCk7XG5cbiAgICAgIGxldCBpbWdMb2FkZWQgPSB0cnVlO1xuXG4gICAgICBsZXQgdGVzdEltZ0ludCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdmFyIGNhcmRJbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICBcIiNncmlkLWFsbC1wcm9kdWN0IC5jYXJkLWltYWdlXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNhcmRJbWdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRJbWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9uWmVybyA9IHRydWU7XG4gICAgICAgICAgICBpZiAoY2FyZEltZ3NbaV0ub2Zmc2V0SGVpZ2h0IDwgMTAwKSB7XG4gICAgICAgICAgICAgIGltZ0xvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBub25aZXJvID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vblplcm8pIHtcbiAgICAgICAgICAgICAgaW1nTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW1nTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW1nTG9hZGVkKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0ZXN0SW1nSW50KTtcbiAgICAgICAgICBydW5Jc290b3BlKCk7XG4gICAgICAgICAgLy8gYm9keS5jb25maWd1cmVJc290b3BlRm9yQWxsKCk7XG4gICAgICAgICAgLy8gYm9keS5zdGFydEdsb2JhbCgpO1xuICAgICAgICAgIC8vICQoXCIubGRzLWJsb2NrXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSXNvdG9wZSgpIHtcbiAgICAgIC8vICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICBpc28gPSBuZXcgSXNvdG9wZShncmlkLCB7XG4gICAgICAgIC8vIG9wdGlvbnMuLi5cbiAgICAgICAgaXRlbVNlbGVjdG9yOiBcIi5wcm9kdWN0XCIsXG4gICAgICAgIGxheW91dE1vZGU6IFwiZml0Um93c1wiLFxuICAgICAgICBnZXRTb3J0RGF0YToge1xuICAgICAgICAgIG5hbWU6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1uYW1lXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJpY2U6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtcHJpY2VcIikpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmV2aWV3OiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtcmV2aWV3XCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2F0ZWdvcnk6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1jYXRlZ29yeVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlc3Rfc2VsbGluZzogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtYmVzdC1zZWxsaW5nXCIpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5ld2VzdDogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRlLWNyZWF0ZWRcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXN0b21fc29ydF9vcmRlcjogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtY3VzdG9tLXNvcnQtb3JkZXJcIikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gfSwgMCk7XG5cbiAgICAgICQoXCIjYWxsLXNvcnQtc2VsZWN0LCAjYWxsLXNvcnQtc2VsZWN0LW1vYmlsZVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB2YWwgPSAkKHRoaXMpLnZhbCgpLnNwbGl0KFwiLVwiKTtcblxuICAgICAgICBpZiAodmFsWzBdID09PSBcInJldmlld1wiKSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgc29ydEJ5OiBbdmFsWzBdLCBcInJhdGluZ19jb3VudFwiXSxcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IHtcbiAgICAgICAgICAgICAgcmV2aWV3OiBmYWxzZSxcbiAgICAgICAgICAgICAgcmF0aW5nX2NvdW50OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgc29ydEJ5OiB2YWxbMF0sXG4gICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB2YWxbMV0gPT09IFwiYXNjXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmaWx0ZXJfYXJyID0gW107XG5cbiAgICAgICQoXCJbY2hlY2tib3gtZmlsdGVyLWFsbF1cIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaXNmZWF0dXJlZCA9ICQoXCIjZmVhdHVyZWQtY2hlY2tib3g6Y2hlY2tlZFwiKS5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwiaWRcIikgIT09IFwiZmVhdHVyZWQtY2hlY2tib3hcIikge1xuICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGZpbHRlcl9hcnIucHVzaCgkKHRoaXMpLmF0dHIoXCJmaWx0ZXItdmFsdWVcIikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGZpbHRlcl9hcnIuaW5kZXhPZigkKHRoaXMpLmF0dHIoXCJmaWx0ZXItdmFsdWVcIikpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgLy8gb25seSBzcGxpY2UgYXJyYXkgd2hlbiBpdGVtIGlzIGZvdW5kXG4gICAgICAgICAgICAgIGZpbHRlcl9hcnIuc3BsaWNlKGluZGV4LCAxKTsgLy8gMm5kIHBhcmFtZXRlciBtZWFucyByZW1vdmUgb25lIGl0ZW0gb25seVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWx0ZXJfYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgICAvLyBpdGVtIGVsZW1lbnQgcHJvdmlkZWQgYXMgYXJndW1lbnRcbiAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1jYXRlZ29yeVwiKTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJfYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbC5pbmNsdWRlcyhmaWx0ZXJfYXJyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzZmVhdHVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlzLWZlYXR1cmVkXCIpID09PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc2ZlYXR1cmVkKSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtaXMtZmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7IGZpbHRlcjogXCIqXCIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpc28ub24oXCJsYXlvdXRDb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChyZXNpemVkKSB7XG4gICAgICAgICAgcmVzaXplZCA9IGZhbHNlO1xuICAgICAgICAgIGlzby5hcnJhbmdlKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJjb21wbGV0ZVwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSk7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYm9keS5jb250ZXh0LnN1YmNhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgc29ydEJ5OiBcImN1c3RvbV9zb3J0X29yZGVyXCIsXG4gICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB0cnVlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlzby5hcnJhbmdlKHtcbiAgICAgICAgICAgIHNvcnRCeTogXCJiZXN0X3NlbGxpbmdcIixcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IGZhbHNlLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LCAzKTtcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiIsImNvbnN0IGN1c3RvbVNpZGViYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGl0bGUgPSB7XHJcbiAgICAvLyBJbmNsdWRlIEF1dG9tYXRpYyBUYXBlcj9cclxuICAgIFlUOiBcIlRhcGVyIEluY2x1ZGVkXCIsXHJcbiAgICBOVDogXCJObyBUYXBlclwiLFxyXG5cclxuICAgIC8vIEZsYXQgQm94IFNldCBTaXplczpcclxuICAgIDcxMDogYDdcIi8xMFwiIEJveGVzYCxcclxuICAgIDEwMTI6IGAxMFwiLzEyXCIgQm94ZXNgLFxyXG4gICAgNzEwMTI6IGA3XCIvMTBcIi8xMlwiIEJveGVzYCxcclxuXHJcbiAgICAvLyBGbGF0IEJveCBDYXBhY2l0aWVzOlxyXG4gICAgU0Y6IGBTdGFuZGFyZGAsXHJcbiAgICBNRjogYE1FR0FgLFxyXG5cclxuICAgIC8vIENvcm5lciBBcHBsaWNhdG9yIFR5cGU6XHJcbiAgICBNQTogXCJNaW5pU2hvdOKEolwiLFxyXG4gICAgXCI3QVwiOiAnN1wiIENvcm5lciBCb3gnLFxyXG4gICAgXCI4QVwiOiAnOFwiIENvcm5lciBCb3gnLFxyXG5cclxuICAgIC8vICMgb2YgQ29ybmVyIEZpbmlzaGVyczpcclxuICAgIFwiMDNcIjogYDNcIiBDb3JuZXIgRmluaXNoZXJgLFxyXG4gICAgXCIwMzM1XCI6IGAzXCIvMy41XCIgQ29ybmVyIEZpbmlzaGVyc2AsXHJcblxyXG4gICAgLy8gIyBvZiBDb21wb3VuZCBQdW1wczpcclxuICAgIFwiMVBcIjogXCIxIFB1bXBcIixcclxuICAgIFwiMlBcIjogXCIyIFB1bXBzXCIsXHJcblxyXG4gICAgLy8gTmFpbCBTcG90dGVyIEluY2x1ZGVkP1xyXG4gICAgWU46IFwiTmFpbCBTcG90dGVyXCIsXHJcbiAgICBOTjogXCJObyBOYWlsIFNwb3R0ZXJcIixcclxuXHJcbiAgICAvLyBIYW5kbGUgVHlwZTpcclxuICAgIEZIOiBcIkZMIEhhbmRsZXNcIixcclxuICAgIEVIOiBcIkV4dCBIYW5kbGVzXCIsXHJcbiAgfTtcclxuXHJcbiAgJChcIi5maWx0ZXItLXNob3dfYnV0dG9uXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnN0IGJsb2NrID0gJChgW2ZpbHRlci1ibG9jaz1cIiR7JCh0aGlzKS5hdHRyKFwiZmlsdGVyLWJ1dHRvblwiKX1cIl1gKTtcclxuICAgICAgaWYgKGJsb2NrLmNzcyhcImRpc3BsYXlcIikgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgYmxvY2suY3NzKFwiZGlzcGxheVwiLCBcImdyaWRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYmxvY2suY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgLy8gY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgY29uc3QgY2hlY2tlZF9saXN0ID0gW107XHJcbiAgJChcIi50YWdfdGl0bGUtLWJsb2NrXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gJCh0aGlzKS5zaWJsaW5ncygpLmZpbmQoXCJpbnB1dFwiKTtcclxuICAgIGlmIChpbnB1dC5pcyhcIjpjaGVja2VkXCIpKSB7XHJcbiAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlucHV0LnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgZmlsbEZpbHRlckxpc3QoKTtcclxuICB9KTtcclxuXHJcbiAgJChcIltpbnB1dC1maWx0ZXJdXCIpLm9uKFwiY2hhbmdlXCIsIGZpbGxGaWx0ZXJMaXN0KTtcclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJGaWx0ZXJBdFRvcCh2YWwpIHtcclxuICAgICQoYFtpbnB1dC1maWx0ZXJdW3ZhbHVlPVwiJHt2YWx9XCJdYCkucHJvcChcImNoZWNrZWRcIiwgZmFsc2UpO1xyXG4gICAgZmlsbEZpbHRlckxpc3QoKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbGxGaWx0ZXJMaXN0KCkge1xyXG4gICAgY29uc3QgdGVtcCA9IFtdO1xyXG4gICAgJChcIi5maWx0ZXItbGlzdF9jb250YWluZXJcIikuZW1wdHkoKTtcclxuXHJcbiAgICAkKFwiW2lucHV0LWZpbHRlcl06Y2hlY2tlZFwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgdGVtcC5wdXNoKHZhbCk7XHJcbiAgICAgICQoXCIuZmlsdGVyLWxpc3RfY29udGFpbmVyXCIpLmFwcGVuZChcclxuICAgICAgICBgPGxpIGNsYXNzPVwiZmlsdGVyLWxpc3RcIiBkYXRhPVwiJHt2YWx9XCJcIj5cclxuICAgICAgPGRpdj5cclxuICAgICAgJHt0aXRsZVt2YWxdfVxyXG4gICAgICA8ZGl2Png8L2Rpdj5cclxuICAgICAgPC9kaXY+PC9saT5gXHJcbiAgICAgICk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoYC5maWx0ZXItbGlzdFtkYXRhPVwiJHt2YWx9XCJdYCkuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgY2xlYXJGaWx0ZXJBdFRvcCh2YWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGN1c3RvbVNpZGViYXIgfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVRTQ2F0ZWdvcnkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICBhZnRlckZhY2V0VXBkYXRlKCkge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4uL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuZGVmYXVsdFZpZXdUeXBlID0gdGhpcy5jb250ZXh0LmRlZmF1bHRWaWV3VHlwZTtcbiAgICAgICAgdGhpcy5vcHBvc2l0ZVZpZXdUeXBlID0gdGhpcy5kZWZhdWx0Vmlld1R5cGUgIT09ICdncmlkJyA/ICdncmlkJyA6ICdsaXN0JztcbiAgICAgICAgdGhpcy5wcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIHRoaXMubG9hZGluZ092ZXJsYXkgPSAkKCcubG9hZGluZ092ZXJsYXkubG9hZGluZ092ZXJsYXktLXByb2R1Y3QtbGlzdGluZycpO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignZmFjZXRlZFNlYXJjaFJlZnJlc2gnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFRvZ2dsZUV2ZW50cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yZWRWaWV3VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3J5LXZpZXctdHlwZScpIHx8IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdFRlbXBsYXRlVHlwZSh0eXBlKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VUeXBlID0gdGhpcy5nZXRTdG9yZWRWaWV3VHlwZSgpO1xuICAgICAgICByZXR1cm4gIXBhZ2VUeXBlID8gYCR7dHlwZX0vcHJvZHVjdC1saXN0aW5nYCA6IGBjdXN0b20vY2F0ZWdvcnktJHtwYWdlVHlwZX0tdmlld2A7XG4gICAgfVxuXG4gICAgc3RvcmVWaWV3VHlwZSh0eXBlKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NhdGVnb3J5LXZpZXctdHlwZScsIHR5cGUpO1xuICAgIH1cblxuICAgIGdldENhdGVnb3J5UGFnZShwYWdlVHlwZSkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMucHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBjdXN0b20vY2F0ZWdvcnktJHtwYWdlVHlwZX0tdmlld2AsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nT3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIGNvbmZpZywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpLmh0bWwoY29udGVudCk7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZ092ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3JlVmlld1R5cGUocGFnZVR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZFRvZ2dsZUV2ZW50cygpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ3Byb2R1Y3RWaWV3TW9kZUNoYW5nZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkVG9nZ2xlRXZlbnRzKCkge1xuICAgICAgICAkKCcuanMtY2F0ZWdvcnlfX3RvZ2dsZS12aWV3Jykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAkKGUuY3VycmVudFRhcmdldCkuZGF0YSgndmlldy10eXBlJyk7XG5cbiAgICAgICAgICAgIGlmICgkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2FjdGl2ZS1jYXRlZ29yeS12aWV3JykpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5nZXRDYXRlZ29yeVBhZ2UodHlwZSwgdGhpcy5hZGRUb2dnbGVFdmVudHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzdG9yZWRWaWV3VHlwZSA9IHRoaXMuZ2V0U3RvcmVkVmlld1R5cGUoKTtcblxuICAgICAgICBpZiAoc3RvcmVkVmlld1R5cGUgPT09IHRoaXMuZGVmYXVsdFZpZXdUeXBlIHx8ICFzdG9yZWRWaWV3VHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkVG9nZ2xlRXZlbnRzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldENhdGVnb3J5UGFnZSh0aGlzLm9wcG9zaXRlVmlld1R5cGUpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=