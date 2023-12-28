import { BookOpen, Github } from "lucide-react";

const Footer = () => {
    return (
        <footer className="footer bg-[url('https://metruyencv.com/assets/images/footer-bg.png')] text-center py-6 block">
            <div className="container mx-auto px-4">
                <div className="logo py-1 my-2 inline-block">
                    <a className="bg-transparent no-underline">
                        <img
                            src="https://metruyencv.com/assets/images/logo.png"
                            alt="logo"
                            className="align-middle border-none w-16 h-16"
                        />
                    </a>
                </div>
                <div className="about m-auto w-3/4">
                    <span className="text-black/80">
                        Mê Truyện Chữ là nền tảng mở trực tuyến, miễn phí đọc truyện chữ được convert hoặc dịch kỹ lưỡng, do các converter và dịch giả đóng góp, rất nhiều truyện hay và nổi bật được cập nhật nhanh nhất với đủ các thể loại tiên hiệp, kiếm hiệp, huyền ảo ...
                    </span>
                </div>
                <div className="docs mt-6">
                    <div className="flex items-center justify-center py-1 text-black/65">
                        <div className="mr-2 cursor-pointer">
                            <a
                                href="https://github.com/TranDat1114/read-e-bock"
                                className="bg-transparent no-underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github className="w-6 h-6 align-middle block" />
                            </a>
                        </div>
                        <div className="cursor-pointer">
                            <a
                                href="https://button-key-a43.notion.site/Read-E-de8a60276ddf426290208fb811c2dc3a"
                                className="bg-transparent no-underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BookOpen className="w-6 h-6 align-middle block" />
                            </a>
                        </div>
                        <a className="no-underline bg-transparent"></a>
                    </div>
                </div>
                <ul className="notes mt-6 mb-0.5 flex justify-center items-center pl-0 list-none space-x-4">
                    <li>
                        <div className="px-4 py-2 inline-block cursor-pointer">
                            <a
                                className="no-underline bg-transparent"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="hover:text-[#b78a28]">
                                    Điều khoản dịch vụ
                                </span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="px-4 py-2 inline-block cursor-pointer">
                            <a
                                className="no-underline bg-transparent"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="hover:text-[#b78a28]">
                                    Chính sách bảo mật
                                </span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="px-4 py-2 inline-block cursor-pointer">
                            <a
                                className="no-underline bg-transparent"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="hover:text-[#b78a28]">
                                    Về bản quyền
                                </span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="px-4 py-2 inline-block cursor-pointer">
                            <a
                                className="no-underline bg-transparent"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span className="hover:text-[#b78a28]">
                                    Hướng dẫn sử dụng
                                </span>
                            </a>
                        </div>
                    </li>

                </ul>
            </div>
        </footer>
    );
}

export default Footer;