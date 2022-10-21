const db =  [
      
   { videos:[

        {
       res: " RESOLUTION=320x180",
       url: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_180_250000.m3u8",

        },
        
        {
        res: "RESOLUTION=480x270",
        url: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_270_400000.m3u8"

        },

        { 
        res: "RESOLUTION=640x360",
        url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_360_800000.m3u8"
        },

        { 
        res: "RESOLUTION=960x540",
        url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_540_1200000.m3u8"

        },

        { 

        res: "RESOLUTION=1280x720",
        url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_720_2400000.m3u8"
        },

        { 
        res:"RESOLUTION=1920x1080",
        url:"https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_video_1080_4800000.m3u8"

        }

        ],
      
   
    pdf: [

        {
            id:1,
            url: 'https://github.com/App2Sales/mobile-challenge/raw/master/os-lusiadas.pdf',
        },
    ],

   audios: [   

    {
        id:1,
        audio: 'https://github.com/App2Sales/mobile-challenge/raw/master/a-arte-da-guerra.mp3',

    }, 

    {
        id:2,
        audio: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa_audio_1_stereo_128000.m3u8'
    }
       
       ] 
    
    
  }

]

export default db;