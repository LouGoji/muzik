import GalleryItem from './GalleryItem'

function Gallery(props){

    const display = props.data.map((item,index) => {
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
