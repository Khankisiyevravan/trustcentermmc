import axios from "axios";
import Iframe from "react-iframe";
function ContactUs() {
  let contactData = new FormData();
  const inputChange = (e) => {
    contactData.append(e.target.name, e.target.value);
  };
  const submitBtn = (e) => {
    e.preventDefault();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    axios
      .post(
        "https://admin.trustcenterholding.com/contact/",
        contactData,
        config
      )
      .then((response) => {
        // console.log(response, "success");
        console.log("success");
      })
      .catch((error) => {
        console.log("error");
        // console.log(error, "error");
      });
  };

  return (
    <>
      <section id="contact-section">
        <div className="map container">
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.3194306401742!2d49.83118371505401!3d40.4017738793668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d9a47daf7fb%3A0x58d8db4bd403c00b!2sTRUST%20CENTER%20t%C9%99dris%20m%C9%99rk%C9%99zi%20(tedris%20merkezi)!5e0!3m2!1sen!2saz!4v1681598795615!5m2!1sen!2saz" />
          <div className="form">
            <form action="">
              <label htmlFor="" className="form-group">
                <span>Soyad və ad</span>
                <input
                  name="full_name"
                  type="text"
                  placeholder="Tural Hasanov"
                  onChange={inputChange}
                />
              </label>
              <label htmlFor="" className="form-group">
                <span>Email</span>
                <input type="text" placeholder="tural@trust.com" />
              </label>
              <label htmlFor="" className="form-group">
                <span>Əlaqə nömrəsi</span>
                <input
                  name="phone_number"
                  type="text"
                  placeholder="+994(99) XXX XX XX"
                  onChange={inputChange}
                />
              </label>
              <label htmlFor="" className="form-group">
                <span>Başlıq</span>
                <input
                  name="title"
                  type="text"
                  placeholder="Web site proqramlaşdırma"
                  onChange={inputChange}
                />
              </label>
              <label htmlFor="" className="form-group">
                <span>Mesaj</span>
                <textarea
                  name="message"
                  placeholder="..."
                  onChange={inputChange}
                ></textarea>
              </label>
              <button className="btn active" onClick={submitBtn}>
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="company-info">
        <div className="container">
          <div>
            <span>Address:</span>
            <p>16a Yusif Vazir Chamanzaminli, Baku</p>
          </div>
          <div>
            <span>Phone:</span>
            <p>+(994) 51 653 15 83</p>
            <p>+(994) 55 645 77 32</p>
          </div>
          <div>
            <span>Email</span>
            <p>trustcenterholding@gmail.com</p>
            {/* <p>info@exampe.com</p> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
