export default function Header() {
  return (
    <div className='flex items-center fixed bg-slate-100 z-0 py-3'>
      <div className='grid grid-cols-12 gap-2 '>
        <div className='col-span-2'>
          <img src='https://reading-time.co.kr/themes/readingtime/img/header-logo.png' alt='.' />
        </div>
        <div className='col-span-8'>
          <div className='flex items-center justify-center h-full'>
            <span className='text-xl mx-auto'>리딩타임이란</span>
            <span className='text-xl mx-auto'>수업후기</span>
            <span className='text-xl mx-auto'>무료체험 신청</span>
            <span className='text-xl mx-auto'>이용권 구매</span>
            <span className='text-xl mx-auto'>고객센터</span>
          </div>
        </div>
        <div className='col-span-2 flex'>
          <div className='border border-[#5353ac] border-1 rounded-2xl m-3 p-2'>login</div>
          <div className=' bg-[#5353ac] rounded-2xl text-white m-3 p-2'>Join us</div>
        </div>
      </div>
    </div>
  )
}
