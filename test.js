<html>
  <meta charset="UTF-8" /><meta
    content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5"
    name="viewport"
  /><meta content="IE=edge" http-equiv="X-UA-Compatible" />
  <link rel="preconnect" href="https://fonts.googleapis.com" /><link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin
  /><link
    href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
    rel="stylesheet"
  />
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.all.min.js"></script>
  <link
    href="https://hanyauntukmu.likeadream.repl.co/style.css"
    rel="stylesheet"
    type="text/css"
  />
  <script src="https://hanyauntukmu.likeadream.repl.co/script.js"></script>
  <head> 
    <title> Hello :D</title>
  </head>
  <style>
    body {
      background-image: url(https://i.postimg.cc/NMLZ6Zk5/IMG-20220207-131156-010.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position-y: bottom;
    }
    body::before {
      content: "" !important;
      color: transparent !important;
    }
  </style>
  <body>
    <div id="bodyblur">
      <img
        src="https://i.postimg.cc/NMLZ6Zk5/IMG-20220207-131156-010.jpg"
        width="100%"
        height="100%"
      />
    </div>

<div id="Content">
      <div class="image">
        <img
          src="https://i.postimg.cc/W4xjf6yM/peachcat-peachcat-and-goma.gif"
          width="130px"
          height="130px"
        />
      </div>
      <div>
        <blockquote>
          <p id="text"></p>
          <p id="text2"></p>
        </blockquote>
      </div>
    </div>

<script type="text/javascript">
      function play() {
        var audio = new Audio(
          "https://sndup.net/tqdx/d"
        )
        audio.play()
      }
const swals = Swal.mixin({
        allowOutsideClick: false,
        cancelButtonColor: "#FF0040",
      })
      const swalsy = Swal.mixin({
        confirmButtonText: "Iya",
        allowOutsideClick: false,
      })
      const swalst = Swal.mixin({
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
      })

async function mulaitanya() {
  // Mendapatkan nilai dari parameter 'title' dalam URL
  const urlParams = new URLSearchParams(window.location.search);
  const titleParam = urlParams.get('title');

  // Menyiapkan nilai default untuk judul jika parameter tidak ada
  const defaultTitle = "Halo :D kamu bisa klik tombol dibawah ya";

  // Menggunakan nilai dari URL parameter atau default jika tidak ada
  const title = titleParam || defaultTitle;

  // Melakukan penggantian kata "kamu" dengan kata dari URL parameter
  const modifiedTitle = title.replace(/kamu/g, titleParam);

  var { isConfirmed: tanyawal } = await Swal.fire({
    title: modifiedTitle,
    imageUrl: "https://media.tenor.com/Ej3BJBhwt_0AAAAM/cute-kitty.gif",
    imageWidth: 120,
    imageHeight: 120,
    confirmButtonText: "Okay",
    allowOutsideClick: false,
    showCancelButton: false,
  })
}
        if (tanyawal) {
          play()
          kuis()
        }
      }
async function kuis() {
        await swalst.fire({
          title: "cape banget ya hari ini? :(",
          imageUrl: "https://i.postimg.cc/02wF21b1/peach-goma.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Its okay, selamat ya udah bisa lewatin semua hal di hari ini",
          imageUrl: "https://i.postimg.cc/g06FWScx/tepukbadan.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "kalo pelajarannya susah, tanya aku aja ya",
          imageUrl: "https://i.postimg.cc/vZWmnK2p/gigit.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        await swalst.fire({
          title: "Maaf aku ga bisa banyak bantu kamu &#129402;",
          imageUrl: "https://i.postimg.cc/SsmkcNY9/bear-cute-1.gif",
          imageWidth: 120,
          imageHeight: 120,
        })
        text = "aku seneng bangettt bisa kenal kamu "
        emotnama = "&#10084;"
        text2 = "Jaga diri baik-baik... Jangan sedih, aku bakal nunggu chat dari kamu hehe :)"
        showDiv()
      }
      mulaitanya()
    </script>
  </body>
</html>
