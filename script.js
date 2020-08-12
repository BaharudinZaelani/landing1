const de = document.querySelector(".demo");
const verDua = document.querySelector(".ver-dua");
const data = document.querySelector(".sec4 h3");
let nama = prompt("Anda Siapa ?");
const width = screen.width;


// let nama = 'zawhax';

const haxo = (document.querySelector(".sec1 .anjim").innerHTML = nama);

if (width < 560) {
  window.addEventListener("scroll", function () {
    const img = document.querySelector(".sec1 img");
    const header = document.getElementsByTagName("header");
    const wel = document.querySelector("header h1, h3");
    const nav = document.querySelector(".navbar");
    const img1 = document.querySelector(".zz img");
    const suv = document.querySelector(".klik1");
    let a = window.scrollY;

    if (a < 100) {
      img.style.marginTop = "-" + a + "px";
      wel.style.marginTop = "-" + a + "px";
      nav.style.marginTop = "-60px";
    }

    if (a > 60) {
      nav.style.marginTop = 0;
    }
    if (a > 318) {
      zaw.classList.remove("zaw");
      img1.classList.remove("animsec");
    }

    if (a >= 350) {
      document.body.style.overflow = "hidden";
    }

    // if ( a == 880 ) {
    // 	suv.classList.toggle('suv');
    // }

    de.innerHTML = a;
  });

  function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector(".sec4 h1").innerHTML = h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
    if (h < 10) {
      data.innerHTML = "Selamat Pagi <b>" + nama + "</b>";
    }
    if (h >= 10) {
      data.innerHTML = "Selamat Siang <b>" + nama + "</b>";
    }
    if (h >= 15) {
      data.innerHTML = "Selamat Sore <b>" + nama + "</b>";
    }
    if (h >= 20) {
      data.innerHTML = "Selamat Malam <b>" + nama + "</b>";
    }
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }
  let quotes = [
    'Kamu tau gak? Kenapa kalau aku menghafal lihatnya ke atas?<br><i>soalnya kalau merem langsung kebayang wajahmu.</i>',
    'Aku hanya ingin hidup cukup,<br><i>Cukup Memiliki kamu sepenuhnya.</i>',
    'Perasaan aku ke kamu tuh kayak file Readme di setiap aplikasi, <i>selalu ada tapi ngga pernah dibaca.</i>'
  ];
  function randomQ(items){
    return items[Math.floor(Math.random()*items.length)];
  }
  const sembunyi = document.querySelector(".sembunyi");
  const jam = document.querySelector(".sec4 h1");
  const panah = document.querySelector(".tools span");
  const hax = document.querySelector(".hax span");
  hax.innerHTML = randomQ(quotes);
  const zaw = document.querySelector(".zz div");
  const klik = document.querySelector(".hax .klik");
  klik.addEventListener("click", function () {
    hax.innerHTML = "bandel!";
    klik.addEventListener("click", function () {
      hax.innerHTML = "kok masih di klik!";
      klik.addEventListener("click", function () {
        hax.innerHTML = "Emang harus diklik, lagian aku disable scroll nya.";
        klik.addEventListener("click", function () {
          hax.innerHTML = "Oke. Tunggu 3 detik";
          klik.style.opacity = 0;
          klik.style.marginTop = 40;
          setTimeout(function () {
            // hax.innerHTML = randomQ(quotes);

            klik.style.marginTop = 0;
            klik.style.opacity = 1;
            klik.innerHTML = "Boleh di klik !";
            klik.addEventListener("click", function () {
              klik.style.display = "none";
              let sec2Edit = document.querySelector(".about div");
              hax.innerHTML = "Scroll Ke atas coba.";
              document.body.classList.add("scroll");
              sec2Edit.innerHTML = "<b>Gatel yahhh Pengen nge Klik :3???</b>";

              let button = document.querySelector(".tbl.tbl-aku");
              button.style.display = "inline-block";
              const kkl = document.querySelector("video");

              button.addEventListener("click", function () {
                hax.innerHTML = randomQ(quotes);
                verDua.style.display = "grid";
                verDua.style.opacity = 1;
                kkl.play();
                const spanSatu = document.querySelector(".ver-dua span:nth-child(1)");
                const spanDua = document.querySelector(".ver-dua span:nth-child(2)");
                const spanTiga = document.querySelector(".ver-dua span:nth-child(3)");
                const spanLima = document.querySelector(".ver-dua span:nth-child(5)");
                setTimeout(function () {
                  spanSatu.style.opacity = 1;
                  spanSatu.innerHTML = "Aku dan kamu itu, bagaikan html dan css.";
                  spanSatu.style.right = "25px";
                  spanSatu.style.transform = "rotate(0deg)";
                  setTimeout(function () {
                    spanSatu.style.opacity = 0;
                    spanSatu.style.marginTop = "-50px";

                    spanDua.style.opacity = 1;
                    spanDua.innerHTML = "Tau gak Kenapa ?";
                    spanDua.style.right = "25px";
                    spanDua.style.transform = "rotate(0deg)";
                    setTimeout(function () {
                      spanDua.style.opacity = 0;
                      spanDua.style.marginTop = "-50px";

                      spanTiga.style.opacity = 1;
                      spanTiga.innerHTML = "Saling Terhubung, seperti syntax link css :3";
                      spanTiga.style.right = "25px";
                      spanTiga.style.transform = "rotate(0deg)";
                      setTimeout(function () {
                        spanTiga.style.opacity = 0;
                        spanTiga.style.transform = "scale(10, 10)";
                        spanTiga.style.marginTop = "-50px";

                        setTimeout(function () {
                          spanLima.style.opacity = 1;
                          setTimeout(function () {
                            spanLima.style.opacity = 0;
                            button.style.opacity = 0;
                            sec2Edit.style.opacity = 0;
                            verDua.style.opacity = 0;
                            setTimeout(function () {
                              spanLima.style.display = "none";
                              verDua.style.display = "none";
                              spanSatu.style.right = '200px';
                              spanDua.style.right = '200px';
                              spanTiga.style.right = '200px';
                              spanLima.style.right = '200px';
                              spanTiga.style.transform = "rotate(20deg)";
                              spanTiga.style.transform = "rotate(20deg)";
                              spanTiga.style.transform = "rotate(20deg)";
                              spanTiga.style.transform = "rotate(20deg)";


                              sec2Edit.innerHTML = "Trimakasih telah mengunjungi website aneh ini. ada saran/kritik ? komen dibawah...";
                              button.innerHTML = "Klik Lagi ?";
                              button.style.opacity = 1;
                              sec2Edit.style.opacity = 1;
                            }, 1300);
                          }, 2200);
                        }, 28000);
                      }, 3000);
                    }, 1300);
                  }, 5000);
                }, 2000);
              });
            });
          }, 3000);
        });
      });
    });
  });

  panah.addEventListener("click", function () {
    sembunyi.classList.toggle("sembunyi");
  });
}


if (width > 560) {
  document.body.innerHTML =
    "Maaf Versi tidak didukung :), silahkan inspect element saja.";
}
