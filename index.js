//Create server

const express = require('express');//import module express
const app = express();//eksekusi module express

//eksekusi express dng memanggil variabel app
app.get('/test', function(request, respone){//simbol / yg berarti "root" atau halaman utama,function req(request) dan res(respone)
    respone.send("abcdefgh")//mengirimkan respone dari http dan dikembalikan

})
app.listen("12345");//definisi halaman port