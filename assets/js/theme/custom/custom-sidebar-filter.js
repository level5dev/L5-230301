const customSidebar = () => {
  const createEvent = new Event("CheckboxUpdated", {});
  const title = {
    // Include Automatic Taper?
    YT: "Taper Included",
    NT: "No Taper",

    // Flat Box Set Sizes:
    710: `7"/10" Boxes`,
    1012: `10"/12" Boxes`,
    71012: `7"/10"/12" Boxes`,

    // Flat Box Capacities:
    SF: `Standard`,
    MF: `MEGA`,

    // Corner Applicator Type:
    MA: "MiniShot™",
    "7A": '7" Corner Box',
    "8A": '8" Corner Box',

    // # of Corner Finishers:
    "03": `3" Corner Finisher`,
    "0335": `3"/3.5" Corner Finishers`,

    // # of Compound Pumps:
    "1P": "1 Pump",
    "2P": "2 Pumps",

    // Nail Spotter Included?
    YN: "Nail Spotter",
    NN: "No Nail Spotter",

    // Handle Type:
    FH: "FL Handles",
    EH: "Ext Handles",
  };

  $(".filter--show_button").each(function () {
    $(this).click(function () {
      const block = $(`[filter-block="${$(this).attr("filter-button")}"]`);
      if (block.css("display") === "none") {
        block.css("display", "grid");
      } else {
        block.css("display", "none");
      }
      // console.log("clicked");
    });
  });

  $(".tag_title--block").click(function () {
    const input = $(this).siblings().find("input");
    if (input.is(":checked")) {
      input.prop("checked", false);
    } else {
      input.prop("checked", true);
    }
    fillFilterList();
  });

  $("[input-filter]").on("change", fillFilterList);

  function clearFilterAtTop(val) {
    $(`[input-filter][value="${val}"]`).prop("checked", false);
    fillFilterList();
  }

  function fillFilterList() {
    const temp = [];
    $(".filter-list_container").empty();

    $("[input-filter]:checked").each(function () {
      const val = $(this).val();
      temp.push(val);
      $(".filter-list_container").append(
        `<li class="filter-list" data="${val}"">
      <div>
      ${title[val]}
      <div>x</div>
      </div></li>`
      );
      setTimeout(function () {
        $(`.filter-list[data="${val}"]`).click(function () {
          clearFilterAtTop(val);
        });
      }, 0);
    });

    window.dispatchEvent(createEvent);
  }
};

export { customSidebar };
