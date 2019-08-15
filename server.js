var http = require('http');
var fs = require('fs');

var staticRouteToFilesDict = {};

if (fs.existsSync('./static/')) {
    allFiles = fs.readdirSync('./static/');
    allFiles.forEach((fileName)=>{
        var currentFilePathOnDisk = './static/'+fileName;
        staticRouteToFilesDict["/"+fileName] = fs.readFileSync(currentFilePathOnDisk);
    });
    console.log(Object.keys(staticRouteToFilesDict));
}


var chart_stuffDict = {};

if (fs.existsSync('./chart_stuff/dist/')) {
    allFiles = fs.readdirSync('./chart_stuff/dist/');
    allFiles.forEach((fileName)=>{
        var currentFilePathOnDisk = './chart_stuff/dist/'+fileName;
        chart_stuffDict["/"+fileName] = fs.readFileSync(currentFilePathOnDisk);
    });
    console.log(Object.keys(chart_stuffDict));
}


var server = http.createServer(function (req, res) {
    console.log(req.url);

    if(staticRouteToFilesDict[req.url] != null){
        res.write(staticRouteToFilesDict[req.url]);
        res.end();
    }
    else if(chart_stuffDict[req.url] != null){
        res.write(chart_stuffDict[req.url]);
        res.end();
    }
    else if(req.url == "/chartalt/eg"){
        res.write(fs.readFileSync('./chart_stuff/dist/index_barchart.html'))
        res.end();
    } else {
        res.write(fs.readFileSync('./index.html'));
    }

});
console.log("listening on:",process.env.PORT || 3000)
server.listen(process.env.PORT || 3000);
