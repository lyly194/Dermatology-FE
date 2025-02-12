import qs from 'qs'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { DOCTOR_LIST, useApi } from '../../../api'
import DoctorItem, { DoctorItemSkeleton } from '../../doctor/DoctorItem'
import './index.css'

export default function Doctor() {
  const [data, setData] = useState<Data<Doctor>>()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const query = qs.stringify({ size: 12 })
    setLoading(true)
    const data = (await useApi.get(DOCTOR_LIST + (query ? '?' + query : ''))).data as Data<Doctor>
    setLoading(false)
    setData(data)
  }

  return (
    <section id='doctors' className='doctors'>
      <div className='container'>
        <div className='section-title'>
          <h2>Đội ngũ bác sĩ da liễu chuyên nghiệp</h2>
          <p>
            Quy tụ đội ngũ chuyên gia, bác sĩ, tư vấn và điều trị viên được đào tạo bài bản đến chuyên sâu tại Việt Nam.
            Luôn lấy người bệnh là trung tâm, cam kết mang lại dịch vụ chăm sóc sức khỏe toàn diện và chất lượng cao cho
            khách hàng.
          </p>
        </div>
        <Slider
          slidesToShow={2}
          rows={2}
          slidesToScroll={1}
          autoplay
          speed={500}
          infinite
          dots
          responsive={[
            {
              breakpoint: 768,
              settings: {
                rows: 2,
                slidesPerRow: 1,
                slidesToShow: 1
              }
            }
          ]}
        >
          {data?.data.map((doctor) => (
            <div className='doctor-slider' key={doctor._id}>
              <DoctorItem data={doctor} />
            </div>
          ))}
          {loading &&
            [...Array(12)].map((_, index) => {
              return <DoctorItemSkeleton key={index} />
            })}
        </Slider>
      </div>
    </section>
  )
}
