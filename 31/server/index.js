import express from 'express'
import cors from 'cors'
import { downloader } from './download-video.js'
import { createMP3 } from './create-mp3.js'

const app = express()
app.use(cors())

app.get('/audio', async (req,res) => {
    const videoId =req.query.v  

    try {
        //Download
        await downloader(videoId)     
        
        //criar mp3
        await createMP3()
        
      return res.send('ok')  
    } catch (error) {
        console.log(error)
        return res.send(error)
    }       

    
})

app.listen(3333, () => console.log('server up'))