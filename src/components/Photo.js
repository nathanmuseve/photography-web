
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

  const containerStyles = {
    width: '500px',
    height: '200px',
    margin: '0 auto'
  };
  return (
    <div>
      <strong>Our sample images {galleryImages}</strong>
      <div style={containerStyles}>
      </div>
    </div>
  )
}
export default Photo;