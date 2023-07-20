
const express = require('express')
const app = express()
const port = 80
const puppeteer = require('puppeteer');



app.get('/', (req, res) => {
	let serve = req.query.server;
	let url = req.query.url;
	  
	if (serve == "plusvip"){
			(async () => {
				const browser = await puppeteer.launch();
				const page = await browser.newPage();
				await page.goto(url);
				await page.click('#message > img');
				await page.waitForSelector('video');		
				await page.click('video');
				let src = await page.$eval("video", n => n.getAttribute("src"))
		    	
				//RETURN PLAYER HTML
	
				res.send('<link href="https://vjs.zencdn.net/8.3.0/video-js.css" rel="stylesheet" /> <body> <video id="my-video" class="video-js" controls preload="auto" data-setup="{}" > <source src="'+src+'" type="video/mp4" /> </video> <script src="https://vjs.zencdn.net/8.3.0/video.min.js"></script> <style>#my-video{width:100% !important;height:100%!important;}body{margin:0px!important;}<style></body>')
	
				//FIN RETURN PLAYER
	
	
				//await page.screenshot({path: 'example.png'});
	
				await browser.close();
			})();
	}
  	//res.send('CAP!')

})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


/*

$("#message > img").click()*/