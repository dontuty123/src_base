import CarouselSlide from 'src/components/Carousel'
import ImgWidget from 'src/components/ImgWidget'

export default function HomePage() {
  return (
    <div className='bg-slate-100'>
      <CarouselSlide />

      <div className='w-[85%] mx-auto'>
        <div className='mt-20 mb-20 flex justify-center'>
          <span className='text-4xl font-bold text-[#5353ac]'>왜 독서일까요?</span>
        </div>
        <div className='grid grid-cols-12 mb-20'>
          <ImgWidget
            classNameInput='col-span-7 overflow-hidden lg:w-[616px] lg:h-[230px]'
            classNameImg='overflow-hidden w-full h-full'
            ImgSrc='https://reading-time.co.kr/resources/img/main/why1.png'
          />
          <span className='text-xl col-span-5'>
            외국어 학습에 있어 책 읽기는 필수입니다. 특히 어린 아이일수록 언어 습득이 빠르기 때문에 영어를 전부 익히지
            않았더라도 그림을 통해 내용을 유추함으로써 Reading Comprehension Skill을 향상시킬 수 있습니다. 단순 말하기
            보다 다양한 표현과 구조를 습득할 수 있는 독서야말로 영어 학습에 있어 최고의 방법 중 하나입니다.
          </span>
        </div>
        <div className='grid grid-cols-12 mb-20'>
          <span className='text-xl col-span-5'>
            외국어 학습에 있어 책 읽기는 필수입니다. 특히 어린 아이일수록 언어 습득이 빠르기 때문에 영어를 전부 익히지
            않았더라도 그림을 통해 내용을 유추함으로써 Reading Comprehension Skill을 향상시킬 수 있습니다. 단순 말하기
            보다 다양한 표현과 구조를 습득할 수 있는 독서야말로 영어 학습에 있어 최고의 방법 중 하나입니다.
          </span>
          <ImgWidget
            classNameInput='col-start-7 col-end-12 text-right overflow-hidden lg:w-[616px] lg:h-[230px] float-left'
            classNameImg='overflow-hidden w-full h-full'
            ImgSrc='https://reading-time.co.kr/resources/img/main/why2.png'
          />
        </div>
        <div className='mt-30 mb-30 flex  justify-center'>
          <div className='flex flex-col items-center'>
            <span className='text-4xl font-bold text-[#5353ac]'>리딩타임 체험후기</span>
            <span className='text-2xl mt-5'>리딩타임의 리얼한 체험후기를 영상으로 만나보세요.</span>
          </div>
        </div>
        <div className='flex items-center mt-20 mb-32'>
          <div className='flex flex-col mx-2'>
            <div className='overflow-hidden w-full h-48 rounded-3xl flex items-center border-2 border-gray-400'>
              <img
                className='w-[640px] h-[380px]'
                src='	https://img.youtube.com/vi/R8tVc0BDM54/sddefault.jpg'
                alt='yt'
              />
            </div>
            <span className='mt-[20px] text-lg'>
              “독서는 편안한 곳에서 해야 하는데 독서 전문 선생님과 매일 집에서 할 수 있단 점이 좋은 것 같아요.”
            </span>
            <span className='mt-[25px] text-lg'>Reading Time 유형구 원장님</span>
          </div>
          <div className='flex flex-col mx-1'>
            <div className='overflow-hidden w-full h-48 rounded-3xl flex items-center border-2 border-gray-400'>
              <img
                className='w-[640px] h-[380px]'
                src='	https://img.youtube.com/vi/R8tVc0BDM54/sddefault.jpg'
                alt='yt'
              />
            </div>
            <span className='mt-[20px] text-lg'>
              “독서는 편안한 곳에서 해야 하는데 독서 전문 선생님과 매일 집에서 할 수 있단 점이 좋은 것 같아요.”
            </span>
            <span className='mt-[25px] text-lg'>Reading Time 유형구 원장님</span>
          </div>
          <div className='flex flex-col mx-1'>
            <div className='overflow-hidden w-full h-48 rounded-3xl flex items-center border-2 border-gray-400'>
              <img
                className='w-[640px] h-[380px]'
                src='	https://img.youtube.com/vi/R8tVc0BDM54/sddefault.jpg'
                alt='yt'
              />
            </div>
            <span className='mt-[20px] text-lg'>
              “독서는 편안한 곳에서 해야 하는데 독서 전문 선생님과 매일 집에서 할 수 있단 점이 좋은 것 같아요.”
            </span>
            <span className='mt-[25px] text-lg'>Reading Time 유형구 원장님</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col bg-[#E0E0F0] py-10'>
        <div className='w-[85%] mx-auto'>
          <div className='flex flex-col items-center'>
            <span className='text-4xl font-bold text-[#5353ac]'>리딩타임 체험후기</span>
            <span className='text-2xl mt-5'>리딩타임의 리얼한 체험후기를 영상으로 만나보세요.</span>
          </div>
          <div className='grid md:grid-cols-12 gap-4 mt-14'>
            <div className='col-span-7 flex flex-col truncate'>
              <div className='flex justify-between'>
                <span className='uppercase font-bold text-base text-[#5353AC]'>Notice</span>
                <button className='text-base uppercase text-[#5353AC] bg-[#FFFFFF80] rounded-2xl px-2 py-1'>
                  More ➕
                </button>
              </div>
              <div className='border border-b-[1px] mt-2 border-gray-500'></div>
              <div className='flex items-center p-5 bg-white mt-4'>
                <span className='text-white font-bold text-base bg-[#F4A5C7] py-1 px-5 mr-7 rounded-2xl flex-shrink-0'>
                  이벤트
                </span>
                <span className='text-base p-2 truncate'>
                  [선착순 100명] 여름방학 영어 독서로 시원한 인생 리프레시! 3+1 이벤트 (~8/25)
                </span>
                <span className='text-base p-2 text-gray-500 flex-shrink-0'>2023. 07. 21</span>
              </div>
              <div className='flex items-center p-5 bg-white mt-4'>
                <span className='text-white font-bold text-base bg-[#F4A5C7] py-1 px-5 mr-7 rounded-2xl flex-shrink-0'>
                  이벤트
                </span>
                <span className='text-base p-2 truncate'>
                  [선착순 100명] 여름방학 영어 독서로 시원한 인생 리프레시! 3+1 이벤트 (~8/25)
                </span>
                <span className='text-base p-2 text-gray-500 flex-shrink-0'>2023. 07. 21</span>
              </div>
              <div className='flex items-center p-5 bg-white mt-4'>
                <span className='text-white font-bold text-base bg-[#F4A5C7] py-1 px-5 mr-7 rounded-2xl flex-shrink-0'>
                  이벤트
                </span>
                <span className='text-base p-2 truncate'>
                  [선착순 100명] 여름방학 영어 독서로 시원한 인생 리프레시! 3+1 이벤트 (~8/25)
                </span>
                <span className='text-base p-2 text-gray-500 flex-shrink-0'>2023. 07. 21</span>
              </div>
              <div className='flex items-center p-5 bg-white mt-4'>
                <span className='text-white font-bold text-base bg-[#F4A5C7] py-1 px-5 mr-7 rounded-2xl flex-shrink-0'>
                  이벤트
                </span>
                <span className='text-base p-2 truncate'>
                  [선착순 100명] 여름방학 영어 독서로 시원한 인생 리프레시! 3+1 이벤트 (~8/25)
                </span>
                <span className='text-base p-2 text-gray-500 flex-shrink-0'>2023. 07. 21</span>
              </div>
            </div>

            <div className='col-span-5 md:mx-10 flex md:flex-col'>
              <ImgWidget
                ImgSrc='https://reading-time.co.kr/resources/img/main/faq_bg.png'
                classNameInput='w-[388px] h-[205px] bg-white text-[#222222] hover:border hover:border-4 hover:border-[#F4A5C7]'
                classNameImg='mx-auto mt-2'
              />

              <ImgWidget
                ImgSrc='https://reading-time.co.kr/resources/img/main/faq_bg.png'
                classNameInput='w-[388px] h-[205px] bg-white text-[#222222] md:mt-4 hover:border hover:border-4 hover:border-[#1F29B8]'
                classNameImg='mx-auto mt-2'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
