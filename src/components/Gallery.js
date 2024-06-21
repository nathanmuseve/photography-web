import Contacts from "./Contacts"
import "./Gallery.css"
function Gallery() {
  const gallery = [
    {
      img: "https://media.istockphoto.com/id/1852190119/photo/young-man-on-safari-journey-by-off-road-car-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=VJ0x_BZ6ivx7H059WyeaTA5ArNOtXjU3olz6HzpehCU="
    },
    {
      img: "https://media.istockphoto.com/id/1351878250/photo/photographer-in-action.jpg?s=612x612&w=0&k=20&c=1gK1oH6AAI97cD6-Rm0Ozk4uJs-a7LJ0JbPh5DWbEek="
    },
    {
      img: "https://media.istockphoto.com/id/1361722227/photo/happy-young-photographer-holding-a-dslr-camera.jpg?s=612x612&w=0&k=20&c=2pd0FFpBdCwNlgJq5p2Kvr5glOX7pJ98Po1j2o1exzk="
    },
    {
      img: "https://media.istockphoto.com/id/1471033531/photo/portrait-of-asian-woman-holding-photo-camera-looking-at-pictures.jpg?s=612x612&w=0&k=20&c=sRUUZOob1KLrhyLDBLSsks2LgrCMcHosBdNvFSCrmQ8="
    },
    {
      img: "https://media.istockphoto.com/id/1388260907/photo/portrait-african-american-man-at-the-studio-with-colored-background-black-person-wearing.jpg?s=612x612&w=0&k=20&c=GPgSezXNJDlFXmf_g1XW9EaOnECSOkVNpkl5SwuVpg4="
    },
    {
      img: "https://media.istockphoto.com/id/2150293376/photo/young-man-taking-photos-during-tour-with-his-friends-in-the-botanical-garden.jpg?s=612x612&w=0&k=20&c=CZCc6RBplCE_4BEwQGmsOLcI3QuwJmLkbCjtMje5t2M="
    },
    {
      img: "https://media.istockphoto.com/id/1335303339/photo/wedding-photographer.jpg?s=612x612&w=0&k=20&c=81jJuqbAvlDRQTxsfwDzoellrbgFuDDAOjIbrBfnu4U="
    },
    {
      img: "https://media.istockphoto.com/id/1822658330/photo/click-connect.jpg?s=612x612&w=is&k=20&c=bcFqO7i4kDqjl4kknjA0o4EB--BKSrg_QwlhJkCYn4M="
    },
    {
      img: "https://media.istockphoto.com/id/1478410315/photo/photography-digital-camera-and-happy-woman-check-photo-results-memory-picture-or-tokyo.jpg?s=612x612&w=0&k=20&c=vkj1haCi6Fk-ferWhHbQj_6zyuSLhpgtKan9L1r6nY4="
    },
    {
      img: "https://media.istockphoto.com/id/1334542509/photo/elopement-wedding.jpg?s=612x612&w=0&k=20&c=NMhdtBEyfTXtRH_XxYAh5kphkeewjl2rVDGQuLIfwTs="
    },
    {
      img: "https://media.istockphoto.com/id/1064911922/photo/beautiful-wedding-couple-in-park.jpg?s=612x612&w=0&k=20&c=l19PQUjHVk2zvnGSFSUeiyyzxKL6Ym8BfFMcu1iIWDk="
    },
    {
      img: "https://media.istockphoto.com/id/1370024716/photo/portrait-of-two-young-women-showing-thumbs-up-on-graduation-day.jpg?s=612x612&w=0&k=20&c=vPnmVkORRVbWviJJ1RTUY1UTKFt_mAUcRgp-Pjp7yx8="
    },
    {
      img: "https://media.istockphoto.com/id/532377905/photo/amazing-bride-and-groom-happy-wedding-dress-flowers.jpg?s=612x612&w=0&k=20&c=LyS6tU8AaT6_at-5_xofgwJItEHC55jVZypWeAgoBVE="
    },
    {
      img: "https://media.istockphoto.com/id/1346691472/photo/excited-african-american-college-graduate-with-his-family-after-the-graduation-ceremony.jpg?s=612x612&w=0&k=20&c=UcD-67wotz7LPxI_GLLNpzFMKtbEgGfQrIedq_6l9RQ="
    },
    {
      img: "https://media.istockphoto.com/id/1347464546/photo/bride-and-groom-on-a-wedding-day.jpg?s=612x612&w=0&k=20&c=xkC7kn3ZMmn9p083zjR-09M7NixnNtfCRFjGZktqhWQ="
    },
    {
      img: "https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?s=612x612&w=0&k=20&c=_aCIW5-iOIiaDdqin_50kvBcbFbIxSULHHamPUILE0c="
    },
    {
      img: "https://media.istockphoto.com/id/1473515905/photo/welcome-to-the-team.jpg?s=612x612&w=0&k=20&c=hS9LDaID5dv30YDGsShCySjc8uhEyjGP8bxq_dksw80="
    },
    {
      img: "https://media.istockphoto.com/id/1776624809/photo/journalistic-interview.jpg?s=612x612&w=0&k=20&c=HPlzf-HyveLjaDjHjb8FCPIpxOHr7ERpAYpv_ALobTY="
    },
    {
      img: "https://media.istockphoto.com/id/1618446911/photo/radio-man-and-a-security-guard-or-safety-officer-outdoor-on-a-city-road-for-communication.jpg?s=612x612&w=0&k=20&c=kEQBzw8KmJG4JRWlEWi04dwR651olCzW4k1MKsQaxyg="
    },
    {
      img: "https://media.istockphoto.com/id/1200927481/photo/cheerful-mid-adult-woman-smiling-at-business-meeting.jpg?s=612x612&w=0&k=20&c=8XPmvZTXiNU82SjdC5D9l8ZFiliw42oPSWanGGCxpBg="
    },
    {
      img: "https://media.istockphoto.com/id/915741300/photo/female-manager-discussing-business.jpg?s=612x612&w=0&k=20&c=fgZaXr-ywQHRHCMuBFfKkO4vC7YlFpt2lFBaIHqrm_o="
    },
    {
      img: "https://media.istockphoto.com/id/1476261444/photo/young-pharmaceutic-seller-explaining-something-to-doctor-in-hospital.jpg?s=612x612&w=0&k=20&c=pEJ7PefqTUcR5hPhB3jLIvAUOzPA6FVPlw391Oxqnrw="
    },
    {
      img: "https://media.istockphoto.com/id/480952865/photo/graduating-class.jpg?s=612x612&w=0&k=20&c=CrKZsKaSiyvn96yrlJ2QurlC9ZQ_1b5Y-hIfuOP7kdY="
    },
    {
      img: "https://media.istockphoto.com/id/1460033251/photo/happy-university-couple-congratulating-each-other-on-graduation.jpg?s=612x612&w=0&k=20&c=mXB4atAG7R7artCHfnJD6UbBbMgyumPU11ilJ0xX24Q="
    },
    {
      img: "https://media.istockphoto.com/id/496647185/photo/hispanic-student-and-parents-celebrate-graduation.jpg?s=612x612&w=0&k=20&c=KakgIUpSfEHDao54w4uVde_csiv7PWFk8ASaxZRuDfg="
    }
  ]
  console.log(gallery)
  return (
    <div className="gallery">

      {
        gallery.map((slide, index) => {
          return (
            <div className="single" key={index}>
              <img src={slide.img} alt="gallery" />
            </div>
          )
        })
      }
      <Contacts />
    </div>
  )
}
export default Gallery;