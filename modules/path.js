const path = require('path/win32')

console.log(path.win32)




// console.log(path.basename(__filename)); // Turgan file'ni nomini chiqaradi
// console.log(path.dirname(__filename)); // Turgan file'ning joylashgan papkasini ko'rsatadi
// console.log(path.extname(__filename)); // Turgan file'ning turini aniqlab beradi

// console.log(path.parse(__filename)); // Turgan file'ga tegishli barcha malumotlarni Object ko'rinishida chiqaradi

// console.log(path.join(__dirname, 'template', 'index.html')); // Turgan Papka ichidan index.html nomli file qo'shadi va fali'lar massiv'ni qaytaradi

// console.log(path.resolve(__dirname, 'template', '/index.html')); // Turgan Papka ichidan index.html nomli file qo'shadi va file'ning o'zini qaytaradi

// Join va Resolve pachti bir-xil