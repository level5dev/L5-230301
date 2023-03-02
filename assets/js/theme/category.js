import { hooks } from "@bigcommerce/stencil-utils";
import CatalogPage from "./catalog";
import compareProducts from "./global/compare-products";
import FacetedSearch from "./common/faceted-search";
import { createTranslationDictionary } from "../theme/common/utils/translations-utils";
import ITSCategory from "./custom/its-category";
import ToggleCategoryListingView from "./custom/toggle-category-listing-view";
import customGlobal from "./custom/its-global";
import { customSidebar } from "./custom/custom-sidebar-filter.js";

export default class Category extends CatalogPage {
  constructor(context) {
    super(context);
    this.validationDictionary = createTranslationDictionary(context);

    /**
     * IntuitSolutions - Custom Category
     */
    this.ITSCategory = new ITSCategory(context);
    this.toggleCategoryListingView = new ToggleCategoryListingView(context);
  }

  setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      "aria-live": ariaLiveStatus,
    });
  }

  makeShopByPriceFilterAccessible() {
    if (!$("[data-shop-by-price]").length) return;

    if ($(".navList-action").hasClass("is-active")) {
      $("a.navList-action.is-active").focus();
    }

    $("a.navList-action").on("click", () =>
      this.setLiveRegionAttributes(
        $("span.price-filter-message"),
        "status",
        "assertive"
      )
    );
  }

  onReady() {
    this.populateGridProduct();
    this.arrangeFocusOnSortBy();
    customSidebar();

    $('[data-button-type="add-cart"]').on("click", (e) =>
      this.setLiveRegionAttributes(
        $(e.currentTarget).next(),
        "status",
        "polite"
      )
    );

    this.makeShopByPriceFilterAccessible();

    compareProducts(this.context);

    if ($("#facetedSearch").length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      hooks.on("sortBy-submitted", this.onSortBySubmit);
    }

    $("a.reset-btn").on("click", () =>
      this.setLiveRegionsAttributes($("span.reset-message"), "status", "polite")
    );

    this.ariaNotifyNoProducts();
  }

  ariaNotifyNoProducts() {
    const $noProductsMessage = $("[data-no-products-notification]");
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  }

  initFacetedSearch() {
    const {
      price_min_evaluation: onMinPriceError,
      price_max_evaluation: onMaxPriceError,
      price_min_not_entered: minPriceNotEntered,
      price_max_not_entered: maxPriceNotEntered,
      price_invalid_value: onInvalidPrice,
    } = this.validationDictionary;
    const $productListingContainer = $("#product-listing-container");
    const $facetedSearchContainer = $("#faceted-search-container");
    const productsPerPage = this.context.categoryProductsPerPage;
    const requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage,
          },
        },
      },
      template: {
        productListing:
          this.toggleCategoryListingView.getRequestTemplateType("category"),
        sidebar: "category/sidebar",
      },
      showMore: "category/show-more",
    };

    this.facetedSearch = new FacetedSearch(
      requestOptions,
      (content) => {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);

        $("body").triggerHandler("compareReset");

        $("html, body").animate(
          {
            scrollTop: 0,
          },
          100
        );

        /**
         * IntuitSolutions - Category Update
         */
        this.ITSCategory.afterFacetUpdate();
      },
      {
        validationErrorMessages: {
          onMinPriceError,
          onMaxPriceError,
          minPriceNotEntered,
          maxPriceNotEntered,
          onInvalidPrice,
        },
      }
    );

    $("body").on("productViewModeChanged", () => {
      const NewOpts = {
        config: {
          category: {
            shop_by_price: true,
            products: {
              limit: productsPerPage,
            },
          },
        },
        template: {
          productListing:
            this.toggleCategoryListingView.getRequestTemplateType("category"),
          sidebar: "category/sidebar",
        },
        showMore: "category/show-more",
      };

      this.facetedSearch.updateRequestOptions(NewOpts);
    });
  }

  //SSCODE: Populate Product Grid in category.html
  populateGridProduct() {
    const body = this;
    const UUIDcatc = this.context.UUIDcatc;
    const categoryId = this.context.categoryId;
    axios
      .get("https://sufri.api.stdlib.com/l5t@dev/getAllProduct/", {
        params: { id: categoryId },
      })
      .then(function (response) {
        const gridAllProducts = $("#grid-all-product");
        const data = response.data.product;
        const category = response.data.category;
        console.log(response);

        data.forEach((pr) => {
          let img = {};
          for (let i = 0; i < pr["images"].length; i++) {
            if (pr["images"][i]["is_thumbnail"]) {
              img = pr["images"][i];
              break;
            }
          }

          let actionSection = "";
          if (pr["variants"].length > 1) {
            actionSection = `<button type="button" class="button button--primary quickview button--quickview" data-product-id="${pr["id"]}">View Options</button>`;
          } else {
            actionSection = `
            <div class="card-atc js-card-atc">
              <div class="card-atc__section card-atc__section--qty">
                <label for="card-atc__qty-${pr["id"]}-${UUIDcatc}" class="card-atc__label is-srOnly">Quantity:</label>
                <div class="card-atc-increment card-atc-increment--has-buttons js-card-atc-increment">

                  <input type="tel" class="form-input card-atc__input card-atc__input--total js-card-atc__input--total" name="card-atc__qty-${pr["id"]}-${UUIDcatc}" id="card-atc__qty-${pr["id"]}-${UUIDcatc}" value="1" min="1" pattern="[0-9]*" aria-live="polite">
                  <div class="card-atc-button-wrapper">
                    <button class="button button--icon" data-action="inc" type="button">
                      <span class="is-srOnly">Increase Quantity of undefined</span>
                      <span class="icon-wrapper" aria-hidden="true">
                        <svg class="icon">
                          <use xlink:href="#icon-add"></use>
                        </svg>
                      </span>
                    </button>
                    <button class="button button--icon" data-action="dec" type="button">
                      <span class="is-srOnly">Decrease Quantity of undefined</span>
                      <span class="icon-wrapper" aria-hidden="true">
                        <svg class="icon">
                          <use xlink:href="#icon-minus"></use>PP
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-atc__section card-atc__section--action">
                <button type="button" class="card-atc__button button button--primary js-card-atc__button" id="card-atc__add-${pr["id"]}-${UUIDcatc}" data-default-message="Add to Cart" data-wait-message="Adding to cart…" data-added-message="Add to Cart" value="Add to Cart" data-card-add-to-cart="/cart.php?action=add&amp;product_id=${pr["id"]}" data-event-type="product-click">Add to Cart</button>
                <span class="product-status-message aria-description--hidden">Adding to cart… The item has been added</span>
              </div>
          </div>`;
          }

          const template = `
          <div id="product-${pr["id"]}" sort-order="${pr["sort_order"]}" 
          class="product"
          product-data-category="${getAllCategory(category, pr["categories"])}" 
          product-data-name="${pr["fake-heading"]}" 
          product-data-review="${
            pr["reviews_count"] === 0
              ? 0
              : pr["reviews_rating_sum"] / pr["reviews_count"]
          }"
          product-review-count="${pr["reviews_count"]}" 
          product-data-price="${
            pr["variants"].length > 1
              ? pr["variants"][0]["calculated_price"].toFixed(2)
              : pr["calculated_price"].toFixed(2)
          }" 
          product-date-created="${pr["date_created"]}" 
          product-is-featured="${pr["is_featured"]}" 
          product-best-selling="${pr["total_sold"]}"
          product-custom-sort-order="${pr["custom-sort-order"]}">
              <div class="card-wrapper">
                  <article class="card" data-test="card-${pr["id"]}">
                      <figure class="card-figure">
                          <div class="sale-flag-sash" style="display: ${
                            pr["variants"][0].sale_price !== 0
                              ? "block;"
                              : "none;"
                          } "><span class="sale-text">On Sale</span></div>
                          <a href="${pr["custom_url"]["url"]}" 
                          class="card-figure__link" 
                          aria-label="${pr["name"]}, 
                          $${
                            pr["variants"].length > 1
                              ? pr["variants"][0]["calculated_price"].toFixed(2)
                              : pr["calculated_price"].toFixed(2)
                          }">
                              <div class=" card-img-container">
                                  <img src="${img["url_thumbnail"]}" 
                                  alt="img["description"]" title="${
                                    pr["fake-heading"]
                                  }" 
                                  data-sizes="auto" 
                                  srcset="${img["url_standard"]} 80w, 
                                  ${img["url_standard"]} 160w, 
                                  ${img["url_standard"]} 320w, 
                                  ${img["url_standard"]} 640w, 
                                  ${img["url_standard"]} 960w, 
                                  ${img["url_standard"]} 1280w, 
                                  ${img["url_standard"]} 1920w, 
                                  ${img["url_standard"]} 2560w" 
                                  data-srcset="${img["url_standard"]} 80w, 
                                  ${img["url_standard"]} 160w, 
                                  ${img["url_standard"]} 320w, 
                                  ${img["url_standard"]} 640w, 
                                  ${img["url_standard"]} 960w, 
                                  ${img["url_standard"]} 1280w, 
                                  ${img["url_standard"]} 1920w, 
                                  ${img["url_standard"]} 2560w" 
                                  class="card-image lazyautosizes lazyloaded" sizes="248px">
                              </div>
                          </a>
                         <figcaption class="card-figcaption">
                              <div class="card-figcaption-body"></div>
                         </figcaption>
                      </figure>
                      <div class="card-body">
                          <p class="productView-type-title h4" 
                          product-name="">${pr["fake-heading"]}</p>
                          <h3 class="card-title ">
                              <a aria-label="${pr["name"]}, 
                                $${
                                  pr["variants"].length > 1
                                    ? pr["variants"][0][
                                        "calculated_price"
                                      ].toFixed(2)
                                    : pr["calculated_price"].toFixed(2)
                                }" 
                              href="${pr["custom_url"]["url"]}">
                              ${pr["name"]}</a>
                          </h3>
                          <p class="card-text card-text--sku">
                              <span> SKU#: ${pr["sku"]} </span>
                          </p>
                          <div class="card-text card-text--price" data-test-info-type="price">
                              <div class="price-section price-section--withoutTax rrp-price--withoutTax h4" style="display: block;">
                                  <span class="is-srOnly"> MSRP: </span>
                                  <span data-product-rrp-price-without-tax="" class="price price--rrp h5">
                                    ${
                                      pr["variants"][0].sale_price !== 0
                                        ? "$" + pr["variants"][0].retail_price
                                        : ""
                                    }
                                  </span>
                              </div>
                              <div class="price-section price-section--withoutTax non-sale-price--withoutTax h5" style="display: none;">
                                <span class="is-srOnly"> Was: </span>
                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>
                              </div>
                              <div class="price-section price-section--withoutTax h4">
                                <span class="price-label is-srOnly"></span>
                                <span class="price-now-label is-srOnly" style="display: none;">Now:</span>
                                <span data-product-price-without-tax="" class="price price--withoutTax">$${
                                  pr["variants"].length > 1
                                    ? pr["variants"][0][
                                        "calculated_price"
                                      ].toFixed(2)
                                    : pr["calculated_price"].toFixed(2)
                                }</span>
                              </div>
                          </div>
                          <p class="card-text card-text--extra" style="display: ${
                            pr["custom_fields"].find(
                              (field) => field["name"] === "__card-extra-info"
                            ) !== undefined
                              ? "relative;"
                              : "none;"
                          } "> 
                          ${
                            pr["custom_fields"].find(
                              (field) => field["name"] === "__card-extra-info"
                            ) !== undefined
                              ? pr["custom_fields"].find(
                                  (field) =>
                                    field["name"] === "__card-extra-info"
                                ).value
                              : ""
                          }</p>
                         <div class="card-action-wrapper">
                              ${actionSection}
                              <button type="button" onclick="window.location.href=${
                                pr["custom_url"]["url"]
                              }" 
                              class="button button--primary button--quickview" >View Details</button>
                         </div>
                      </div>
                  </article>
              </div>
          </div>`;

          gridAllProducts.append(template);
        });

        body.configureIsotopeForAll();
        body.startGlobal();
      })
      .catch(function (error) {
        console.log("error", error);
      });

    function getAllCategory(cat_list, pr_cat) {
      let cat = "";
      for (let i = 0; i < pr_cat.length; i++) {
        if (cat_list[pr_cat[i]] !== undefined) {
          cat = cat + cat_list[pr_cat[i]]["cat_id"].join(" ") + " ";
        }
      }
      return cat;
    }
  }

  startGlobal() {
    customGlobal(this.context);
  }

  // check if mobile user
  // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
  checkMobile() {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }

  resetSectionCssForMobileView() {
    if (screen.width < 600) {
      $("[section-view]").attr("id", "");
      $("[section-view]").attr("class", "");
    } else {
      $("[section-view]").attr("id", "product-listing-container");
      $("[section-view]").attr("class", "container");
    }
  }

  dynamicGridWidthSizingForIsotope() {
    let width = window.innerWidth;
    if (width < 320) {
      width = 320;
    }
    if (width > 1200) {
      width = 1200;
    }

    this.resetSectionCssForMobileView();
    // console.log(width);

    $("#grid-all-product").css("width", `${width}px`);
  }

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
          console.log("complete");
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
  }
}
