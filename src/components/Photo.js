import Gallery from "./Gallery"

function Photo() {
  const galleryImages = [
    {
      img: "./../images1/event-pht.jpg"
    },
    {
      img: "./../images1/event-pht1.jpg"
    },
    {
      img: "./../images1/event-pht2.jpg"
    },
    {
      img: "./../images1/event-pht3.jpg"
    },
    {
      img: "./../images1/event-pht4.jpg"
    },
    {
      img: "./../images1/manager.jpg"
    },
    {
      img: "./../images1/manager1.jpg"
    },
    {
      img: "./../images1/manager3.jpg"
    },
    {
      img: "./../images1/manager4.jpg"
    },
    {
      img: "./../images1/tour-pht.jpg"
    },
    {
      img: "./../images1/tour-pht1.jpg"
    },
    {
      img: "./../images1/tour-pht2.jpg"
    },
    {
      img: "./../images1/tour-pht3.jpg"
    },
    {
      img: "./../images1/tour-pht4.jpg"
    },
    {
      img: "./../images1/wed-event.jpg"
    },
    {
      img: "./../images1/wed-event.jpg"
    },
    {
      img: "./../images1/wed-gal3.jpg"
    },
    {
      img: "./../images1/wed-gal4.jpg"
    },
    {
      img: "./../images1/wed-gal5.jpg"
    },
    {
      img: "./../images1/wed-gallary.jpg"
    },
    {
      img: "./../images1/sale-pht.jpg"
    },
    {
      img: "./../images1/sale-pht1.jpg"
    },
    {
      img: "./../images1/sale-pht2.jpg"
    },
    {
      img: "./../images1/sale-pht3.jpg"
    },
    {
      img: "./../images1/sale-pht4.jpg"
    }
  ]

  return (
    <div>
      <strong>Our sample images</strong>
      <Gallery galleryImages={galleryImages} />
    </div>
  )
}
export default Photo;