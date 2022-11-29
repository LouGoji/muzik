import GalleryItem from './GalleryItem'

function Gallery(props){
    const data = props.data.result.read()

    const display = data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery

//artistName
//trackName
//trackViewUrl
//artworkUrl100
//artworkUrl130
//trackTimeMillis
//previewUrl
//collectionName
