// JavaScript/jQuery untuk menangani perubahan checkbox
$("#messageState").on("change", function () {
  // Hapus kelas 'openNor' dan 'closeNor'
  $(".message").removeClass("openNor closeNor");

  if ($("#messageState").is(":checked")) {
    // Menambahkan kelas 'openNor' jika checkbox dicentang
    $(".message").removeClass("closed no-anim").addClass("openNor");
    $(".heart").removeClass("closeHer openedHer").addClass("openHer");
    $(".container").stop().animate({ backgroundColor: "#f48fb1" }, 2000);
    console.log("Pesan dibuka");
  } else {
    // Menambahkan kelas 'closeNor' jika checkbox tidak dicentang
    $(".message").removeClass("no-anim").addClass("closeNor");
    $(".heart").removeClass("openHer openedHer").addClass("closeHer");
    $(".container").stop().animate({ backgroundColor: "#fce4ec" }, 2000);
    console.log("Pesan ditutup");
  }
});

// Event listener untuk animasi pada elemen '.message'
$(".message").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
  if ($(this).hasClass("closeNor")) {
    $(this).addClass("closed");
  }
  $(this).removeClass("openNor closeNor").addClass("no-anim");
});

// Event listener untuk animasi pada elemen '.heart'
$(".heart").on("webkitAnimationEnd oanimationend msAnimationEnd animationend", function () {
  if (!$(this).hasClass("closeHer")) {
    $(this).addClass("openedHer beating");
  } else {
    $(this).addClass("no-anim").removeClass("beating");
  }
  $(this).removeClass("openHer closeHer");
});
