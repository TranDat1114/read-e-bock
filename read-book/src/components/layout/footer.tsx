const Footer = () => {
    return (
        <div className="w-full px-0 border-t p-4 bg-no-repeat bg-cover bg-center bg-[url('https://www.pngitem.com/pimgs/m/160-1605161_cities-background-for-footer-skyline-hd-png-download.png')]">
            <div className="container my-8 px-3">
                <div className="py-1 my-2 flex justify-center">
                    <img src="..." alt="logo" width={64} height={64} />
                </div>
                <div className="w-auto text-center lg:px-36 md:px-36">
                    Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được convert hoặc dịch kỹ lưỡng, do các converter và dịch giả đóng góp, rất nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...
                </div>
                <div className="flex justify-center gap-4 my-8">
                    <a href="#"><img src="https://metruyencv.info/assets/images/app-store.png?40124" className="w-24" /></a>
                    <a href="#"><img src="https://metruyencv.info/assets/images/google-play.png?40124" className="w-24" /></a>
                </div>
                <div className="flex justify-center">
                <ul className="sm:flex list-none">
                    <li className="mb-1"><a className="sm:w-3/12 px-3  hover:text-yellow-600" href="#">Điều khoản dịch vụ</a></li>
                    <li className="mb-1"><a className="sm:w-3/12 px-3  hover:text-yellow-600" href="#">Chính sách bảo mật</a></li>
                    <li className="mb-1"><a className="sm:w-3/12 px-3  hover:text-yellow-600" href="#">Về bản quyền</a></li>
                    <li className="mb-1"><a className="sm:w-3/12 px-3  hover:text-yellow-600" href="#">Hướng dẫn sử dụng</a></li>
                </ul>
                </div>
                
            </div>
        </div>

    )
}

export default Footer;