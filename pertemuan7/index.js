function persegi(sisi) {
  const keliling = sisi + sisi + sisi + sisi;
  console.log(keliling);
}

persegi(6);

function persegipanjang(panjang, lebar) {
  const keliling = 2 * (panjang + lebar);
  console.log(keliling);
}

persegipanjang(10, 5);

function segitiga(alas, tinggi) {
  const luas = (alas * tinggi) / 2;
  console.log(luas);
}

segitiga(10, 5);

function lingkaran(jariJari) {
  const luas = Math.PI * jariJari * jariJari;
  console.log(luas);
}

lingkaran(7);
