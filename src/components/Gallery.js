function Gallery({galleryImages}) {
  return (
    <div>
      {galleryImages && galleryImages.map((slide, index) => {
        return (
          <div className="single" key = {index}>
            <img src={slide.img} alt="yes" />
          </div>
        )
      })
      }
    </div>
  )
}
export default Gallery;