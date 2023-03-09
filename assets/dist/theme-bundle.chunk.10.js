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
    axios.get("https://sufri.autocode.dev/l5t@dev/getATProduct/", {
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
        var template = "\n          <div id=\"product-" + pr["id"] + "\" sort-order=\"" + pr["sort_order"] + "\" \n          class=\"product\"\n          product-data-category=\"" + getAllCategory(category, pr["categories"]) + "\" \n          product-data-name=\"" + pr["fake-heading"] + "\" \n          product-data-review=\"" + (pr["reviews_count"] === 0 ? 0 : pr["reviews_rating_sum"] / pr["reviews_count"]) + "\"\n          product-review-count=\"" + pr["reviews_count"] + "\" \n          product-data-price=\"" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\" \n          product-date-created=\"" + pr["date_created"] + "\" \n          product-is-featured=\"" + pr["is_featured"] + "\" \n          product-best-selling=\"" + pr["total_sold"] + "\"\n          product-custom-sort-order=\"" + pr["custom-sort-order"] + "\">\n              <div class=\"card-wrapper\">\n                  <article class=\"card\" data-test=\"card-" + pr["id"] + "\">\n                      <figure class=\"card-figure\">\n                          <div class=\"sale-flag-sash\" style=\"display: " + (pr["sale_price"] !== 0 ? "block;" : "none;") + " \"><span class=\"sale-text\">On Sale</span></div>\n                          <a href=\"" + pr["custom_url"]["url"] + "\" \n                          class=\"card-figure__link\" \n                          aria-label=\"" + pr["name"] + ", \n                          $" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\">\n                              <div class=\" card-img-container\">\n                                  <img src=\"" + img["url_thumbnail"] + "\" \n                                  alt=\"img[\"description\"]\" title=\"" + pr["fake-heading"] + "\" \n                                  data-sizes=\"auto\" \n                                  srcset=\"" + img["url_standard"] + " 80w, \n                                  " + img["url_standard"] + " 160w, \n                                  " + img["url_standard"] + " 320w, \n                                  " + img["url_standard"] + " 640w, \n                                  " + img["url_standard"] + " 960w, \n                                  " + img["url_standard"] + " 1280w, \n                                  " + img["url_standard"] + " 1920w, \n                                  " + img["url_standard"] + " 2560w\" \n                                  data-srcset=\"" + img["url_standard"] + " 80w, \n                                  " + img["url_standard"] + " 160w, \n                                  " + img["url_standard"] + " 320w, \n                                  " + img["url_standard"] + " 640w, \n                                  " + img["url_standard"] + " 960w, \n                                  " + img["url_standard"] + " 1280w, \n                                  " + img["url_standard"] + " 1920w, \n                                  " + img["url_standard"] + " 2560w\" \n                                  class=\"card-image lazyautosizes lazyloaded\" sizes=\"248px\">\n                              </div>\n                          </a>\n                         <figcaption class=\"card-figcaption\">\n                              <div class=\"card-figcaption-body\"></div>\n                         </figcaption>\n                      </figure>\n                      <div class=\"card-body\">\n                          <p class=\"productView-type-title h4\" \n                          product-name=\"\">" + pr["fake-heading"] + "</p>\n                          <h3 class=\"card-title \">\n                              <a aria-label=\"" + pr["name"] + ", \n                                $" + (pr["variants"].length > 1 ? pr["variants"][0]["calculated_price"].toFixed(2) : pr["calculated_price"].toFixed(2)) + "\" \n                              href=\"" + pr["custom_url"]["url"] + "\">\n                              " + pr["name"] + "</a>\n                          </h3>\n                          <p class=\"card-text card-text--sku\">\n                              <span> SKU#: " + pr["sku"] + " </span>\n                          </p>\n                          <div class=\"card-text card-text--price\" data-test-info-type=\"price\">\n                              <div class=\"price-section price-section--withoutTax rrp-price--withoutTax h4\" style=\"display: block;\">\n                                  <span class=\"is-srOnly\"> MSRP: </span>\n                                  <span data-product-rrp-price-without-tax=\"\" class=\"price price--rrp h5\">\n                                    " + (pr["sale_price"] !== 0 ? "$" + parseFloat(pr["variants"][0]["retail_price"].toFixed(2)).toLocaleString("en-US") : "") + "\n                                  </span>\n                              </div>\n                              <div class=\"price-section price-section--withoutTax non-sale-price--withoutTax h5\" style=\"display: none;\">\n                                <span class=\"is-srOnly\"> Was: </span>\n                                <span data-product-non-sale-price-without-tax=\"\" class=\"price price--non-sale\"></span>\n                              </div>\n                              <div class=\"price-section price-section--withoutTax h4\">\n                                <span class=\"price-label is-srOnly\"></span>\n                                <span class=\"price-now-label is-srOnly\" style=\"display: none;\">Now:</span>\n                                <span data-product-price-without-tax=\"\" class=\"price price--withoutTax\">$" + (pr["variants"].length > 1 ? parseFloat(pr["variants"][pr["variants"].length - 1]["calculated_price"]).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : parseFloat(pr["calculated_price"]).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) + "</span>\n                              </div>\n                          </div>\n                          <p class=\"card-text card-text--extra\" style=\"display: " + (pr["custom_fields"].find(function (field) {
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
      console.log(cat);
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
    if (width < 320) {
      width = 320;
    }
    if (width > 1200) {
      width = 1200;
    }
    this.resetSectionCssForMobileView();
    // console.log(width);

    if (this.checkMobile()) {
      $("#grid-all-product").css("width", "90vw");
    } else {
      $("#grid-all-product").css("width", width + "px");
    }
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
          //   console.log("complete");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS9pdHMtY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2N1c3RvbS90b2dnbGUtY2F0ZWdvcnktbGlzdGluZy12aWV3LmpzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJJVFNDYXRlZ29yeSIsInRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXciLCJUb2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3IiwiX3Byb3RvIiwicHJvdG90eXBlIiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJhdHRyIiwicm9sZSIsIm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUiLCJfdGhpczIiLCIkIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJmb2N1cyIsIm9uIiwib25SZWFkeSIsIl90aGlzMyIsInBvcHVsYXRlR3JpZFByb2R1Y3QiLCJhcnJhbmdlRm9jdXNPblNvcnRCeSIsImUiLCJjdXJyZW50VGFyZ2V0IiwibmV4dCIsImNvbXBhcmVQcm9kdWN0cyIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJzZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMiLCJhcmlhTm90aWZ5Tm9Qcm9kdWN0cyIsIiRub1Byb2R1Y3RzTWVzc2FnZSIsIl90aGlzNCIsIl90aGlzJHZhbGlkYXRpb25EaWN0aSIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsImdldFJlcXVlc3RUZW1wbGF0ZVR5cGUiLCJzaWRlYmFyIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiYWZ0ZXJGYWNldFVwZGF0ZSIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiTmV3T3B0cyIsInVwZGF0ZVJlcXVlc3RPcHRpb25zIiwiYm9keSIsIlVVSURjYXRjIiwiY2F0ZWdvcnlJZCIsImF4aW9zIiwiZ2V0IiwicGFyYW1zIiwiaWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJncmlkQWxsUHJvZHVjdHMiLCJkYXRhIiwicHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwicHIiLCJpbWciLCJpIiwiYWN0aW9uU2VjdGlvbiIsImdldEFsbENhdGVnb3J5IiwidG9GaXhlZCIsInBhcnNlRmxvYXQiLCJ0b0xvY2FsZVN0cmluZyIsInRvU3RyaW5nIiwicmVwbGFjZSIsImZpbmQiLCJmaWVsZCIsInVuZGVmaW5lZCIsInZhbHVlIiwiYXBwZW5kIiwiY29uZmlndXJlSXNvdG9wZUZvckFsbCIsInN0YXJ0R2xvYmFsIiwiZXJyb3IiLCJjYXRfbGlzdCIsInByX2NhdCIsImNhdCIsImpvaW4iLCJjdXN0b21HbG9iYWwiLCJjaGVja01vYmlsZSIsImNoZWNrIiwiYSIsInRlc3QiLCJzdWJzdHIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJ3aW5kb3ciLCJvcGVyYSIsInJlc2V0U2VjdGlvbkNzc0Zvck1vYmlsZVZpZXciLCJzY3JlZW4iLCJ3aWR0aCIsImR5bmFtaWNHcmlkV2lkdGhTaXppbmdGb3JJc290b3BlIiwiaW5uZXJXaWR0aCIsImNzcyIsImdyaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaXNvIiwicnVuSW1hZ2VUZXN0IiwiaGlkZSIsInJ1bklzb3RvcGUiLCJyZXNpemVkIiwicmVzaXplIiwiaW1nTG9hZGVkIiwidGVzdEltZ0ludCIsInNldEludGVydmFsIiwiY2FyZEltZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwibm9uWmVybyIsIm9mZnNldEhlaWdodCIsImNsZWFySW50ZXJ2YWwiLCJJc290b3BlIiwiaXRlbVNlbGVjdG9yIiwibGF5b3V0TW9kZSIsImdldFNvcnREYXRhIiwibmFtZSIsIml0ZW1FbGVtIiwiZ2V0QXR0cmlidXRlIiwicHJpY2UiLCJOdW1iZXIiLCJyZXZpZXciLCJiZXN0X3NlbGxpbmciLCJuZXdlc3QiLCJjdXN0b21fc29ydF9vcmRlciIsImNoYW5nZSIsInZhbCIsInNwbGl0IiwiYXJyYW5nZSIsInNvcnRCeSIsInNvcnRBc2NlbmRpbmciLCJyYXRpbmdfY291bnQiLCJmaWx0ZXJfYXJyIiwiaXNmZWF0dXJlZCIsImNoZWNrZWQiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiZmlsdGVyIiwiaW5jbHVkZXMiLCJzZXRUaW1lb3V0Iiwic3ViY2F0ZWdvcmllcyIsIkNhdGFsb2dQYWdlIiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImFyZ3VtZW50cyIsIkpTT04iLCJwYXJzZSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwibWFwIiwia2V5IiwicG9wIiwicmVkdWNlIiwiYWNjIiwiZGVmYXVsdFZpZXdUeXBlIiwib3Bwb3NpdGVWaWV3VHlwZSIsImxvYWRpbmdPdmVybGF5IiwiYWRkVG9nZ2xlRXZlbnRzIiwiaW5pdCIsImdldFN0b3JlZFZpZXdUeXBlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidHlwZSIsInBhZ2VUeXBlIiwic3RvcmVWaWV3VHlwZSIsInNldEl0ZW0iLCJnZXRDYXRlZ29yeVBhZ2UiLCJzaG93IiwiYXBpIiwiZ2V0UGFnZSIsInVybFV0aWxzIiwiZ2V0VXJsIiwiZXJyIiwiRXJyb3IiLCJzdG9yZWRWaWV3VHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBQ29CO0FBQ0o7QUFDbUM7QUFDdkM7QUFDOEI7QUFDL0I7QUFBQSxJQUUxQkEsUUFBUSwwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLFFBQUEsRUFBQUMsWUFBQTtFQUMzQixTQUFBRCxTQUFZRyxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ25CQSxLQUFBLEdBQUFILFlBQUEsQ0FBQUksSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR0MsMEdBQTJCLENBQUNKLE9BQU8sQ0FBQzs7SUFFaEU7QUFDSjtBQUNBO0lBQ0lDLEtBQUEsQ0FBS0ksV0FBVyxHQUFHLElBQUlBLDREQUFXLENB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QUFhLENBQUMsQ0FBQzBELElBQUksQ0FBQyxXQUFXLENBQUM7TUFFakQsSUFBSXBFLENBQUMsQ0FBQ1MsQ0FBQyxDQUFDQyxhQUFhLENBQUMsQ0FBQ1IsUUFBUSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7TUFFekRJLE1BQUksQ0FBQzRMLGVBQWUsQ0FBQ0osSUFBSSxFQUFFeEwsTUFBSSxDQUFDbUwsZUFBZSxDQUFDO0lBQ3BELENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQW5NLE1BQUEsQ0FFRG9NLElBQUksR0FBSixTQUFBQSxLQUFBLEVBQU87SUFDSCxJQUFNZ0IsY0FBYyxHQUFHLElBQUksQ0FBQ2YsaUJBQWlCLEVBQUU7SUFFL0MsSUFBSWUsY0FBYyxLQUFLLElBQUksQ0FBQ3BCLGVBQWUsSUFBSSxDQUFDb0IsY0FBYyxFQUFFO01BQzVELE9BQU8sSUFBSSxDQUFDakIsZUFBZSxFQUFFO0lBQ2pDO0lBRUEsSUFBSSxDQUFDUyxlQUFlLENBQUMsSUFBSSxDQUFDWCxnQkFBZ0IsQ0FBQztFQUMvQyxDQUFDO0VBQUEsT0FBQWxNLHlCQUFBO0FBQUEiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tIFwiQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHNcIjtcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tIFwiLi9jYXRhbG9nXCI7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gXCIuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzXCI7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tIFwiLi9jb21tb24vZmFjZXRlZC1zZWFyY2hcIjtcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gXCIuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzXCI7XG5pbXBvcnQgSVRTQ2F0ZWdvcnkgZnJvbSBcIi4vY3VzdG9tL2l0cy1jYXRlZ29yeVwiO1xuaW1wb3J0IFRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcgZnJvbSBcIi4vY3VzdG9tL3RvZ2dsZS1jYXRlZ29yeS1saXN0aW5nLXZpZXdcIjtcbmltcG9ydCBjdXN0b21HbG9iYWwgZnJvbSBcIi4vY3VzdG9tL2l0cy1nbG9iYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcbiAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuXG4gICAgLyoqXG4gICAgICogSW50dWl0U29sdXRpb25zIC0gQ3VzdG9tIENhdGVnb3J5XG4gICAgICovXG4gICAgdGhpcy5JVFNDYXRlZ29yeSA9IG5ldyBJVFNDYXRlZ29yeShjb250ZXh0KTtcbiAgICB0aGlzLnRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcgPSBuZXcgVG9nZ2xlQ2F0ZWdvcnlMaXN0aW5nVmlldyhjb250ZXh0KTtcbiAgfVxuXG4gIHNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCRlbGVtZW50LCByb2xlVHlwZSwgYXJpYUxpdmVTdGF0dXMpIHtcbiAgICAkZWxlbWVudC5hdHRyKHtcbiAgICAgIHJvbGU6IHJvbGVUeXBlLFxuICAgICAgXCJhcmlhLWxpdmVcIjogYXJpYUxpdmVTdGF0dXMsXG4gICAgfSk7XG4gIH1cblxuICBtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCkge1xuICAgIGlmICghJChcIltkYXRhLXNob3AtYnktcHJpY2VdXCIpLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgaWYgKCQoXCIubmF2TGlzdC1hY3Rpb25cIikuaGFzQ2xhc3MoXCJpcy1hY3RpdmVcIikpIHtcbiAgICAgICQoXCJhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZVwiKS5mb2N1cygpO1xuICAgIH1cblxuICAgICQoXCJhLm5hdkxpc3QtYWN0aW9uXCIpLm9uKFwiY2xpY2tcIiwgKCkgPT5cbiAgICAgIHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoXG4gICAgICAgICQoXCJzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlXCIpLFxuICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICBcImFzc2VydGl2ZVwiXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG4gICAgdGhpcy5wb3B1bGF0ZUdyaWRQcm9kdWN0KCk7XG4gICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuXG4gICAgJCgnW2RhdGEtYnV0dG9uLXR5cGU9XCJhZGQtY2FydFwiXScpLm9uKFwiY2xpY2tcIiwgKGUpID0+XG4gICAgICB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKFxuICAgICAgICAkKGUuY3VycmVudFRhcmdldCkubmV4dCgpLFxuICAgICAgICBcInN0YXR1c1wiLFxuICAgICAgICBcInBvbGl0ZVwiXG4gICAgICApXG4gICAgKTtcblxuICAgIHRoaXMubWFrZVNob3BCeVByaWNlRmlsdGVyQWNjZXNzaWJsZSgpO1xuXG4gICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICBpZiAoJChcIiNmYWNldGVkU2VhcmNoXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgIGhvb2tzLm9uKFwic29ydEJ5LXN1Ym1pdHRlZFwiLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICAkKFwiYS5yZXNldC1idG5cIikub24oXCJjbGlja1wiLCAoKSA9PlxuICAgICAgdGhpcy5zZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMoJChcInNwYW4ucmVzZXQtbWVzc2FnZVwiKSwgXCJzdGF0dXNcIiwgXCJwb2xpdGVcIilcbiAgICApO1xuXG4gICAgdGhpcy5hcmlhTm90aWZ5Tm9Qcm9kdWN0cygpO1xuICB9XG5cbiAgYXJpYU5vdGlmeU5vUHJvZHVjdHMoKSB7XG4gICAgY29uc3QgJG5vUHJvZHVjdHNNZXNzYWdlID0gJChcIltkYXRhLW5vLXByb2R1Y3RzLW5vdGlmaWNhdGlvbl1cIik7XG4gICAgaWYgKCRub1Byb2R1Y3RzTWVzc2FnZS5sZW5ndGgpIHtcbiAgICAgICRub1Byb2R1Y3RzTWVzc2FnZS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxuICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxuICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoXCIjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoXCIjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICBwcm9kdWN0TGlzdGluZzpcbiAgICAgICAgICB0aGlzLnRvZ2dsZUNhdGVnb3J5TGlzdGluZ1ZpZXcuZ2V0UmVxdWVzdFRlbXBsYXRlVHlwZShcImNhdGVnb3J5XCIpLFxuICAgICAgICBzaWRlYmFyOiBcImNhdGVnb3J5L3NpZGViYXJcIixcbiAgICAgIH0sXG4gICAgICBzaG93TW9yZTogXCJjYXRlZ29yeS9zaG93LW1vcmVcIixcbiAgICB9O1xuXG4gICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2goXG4gICAgICByZXF1ZXN0T3B0aW9ucyxcbiAgICAgIChjb250ZW50KSA9PiB7XG4gICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cbiAgICAgICAgJChcImJvZHlcIikudHJpZ2dlckhhbmRsZXIoXCJjb21wYXJlUmVzZXRcIik7XG5cbiAgICAgICAgJChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAxMDBcbiAgICAgICAgKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW50dWl0U29sdXRpb25zIC0gQ2F0ZWdvcnkgVXBkYXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLklUU0NhdGVnb3J5LmFmdGVyRmFjZXRVcGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICAkKFwiYm9keVwiKS5vbihcInByb2R1Y3RWaWV3TW9kZUNoYW5nZWRcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgTmV3T3B0cyA9IHtcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOlxuICAgICAgICAgICAgdGhpcy50b2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3LmdldFJlcXVlc3RUZW1wbGF0ZVR5cGUoXCJjYXRlZ29yeVwiKSxcbiAgICAgICAgICBzaWRlYmFyOiBcImNhdGVnb3J5L3NpZGViYXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd01vcmU6IFwiY2F0ZWdvcnkvc2hvdy1tb3JlXCIsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLmZhY2V0ZWRTZWFyY2gudXBkYXRlUmVxdWVzdE9wdGlvbnMoTmV3T3B0cyk7XG4gICAgfSk7XG4gIH1cblxuICAvL1NTQ09ERTogUG9wdWxhdGUgUHJvZHVjdCBHcmlkIGluIGNhdGVnb3J5Lmh0bWxcbiAgcG9wdWxhdGVHcmlkUHJvZHVjdCgpIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcztcbiAgICBjb25zdCBVVUlEY2F0YyA9IHRoaXMuY29udGV4dC5VVUlEY2F0YztcbiAgICBjb25zdCBjYXRlZ29yeUlkID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5SWQ7XG4gICAgYXhpb3NcbiAgICAgIC5nZXQoXCJodHRwczovL3N1ZnJpLmF1dG9jb2RlLmRldi9sNXRAZGV2L2dldEFUUHJvZHVjdC9cIiwge1xuICAgICAgICBwYXJhbXM6IHsgaWQ6IGNhdGVnb3J5SWQgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgZ3JpZEFsbFByb2R1Y3RzID0gJChcIiNncmlkLWFsbC1wcm9kdWN0XCIpO1xuICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YS5wcm9kdWN0O1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IHJlc3BvbnNlLmRhdGEuY2F0ZWdvcnk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICAgICAgICBkYXRhLmZvckVhY2goKHByKSA9PiB7XG4gICAgICAgICAgbGV0IGltZyA9IHt9O1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJbXCJpbWFnZXNcIl0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcltcImltYWdlc1wiXVtpXVtcImlzX3RodW1ibmFpbFwiXSkge1xuICAgICAgICAgICAgICBpbWcgPSBwcltcImltYWdlc1wiXVtpXTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGFjdGlvblNlY3Rpb24gPSBcIlwiO1xuICAgICAgICAgIGlmIChwcltcInZhcmlhbnRzXCJdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGFjdGlvblNlY3Rpb24gPSBgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IHF1aWNrdmlldyBidXR0b24tLXF1aWNrdmlld1wiIGRhdGEtcHJvZHVjdC1pZD1cIiR7cHJbXCJpZFwiXX1cIj5WaWV3IE9wdGlvbnM8L2J1dHRvbj5gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY3Rpb25TZWN0aW9uID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYXRjIGpzLWNhcmQtYXRjXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0Y19fc2VjdGlvbiBjYXJkLWF0Y19fc2VjdGlvbi0tcXR5XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhcmQtYXRjX19xdHktJHtwcltcImlkXCJdfS0ke1VVSURjYXRjfVwiIGNsYXNzPVwiY2FyZC1hdGNfX2xhYmVsIGlzLXNyT25seVwiPlF1YW50aXR5OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYXRjLWluY3JlbWVudCBjYXJkLWF0Yy1pbmNyZW1lbnQtLWhhcy1idXR0b25zIGpzLWNhcmQtYXRjLWluY3JlbWVudFwiPlxuXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRlbFwiIGNsYXNzPVwiZm9ybS1pbnB1dCBjYXJkLWF0Y19faW5wdXQgY2FyZC1hdGNfX2lucHV0LS10b3RhbCBqcy1jYXJkLWF0Y19faW5wdXQtLXRvdGFsXCIgbmFtZT1cImNhcmQtYXRjX19xdHktJHtwcltcImlkXCJdfS0ke1VVSURjYXRjfVwiIGlkPVwiY2FyZC1hdGNfX3F0eS0ke3ByW1wiaWRcIl19LSR7VVVJRGNhdGN9XCIgdmFsdWU9XCIxXCIgbWluPVwiMVwiIHBhdHRlcm49XCJbMC05XSpcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0Yy1idXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0taWNvblwiIGRhdGEtYWN0aW9uPVwiaW5jXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+SW5jcmVhc2UgUXVhbnRpdHkgb2YgdW5kZWZpbmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi13cmFwcGVyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1hZGRcIj48L3VzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1pY29uXCIgZGF0YS1hY3Rpb249XCJkZWNcIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5EZWNyZWFzZSBRdWFudGl0eSBvZiB1bmRlZmluZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLXdyYXBwZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj1cIiNpY29uLW1pbnVzXCI+PC91c2U+UFBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWF0Y19fc2VjdGlvbiBjYXJkLWF0Y19fc2VjdGlvbi0tYWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYXJkLWF0Y19fYnV0dG9uIGJ1dHRvbiBidXR0b24tLXByaW1hcnkganMtY2FyZC1hdGNfX2J1dHRvblwiIGlkPVwiY2FyZC1hdGNfX2FkZC0ke3ByW1wiaWRcIl19LSR7VVVJRGNhdGN9XCIgZGF0YS1kZWZhdWx0LW1lc3NhZ2U9XCJBZGQgdG8gQ2FydFwiIGRhdGEtd2FpdC1tZXNzYWdlPVwiQWRkaW5nIHRvIGNhcnTigKZcIiBkYXRhLWFkZGVkLW1lc3NhZ2U9XCJBZGQgdG8gQ2FydFwiIHZhbHVlPVwiQWRkIHRvIENhcnRcIiBkYXRhLWNhcmQtYWRkLXRvLWNhcnQ9XCIvY2FydC5waHA/YWN0aW9uPWFkZCZhbXA7cHJvZHVjdF9pZD0ke3ByW1wiaWRcIl19XCIgZGF0YS1ldmVudC10eXBlPVwicHJvZHVjdC1jbGlja1wiPkFkZCB0byBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcm9kdWN0LXN0YXR1cy1tZXNzYWdlIGFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiPkFkZGluZyB0byBjYXJ04oCmIFRoZSBpdGVtIGhhcyBiZWVuIGFkZGVkPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gYFxuICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0LSR7cHJbXCJpZFwiXX1cIiBzb3J0LW9yZGVyPVwiJHtwcltcInNvcnRfb3JkZXJcIl19XCIgXG4gICAgICAgICAgY2xhc3M9XCJwcm9kdWN0XCJcbiAgICAgICAgICBwcm9kdWN0LWRhdGEtY2F0ZWdvcnk9XCIke2dldEFsbENhdGVnb3J5KGNhdGVnb3J5LCBwcltcImNhdGVnb3JpZXNcIl0pfVwiIFxuICAgICAgICAgIHByb2R1Y3QtZGF0YS1uYW1lPVwiJHtwcltcImZha2UtaGVhZGluZ1wiXX1cIiBcbiAgICAgICAgICBwcm9kdWN0LWRhdGEtcmV2aWV3PVwiJHtcbiAgICAgICAgICAgIHByW1wicmV2aWV3c19jb3VudFwiXSA9PT0gMFxuICAgICAgICAgICAgICA/IDBcbiAgICAgICAgICAgICAgOiBwcltcInJldmlld3NfcmF0aW5nX3N1bVwiXSAvIHByW1wicmV2aWV3c19jb3VudFwiXVxuICAgICAgICAgIH1cIlxuICAgICAgICAgIHByb2R1Y3QtcmV2aWV3LWNvdW50PVwiJHtwcltcInJldmlld3NfY291bnRcIl19XCIgXG4gICAgICAgICAgcHJvZHVjdC1kYXRhLXByaWNlPVwiJHtcbiAgICAgICAgICAgIHByW1widmFyaWFudHNcIl0ubGVuZ3RoID4gMVxuICAgICAgICAgICAgICA/IHByW1widmFyaWFudHNcIl1bMF1bXCJjYWxjdWxhdGVkX3ByaWNlXCJdLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgOiBwcltcImNhbGN1bGF0ZWRfcHJpY2VcIl0udG9GaXhlZCgyKVxuICAgICAgICAgIH1cIiBcbiAgICAgICAgICBwcm9kdWN0LWRhdGUtY3JlYXRlZD1cIiR7cHJbXCJkYXRlX2NyZWF0ZWRcIl19XCIgXG4gICAgICAgICAgcHJvZHVjdC1pcy1mZWF0dXJlZD1cIiR7cHJbXCJpc19mZWF0dXJlZFwiXX1cIiBcbiAgICAgICAgICBwcm9kdWN0LWJlc3Qtc2VsbGluZz1cIiR7cHJbXCJ0b3RhbF9zb2xkXCJdfVwiXG4gICAgICAgICAgcHJvZHVjdC1jdXN0b20tc29ydC1vcmRlcj1cIiR7cHJbXCJjdXN0b20tc29ydC1vcmRlclwiXX1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJjYXJkXCIgZGF0YS10ZXN0PVwiY2FyZC0ke3ByW1wiaWRcIl19XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImNhcmQtZmlndXJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzYWxlLWZsYWctc2FzaFwiIHN0eWxlPVwiZGlzcGxheTogJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcltcInNhbGVfcHJpY2VcIl0gIT09IDAgPyBcImJsb2NrO1wiIDogXCJub25lO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gXCI+PHNwYW4gY2xhc3M9XCJzYWxlLXRleHRcIj5PbiBTYWxlPC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtwcltcImN1c3RvbV91cmxcIl1bXCJ1cmxcIl19XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1maWd1cmVfX2xpbmtcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIiR7cHJbXCJuYW1lXCJdfSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICQke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1widmFyaWFudHNcIl0ubGVuZ3RoID4gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwcltcInZhcmlhbnRzXCJdWzBdW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIgY2FyZC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ltZ1tcInVybF90aHVtYm5haWxcIl19XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1nW1wiZGVzY3JpcHRpb25cIl1cIiB0aXRsZT1cIiR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcltcImZha2UtaGVhZGluZ1wiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXNpemVzPVwiYXV0b1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY3NldD1cIiR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA4MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxNjB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMzIwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDY0MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA5NjB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTI4MHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAxOTIwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDI1NjB3XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1zcmNzZXQ9XCIke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gODB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTYwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDMyMHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSA2NDB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gOTYwdywgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpbWdbXCJ1cmxfc3RhbmRhcmRcIl19IDEyODB3LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke2ltZ1tcInVybF9zdGFuZGFyZFwiXX0gMTkyMHcsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7aW1nW1widXJsX3N0YW5kYXJkXCJdfSAyNTYwd1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1pbWFnZSBsYXp5YXV0b3NpemVzIGxhenlsb2FkZWRcIiBzaXplcz1cIjI0OHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uIGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1maWdjYXB0aW9uLWJvZHlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ2NhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInByb2R1Y3RWaWV3LXR5cGUtdGl0bGUgaDRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC1uYW1lPVwiXCI+JHtwcltcImZha2UtaGVhZGluZ1wiXX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBhcmlhLWxhYmVsPVwiJHtwcltcIm5hbWVcIl19LCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJbXCJ2YXJpYW50c1wiXS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHByW1widmFyaWFudHNcIl1bMF1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYWxjdWxhdGVkX3ByaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHByW1wiY2FsY3VsYXRlZF9wcmljZVwiXS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIke3ByW1wiY3VzdG9tX3VybFwiXVtcInVybFwiXX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJbXCJuYW1lXCJdfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLXRleHQgY2FyZC10ZXh0LS1za3VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiBTS1UjOiAke3ByW1wic2t1XCJdfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLXRleHQtLXByaWNlXCIgZGF0YS10ZXN0LWluZm8tdHlwZT1cInByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IHJycC1wcmljZS0td2l0aG91dFRheCBoNFwiIHN0eWxlPVwiZGlzcGxheTogYmxvY2s7XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj4gTVNSUDogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ycnAgaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1wic2FsZV9wcmljZVwiXSAhPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIkXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJbXCJ2YXJpYW50c1wiXVswXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJldGFpbF9wcmljZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4IGg1XCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXNyT25seVwiPiBXYXM6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggaDRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS1sYWJlbCBpcy1zck9ubHlcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2Utbm93LWxhYmVsIGlzLXNyT25seVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5Ob3c6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJbXCJ2YXJpYW50c1wiXS5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJbXCJ2YXJpYW50c1wiXVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1widmFyaWFudHNcIl0ubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1bXCJjYWxjdWxhdGVkX3ByaWNlXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHByW1wiY2FsY3VsYXRlZF9wcmljZVwiXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dCBjYXJkLXRleHQtLWV4dHJhXCIgc3R5bGU9XCJkaXNwbGF5OiAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByW1wiY3VzdG9tX2ZpZWxkc1wiXS5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpZWxkKSA9PiBmaWVsZFtcIm5hbWVcIl0gPT09IFwiX19jYXJkLWV4dHJhLWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJlbGF0aXZlO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwibm9uZTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcltcImN1c3RvbV9maWVsZHNcIl0uZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWVsZCkgPT4gZmllbGRbXCJuYW1lXCJdID09PSBcIl9fY2FyZC1leHRyYS1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcHJbXCJjdXN0b21fZmllbGRzXCJdLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpZWxkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbXCJuYW1lXCJdID09PSBcIl9fY2FyZC1leHRyYS1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7YWN0aW9uU2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uY2xpY2s9XCJ3aW5kb3cubG9jYXRpb24uaHJlZj0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcltcImN1c3RvbV91cmxcIl1bXCJ1cmxcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBidXR0b24tLXF1aWNrdmlld1wiID5WaWV3IERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICAgIGdyaWRBbGxQcm9kdWN0cy5hcHBlbmQodGVtcGxhdGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBib2R5LmNvbmZpZ3VyZUlzb3RvcGVGb3JBbGwoKTtcbiAgICAgICAgYm9keS5zdGFydEdsb2JhbCgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvcik7XG4gICAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGdldEFsbENhdGVnb3J5KGNhdF9saXN0LCBwcl9jYXQpIHtcbiAgICAgIGxldCBjYXQgPSBcIlwiO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcl9jYXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGNhdF9saXN0W3ByX2NhdFtpXV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNhdCA9IGNhdCArIGNhdF9saXN0W3ByX2NhdFtpXV1bXCJjYXRfaWRcIl0uam9pbihcIiBcIikgKyBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coY2F0KTtcbiAgICAgIHJldHVybiBjYXQ7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRHbG9iYWwoKSB7XG4gICAgY3VzdG9tR2xvYmFsKHRoaXMuY29udGV4dCk7XG4gIH1cblxuICAvLyBjaGVjayBpZiBtb2JpbGUgdXNlclxuICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTM4MTY3My9kZXRlY3RpbmctYS1tb2JpbGUtYnJvd3NlclxuICBjaGVja01vYmlsZSgpIHtcbiAgICBsZXQgY2hlY2sgPSBmYWxzZTtcbiAgICAoZnVuY3Rpb24gKGEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoXG4gICAgICAgICAgYVxuICAgICAgICApIHx8XG4gICAgICAgIC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLnRlc3QoXG4gICAgICAgICAgYS5zdWJzdHIoMCwgNClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgICBjaGVjayA9IHRydWU7XG4gICAgfSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yIHx8IHdpbmRvdy5vcGVyYSk7XG4gICAgcmV0dXJuIGNoZWNrO1xuICB9XG5cbiAgcmVzZXRTZWN0aW9uQ3NzRm9yTW9iaWxlVmlldygpIHtcbiAgICBpZiAoc2NyZWVuLndpZHRoIDwgNjAwKSB7XG4gICAgICAkKFwiW3NlY3Rpb24tdmlld11cIikuYXR0cihcImlkXCIsIFwiXCIpO1xuICAgICAgJChcIltzZWN0aW9uLXZpZXddXCIpLmF0dHIoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIltzZWN0aW9uLXZpZXddXCIpLmF0dHIoXCJpZFwiLCBcInByb2R1Y3QtbGlzdGluZy1jb250YWluZXJcIik7XG4gICAgICAkKFwiW3NlY3Rpb24tdmlld11cIikuYXR0cihcImNsYXNzXCIsIFwiY29udGFpbmVyXCIpO1xuICAgIH1cbiAgfVxuXG4gIGR5bmFtaWNHcmlkV2lkdGhTaXppbmdGb3JJc290b3BlKCkge1xuICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGlmICh3aWR0aCA8IDMyMCkge1xuICAgICAgd2lkdGggPSAzMjA7XG4gICAgfVxuICAgIGlmICh3aWR0aCA+IDEyMDApIHtcbiAgICAgIHdpZHRoID0gMTIwMDtcbiAgICB9XG5cbiAgICB0aGlzLnJlc2V0U2VjdGlvbkNzc0Zvck1vYmlsZVZpZXcoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh3aWR0aCk7XG5cbiAgICBpZiAodGhpcy5jaGVja01vYmlsZSgpKSB7XG4gICAgICAkKFwiI2dyaWQtYWxsLXByb2R1Y3RcIikuY3NzKFwid2lkdGhcIiwgYDkwdndgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIiNncmlkLWFsbC1wcm9kdWN0XCIpLmNzcyhcIndpZHRoXCIsIGAke3dpZHRofXB4YCk7XG4gICAgfVxuICB9XG5cbiAgY29uZmlndXJlSXNvdG9wZUZvckFsbCgpIHtcbiAgICAvLyAkKFwiLmdyaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImdyaWRcIik7XG4gICAgLy8gICAkKFwiLmxkcy1ibG9ja1wiKS5oaWRlKCk7XG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyaWQtYWxsLXByb2R1Y3RcIik7XG4gICAgY29uc3QgYm9keSA9IHRoaXM7XG5cbiAgICAvLyBmb3IgdGVzdGluZywgY29tbWVudCB0aGlzIHNlY3Rpb24gYW5kIGNhbGwgdGhlIHJ1bkltYWdlVGVzdCgpXG4gICAgbGV0IGlzbztcbiAgICBpZiAodGhpcy5jaGVja01vYmlsZSgpKSB7XG4gICAgICBydW5JbWFnZVRlc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChcIi5ncmlkXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJncmlkXCIpO1xuICAgICAgJChcIi5sZHMtYmxvY2tcIikuaGlkZSgpO1xuICAgICAgcnVuSXNvdG9wZSgpO1xuICAgIH1cblxuICAgIGJvZHkuZHluYW1pY0dyaWRXaWR0aFNpemluZ0Zvcklzb3RvcGUoKTtcbiAgICBsZXQgcmVzaXplZCA9IHRydWU7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXNpemVkID0gdHJ1ZTtcbiAgICAgIGJvZHkuZHluYW1pY0dyaWRXaWR0aFNpemluZ0Zvcklzb3RvcGUoKTtcbiAgICB9KTtcblxuICAgIC8vIHJ1bkltYWdlVGVzdCgpO1xuXG4gICAgLy8gaXQgd2lsbCBjYWxsIHJ1bklzb3RvcGUoKSBpZiBhbGwgaW1hZ2VzIGFyZSBsb2FkZWRcbiAgICBmdW5jdGlvbiBydW5JbWFnZVRlc3QoKSB7XG4gICAgICAkKFwiLmdyaWRcIikuY3NzKFwiZGlzcGxheVwiLCBcImdyaWRcIik7XG4gICAgICAkKFwiLmxkcy1ibG9ja1wiKS5oaWRlKCk7XG5cbiAgICAgIGxldCBpbWdMb2FkZWQgPSB0cnVlO1xuXG4gICAgICBsZXQgdGVzdEltZ0ludCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdmFyIGNhcmRJbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICBcIiNncmlkLWFsbC1wcm9kdWN0IC5jYXJkLWltYWdlXCJcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGNhcmRJbWdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRJbWdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbm9uWmVybyA9IHRydWU7XG4gICAgICAgICAgICBpZiAoY2FyZEltZ3NbaV0ub2Zmc2V0SGVpZ2h0IDwgMTAwKSB7XG4gICAgICAgICAgICAgIGltZ0xvYWRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBub25aZXJvID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vblplcm8pIHtcbiAgICAgICAgICAgICAgaW1nTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW1nTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW1nTG9hZGVkKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0ZXN0SW1nSW50KTtcbiAgICAgICAgICBydW5Jc290b3BlKCk7XG4gICAgICAgICAgLy8gYm9keS5jb25maWd1cmVJc290b3BlRm9yQWxsKCk7XG4gICAgICAgICAgLy8gYm9keS5zdGFydEdsb2JhbCgpO1xuICAgICAgICAgIC8vICQoXCIubGRzLWJsb2NrXCIpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSXNvdG9wZSgpIHtcbiAgICAgIC8vICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICBpc28gPSBuZXcgSXNvdG9wZShncmlkLCB7XG4gICAgICAgIC8vIG9wdGlvbnMuLi5cbiAgICAgICAgaXRlbVNlbGVjdG9yOiBcIi5wcm9kdWN0XCIsXG4gICAgICAgIGxheW91dE1vZGU6IFwiZml0Um93c1wiLFxuICAgICAgICBnZXRTb3J0RGF0YToge1xuICAgICAgICAgIG5hbWU6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1uYW1lXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJpY2U6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtcHJpY2VcIikpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmV2aWV3OiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWRhdGEtcmV2aWV3XCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY2F0ZWdvcnk6IGZ1bmN0aW9uIChpdGVtRWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1jYXRlZ29yeVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJlc3Rfc2VsbGluZzogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtYmVzdC1zZWxsaW5nXCIpKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5ld2VzdDogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbUVsZW0uZ2V0QXR0cmlidXRlKFwicHJvZHVjdC1kYXRlLWNyZWF0ZWRcIik7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXN0b21fc29ydF9vcmRlcjogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtY3VzdG9tLXNvcnQtb3JkZXJcIikpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gfSwgMCk7XG5cbiAgICAgICQoXCIjYWxsLXNvcnQtc2VsZWN0LCAjYWxsLXNvcnQtc2VsZWN0LW1vYmlsZVwiKS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB2YWwgPSAkKHRoaXMpLnZhbCgpLnNwbGl0KFwiLVwiKTtcblxuICAgICAgICBpZiAodmFsWzBdID09PSBcInJldmlld1wiKSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgc29ydEJ5OiBbdmFsWzBdLCBcInJhdGluZ19jb3VudFwiXSxcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IHtcbiAgICAgICAgICAgICAgcmV2aWV3OiBmYWxzZSxcbiAgICAgICAgICAgICAgcmF0aW5nX2NvdW50OiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgc29ydEJ5OiB2YWxbMF0sXG4gICAgICAgICAgICBzb3J0QXNjZW5kaW5nOiB2YWxbMV0gPT09IFwiYXNjXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmaWx0ZXJfYXJyID0gW107XG5cbiAgICAgICQoXCJbY2hlY2tib3gtZmlsdGVyLWFsbF1cIikuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaXNmZWF0dXJlZCA9ICQoXCIjZmVhdHVyZWQtY2hlY2tib3g6Y2hlY2tlZFwiKS5sZW5ndGggPiAwO1xuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKFwiaWRcIikgIT09IFwiZmVhdHVyZWQtY2hlY2tib3hcIikge1xuICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGZpbHRlcl9hcnIucHVzaCgkKHRoaXMpLmF0dHIoXCJmaWx0ZXItdmFsdWVcIikpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGZpbHRlcl9hcnIuaW5kZXhPZigkKHRoaXMpLmF0dHIoXCJmaWx0ZXItdmFsdWVcIikpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgLy8gb25seSBzcGxpY2UgYXJyYXkgd2hlbiBpdGVtIGlzIGZvdW5kXG4gICAgICAgICAgICAgIGZpbHRlcl9hcnIuc3BsaWNlKGluZGV4LCAxKTsgLy8gMm5kIHBhcmFtZXRlciBtZWFucyByZW1vdmUgb25lIGl0ZW0gb25seVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaWx0ZXJfYXJyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgICAvLyBpdGVtIGVsZW1lbnQgcHJvdmlkZWQgYXMgYXJndW1lbnRcbiAgICAgICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtZGF0YS1jYXRlZ29yeVwiKTtcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWx0ZXJfYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbC5pbmNsdWRlcyhmaWx0ZXJfYXJyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGlzZmVhdHVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtRWxlbS5nZXRBdHRyaWJ1dGUoXCJwcm9kdWN0LWlzLWZlYXR1cmVkXCIpID09PSBcInRydWVcIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpc2ZlYXR1cmVkKSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoaXRlbUVsZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1FbGVtLmdldEF0dHJpYnV0ZShcInByb2R1Y3QtaXMtZmVhdHVyZWRcIikgPT09IFwidHJ1ZVwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7IGZpbHRlcjogXCIqXCIgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpc28ub24oXCJsYXlvdXRDb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChyZXNpemVkKSB7XG4gICAgICAgICAgcmVzaXplZCA9IGZhbHNlO1xuICAgICAgICAgIGlzby5hcnJhbmdlKCk7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChib2R5LmNvbnRleHQuc3ViY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBpc28uYXJyYW5nZSh7XG4gICAgICAgICAgICBzb3J0Qnk6IFwiY3VzdG9tX3NvcnRfb3JkZXJcIixcbiAgICAgICAgICAgIHNvcnRBc2NlbmRpbmc6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXNvLmFycmFuZ2Uoe1xuICAgICAgICAgICAgc29ydEJ5OiBcImJlc3Rfc2VsbGluZ1wiLFxuICAgICAgICAgICAgc29ydEFzY2VuZGluZzogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDMpO1xuICAgIH1cbiAgfVxufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVRTQ2F0ZWdvcnkge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG5cbiAgICBhZnRlckZhY2V0VXBkYXRlKCkge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4uL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2dnbGVDYXRlZ29yeUxpc3RpbmdWaWV3IHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuZGVmYXVsdFZpZXdUeXBlID0gdGhpcy5jb250ZXh0LmRlZmF1bHRWaWV3VHlwZTtcbiAgICAgICAgdGhpcy5vcHBvc2l0ZVZpZXdUeXBlID0gdGhpcy5kZWZhdWx0Vmlld1R5cGUgIT09ICdncmlkJyA/ICdncmlkJyA6ICdsaXN0JztcbiAgICAgICAgdGhpcy5wcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIHRoaXMubG9hZGluZ092ZXJsYXkgPSAkKCcubG9hZGluZ092ZXJsYXkubG9hZGluZ092ZXJsYXktLXByb2R1Y3QtbGlzdGluZycpO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignZmFjZXRlZFNlYXJjaFJlZnJlc2gnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFRvZ2dsZUV2ZW50cygpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBnZXRTdG9yZWRWaWV3VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2NhdGVnb3J5LXZpZXctdHlwZScpIHx8IG51bGw7XG4gICAgfVxuXG4gICAgZ2V0UmVxdWVzdFRlbXBsYXRlVHlwZSh0eXBlKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VUeXBlID0gdGhpcy5nZXRTdG9yZWRWaWV3VHlwZSgpO1xuICAgICAgICByZXR1cm4gIXBhZ2VUeXBlID8gYCR7dHlwZX0vcHJvZHVjdC1saXN0aW5nYCA6IGBjdXN0b20vY2F0ZWdvcnktJHtwYWdlVHlwZX0tdmlld2A7XG4gICAgfVxuXG4gICAgc3RvcmVWaWV3VHlwZSh0eXBlKSB7XG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2NhdGVnb3J5LXZpZXctdHlwZScsIHR5cGUpO1xuICAgIH1cblxuICAgIGdldENhdGVnb3J5UGFnZShwYWdlVHlwZSkge1xuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xuICAgICAgICAgICAgICAgICAgICBzaG9wX2J5X3ByaWNlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMucHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IGBjdXN0b20vY2F0ZWdvcnktJHtwYWdlVHlwZX0tdmlld2AsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nT3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIGNvbmZpZywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpLmh0bWwoY29udGVudCk7XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZ092ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICB0aGlzLnN0b3JlVmlld1R5cGUocGFnZVR5cGUpO1xuXG4gICAgICAgICAgICB0aGlzLmFkZFRvZ2dsZUV2ZW50cygpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ3Byb2R1Y3RWaWV3TW9kZUNoYW5nZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkVG9nZ2xlRXZlbnRzKCkge1xuICAgICAgICAkKCcuanMtY2F0ZWdvcnlfX3RvZ2dsZS12aWV3Jykub24oJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSAkKGUuY3VycmVudFRhcmdldCkuZGF0YSgndmlldy10eXBlJyk7XG5cbiAgICAgICAgICAgIGlmICgkKGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2FjdGl2ZS1jYXRlZ29yeS12aWV3JykpIHJldHVybjtcblxuICAgICAgICAgICAgdGhpcy5nZXRDYXRlZ29yeVBhZ2UodHlwZSwgdGhpcy5hZGRUb2dnbGVFdmVudHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBzdG9yZWRWaWV3VHlwZSA9IHRoaXMuZ2V0U3RvcmVkVmlld1R5cGUoKTtcblxuICAgICAgICBpZiAoc3RvcmVkVmlld1R5cGUgPT09IHRoaXMuZGVmYXVsdFZpZXdUeXBlIHx8ICFzdG9yZWRWaWV3VHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkVG9nZ2xlRXZlbnRzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldENhdGVnb3J5UGFnZSh0aGlzLm9wcG9zaXRlVmlld1R5cGUpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=