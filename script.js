const de = document.querySelector('.demo');
const verDua = document.querySelector('.ver-dua');
const data = document.querySelector('.sec4 h3');
let nama = prompt('Anda Siapa ?');
const width = screen.width;
console.log(width);
// let nama = 'zawhax';

if ( width < 560 ) {
	window.addEventListener("scroll", function(){
		const img = document.querySelector('.sec1 img');
		const header = document.getElementsByTagName('header');
		const wel = document.querySelector('header h1, h3');
		const nav = document.querySelector('.navbar');
		const img1 = document.querySelector('.zz img');
		const suv = document.querySelector('.klik1');
		let a = window.scrollY;

		if ( a < 100 ) {
			img.style.marginTop = '-' + a + 'px';
			wel.style.marginTop = '-' + a + 'px';
			nav.style.marginTop = '-60px';
		}

		if ( a > 60 ) {
			nav.style.marginTop = 0;
		}
		if ( a > 318 ) {
			zaw.classList.remove("zaw");
			img1.classList.remove("animsec");
		}

		if ( a >= 350 ) {
			document.body.style.overflow = 'hidden';
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
		document.querySelector('.sec4 h1').innerHTML = h + ":" + m + ":" + s;
		let t = setTimeout(startTime, 500);
		if ( h < 10 ) {
			data.innerHTML = 'Selamat Pagi <b>'+ nama +'</b>';
		}
		if ( h >= 10 ) {
			data.innerHTML = 'Selamat Siang <b>'+ nama +'</b>';
		}
		if ( h >= 15 ) {
			data.innerHTML = 'Selamat Sore <b>'+ nama +'</b>';
		}

	}
	function checkTime(i) {
	  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	  return i;
	}

	const sembunyi = document.querySelector('.sembunyi');
	const jam = document.querySelector('.sec4 h1');
	const panah = document.querySelector('.tools span');
	const hax = document.querySelector('.hax span');
	const zaw = document.querySelector('.zz div');
	const klik = document.querySelector('.hax .klik');
	klik.addEventListener('click', function(){
		hax.innerHTML = 'bandel!';
		klik.addEventListener('click', function(){
			hax.innerHTML = 'kok masih di klik!';
			klik.addEventListener('click', function(){
				hax.innerHTML = 'Emang harus diklik, lagian aku disable scroll nya.';
				klik.addEventListener('click', function(){
					hax.innerHTML = 'Oke. Tunggu 3 detik';
					klik.style.opacity = 0;
					klik.style.marginTop = 40;
					setTimeout(function(){
						klik.style.marginTop = 0;
						klik.style.opacity = 1;
						klik.innerHTML = 'Boleh di klik !';
						klik.addEventListener('click', function(){
							klik.style.display = 'none';
								let sec2Edit = document.querySelector('.about div');
								hax.innerHTML = 'Scroll Ke atas coba.';
								document.body.classList.add('scroll');
								sec2Edit.innerHTML = '<i>Kupu-kupu berwarna biru<br> Terbang melayang mencari madu<br> Kalau kamu cinta padaku<br> Jangan ragu bilang I LOVE YOU</i><br>#Kyaaa bahar-kun';

								let button = document.querySelector('.btn.btn-secondary');
								button.style.display = 'inline-block';
								const kkl = document.querySelector('video');

								button.addEventListener('click', function(){
									verDua.style.display = 'grid';
									kkl.play();
									const spanSatu = document.querySelector('.ver-dua span:nth-child(1)');
									const spanDua = document.querySelector('.ver-dua span:nth-child(2)');
									const spanTiga = document.querySelector('.ver-dua span:nth-child(3)');
									setTimeout(function(){
											spanSatu.style.opacity = 1;
											spanSatu.innerHTML = 'Aku dan kamu itu, bagaikan html dan css.';
											spanSatu.style.right = '25px';
											spanSatu.style.transform = 'rotate(0deg)';
											setTimeout(function(){
												spanSatu.style.opacity = 0;
												spanSatu.style.marginTop = '-50px';


												spanDua.style.opacity = 1;
												spanDua.innerHTML = 'Tau gak Kenapa ?';
												spanDua.style.right = '25px';
												spanDua.style.transform = 'rotate(0deg)';
												setTimeout(function(){
													spanDua.style.opacity = 0;
													spanDua.style.marginTop = '-50px';

													spanTiga.style.opacity = 1;
													spanTiga.innerHTML = 'Saling Terhubung, seperti syntax link css :3';
													spanTiga.style.right = '25px';
													spanTiga.style.transform = 'rotate(0deg)';
													setTimeout(function(){
														spanTiga.style.opacity = 0;
														spanTiga.style.transform = 'scale(10, 10)';
														spanTiga.style.marginTop = '-50px';

													}, 3000);
												},1300);
											}, 5000);
										}, 2000);
								});
							});
					}, 3000);
				});
			});
		});
	});

	panah.addEventListener('click', function(){
		sembunyi.classList.toggle('sembunyi');
	});


}

if ( width > 560 ) {
	document.body.innerHTML = 'Maaf Versi desktop akan datang :)';
}
