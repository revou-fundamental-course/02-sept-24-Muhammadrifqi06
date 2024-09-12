// ini javascript luas segitiga
function hitungLuas() {
  const alas = document.getElementById('panjang-alas').value;
  const tinggi = document.getElementById('tinggi').value;

  if (alas === '' || tinggi === '') {
    alert('Form masih kosong. Harap masukkan nilai!');
  } else if (alas > 0 && tinggi > 0) {
    const luas = 0.5 * alas * tinggi;
    document.getElementById('resultLuas').textContent = `Hasil Perhitungan: ${luas}`;
  } else {
    document.getElementById('resultLuas').textContent = 'Masukkan nilai alas dan tinggi yang valid!';
  }
}

// Keliling Segitiga
function hitungkeliling() {
  const SisiA = document.getElementById('SisiA').value;
  const SisiB = document.getElementById('SisiB').value;
  const SisiC = document.getElementById('SisiC').value;

  if (SisiA === '' || SisiB === '' || SisiC === '') {
    alert('Form masih kosong. Harap masukkan nilai!');
  } else if (SisiA > 0 && SisiB > 0 && SisiC > 0) {
    const keliling = parseFloat(SisiA) + parseFloat(SisiB) + parseFloat(SisiC);
    document.getElementById('resultkeliling').textContent = `Keliling Segitiga yaitu: ${keliling}`;
  } else {
    document.getElementById('resultkeliling').textContent = 'Masukkan nilai sisi yang valid!';
  }
}

// reset form
function reset() {
  document.getElementById('panjang-alas').value = '';
  document.getElementById('tinggi').value = '';
  document.getElementById('SisiA').value = '';
  document.getElementById('SisiB').value = '';
  document.getElementById('SisiC').value = '';

  // reset text
  document.getElementById('resultLuas').textContent = 'Hasil Perhitungan:';
  document.getElementById('resultkeliling').textContent = 'Keliling Segitiga yaitu:';
}
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('resetButton').addEventListener('click', function () {
    console.log('Reset button clicked');
    reset();
  });
});
