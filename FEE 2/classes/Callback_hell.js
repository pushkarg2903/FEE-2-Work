let link ;
let path;
let file;
let urlup;
let zip;
let url;
// function url(link){
//     let url =link
// }

function download(){
    console.log("wait 2 secs \n");
}
function downloader(link,download){
    download(link);
     path= link.split("/").pop()
    console.log(path);
}

downloader(" Spotify.Com/Collar-Full.mp3",download);

function compress(){
        console.log("wait 2 secs \n");
}

function compressor(path,compress){
    compress(path);
    zip=path.concat('.zip');
    console.log(zip);
}
compressor(path,compress);


function upload(){
    console.log("wait 2 secs \n");
}
function uploader(){
    upload(zip,urlup);
    console.log('Uploaded');

}
uploader(zip,upload);






// class wala code

// function downloadfile(url,download){
//     console.log("Started downloading");
//     setTimeout(() => {
     
//      let path=url.split("/").pop();
//      download(path)
//     }, 2000);
     
//  }
//  function compressfile(path,compress){
//      //compress path and zip convert
//      console.log("File ready for compress,Compress started");
//      setTimeout(() => {
//          const comp=path.split(".")[0]+"zip"
//          compress(comp)
         
//      }, 2000);
//  }
//  function uploadfile(comp,upload){
//      console.log("File started uploading");
//  setTimeout(() => {
//      const upl="https://localstorage"+comp;
//      upload(upl)
//  }, 2000);}
 
//  downloadfile("https://www.facebook.com/abc.mp3",function(upload){
//      console.log(`file downloaded successfully ${path}`)
//  };