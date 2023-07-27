export default function Footer() {
  return (
    <div className='flex flex-col bg-slate-800 text-white'>
      <div className='w-[85%] mx-auto pb-12'>
        <div className='flex items-center mt-5 mb-10'>
          <span className=' mr-5'>이용약관</span>
          <span className=' mr-5'>개인정보처리방침</span>
          <span className=''>결제 및 환불정책</span>
        </div>
        <div className='flex items-center'>
          <img src='https://reading-time.co.kr/resources/img/main/logo.png' alt='.' />
          <div className='flex flex-col ml-10 mb-10'>
            <span className='text-sm mb-2'>잉글리쉬윙(주) 사업자 등록번호 :610-86-01417 대표자 :김은석</span>
            <span className='text-sm mb-2'>본사 주소 :서울특별시 강서구 마곡서로 133, 마곡엠밸리 713-1004</span>
            <span className='text-sm'>통신판매업 신고 :제2018-서울강남-03582호</span>
          </div>
        </div>
        <div className='border border-b-[1px] mb-5'></div>
        <span className='text-sm'>Copyright ⓒ 잉글리쉬윙(주). All rights reserved.</span>
      </div>
    </div>
  )
}
