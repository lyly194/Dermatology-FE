import './index.css'

export default function FAQ() {
  return (
    <section id='faq' className='faq section-bg'>
      <div className='container'>
        <div className='section-title'>
          <h2>Các câu hỏi thường gặp</h2>
        </div>

        <div className='faq-list'>
          <ul>
            <li data-aos='fade-up'>
              <i className='bx bx-help-circle icon-help'></i>
              <a data-bs-toggle='collapse' className='collapse' data-bs-target='#faq-list-1'>
                Sức khỏe tâm lý là gì?
                <i className='bx bx-chevron-down icon-show'></i>
                <i className='bx bx-chevron-up icon-close'></i>
              </a>
              <div id='faq-list-1' className='collapse show' data-bs-parent='.faq-list'>
                <p>
                  Là tình trạng cảm xúc, tâm lý và xã hội của một người. Nó ảnh hưởng đến cách những cá nhân suy nghĩ,
                  cảm nhận và hành động, và nó cũng ảnh hưởng đến cách họ đối phó với căng thẳng, giao tiếp với người
                  khác và đưa ra quyết định.
                </p>
              </div>
            </li>

            <li data-aos='fade-up' data-aos-delay='100'>
              <i className='bx bx-help-circle icon-help'></i>
              <a data-bs-toggle='collapse' data-bs-target='#faq-list-2' className='collapsed'>
                Những rối loạn sức khỏe da liễu phổ biến là gì?
                <i className='bx bx-chevron-down icon-show'></i>
                <i className='bx bx-chevron-up icon-close'></i>
              </a>
              <div id='faq-list-2' className='collapse' data-bs-parent='.faq-list'>
                <p>
                Bao gồm các vấn đề da liễu như viêm da cơ địa, mụn trứng cá, vảy nến, chàm, nám da, bệnh rosacea, dị ứng da và các tình trạng da mãn tính khác. Những vấn đề này có thể ảnh hưởng đến vẻ ngoài, sức khỏe và chất lượng cuộc sống của người bệnh, yêu cầu sự chăm sóc đặc biệt và điều trị đúng cách.
                </p>
              </div>
            </li>

            <li data-aos='fade-up' data-aos-delay='200'>
              <i className='bx bx-help-circle icon-help'></i>
              <a data-bs-toggle='collapse' data-bs-target='#faq-list-3' className='collapsed'>
                Những dấu hiệu và triệu chứng của các vấn đề sức khỏe da liễu là gì?{' '}
                <i className='bx bx-chevron-down icon-show'></i>
                <i className='bx bx-chevron-up icon-close'></i>
              </a>
              <div id='faq-list-3' className='collapse' data-bs-parent='.faq-list'>
                <p>
                Những dấu hiệu và triệu chứng của các vấn đề về da khác nhau tùy thuộc vào tình trạng cụ thể, nhưng có thể bao gồm khô da, ngứa, phát ban, mẩn đỏ, mụn, viêm, sưng, nứt nẻ, đổi màu hoặc vết thâm trên da. Ngoài ra, các triệu chứng khác như da nhạy cảm, bong tróc, rát, hoặc xuất hiện các mảng da không đều màu cũng có thể là dấu hiệu của một số bệnh lý da liễu nghiêm trọng hơn.
                </p>
              </div>
            </li>

            <li data-aos='fade-up' data-aos-delay='300'>
              <i className='bx bx-help-circle icon-help'></i>
              <a data-bs-toggle='collapse' data-bs-target='#faq-list-4' className='collapsed'>
                Làm thế nào để hỗ trợ ai đó có một điều kiện sức khỏe da liễu?
                <i className='bx bx-chevron-down icon-show'></i>
                <i className='bx bx-chevron-up icon-close'></i>
              </a>
              <div id='faq-list-4' className='collapse' data-bs-parent='.faq-list'>
                <p>
                  Hỗ trợ ai đó có một điều kiện sức khỏe da liễu bao gồm thể hiện sự thông cảm, lắng nghe mà không phán
                  xét, khuyến khích họ tìm kiếm sự giúp đỡ chuyên nghiệp, và cung cấp sự hỗ trợ thiết thực. Điều quan
                  trọng là bạn phải tự học về điều kiện của họ, giao tiếp một cách mở rộng, và kiên nhẫn và thông cảm.
                </p>
              </div>
            </li>

            <li data-aos='fade-up' data-aos-delay='400'>
              <i className='bx bx-help-circle icon-help'></i>
              <a data-bs-toggle='collapse' data-bs-target='#faq-list-5' className='collapsed'>
                Những thực hành chăm sóc bản thân để duy trì sức khỏe da liễu tốt là gì?
                <i className='bx bx-chevron-down icon-show'></i>
                <i className='bx bx-chevron-up icon-close'></i>
              </a>
              <div id='faq-list-5' className='collapse' data-bs-parent='.faq-list'>
                <p>
                Những thực hành chăm sóc bản thân để duy trì sức khỏe da liễu tốt bao gồm làm sạch và dưỡng ẩm da đều đặn, sử dụng kem chống nắng hàng ngày, tránh tiếp xúc với các tác nhân gây kích ứng, duy trì chế độ ăn uống giàu dưỡng chất tốt cho da, uống đủ nước, ngủ đủ giấc, hạn chế căng thẳng, và sử dụng sản phẩm chăm sóc da phù hợp với loại da. Bên cạnh đó, việc thăm khám bác sĩ da liễu định kỳ và theo dõi những thay đổi trên da cũng rất quan trọng trong việc bảo vệ và cải thiện sức khỏe làn da.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
