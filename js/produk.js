
baris_produk.innterHTML = ""

var data_mentah = {
    "Arabica": [
        {
            "nama": "Cappucino",
            "foto": "images/produk/product_capuchino.jpg",
            "harga": "15.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Kopi Susu",
            "foto": "images/produk/product_kopi_susu.jpg",
            "harga": "15.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
    ],
    "Robusta": [
        {
            "nama": "Espresso",
            "foto": "images/produk/product_espresso.jpg",
            "harga": "10.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
    ],
    "Non Kopi": [
        {
            "nama": "Lemon Tea",
            "foto": "https://fajar.co.id/wp-content/uploads/2023/09/IMG_0741.jpg",
            "harga": "15.000",
            "size": "300 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Leci Tea",
            "foto": "data:image/jpeg;base64,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",
            "harga": "15.000",
            "size": "250 Ml",
            "link": "https://shopee.co.id/eaifjlesjfi"
        }
    ],
    "Snack": [

        {
            "nama": "Kentang Goreng",
            "foto": "https://cdn0-production-images-kly.akamaized.net/4tW-MCvjCBZle_NiyBsTx-p1CDA=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4238209/original/098132900_1669279036-front-view-delicious-french-fries-inside-plate-dark-space.jpg",
            "harga": "15.000",
            "size": "250 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Tela Tela",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3J690pxDUP4wciqEDTTRTEX2NaaS5fEaXA&s",
            "harga": "12.000",
            "size": "300 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Pisang Keju",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-po2cVAdM8KFGdMl7d9L1Gc2xZymsDlwcg&s",
            "harga": "15.000",
            "size": "400 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
        {
            "nama": "Pisang Aroma",
            "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNkwWv6X5hLnMFAnQKJdwFLddd7TH-fjxdQ&s",
            "harga": "15.000",
            "size": "350 g",
            "link": "https://shopee.co.id/eaifjlesjfi"
        },
    ]
}

console.log("data mentah:", data_mentah)

function updateSelect() {
    select_kopi.innerHTML = '<option selected disabled>-</option>'
    Object.keys(data_mentah).forEach(function (opsi) {
        select_kopi.innerHTML += '<option value="' + opsi + '">' + opsi + '</option>'
    })
    console.log("Melakukan Update Select")
}
updateSelect();

var data_kopi = []
select_kopi.onchange = function () {
    var pilihan = select_kopi.value
    console.log("Customer Memilih " + pilihan)
    data_kopi = data_mentah[pilihan]
    console.log("isi data_kopi = ", data_kopi)
    updateTampilan()
}

function updateTampilan() {
    baris_produk.innerHTML = ''
    data_kopi.forEach(kopi => {
        baris_produk.innerHTML += `<div class="col mb-4">
                <div class="card">
                    <img src="${kopi.foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${kopi.nama}</h5>
                        <div class="row hargasize my-4">
                            <div class="col">
                                ${kopi.size}
                            </div>
                            <div class="col text-primary fw-bold">
                                ${kopi.harga}
                            </div>
                        </div>
                        <a href="${kopi.link}" class="btn btn-primary w-100"><i class="bi bi-cart4"></i> Beli</a>
                    </div>
                </div>
            </div>`
    })
}