import { Album, AlignJustify, Search, Upload } from "lucide-react";
import { useState } from 'react'


const Header = () => {
  const [showList, setShowList] = useState(false);
  const [showRank, setShowRank] = useState(false);
  return (
    <header className="bg-[rgba(51,34,0,.05)] block box-border">
      <nav className="flex-row justify-start flex items-center p-0">
        <div className="container flex-nowrap flex items-center justify-between relative px-4 w-full mx-auto">
          <a href="/" className="text-black py-3 mr-6 inline-block text-xl whitespace-nowrap no-underline bg-transparent">
            <Album className="w-6 h-6 block align-middle" />
          </a>
          <ul className="flex-row mr-auto flex pl-0 mb-0 list-none mt-0">
            <li className="relative hover:bg-white/55 cursor-pointer"
              onMouseEnter={() => setShowList(true)}
              onMouseLeave={() => setShowList(false)}
            >
              <a href="" className="text-black px-4 py-6 font-semibold flex no-underline bg-transparent">
                <i className="text-sm inline-block font-normal leading-4 mr-2">
                  <AlignJustify className="" />
                </i>
                Thể loại
              </a>
              <div className={`block absolute w-[500px] px-6 float-none rounded-none p-3 m-0 text-base text-left list-none bg-white ${showList ? 'block' : 'hidden'
                }`}>
                <div className="mx-0 flex flex-wrap mb-2 bg-white/25">
                  <div className="grid grid-cols-2 items-center">
                    <div className="left mr-32">
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Tất cả
                      </a>
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Huyền Huyền
                      </a>
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Võng Du
                      </a>
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Đồng Nhân
                      </a>
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Cạnh Kỹ
                      </a>
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Kiếm Hiệp
                      </a>
                    </div>
                    <div className="right mr-2">
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Tiên Hiệp
                      </a>
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Khoa Huyền
                      </a>
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Đô Thị
                      </a>
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Dã Sử
                      </a>
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Huyền Nghi
                      </a>
                      <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                        <i className="inline-block bg-no-repeat mr-2"></i>
                        Kỳ Ảo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative hover:bg-white/55 cursor-pointer"
              onMouseEnter={() => setShowRank(true)}
              onMouseLeave={() => setShowRank(false)}
            >
              <a href="" className="text-black px-4 py-6 font-semibold flex no-underline bg-transparent">
                Bảng xếp hạng
              </a>
              <div className={`block absolute w-[500px] px-6 float-none rounded-none p-3 m-0 text-base text-left list-none bg-white ${showRank ? 'block' : 'hidden'
                }`}
              >
                <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                  <i className="inline-block bg-no-repeat mr-2"></i>
                  Thịnh hành
                </a>
                <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                  <i className="inline-block bg-no-repeat mr-2"></i>
                  Đọc nhiều
                </a>
                <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                  <i className="inline-block bg-no-repeat mr-2"></i>
                  Tặng thưởng
                </a>
                <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                  <i className="inline-block bg-no-repeat mr-2"></i>
                  Đề cử
                </a>
                <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                  <i className="inline-block bg-no-repeat mr-2"></i>
                  Yêu thích
                </a>
                <a className="px-0 items-center flex py-1.5 font-normal whitespace-nowrap bg-transparent no-underline hover:text-[#b78a28]">
                  <i className="inline-block bg-no-repeat mr-2"></i>
                  Thảo luận
                </a>
              </div>
            </li>
          </ul>
          <div className="flex-1 ml-64 mr-auto">
            <div className="flex items-center border border-gray-300 bg-white rounded-full py-1 px-4 w-2/4 relative">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="w-full py-1 px-4 bg-transparent border-none focus:outline-none"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <Search className="w-6 h-6 block align-middle text-[#b78a28] mr-2" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-12">
            <a href="#" className="text-gray-800 hover:text-black flex justify-center">
              <div className="logo">
                <Upload className="w-4 h-4 align-middle block translate-y-1 mr-2"/>
              </div>
              <div className="label">Đăng truyện</div>
            </a>
            <a href="#" className="text-gray-800 hover:text-black">Đăng nhập</a>
            <a href="#" className="text-gray-800 hover:text-black">Đăng ký</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
