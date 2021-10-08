var Gallery = require('./gallery')

Gallery.Gallery('./',(err,gallery)=>{
    if(err){
        throw err
    }
    console.log(gallery)

    gallery.forEach((album) => {
        album.photos((err,photos)=>{
            if(err){
                throw err
            }
            console.log(album.name + ' has ' + photos.length + ' photos.')
            console.table(photos)
        })
    })
})