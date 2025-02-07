import './index.css'

export default function Services() {
  return (
    <>
      <section id='services' className='services'>
        <div className='container'>
          <div className='section-title'>
            <h2>Dịch vụ</h2>
            <p>Cung cấp các dịch vụ cần thiết cho việc phòng ngừa và điều trị các bệnh về da liễu.</p>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6 d-flex align-items-stretch'>
              <div className='icon-box'>
                <div className='icon'>
                  <i className='fa fa-user-nurse'></i>
                </div>
                <h4>
                  <a href='' className='title-theme'>
                    Tư vấn về da
                  </a>
                </h4>
                <p>
                  Tư vấn và hỗ trợ tâm lý cho những người gặp khó khăn da liễu, giúp họ tìm hiểu và giải quyết vấn đề của
                  mình
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0'>
              <div className='icon-box'>
                <div className='icon'>
                  <i className='fa fa-notes-medical'></i>
                </div>
                <h4>
                  <a href='' className='title-theme'>
                    Điều trị da liễu
                  </a>
                </h4>
                <p>
                  Các phương pháp điều trị tâm lý như terapi hành vi nhận thức (CBT), terapi gia đình, terapi cá nhân và
                  terapi nhóm
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0'>
              <div className='icon-box'>
                <div className='icon'>
                  <i className='fa fa-calendar-check'></i>
                </div>
                <h4>
                  <a href='' className='title-theme'>
                    Đặt lịch hẹn khám online
                  </a>
                </h4>
                <p>
                  Cho phép người dùng đặt lịch hẹn khám tâm lý hoặc hỗ trợ trực tuyến với các chuyên gia tâm lý và bác
                  sĩ chuyên về sức khỏe da liễu
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'>
              <div className='icon-box'>
                <div className='icon'>
                  <i className='fa fa-house-user'></i>
                </div>
                <h4>
                  <a href='' className='title-theme'>
                    Đội ngũ bác sĩ da liễu chuyên nghiệp.
                  </a>
                </h4>
                <p>
                  Hỗ trợ tâm lý cho các thành viên trong gia đình để xây dựng mối quan hệ lành mạnh và giúp gia đình
                  vượt qua khó khăn da liễu
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'>
              <div className='icon-box'>
                <div className='icon'>
                  <i className='fa fa-question'></i>
                </div>
                <h4>
                  <a href='' className='title-theme'>
                    Hỗ trợ sau điều trị
                  </a>
                </h4>
                <p>
                  Đồng hành và cung cấp hỗ trợ sau quá trình điều trị, giúp người dùng duy trì sức khỏe da liễu và xây
                  dựng các kỹ năng tự quản lý
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'>
              <div className='icon-box'>
                <div className='icon'>
                  <i className='fas fa-capsules'></i>
                </div>
                <h4>
                  <a href='' className='title-theme'>
                    Tư vấn về thuốc{' '}
                  </a>
                </h4>
                <p>Tư vấn về thuốc và quy trình điều trị tâm lý, đảm bảo sự hiểu rõ và lựa chọn phù hợp.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
