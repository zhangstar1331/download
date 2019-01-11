var express=require('express');
var mysql=require('mysql');
var cookie=require('cookie-parser');
var session=require('express-session');
var bodyParser=require('body-parser');
var querystring=require('querystring');
var multer=require('multer');
var proxy = require('http-proxy-middleware');
var server=express();
//监听端口
server.listen('8080');
server.use(express.static('www/'));
server.get('/mmm',function(req,res){
  var data = [
     {
       "endDateTime": 1575216000,
       "id": "01201811010700203900000003",
       "orderBaseId": "66dfa0e2-5503-4da7-8e47-4d6e39daf829",
       "premium": 188,
       "proCode": "ZHA07593",
       "prodCatId": "15",
       "productId": "10051",
       "productName": "个人中高端医疗保险",
       "startDateTime": 1543680000,
       "userId": "70000001073",
       "valid": 1
     },
     {
       "endDateTime": 1572623999,
       "id": "0618610101D00360030057",
       "orderBaseId": "af45fc0b-ba28-437b-92c5-da6793bda5c9",
       "premium": 66215,
       "proCode": "11",
       "prodCatId": null,
       "productId": "00001",
       "productName": "商业险",
       "startDateTime": 1541088000,
       "userId": "80000000583",
       "valid": 1
     },
     {
       "endDateTime": 1572623999,
       "id": "0618610101D00332030037",
       "orderBaseId": "af45fc0b-ba28-437b-92c5-da6793bda5c9",
       "premium": 54835,
       "proCode": "12",
       "prodCatId": null,
       "productId": "00001",
       "productName": "交强险",
       "startD": "80000000583",
       "valid": 1
     },
     {
       "endDateTime": 1571241599,
       "id": "0618429813D00360030008",
       "orderBaseId": "14283079-ed45-426e-9fb1-12252daa5d3a",
       "premium": 4530,
       "proCode": "11",
       "prodCatId": null,
       "productId": "00001",
       "productName": "商业险",
       "startDateTime": 1539705600,
       "userId": "80000000583",
       "valid": 1
     },
     {
       "id":"06181933235465656666666",
       "userId":"8000000583",
       "productId":"00001",
       "proCode":"12",
       "productName":"交强险",
       "premium":null,
       "startDateTime":1541088000,
       "endDataTime":1575216000,
       "valid":1,
       "orderBaseId":"af45fc0b-ba28-437b-92c5-da6793bda5c9",
       "prodCatId":"11"
     },
     {
       "endDateTime": 1575216000,
       "id": "01201811010700203900000003",
       "orderBaseId": "66dfa0e2-5503-4da7-8e47-4d6e39daf829",
       "premium": 188,
       "proCode": "ZHA07593",
       "prodCatId": "15",
       "productId": "ZHA07593",
       "productName": "个人中高端医疗保险",
       "startDateTime": 1543680000,
       "userId": "70000001073",
       "valid": 1
     },
     {
       "id":"0615234354545545342222222",
       "userId":"8000000583",
       "productId":"00001",
       "proCode":"11",
       "productName":"商业险",
       "premium":null,
       "startDateTime":1541088000,
       "endDataTime":1575216000,
       "valid":1,
       "orderBaseId":"af45fc0b-ba28-437b-92c5-da6793bda5c9",
       "prodCatId":null
     },
     {
       "id":"283847464646464646464646464646464646",
       "userId":"8000000583",
       "productId":"00001",
       "proCode":"15",
       "productName":"商业险",
       "premium":null,
       "startDateTime":1541088000,
       "endDataTime":1572623999,
       "valid":0,
       "orderBaseId":"af45fc0b-ba28-437b-92c5-da6793bda5c9",
       "prodCatId":null
     },
     {
       "endDateTime": 1575216000,
       "id": "01201811010700203900000003",
       "orderBaseId": "66dfa0e2-5503-4da7-8e47-4d6e39daf829",
       "premium": 188,
       "proCode": "ZHA07593",
       "prodCatId": "14",
       "productId": "10051",
       "productName": "个人中高端医疗保险",
       "startDateTime": 1543680000,
       "userId": "70000001073",
       "valid":1
     },
     {
       "endDateTime": 1568822400,
       "id": "012018329806D0194000000001",
       "orderBaseId": "762880ab-7524-4294-890a-10e7fc706f71",
       "premium": 168,
       "proCode": "C0172",
       "prodCatId": "16",
       "productId": "10006",
       "productName": "新驾乘无忧意外险",
       "startDateTime": 1543680000,
       "userId": "70000001073",
       "valid":1
     },{
       "endDateTime": 1565712000,
       "id": "01201811012000194000000001",
       "orderBaseId": "369c7bd9-fac7-4261-8b27-253e907f3311",
       "premium": 168,
       "proCode": "C0172",
       "prodCatId": "16",
       "productId": "10006",
       "productName": "新驾乘无忧意外险",
       "startDateTime": 1534176000,
       "userId": "80000000583",
       "valid": 1
     }
   ]
  //获取前端请求到第几条
  var count = req.query.count;
  //返回对应的数据
  var msg = data.slice(count-4,count);
  res.send({
    data:msg
  })
})