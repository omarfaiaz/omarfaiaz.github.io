// $(".lolo").slick({
//   dots: true,
//   speed: 300,
//   slidesToShow: 1
// });

$(".content").slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: true,
  cssEase: "linear",
  autoplay: false,
  prevArrow:
    "<div class='prev-nav cursor-pointer invisible absolute top-[calc(50%-18px)] text-4xl left-[5px] custom-nav'>&#8249;</div>",
  nextArrow:
    "<div class='next-nav cursor-pointer invisible absolute top-[calc(50%-18px)] text-4xl right-[5px] custom-nav'>&#8250;</div>"
});

//   // 3. On mouseenter, go to the second slide (index = 1)
//   $(".content").slick("slickGoTo", 1);
// });

// $(".content").on("mouseleave", ".slick-slide", function () {
//   // 4. On mouseleave, go back to the first slide (index = 0)
//   $(".content").slick("slickGoTo", 0);
// });
// const boxes = document.querySelectorAll(".single-collection-box");

// boxes.forEach((box, index) => {
//   console.log(box, " ", index);
//   box.addEventListener("mouseover", function () {
//     box.querySelector(".slick-prev").click();
//   });
// });

// const content = document.querySelectorAll(".content");

// $.each(content, function (index, con) {
//   con.on("mouseenter", ".slick-slide", function () {
//     // 3. On mouseenter, go to the second slide (index = 1)
//     content.slick("slickGoTo", 1);

//     console.log(content);
//   });

//   content.on("mouseleave", ".slick-slide", function () {
//     // 4. On mouseleave, go back to the first slide (index = 0)
//     content.slick("slickGoTo", 0);
//   });
// });

$(".content").each(function (index, item) {
  $(item).on("mouseenter", ".slick-slide", function () {
    $(item).slick("slickGoTo", 1);
    $(item).find(".custom-nav").css("visibility", "visible");
  });

  $(item).on("mouseleave", ".slick-slide", function () {
    $(item).slick("slickGoTo", 0);
    $(item).find(".custom-nav").css("visibility", "hidden");
  });
});

// buttton click evernt

const product_tittle = document.getElementById("lala");
const product_text = document.getElementById("product_text");

var flag = true;

product_tittle.addEventListener("click", () => {
  if (flag) {
    product_text.style.display = "block";
    flag = false;
  } else {
    product_text.style.display = "none";
    flag = true;
  }
});

const sustain_tittle = document.getElementById("sustain_block");
const sustain_text = document.getElementById("sustain_text");

const icon = document.getElementById("plus");

sustain_tittle.addEventListener("click", () => {
  if (flag) {
    sustain_text.style.display = "block";
    flag = false;

    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  } else {
    sustain_text.style.display = "none";
    flag = true;
  }
});

const see_more = document.getElementById("seemore");
const extra_text = document.getElementById("extratext");

const plus_icon = document.getElementById("plas");

// plus_icon.addEventListener("click", () => {
//   console.log("clicked");
// });

see_more.addEventListener("click", () => {
  if (flag) {
    extra_text.style.display = "block";
    see_more.innerText = "See Less";
    flag = false;

    if (plus_icon.classList.contains("fa-plus")) {
      plus_icon.classList.remove("fa-plus");
      plus_icon.classList.add("fa-minus");
    } else {
      plus_icon.classList.remove("fa-minus");
      plus_icon.classList.add("fa-plus");
    }
  } else {
    extra_text.style.display = "none";
    see_more.innerText = "See More";
    flag = true;
  }
});
