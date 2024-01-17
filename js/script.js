function hitungLuasPersegi() {
    var sisi = document.getElementById('squareSideArea').value;
    var luas = sisi * sisi;
    var hasil = 'L = S x S\\nL = ' + sisi + ' x ' + sisi + '\\nL = ' + luas;
    document.getElementById('hasilLuasPersegi').innerText = hasil.replace(/\\n/g, '\n');
  }
  
function resetInput() {
    document.getElementById('squareSideArea').value = '';
    document.getElementById('hasilLuasPersegi').innerText = '';
  }
    document.getElementById('countArea').addEventListener('click', hitungLuasPersegi);
    document.getElementById('resetArea').addEventListener('click', resetInput);


function hitungKelilingPersegi() {
    var sisi = document.getElementById('squareSidePerimeter').value;
    var keliling = sisi * 4;
    var hasil = 'K = 4 x S\\nK = 4 x ' + sisi + '\\nK = ' + keliling;
    document.getElementById('hasilKelilingPersegi').innerText = hasil.replace(/\\n/g, '\n');
  }
  
function resetInputPerimeter() {
    document.getElementById('squareSidePerimeter').value = '';
    document.getElementById('hasilKelilingPersegi').innerText = '';
  }
  document.getElementById('countPerimeter').addEventListener('click', hitungKelilingPersegi);
  document.getElementById('resetPerimeter').addEventListener('click', resetInputPerimeter);
  