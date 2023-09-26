import { loadingMessage } from "./loading";

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.YTPlayer = null

export function getVideoId(url) {
    const [part1, part2] = url.split('?v=')
    const [VideoId] = part2.split("&")
    return VideoId
}

export function loadVideo(url) {
    loadingMessage('Carregando vídeo do youtube')

    return new Promise((resolve,reject) => {
        window.YTPlayer = new YT.Player('youtubeVideo', {
            VideoId: getVideoId(url),
            events: {
                'onReady': () => resolve()                
            }
        })
    })      
}