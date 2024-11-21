import './index.css'

export default function WhyUs() {
  return (
    <section id='why-us' className='why-us'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 d-flex align-items-stretch'>
            <div className='content'>
              <h3>Sức khoẻ da liễu?</h3>
              <p>
              Sức khỏe da liễu là trạng thái cân bằng của làn da, giúp bảo vệ cơ thể, điều chỉnh nhiệt độ và cảm nhận môi trường xung quanh. Khi làn da khỏe mạnh, nó có khả năng thích ứng với các yếu tố bên ngoài, tự phục hồi và duy trì vẻ đẹp tự nhiên, mang lại sự tự tin và nâng cao chất lượng cuộc sống.
              </p>
              <p>
                Chúng tôi mong muốn giúp đỡ những người gặp phải các chứng bệnh da liễu tìm lại được sự cân bằng cho bản
                thân và niềm vui trong cuộc sống.
              </p>
              <div className='text-center'>
                <a href='#' className='more-btn'>
                  Tìm hiểu thêm <i className='bx bx-chevron-right'></i>
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-8 d-flex align-items-stretch'>
            <div className='icon-boxes d-flex flex-column justify-content-center'>
              <div className='row'>
                <div className='col-xl-4 d-flex align-items-stretch'>
                  <div className='icon-box mt-4 mt-xl-0'>
                    <i className='bx bx-heart'></i>
                    <h4>Điều trị</h4>
                    <p>Hỗ trợ và giúp đỡ cho những người đang trải qua khó khăn về sức khỏe da liễu</p>
                  </div>
                </div>
                <div className='col-xl-4 d-flex align-items-stretch'>
                  <div className='icon-box mt-4 mt-xl-0'>
                    <i className='bx bx-shield'></i>
                    <h4>Phòng ngừa</h4>
                    <p>Việc phòng ngừa và xử lý sớm các vấn đề tâm lý về da liễu là cần thiết</p>
                  </div>
                </div>
                <div className='col-xl-4 d-flex align-items-stretch'>
                  <div className='icon-box mt-4 mt-xl-0'>
                    <i className='bx bx-brain'></i>
                    <h4>Nghiên cứu & giáo dục</h4>
                    <p>Tìm ra những phương pháp điều trị hiệu quả và cải thiện sự hiểu biết</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
