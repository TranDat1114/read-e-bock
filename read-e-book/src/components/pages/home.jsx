import { ArrowUpFromLine, Glasses, Library, PencilLine, Sparkles } from 'lucide-react';
import { useState } from 'react';
const HomePage = () => {

    const [hoveredATag, setHoveredATag] = useState(false);
    const [hoverCategoryTag, setHoverCategoryTag] = useState(false);
    const [hoverTutorialTag, setHoverTutorialTag] = useState(false);
    const [hoverNewUpdate, setHoverNewUpdate] = useState(false);
    const [hoverTopRead, setHoverTopRead] = useState(false);
    const [hoverTopTrending, setHoverTopTrending] = useState(false);
    const [hoverSuggestions, setHoverSuggestions] = useState(false);
    const [hoverHighestRated, setHoverHighestRated] = useState(false);
    const [hoverNewest, setHoverNewest] = useState(false);

    return (
        <div className="box-border">
            <a className="no-underline bg-transparent">
                <span className="bg-[url('https://static.cdnno.com/storage/topbox/81dc53cc8dd55ce0b0e0fe8e647e9625.jpg')] absolute left-0 overflow-hidden w-full h-96 bg-no-repeat bg-cover"></span>
            </a>
            <div className="pt-64 bg-none pb-6 block">
                <div className="relative container px-4 mx-auto">
                    <div className="page-content bg-white p-5  rounded-lg" >
                        <div className="grid grid-cols-3 -mx-4" >
                            <div className="ml-4 col-span-2"
                                onMouseEnter={() => setHoveredATag(true)}
                                onMouseLeave={() => setHoveredATag(false)}>
                                <section className="block">
                                    <div className="title-row mb-6 items-center flex">
                                        <h2 className="text-xl font-semibold my-0">Biên tập viên đề cử</h2>
                                        {hoveredATag && (
                                            <a href="#" className="text-[#b78a28] ml-auto no-underline bg-transparent mr-4 hover:text-black/55">
                                                Xem tất cả
                                            </a>
                                        )}
                                    </div>
                                    <div className='items-center flex'>
                                        <div className='grid grid-cols-2 w-full gap-4'>
                                            <div className='flex flex-col'>
                                                <div className='flex items-start pl-2'>
                                                    <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                        <img
                                                            className="w-40 h-40 object-cover align-middle mr-2"
                                                            src="https://static.cdnno.com/poster/thi-vuong-quat-khoi-bat-dau-don-uc-van-huyet-nhuc/150.jpg?1681049593"
                                                            alt="Book Cover"
                                                        />
                                                    </a>
                                                    <div className='break-words truncate w-full'>
                                                        <h2 className='text-balance mb-2 font-semibold'>
                                                            <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Thi Vương Quật Khởi, Bắt Đầu Độn Ức Vạn Huyết Nhục</a>
                                                        </h2>
                                                        <div className='text-sm truncate text-black/50'>
                                                            【 tận thế + trùng sinh + độn vật tư + Zombie tiến hóa + bạo lực mỹ học 】Lâm Đông trùng sinh tại kinh khủng tận thế đêm trước, cũng thêm ra một cái không gian trữ vật.Nếu là người bình thường, khẳng định trữ hàng đại lượng vật tư, lương thực, nguồn nước, nhưng Lâm Đông lại mua đại lượng thịt tươi cùng máu tươi.Bởi vì. . . Hắn sắp biến thành một con Zombie!Huyết nhục chính là Zombie lực lượng nguồn suối, chỉ cần ăn thịt, liền có thể không ngừng tiến hóa.Một con có sung túc huyết nhục nuôi nấng Zombie, tốc độ phát triển khó có thể tưởng tượng kinh khủng.Muốn biến mạnh bao nhiêu, vậy phải xem Lâm Đông có thể ăn vào nhiều ít thịt, thế là, hắn bắt đầu trữ hàng ức vạn huyết nhục!
                                                        </div>
                                                        <div className='py-1 mt-2 flex items-center'>
                                                            <div className='flex items-center text-black/75'>
                                                                <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                                <span className='truncate max-w-52'>Nhất Thiên Nhị Lưỡng Tửu</span>
                                                            </div>
                                                            <a className='ml-auto no-underline'>
                                                                <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Đô thị</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className='flex items-start pl-2'>
                                                    <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                        <img
                                                            className="w-40 h-40 object-cover align-middle mr-2"
                                                            src="https://static.cdnno.com/poster/tu-la-vu-than/150.jpg?1694906931"
                                                            alt="Book Cover"
                                                        />
                                                    </a>
                                                    <div className='break-words truncate w-full'>
                                                        <h2 className='text-balance mb-2 font-semibold'>
                                                            <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Tu La Võ Thần</a>
                                                        </h2>
                                                        <div className='text-sm truncate text-black/50'>
                                                            Luận tiềm lực, không tính thiên tài, có thể Huyền công võ kỹ, đều có thể vô sự tự thông.Luận mị lực, thiên kim tiểu thư tính là gì, yêu nữ Thánh nữ, đều yêu ta muốn ngừng mà không được.Luận thực lực , mặc cho ngươi có ngàn vạn chí bảo, nhưng định không địch lại ta giới linh đại quân.Ta là ai ? Thiên hạ chúng sinh xem ta vì Tu La, lại không biết, ta lấy Tu La thành Võ Thần.Đẳng cấp: Linh Vũ, Nguyên Vũ, Huyền Vũ, Thiên Vũ, Vũ Quân, Vũ Vương, Vũ Đế, Vũ Tổ. . . .
                                                        </div>
                                                        <div className='py-1 mt-2 flex items-center'>
                                                            <div className='flex items-center text-black/75'>
                                                                <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                                <span className='truncate max-w-52'>Thiện Lương Mật Phong</span>
                                                            </div>
                                                            <a className='ml-auto no-underline'>
                                                                <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='my-6 border-t border-solid border-[#eee] overflow-visible' />
                                    <div className='items-center flex'>
                                        <div className='grid grid-cols-2 w-full gap-4'>
                                            <div className='flex flex-col'>
                                                <div className='flex items-start pl-2'>
                                                    <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                        <img
                                                            className="w-40 h-40 object-cover align-middle mr-2"
                                                            src="https://static.cdnno.com/poster/ta-co-mot-than-bi-dong-ky/150.jpg?1673424712"
                                                            alt="Book Cover"
                                                        />
                                                    </a>
                                                    <div className='break-words truncate w-full'>
                                                        <h2 className='text-balance mb-2 font-semibold'>
                                                            <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Ta Có Một Thân Bị Động Kỹ</a>
                                                        </h2>
                                                        <div className='text-sm truncate text-black/50'>
                                                            Mạnh nhất trên thế giới kỹ năng, là cần chủ động thi triển kỹ năng sao?Sai! Là bị động kỹ!Cái gì là bị động kỹ?Bị động kỹ, là thuần phát chủ động kỹ, là không người sẽ đi phòng bị sát chiêu, là người chết mới có thể biết được cuối cùng át chủ bài!Có thể thông tục dễ hiểu chút?Phương pháp hô hấp, cường tráng, cảm giác ...Ha ha, liền cái này?Từ Tiểu Thụ một kiếm xé rách tinh hà, thế nhân phải sợ hãi ....Cái này mẹ nó vậy gọi bị động kỹ?Ân, kiếm thuật tinh thông .
                                                        </div>
                                                        <div className='py-1 mt-2 flex items-center'>
                                                            <div className='flex items-center text-black/75'>
                                                                <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                                <span className='truncate max-w-52'>Ngao Dạ Cật Bình Quả</span>
                                                            </div>
                                                            <a className='ml-auto no-underline'>
                                                                <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className='flex items-start pl-2'>
                                                    <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                        <img
                                                            className="w-40 h-40 object-cover align-middle mr-2"
                                                            src="https://static.cdnno.com/poster/dinh-cap-ngo-tinh-tu-co-so-quyen-phap-bat-dau/150.jpg?1675594275"
                                                            alt="Book Cover"
                                                        />
                                                    </a>
                                                    <div className='break-words truncate w-full'>
                                                        <h2 className='text-balance mb-2 font-semibold'>
                                                            <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Đỉnh Cấp Ngộ Tính: Từ Cơ Sở Quyền Pháp Bắt Đầu</a>
                                                        </h2>
                                                        <div className='text-sm truncate text-black/50'>
                                                            Xuyên qua thành Diệu Thủ viên học đồ Lục Trường Sinh, vốn định cố gắng làm hành y tế thế một đời thần y. Nhưng khi hắn bắt đầu luyện võ về sau, lại phát hiện mỗi luyện thành một môn võ công đến viên mãn, liền có thể tăng lên ngộ tính.Mà lại, ngộ tính tựa hồ có thể một mực tăng lên. Lục Trường Sinh muốn biết, ngộ tính hạn mức cao nhất đến cùng ở đâu?Thường thường không có gì lạ: So phế vật tốt hơn một chút một chút.Trung nhân chi tư: Chẳng khác người thường mà không biết.Rất có tiềm lực: Tiểu hà tài lộ tiêm tiêm giác.Tứ phương ca tụng: Phong mang tất lộ, duệ không thể đỡ!Rồng phượng trong loài người: Danh thiên tài truyền thiên hạ!Bách thế truyền tụng: Khai tông lập phái, xưng tông làm tổ!Thánh Nhân trời sinh: Vang dội cổ kim, vô xuất kỳ hữu!Vạn cổ vô nhất: Tiền vô cổ nhân hậu vô lai giả!Đỉnh cấp ngộ tính: Không thể nói, không thể xem, không thể nghe thấy!. . .
                                                        </div>
                                                        <div className='py-1 mt-2 flex items-center'>
                                                            <div className='flex items-center text-black/75'>
                                                                <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                                <span className='truncate max-w-52'>Nguyệt Trung Âm</span>
                                                            </div>
                                                            <a className='ml-auto no-underline'>
                                                                <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='my-6 border-t border-solid border-[#eee] overflow-visible' />
                                    <div className='items-center flex'>
                                        <div className='grid grid-cols-2 w-full gap-4'>
                                            <div className='flex flex-col'>
                                                <div className='flex items-start pl-2'>
                                                    <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                        <img
                                                            className="w-40 h-40 object-cover align-middle mr-2"
                                                            src="https://static.cdnno.com/poster/bat-diet-ba-the-quyet/150.jpg?1597055080"
                                                            alt="Book Cover"
                                                        />
                                                    </a>
                                                    <div className='break-words truncate w-full'>
                                                        <h2 className='text-balance mb-2 font-semibold'>
                                                            <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Bất Diệt Bá Thể Quyết</a>
                                                        </h2>
                                                        <div className='text-sm truncate text-black/50'>
                                                            Hèn mọn thiếu niên, ngoài ý muốn thức tỉnh trí nhớ kiếp trước, tu Bất Diệt Bá Thể Quyết, có được hậu thiên giác tỉnh huyết mạch năng lực. Người khác nhất sinh chỉ có thể thức tỉnh một loại huyết mạch, mà hắn lại có thể thức tỉnh mười cái, trăm cái, còn có thể tùy ý dung hợp, cuối cùng đúc Tựu Bất Diệt Bá Thể! Ta lấy xác phàm đúc Bá Thể, một tay che trời trấn thế gian! Cửu Cực Thánh Thể? Hoang Thiên Cổ Thể? Thái Thượng Vương Thể? Mặc cho ngươi thể chất cả thế gian vô song, lại sao địch ta Bất Diệt Bá Thể!
                                                        </div>
                                                        <div className='py-1 mt-2 flex items-center'>
                                                            <div className='flex items-center text-black/75'>
                                                                <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                                <span className='truncate max-w-52'>Bát Dị</span>
                                                            </div>
                                                            <a className='ml-auto no-underline'>
                                                                <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className='flex items-start pl-2'>
                                                    <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                        <img
                                                            className="w-40 h-40 object-cover align-middle mr-2"
                                                            src="https://static.cdnno.com/poster/thien-su-ta-co-mot-the-gioi-khac/150.jpg?1689645868"
                                                            alt="Book Cover"
                                                        />
                                                    </a>
                                                    <div className='break-words truncate w-full'>
                                                        <h2 className='text-balance mb-2 font-semibold'>
                                                            <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Thiên Sư, Ta Có Một Thế Giới Khác</a>
                                                        </h2>
                                                        <div className='text-sm truncate text-black/50'>
                                                            Một trận cơ duyên,Lưỡng giới đi tới đi lui. Từ nay về sau, vinh hoa phú quý...
                                                        </div>
                                                        <div className='py-1 mt-2 flex items-center'>
                                                            <div className='flex items-center text-black/75'>
                                                                <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                                <span className='truncate max-w-52'>Mông Diện Quái Khách</span>
                                                            </div>
                                                            <a className='ml-auto no-underline'>
                                                                <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Đô Thị</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className='my-6 border-t border-solid border-[#eee] overflow-visible' />
                                    <div className='items-center flex'>
                                        <div className='grid grid-cols-2 w-full gap-4'>
                                            <div className='flex flex-col'>
                                                <div className='flex items-start pl-2'>
                                                    <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                        <img
                                                            className="w-40 h-40 object-cover align-middle mr-2"
                                                            src="https://static.cdnno.com/poster/cau-tai-yeu-vo-loan-the-tu-tien/150.jpg?1675827437"
                                                            alt="Book Cover"
                                                        />
                                                    </a>
                                                    <div className='break-words truncate w-full'>
                                                        <h2 className='text-balance mb-2 font-semibold'>
                                                            <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Cẩu Tại Yêu Võ Loạn Thế Tu Tiên</a>
                                                        </h2>
                                                        <div className='text-sm truncate text-black/50'>
                                                            Phương Tịch xuyên rồi, mà lại là nhị xuyên!Tại tu tiên giới ta khúm núm, tại dị thế giới ta trọng quyền xuất kích!Không nghĩ tới trăm ngàn năm về sau, tại tu tiên giới cũng thành đại lão!
                                                        </div>
                                                        <div className='py-1 mt-2 flex items-center'>
                                                            <div className='flex items-center text-black/75'>
                                                                <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                                <span className='truncate max-w-52'>Văn Sao Công</span>
                                                            </div>
                                                            <a className='ml-auto no-underline'>
                                                                <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Tiên Hiệp</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className='flex items-start pl-2'>
                                                    <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                        <img
                                                            className="w-40 h-40 object-cover align-middle mr-2"
                                                            src="https://static.cdnno.com/poster/cuu-vuc-kiem-de/150.jpg?1702714063"
                                                            alt="Book Cover"
                                                        />
                                                    </a>
                                                    <div className='break-words truncate w-full'>
                                                        <h2 className='text-balance mb-2 font-semibold'>
                                                            <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Cửu Vực Kiếm Đế</a>
                                                        </h2>
                                                        <div className='text-sm truncate text-black/50'>
                                                            Vạn năm trước đó kiếm ý đệ nhất nhân Sở Kiếm Bạch, bị thất đại tông môn truy sát mà chết.Vạn năm về sau, hắn một lần nữa sống lại, đối mặt lại là một bộ xa lạ thân thể.Thất đại tông môn! Ta nhất định phải san bằng tất cả, trở thành Cửu Vực Đại Đế!* Các bạn ủng hộ bằng 3 phương thức:1. Bấm vào 5 sao bên phải màn hình.2. Bấm đề cử, chọn số Nguyệt phiếu. ( Chỉ áp dụng với bạn có Tài khoản của truyencv.com)3. Ấn nút Tặng đậu cuối chương.Chân thành cảm ơn!
                                                        </div>
                                                        <div className='py-1 mt-2 flex items-center'>
                                                            <div className='flex items-center text-black/75'>
                                                                <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                                <span className='truncate max-w-52'>Thiệu Vũ</span>
                                                            </div>
                                                            <a className='ml-auto no-underline'>
                                                                <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className='col-span-1 mt-0.5 ml-8'>
                                <section className='block'
                                    onMouseEnter={() => setHoverCategoryTag(true)}
                                    onMouseLeave={() => setHoverCategoryTag(false)}>
                                    <div className="title-row mb-6 items-center flex">
                                        <h2 className="text-xl font-semibold my-0">Đang đọc</h2>
                                        {hoverCategoryTag && (
                                            <a href="#" className="text-[#b78a28] ml-auto no-underline bg-transparent mr-4 hover:text-black/55">
                                                Xem tất cả
                                            </a>
                                        )}
                                    </div>
                                    <ul className='m-0 pl-0 list-none'>
                                        <li className='py-2 mb-1 items-center flex'>
                                            <a className='w-8 inline-block  mr-4 no-underline bg-transparent cursor-pointer'>
                                                <img
                                                    className='w-full h-auto object-cover align-middle'
                                                    src='https://static.cdnno.com/poster/ta-co-mot-than-bi-dong-ky/150.jpg?1673424712'
                                                />
                                            </a>
                                            <div className='flex-1'>
                                                <h2 className='text-sm mb-1 font-semibold max-w-80'>
                                                    <a href="/" className='no-underline bg-transparent cursor-pointer'>
                                                        <div className='title-book truncate align-middle hover:text-[#b78a28]'>
                                                            Ta Có Một Thân Bị Động Kỹ
                                                        </div>
                                                    </a>
                                                </h2>
                                                <div className='truncate align-middle text-black/50'>
                                                    Đã đọc: 1
                                                </div>
                                            </div>
                                            <a className='float-left no-underline bg-transparent mr-4'>
                                                <small className='text-[#b78a28] text-balance font-normal'>Đọc tiếp</small>
                                            </a>
                                        </li>
                                        <li className='py-2 mb-1 items-center flex'>
                                            <a className='w-8 inline-block  mr-4 no-underline bg-transparent cursor-pointer'>
                                                <img
                                                    className='w-full h-auto object-cover align-middle'
                                                    src='https://static.cdnno.com/poster/phan-phai-cam-khu-than-tu-ta-di-san-thien-menh-dai-dao/150.jpg?1695972628'
                                                />
                                            </a>
                                            <div className='flex-1'>
                                                <h2 className='text-sm mb-1 font-semibold max-w-80'>
                                                    <a href="/" className='no-underline bg-transparent cursor-pointer'>
                                                        <div className='title-book truncate align-middle hover:text-[#b78a28]'>
                                                            Phản Phái: Cấm Khu Thần Tử! Ta Đi Săn Thiên Mệnh Đại Đạo
                                                        </div>
                                                    </a>
                                                </h2>
                                                <div className='truncate align-middle text-black/50'>
                                                    Đã đọc: 0/275
                                                </div>
                                            </div>
                                        </li>
                                        <li className='py-2 mb-1 items-center flex'>
                                            <a className='w-8 inline-block  mr-4 no-underline bg-transparent cursor-pointer'>
                                                <img
                                                    className='w-full h-auto object-cover align-middle'
                                                    src='https://static.cdnno.com/poster/gia-toc-cua-ta-toan-vien-ngon-tay-vang/150.jpg?1671766031'
                                                />
                                            </a>
                                            <div className='flex-1'>
                                                <h2 className='text-sm mb-1 font-semibold max-w-80'>
                                                    <a href="/" className='no-underline bg-transparent cursor-pointer'>
                                                        <div className='title-book truncate align-middle hover:text-[#b78a28]'>
                                                            Gia Tộc Của Ta Toàn Viên Ngón Tay Vàng
                                                        </div>
                                                    </a>
                                                </h2>
                                                <div className='truncate align-middle text-black/50'>
                                                    Đã đọc: 0/704
                                                </div>
                                            </div>
                                        </li>
                                        <li className='py-2 mb-1 items-center flex'>
                                            <a className='w-8 inline-block  mr-4 no-underline bg-transparent cursor-pointer'>
                                                <img
                                                    className='w-full h-auto object-cover align-middle'
                                                    src='https://static.cdnno.com/poster/tieng-long-bot-khi-khung-bi-mat-cua-nguoi-bai-lo/150.jpg?1698376861'
                                                />
                                            </a>
                                            <div className='flex-1'>
                                                <h2 className='text-sm mb-1 font-semibold max-w-80'>
                                                    <a href="/" className='no-underline bg-transparent cursor-pointer'>
                                                        <div className='title-book truncate align-middle hover:text-[#b78a28]'>
                                                            Tiếng Lòng Bọt Khí Khung: Bí Mật Của Ngươi Bại Lộ!
                                                        </div>
                                                    </a>
                                                </h2>
                                                <div className='truncate align-middle text-black/50'>
                                                    Đã đọc: 0/206
                                                </div>
                                            </div>
                                        </li>
                                        <li className='py-2 mb-1 items-center flex'>
                                            <a className='w-8 inline-block  mr-4 no-underline bg-transparent cursor-pointer'>
                                                <img
                                                    className='w-full h-auto object-cover align-middle'
                                                    src='https://static.cdnno.com/poster/bat-dau-van-lan-tang-phuc-ta-thuc-su-qua-vo-dich/150.jpg?1675498250'
                                                />
                                            </a>
                                            <div className='flex-1'>
                                                <h2 className='text-sm mb-1 font-semibold max-w-80'>
                                                    <a href="/" className='no-underline bg-transparent cursor-pointer'>
                                                        <div className='title-book truncate align-middle hover:text-[#b78a28]'>
                                                            Bắt Đầu Vạn Lần Tăng Phúc, Ta Thực Sự Quá Vô Địch
                                                        </div>
                                                    </a>
                                                </h2>
                                                <div className='truncate align-middle text-black/50'>
                                                    Đã đọc: 0/627
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </section>
                                <hr className='my-6 border-t border-solid border-[#eee] overflow-visible' />
                                <section className='block'
                                    onMouseEnter={() => setHoverTutorialTag(true)}
                                    onMouseLeave={() => setHoverTutorialTag(false)}>
                                    <div className="title-row mb-6 items-center flex">
                                        <h2 className="text-xl font-semibold my-0">Hướng dẫn</h2>
                                        {hoverTutorialTag && (
                                            <a href="#" className="text-[#b78a28] ml-auto no-underline bg-transparent mr-4 hover:text-black/55">
                                                Xem tất cả
                                            </a>
                                        )}
                                    </div>
                                    <ul className='m-0 px-5 list-disc'>
                                        <li>
                                            <a className=' pl-4 py-1 mb-1 block no-underline bg-transparent cursor-pointer'>
                                                <div className='max-w-96 truncate break-words hover:text-[#b78a28]'>
                                                    Tôi muốn biết đang có bao nhiêu Kẹo, hạn sử dụng, đã sử dụng như nào thì phải làm sao?
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className=' pl-4 py-1 mb-1 block no-underline bg-transparent cursor-pointer'>
                                                <div className='max-w-96 truncate break-words hover:text-[#b78a28]'>
                                                    Vì sao tôi bị khóa tài khoản?
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className=' pl-4 py-1 mb-1 block no-underline bg-transparent cursor-pointer'>
                                                <div className='max-w-96 truncate break-words hover:text-[#b78a28]'>
                                                    Tôi muốn xem điểm hâm mộ của mình, vào đâu để xem?
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className=' pl-4 py-1 mb-1 block no-underline bg-transparent cursor-pointer'>
                                                <div className='max-w-96 truncate break-words hover:text-[#b78a28]'>
                                                    Quy định khi tặng Hoa
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className=' pl-4 py-1 mb-1 block no-underline bg-transparent cursor-pointer'>
                                                <div className='max-w-96 truncate break-words hover:text-[#b78a28]'>
                                                    Làm sao để có Hoa?
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className=' pl-4 py-1 mb-1 block no-underline bg-transparent cursor-pointer'>
                                                <div className='max-w-96 truncate break-words hover:text-[#b78a28]'>
                                                    Tôi còn thắc mắc khác?
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                    <section className='py-4 block'
                        onMouseEnter={() => setHoverNewUpdate(true)}
                        onMouseLeave={() => setHoverNewUpdate(false)}>
                        <div className='title mb-4 items-center flex'>
                            <h2 className='mb-0 text-xl font-semibold'>Mới cập nhật</h2>
                            {hoverNewUpdate && (
                                <a href="#" className="text-[#b78a28] ml-4 no-underline bg-transparent mr-4 hover:text-black/55 translate-y-0.5">
                                    Xem tất cả
                                </a>
                            )}
                        </div>
                        <table className='text-sm border-t border-solid border-[#eee] w-full mb-4 border-collapse'>
                            <tbody>
                                <tr className='hover:bg-black/5'>
                                    <td className='border-0 p-3 text-black/65 align-middle'>
                                        <span className='truncate'>Huyền Huyễn</span>
                                    </td>
                                    <td className='border-0 p-3 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm m-0 font-semibold'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>Cướp Lấy Các Lộ Cơ Duyên, Khí Vận Chi Tử Hỏng Mất</span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/75 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>Chương 223: Quang cướp trước không có ý nghĩa, thay cái mới cách chơi!</span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/85 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Bất Ái Thanh Nịnh Mông
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Vô Ưu
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle text-right'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                2 phút trước
                                            </span>
                                        </h2>
                                    </td>
                                </tr>
                                <tr className='hover:bg-black/5'>
                                    <td className='border-0 p-3 text-black/65 align-middle'>
                                        <span className='truncate'>Huyền Huyễn</span>
                                    </td>
                                    <td className='border-0 p-3 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm m-0 font-semibold'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Phản Phái: Cấm Khu Thần Tử! Ta Đi Săn Thiên Mệnh Đại Đạo
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/75 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Chương 275: Luân hồi vãng sinh lộ, đồ bỏ đi liền nên ở tại trong đất!
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/85 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Khả Phá Tâm
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Vô Ưu
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle text-right'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                5 phút trước
                                            </span>
                                        </h2>
                                    </td>
                                </tr>
                                <tr className='hover:bg-black/5'>
                                    <td className='border-0 p-3 text-black/65 align-middle'>
                                        <span className='truncate'>Huyền Huyễn</span>
                                    </td>
                                    <td className='border-0 p-3 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm m-0 font-semibold'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Gia Tộc Của Ta Toàn Viên Ngón Tay Vàng
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/75 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Chương 704: Có lẽ công tử chưa bao giờ nghĩ tới muốn thả qua Huyền Âm giáo
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/85 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Trần Chu Lý Học
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Vô Ưu
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle text-right'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                7 phút trước
                                            </span>
                                        </h2>
                                    </td>
                                </tr>
                                <tr className='hover:bg-black/5'>
                                    <td className='border-0 p-3 text-black/65 align-middle'>
                                        <span className='truncate'>Huyền Huyễn</span>
                                    </td>
                                    <td className='border-0 p-3 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm m-0 font-semibold'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Tiếng Lòng Bọt Khí Khung: Bí Mật Của Ngươi Bại Lộ!
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/75 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Chương 206: Ngươi cũng xứng?
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/85 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Tiểu Hùng Yếu Quật Khởi
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Vô Ưu
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle text-right'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                9 phút trước
                                            </span>
                                        </h2>
                                    </td>
                                </tr>
                                <tr className='hover:bg-black/5'>
                                    <td className='border-0 p-3 text-black/65 align-middle'>
                                        <span className='truncate'>Huyền Huyễn</span>
                                    </td>
                                    <td className='border-0 p-3 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm m-0 font-semibold'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Bắt Đầu Vạn Lần Tăng Phúc, Ta Thực Sự Quá Vô Địch
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/75 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Chương 627: Thái Hư công tử thực lực! Chòm sao nát bấy mỹ lệ!
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/85 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Phượng Tư Minh Vũ
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Vô Ưu
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle text-right'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                9 phút trước
                                            </span>
                                        </h2>
                                    </td>
                                </tr>
                                <tr className='hover:bg-black/5'>
                                    <td className='border-0 p-3 text-black/65 align-middle'>
                                        <span className='truncate'>Huyền Huyễn</span>
                                    </td>
                                    <td className='border-0 p-3 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm m-0 font-semibold'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Ta Nói Bừa Công Pháp, Các Ngươi Làm Sao Đều Thành Đại Đế
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/75 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Chương 46: Tiêu Thần kiếm chấn mọi người
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/85 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Phong Yên Túy
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Vô Ưu
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle text-right'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                11 phút trước
                                            </span>
                                        </h2>
                                    </td>
                                </tr>
                                <tr className='hover:bg-black/5'>
                                    <td className='border-0 p-3 text-black/65 align-middle'>
                                        <span className='truncate'>Huyền Huyễn</span>
                                    </td>
                                    <td className='border-0 p-3 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm m-0 font-semibold'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Nhân Đạo Đại Thánh
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/75 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Chương 1987: Thôn phệ hết thảy
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/85 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Mạc Mặc
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                DarkHero
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle text-right'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                13 phút trước
                                            </span>
                                        </h2>
                                    </td>
                                </tr>
                                <tr className='hover:bg-black/5'>
                                    <td className='border-0 p-3 text-black/65 align-middle'>
                                        <span className='truncate'>Khoa Huyễn</span>
                                    </td>
                                    <td className='border-0 p-3 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm m-0 font-semibold'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Linh Cảnh Hành Giả
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/75 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Chương 138: Kịch chiến
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/85 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Mại Báo Tiểu Lang Quân
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                DarkHero
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle text-right'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                16 phút trước
                                            </span>
                                        </h2>
                                    </td>
                                </tr>
                                <tr className='hover:bg-black/5'>
                                    <td className='border-0 p-3 text-black/65 align-middle'>
                                        <span className='truncate'>Huyền Huyễn</span>
                                    </td>
                                    <td className='border-0 p-3 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm m-0 font-semibold'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Đạp Tinh
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/75 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Chương 4850: Phần thưởng ngươi
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/85 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Tùy Tán Phiêu Phong
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                BloodRose
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle text-right'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                18 phút trước
                                            </span>
                                        </h2>
                                    </td>
                                </tr>
                                <tr className='hover:bg-black/5'>
                                    <td className='border-0 p-3 text-black/65 align-middle'>
                                        <span className='truncate'>Huyền Huyễn</span>
                                    </td>
                                    <td className='border-0 p-3 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm m-0 font-semibold'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Võ Phu
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/75 w-1/4 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <a className='no-underline bg-transparent cursor-pointer'>
                                                <span className='hover:text-[#b78a28]'>
                                                    Chương 265: Chúng ta cuối cùng đem hóa thành bụi đất
                                                </span>
                                            </a>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/85 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                Bình Sinh Vị Tri Hàn
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                BloodRose
                                            </span>
                                        </h2>
                                    </td>
                                    <td className='border-0 p-3 text-black/55 align-middle text-right'>
                                        <h2 className='truncate max-w-sm'>
                                            <span>
                                                23 phút trước
                                            </span>
                                        </h2>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
            </div>
            <div className='home-ranking py-6'>
                <div className=' container py-2 px-4 mx-auto'>
                    <div className='grid grid-cols-3 -mx-4'>
                        <div className='mr-6'>
                            <section className='shadow-lg rounded-lg px-6 pt-4 pb-2 bg-[#fff] block'
                                onMouseEnter={() => setHoverTopRead(true)}
                                onMouseLeave={() => setHoverTopRead(false)}>
                                <div className='py-1 flex items-center'>
                                    <h2 className='font-semibold m-0 text-xl'>
                                        Đọc nhiều tuần
                                    </h2>
                                    {hoverTopRead && (
                                        <a href="#" className="text-[#b78a28] ml-auto no-underline bg-transparent mr-4 hover:text-black/55 translate-y-0.5">
                                            Xem tất cả
                                        </a>
                                    )}
                                </div>
                                <ul className='m-0 pl-0 list-none'>
                                    <li className=' flex items-center mt-4'>
                                        <div className='bottom-auto mb-14'>
                                            <i className="w-6 h-8 bg-[url('https://metruyencv.com/assets/images/icons/medal-1.svg')] bg-no-repeat bg-auto inline-block"></i>
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] items-center flex'>
                                            <div className='info py-4 ml-3'>
                                                <h2 className='text-sm truncate min-w-48 max-w-48 mb-1 font-semibold cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            Sư Huynh Của Ta Quá Mạnh
                                                        </span>
                                                    </a>
                                                </h2>
                                                <div className='text-green-600 mb-2 items-center flex'>
                                                    <span className='mr-2'>64,310</span>
                                                    <Glasses className='w-4 h-4 block align-middle' />
                                                </div>
                                                <div className='author text-sm flex items-center text-black/55'>
                                                    <PencilLine className='w-4 h-4 align-middle block mr-2' />
                                                    <span className='truncate max-w-40'>Khả Ninh</span>
                                                </div>
                                                <div className='author text-sm flex items-center truncate text-black/55'>
                                                    <Library className='w-4 h-4 align-middle block mr-2' />
                                                    <span className='truncate max-w-40'>Huyền Huyễn</span>
                                                </div>
                                            </div>
                                            <div className='thumb ml-24 pl-4'>
                                                <div className='book-cover'>
                                                    <a className=' z-10 inline-block shadow-xl border border-solid border-black/50 skew-y-12'>
                                                        <img
                                                            className='w-16 h-24 object-cover align-middle '
                                                            src='https://static.cdnno.com/poster/su-huynh-cua-ta-qua-manh/150.jpg?1656784900'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto pt-3'>
                                            <i className="w-6 h-8 bg-[url('https://metruyencv.com/assets/images/icons/medal-2.svg')] bg-no-repeat bg-auto inline-block"></i>
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            Vạn Cổ Thần Đế
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto pt-3'>
                                            <i className="w-6 h-8 bg-[url('https://metruyencv.com/assets/images/icons/medal-3.svg')] bg-no-repeat bg-auto inline-block"></i>
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            Bắt Đầu Đánh Dấu Hoang Cổ Thánh Thể
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            4
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 4
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            5
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 5
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            6
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'
                                                        >
                                                            truyện 6
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            7
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 7
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            8
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 8
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            9
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 9
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            10
                                        </div>
                                        <div className='content py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 10
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className='mx-2'>
                            <section className='shadow-lg rounded-lg px-6 pt-4 pb-2 bg-[#fff] block'
                                onMouseEnter={() => setHoverTopTrending(true)}
                                onMouseLeave={() => setHoverTopTrending(false)}>
                                <div className='py-1 flex items-center'>
                                    <h2 className='font-semibold m-0 text-xl'>
                                        Thịnh hành tuần
                                    </h2>
                                    {hoverTopTrending && (
                                        <a href="#" className="text-[#b78a28] ml-auto no-underline bg-transparent mr-4 hover:text-black/55 translate-y-0.5">
                                            Xem tất cả
                                        </a>
                                    )}
                                </div>
                                <ul className='m-0 pl-0 list-none'>
                                    <li className=' flex items-center mt-4'>
                                        <div className='bottom-auto mb-14'>
                                            <i className="w-6 h-8 bg-[url('https://metruyencv.com/assets/images/icons/medal-1.svg')] bg-no-repeat bg-auto inline-block"></i>
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] items-center flex'>
                                            <div className='info py-4 ml-3'>
                                                <h2 className='text-sm truncate min-w-52 max-w-52 mb-1 font-semibold cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            Kim Đan Là Hằng Tinh, Ngươi Quản Cái Này Gọi Tu Tiên?
                                                        </span>
                                                    </a>
                                                </h2>
                                                <div className='text-[#b78a32] mb-2 items-center flex'>
                                                    <span className='mr-2'>64,310</span>
                                                    <ArrowUpFromLine className='w-4 h-4 block align-middle' />
                                                </div>
                                                <div className='author text-sm flex items-center text-black/55'>
                                                    <PencilLine className='w-4 h-4 align-middle block mr-2' />
                                                    <span className='truncate max-w-40'>Tẩu Địa Hạc</span>
                                                </div>
                                                <div className='author text-sm flex items-center truncate text-black/55'>
                                                    <Library className='w-4 h-4 align-middle block mr-2' />
                                                    <span className='truncate max-w-40'>Huyền Huyễn</span>
                                                </div>
                                            </div>
                                            <div className='thumb ml-24 pl-4'>
                                                <div className='book-cover'>
                                                    <a className=' z-10 inline-block shadow-xl border border-solid border-black/50 skew-y-12'>
                                                        <img
                                                            className='w-16 h-24 object-cover align-middle '
                                                            src='https://static.cdnno.com/poster/kim-dan-la-hang-tinh-nguoi-quan-cai-nay-goi-tu-tien/150.jpg?1694148320'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto pt-3'>
                                            <i className="w-6 h-8 bg-[url('https://metruyencv.com/assets/images/icons/medal-2.svg')] bg-no-repeat bg-auto inline-block"></i>
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            Bắt Đầu Hỗn Độn Kiếm Thể, Chế Tạo Bất Hủ Tiên Tộc
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto pt-3'>
                                            <i className="w-6 h-8 bg-[url('https://metruyencv.com/assets/images/icons/medal-3.svg')] bg-no-repeat bg-auto inline-block"></i>
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            Khí Lực Của Ta Mỗi Ngày Gia Tăng 100 Cân
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            4
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 4
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            5
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 5
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            6
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'
                                                        >
                                                            truyện 6
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            7
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 7
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            8
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 8
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            9
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 9
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            10
                                        </div>
                                        <div className='content py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 10
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className='ml-6'>
                            <section className='shadow-lg rounded-lg px-6 pt-4 pb-2 bg-[#fff] block'
                                onMouseEnter={() => setHoverSuggestions(true)}
                                onMouseLeave={() => setHoverSuggestions(false)}>
                                <div className='py-1 flex items-center'>
                                    <h2 className='font-semibold m-0 text-xl'>
                                        Đề cử tuần
                                    </h2>
                                    {hoverSuggestions && (
                                        <a href="#" className="text-[#b78a28] ml-auto no-underline bg-transparent mr-4 hover:text-black/55 translate-y-0.5">
                                            Xem tất cả
                                        </a>
                                    )}
                                </div>
                                <ul className='m-0 pl-0 list-none'>
                                    <li className=' flex items-center mt-4'>
                                        <div className='bottom-auto mb-14'>
                                            <i className="w-6 h-8 bg-[url('https://metruyencv.com/assets/images/icons/medal-1.svg')] bg-no-repeat bg-auto inline-block"></i>
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] items-center flex'>
                                            <div className='info py-4 ml-3'>
                                                <h2 className='text-sm truncate min-w-52 max-w-52 mb-1 font-semibold cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            Xích Tâm Tuần Thiên
                                                        </span>
                                                    </a>
                                                </h2>
                                                <div className='text-[#b78a32] mb-2 items-center flex'>
                                                    <span className='mr-2'>195</span>
                                                    <Sparkles className='w-4 h-4 block align-middle' />
                                                </div>
                                                <div className='author text-sm flex items-center text-black/55'>
                                                    <PencilLine className='w-4 h-4 align-middle block mr-2' />
                                                    <span className='truncate max-w-40'>Tình Hà Dĩ Thậm</span>
                                                </div>
                                                <div className='author text-sm flex items-center truncate text-black/55'>
                                                    <Library className='w-4 h-4 align-middle block mr-2' />
                                                    <span className='truncate max-w-40'>Tiên Hiệp</span>
                                                </div>
                                            </div>
                                            <div className='thumb ml-24 pl-4'>
                                                <div className='book-cover'>
                                                    <a className=' z-10 inline-block shadow-xl border border-solid border-black/50 skew-y-12'>
                                                        <img
                                                            className='w-16 h-24 object-cover align-middle '
                                                            src='https://static.cdnno.com/poster/xich-tam-tuan-thien/150.jpg?1612524612'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto pt-3'>
                                            <i className="w-6 h-8 bg-[url('https://metruyencv.com/assets/images/icons/medal-2.svg')] bg-no-repeat bg-auto inline-block"></i>
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            Bắt Đầu Hỗn Độn Kiếm Thể, Chế Tạo Bất Hủ Tiên Tộc
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto pt-3'>
                                            <i className="w-6 h-8 bg-[url('https://metruyencv.com/assets/images/icons/medal-3.svg')] bg-no-repeat bg-auto inline-block"></i>
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            Khí Lực Của Ta Mỗi Ngày Gia Tăng 100 Cân
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            4
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 4
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            5
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 5
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            6
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'
                                                        >
                                                            truyện 6
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            7
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 7
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            8
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 8
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            9
                                        </div>
                                        <div className='content border-b border-solid border-[#eee] py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 9
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                    <li className=' flex items-center'>
                                        <div className='bottom-auto mx-2 font-semibold'>
                                            10
                                        </div>
                                        <div className='content py-1 flex items-center flex-1'>
                                            <div className='break-words py-2 ml-3 flex-1'>
                                                <h2 className='text-sm truncate min-w-48 max-w-80 font-normal cursor-pointer'>
                                                    <a className='no-underline bg-transparent'>
                                                        <span className='hover:text-[#b78a28]'>
                                                            truyện 10
                                                        </span>
                                                    </a>
                                                </h2>
                                            </div>
                                            <span className='text-black/85 ml-auto'>48,240</span>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container px-4 mx-auto'>
                <div className='review-layout'>
                    <div className="grid grid-cols-3 -mx-4 py-6">
                        <div className="ml-4 col-span-2"
                            onMouseEnter={() => setHoverHighestRated(true)}
                            onMouseLeave={() => setHoverHighestRated(false)}>
                            <section className="block">
                                <div className="title-row mb-6 items-center flex">
                                    <h2 className="text-xl font-semibold my-0">Đánh giá cao</h2>
                                    {hoverHighestRated && (
                                        <a href="#" className="text-[#b78a28] ml-auto no-underline bg-transparent mr-4 hover:text-black/55">
                                            Xem tất cả
                                        </a>
                                    )}
                                </div>
                                <div className='items-center flex'>
                                    <div className='grid grid-cols-2 w-full gap-4'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/thi-vuong-quat-khoi-bat-dau-don-uc-van-huyet-nhuc/150.jpg?1681049593"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Thi Vương Quật Khởi, Bắt Đầu Độn Ức Vạn Huyết Nhục</a>
                                                    </h2>
                                                    <div className='mb-2 items-center flex'>
                                                        <div className='rounded-2xl text-white px-2 py-1 mr-3 mx-0 bg-red-500/80'>
                                                            5.00
                                                        </div>
                                                        <div className='text-green-600'>3 đánh giá</div>
                                                    </div>
                                                    <div className='text-sm truncate text-black/50'>
                                                        【 tận thế + trùng sinh + độn vật tư + Zombie tiến hóa + bạo lực mỹ học 】Lâm Đông trùng sinh tại kinh khủng tận thế đêm trước, cũng thêm ra một cái không gian trữ vật.Nếu là người bình thường, khẳng định trữ hàng đại lượng vật tư, lương thực, nguồn nước, nhưng Lâm Đông lại mua đại lượng thịt tươi cùng máu tươi.Bởi vì. . . Hắn sắp biến thành một con Zombie!Huyết nhục chính là Zombie lực lượng nguồn suối, chỉ cần ăn thịt, liền có thể không ngừng tiến hóa.Một con có sung túc huyết nhục nuôi nấng Zombie, tốc độ phát triển khó có thể tưởng tượng kinh khủng.Muốn biến mạnh bao nhiêu, vậy phải xem Lâm Đông có thể ăn vào nhiều ít thịt, thế là, hắn bắt đầu trữ hàng ức vạn huyết nhục!
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Nhất Thiên Nhị Lưỡng Tửu</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Đô thị</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/tu-la-vu-than/150.jpg?1694906931"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Tu La Võ Thần</a>
                                                    </h2>
                                                    <div className='mb-2 items-center flex'>
                                                        <div className='rounded-2xl text-white px-2 py-1 mr-3 mx-0 bg-red-500/80'>
                                                            5.00
                                                        </div>
                                                        <div className='text-green-600'>3 đánh giá</div>
                                                    </div>
                                                    <div className='text-sm truncate text-black/50'>
                                                        Luận tiềm lực, không tính thiên tài, có thể Huyền công võ kỹ, đều có thể vô sự tự thông.Luận mị lực, thiên kim tiểu thư tính là gì, yêu nữ Thánh nữ, đều yêu ta muốn ngừng mà không được.Luận thực lực , mặc cho ngươi có ngàn vạn chí bảo, nhưng định không địch lại ta giới linh đại quân.Ta là ai ? Thiên hạ chúng sinh xem ta vì Tu La, lại không biết, ta lấy Tu La thành Võ Thần.Đẳng cấp: Linh Vũ, Nguyên Vũ, Huyền Vũ, Thiên Vũ, Vũ Quân, Vũ Vương, Vũ Đế, Vũ Tổ. . . .
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Thiện Lương Mật Phong</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='my-6 border-t border-solid border-[#eee] overflow-visible' />
                                <div className='items-center flex'>
                                    <div className='grid grid-cols-2 w-full gap-4'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/ta-co-mot-than-bi-dong-ky/150.jpg?1673424712"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Ta Có Một Thân Bị Động Kỹ</a>
                                                    </h2>
                                                    <div className='mb-2 items-center flex'>
                                                        <div className='rounded-2xl text-white px-2 py-1 mr-3 mx-0 bg-red-500/80'>
                                                            5.00
                                                        </div>
                                                        <div className='text-green-600'>3 đánh giá</div>
                                                    </div>
                                                    <div className='text-sm truncate text-black/50'>
                                                        Mạnh nhất trên thế giới kỹ năng, là cần chủ động thi triển kỹ năng sao?Sai! Là bị động kỹ!Cái gì là bị động kỹ?Bị động kỹ, là thuần phát chủ động kỹ, là không người sẽ đi phòng bị sát chiêu, là người chết mới có thể biết được cuối cùng át chủ bài!Có thể thông tục dễ hiểu chút?Phương pháp hô hấp, cường tráng, cảm giác ...Ha ha, liền cái này?Từ Tiểu Thụ một kiếm xé rách tinh hà, thế nhân phải sợ hãi ....Cái này mẹ nó vậy gọi bị động kỹ?Ân, kiếm thuật tinh thông .
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Ngao Dạ Cật Bình Quả</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/dinh-cap-ngo-tinh-tu-co-so-quyen-phap-bat-dau/150.jpg?1675594275"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Đỉnh Cấp Ngộ Tính: Từ Cơ Sở Quyền Pháp Bắt Đầu</a>
                                                    </h2>
                                                    <div className='mb-2 items-center flex'>
                                                        <div className='rounded-2xl text-white px-2 py-1 mr-3 mx-0 bg-red-500/80'>
                                                            5.00
                                                        </div>
                                                        <div className='text-green-600'>3 đánh giá</div>
                                                    </div>
                                                    <div className='text-sm truncate text-black/50'>
                                                        Xuyên qua thành Diệu Thủ viên học đồ Lục Trường Sinh, vốn định cố gắng làm hành y tế thế một đời thần y. Nhưng khi hắn bắt đầu luyện võ về sau, lại phát hiện mỗi luyện thành một môn võ công đến viên mãn, liền có thể tăng lên ngộ tính.Mà lại, ngộ tính tựa hồ có thể một mực tăng lên. Lục Trường Sinh muốn biết, ngộ tính hạn mức cao nhất đến cùng ở đâu?Thường thường không có gì lạ: So phế vật tốt hơn một chút một chút.Trung nhân chi tư: Chẳng khác người thường mà không biết.Rất có tiềm lực: Tiểu hà tài lộ tiêm tiêm giác.Tứ phương ca tụng: Phong mang tất lộ, duệ không thể đỡ!Rồng phượng trong loài người: Danh thiên tài truyền thiên hạ!Bách thế truyền tụng: Khai tông lập phái, xưng tông làm tổ!Thánh Nhân trời sinh: Vang dội cổ kim, vô xuất kỳ hữu!Vạn cổ vô nhất: Tiền vô cổ nhân hậu vô lai giả!Đỉnh cấp ngộ tính: Không thể nói, không thể xem, không thể nghe thấy!. . .
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Nguyệt Trung Âm</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='my-6 border-t border-solid border-[#eee] overflow-visible' />
                                <div className='items-center flex'>
                                    <div className='grid grid-cols-2 w-full gap-4'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/bat-diet-ba-the-quyet/150.jpg?1597055080"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Bất Diệt Bá Thể Quyết</a>
                                                    </h2>
                                                    <div className='mb-2 items-center flex'>
                                                        <div className='rounded-2xl text-white px-2 py-1 mr-3 mx-0 bg-red-500/80'>
                                                            5.00
                                                        </div>
                                                        <div className='text-green-600'>3 đánh giá</div>
                                                    </div>
                                                    <div className='text-sm truncate text-black/50'>
                                                        Hèn mọn thiếu niên, ngoài ý muốn thức tỉnh trí nhớ kiếp trước, tu Bất Diệt Bá Thể Quyết, có được hậu thiên giác tỉnh huyết mạch năng lực. Người khác nhất sinh chỉ có thể thức tỉnh một loại huyết mạch, mà hắn lại có thể thức tỉnh mười cái, trăm cái, còn có thể tùy ý dung hợp, cuối cùng đúc Tựu Bất Diệt Bá Thể! Ta lấy xác phàm đúc Bá Thể, một tay che trời trấn thế gian! Cửu Cực Thánh Thể? Hoang Thiên Cổ Thể? Thái Thượng Vương Thể? Mặc cho ngươi thể chất cả thế gian vô song, lại sao địch ta Bất Diệt Bá Thể!
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Bát Dị</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/thien-su-ta-co-mot-the-gioi-khac/150.jpg?1689645868"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Thiên Sư, Ta Có Một Thế Giới Khác</a>
                                                    </h2>
                                                    <div className='mb-2 items-center flex'>
                                                        <div className='rounded-2xl text-white px-2 py-1 mr-3 mx-0 bg-red-500/80'>
                                                            5.00
                                                        </div>
                                                        <div className='text-green-600'>3 đánh giá</div>
                                                    </div>
                                                    <div className='text-sm truncate text-black/50'>
                                                        Một trận cơ duyên,Lưỡng giới đi tới đi lui. Từ nay về sau, vinh hoa phú quý...
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Mông Diện Quái Khách</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Đô Thị</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='my-6 border-t border-solid border-[#eee] overflow-visible' />
                            </section>
                        </div>
                        <div className='col-span-1 mt-0.5 ml-8'>
                            <section className='block'>
                                <div className="title-row mb-6 items-center flex">
                                    <h2 className="text-xl font-semibold my-0">Mới đánh giá</h2>
                                    <a href="#" className="text-[#b78a28] ml-auto no-underline bg-transparent mr-4 hover:text-black/55">
                                        Xem tất cả
                                    </a>
                                </div>
                                <ul className='pl-0 list-none mt-0 mb-4'>
                                    <li className='px-6 py-4 mb-4 bg-[#f7f5f0] rounded-lg'>
                                        <div className='flex items-center'>
                                            <div className='avatar mr-2'>
                                                <a className='no-underline bg-transparent'>
                                                    <img
                                                        className='object-cover overflow-hidden mr-2 rounded-full align-middle'
                                                        src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/414970434_1154744595506765_87452087616537689_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=0rezGQ9byZYAX-hXyqX&_nc_oc=AQm0WKSJByHdDq8w7C4xotzLUufsnm3E0dLnv_8sxwMAkbXhqS6VqjpHZZCT8XCDssU&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfDJR3gU9HMdcLvtI4u54C7QlWDQUr5ruiSCrZVnDpjBvg&oe=65908C64'
                                                    />
                                                </a>
                                            </div>
                                            <div className='info pl-1 min-w-80 max-w-96'>
                                                <div className='name flex'>
                                                    <a className='no-underline bg-transparent mr-2'>
                                                        <div className='text-black'>Trần Hoàng</div>
                                                    </a>
                                                    <div className='text-black/50'>đánh giá</div>
                                                </div>
                                                <div className='book-title'>
                                                    <a className='no-underline bg-transparent'>
                                                        <div className='text-red-800 font-semibold truncate'>Trọng Sinh 2000, Thanh Mai Giáo Hoa 18 Tuổi</div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='rounded-2xl text-white px-2 py-1 mr-3 mx-0 bg-red-700'>
                                                5.00
                                            </div>
                                        </div>
                                        <div className='desc pt-1 mt-2 align-middle'>
                                            <p className='truncate'>
                                                bối cảnh : 4 sao. tình huống mở đầu quá kém. thiếu sức thuyết phục. thanh mai trúc mã ổn.nhân vật: 3 sao tạm được, không giống thương nhân lắm. giống xã hội đen tẩy trắng hơn.nội dung: 3 sao. 1v1 k tình địch k có cửa nên muốn viết tiếp phải viết nhiều thương nghiệp. mà viết thương nghiệp kém. với lại main lất át hết nhân vật phụ luôn. kiểu tác bố cục viết mấy k chương ấy. mà viết kiểu gì ấy. hay vừa viết vừa nghĩ. mạnh truyện k ổn lắm. nvp ít đất diễn.
                                            </p>
                                        </div>
                                    </li>
                                    <li className='px-6 py-4 mb-4 bg-[#f7f5f0] rounded-lg'>
                                        <div className='flex items-center'>
                                            <div className='avatar mr-2'>
                                                <a className='no-underline bg-transparent'>
                                                    <img
                                                        className='object-cover overflow-hidden mr-2 rounded-full align-middle'
                                                        src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/165782418_970946690105009_4400781197883721753_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=be3454&_nc_ohc=Pb0yGnbH-AwAX-upnYC&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfD4amWvbryBwNGnlnXqaPS-L9qOCnFLM857637ypQok7A&oe=65B36833'
                                                    />
                                                </a>
                                            </div>
                                            <div className='info pl-1 min-w-80 max-w-96'>
                                                <div className='name flex'>
                                                    <a className='no-underline bg-transparent mr-2'>
                                                        <div className='text-black'>Gia Bảo</div>
                                                    </a>
                                                    <div className='text-black/50'>đánh giá</div>
                                                </div>
                                                <div className='book-title'>
                                                    <a className='no-underline bg-transparent'>
                                                        <div className='text-red-800 font-semibold truncate'>Trọng Sinh 2000, Thanh Mai Giáo Hoa 18 Tuổi</div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='rounded-2xl text-white px-2 py-1 mr-3 mx-0 bg-red-700'>
                                                5.00
                                            </div>
                                        </div>
                                        <div className='desc pt-1 mt-2 align-middle'>
                                            <p className='truncate'>
                                                bối cảnh : 4 sao. tình huống mở đầu quá kém. thiếu sức thuyết phục. thanh mai trúc mã ổn.nhân vật: 3 sao tạm được, không giống thương nhân lắm. giống xã hội đen tẩy trắng hơn.nội dung: 3 sao. 1v1 k tình địch k có cửa nên muốn viết tiếp phải viết nhiều thương nghiệp. mà viết thương nghiệp kém. với lại main lất át hết nhân vật phụ luôn. kiểu tác bố cục viết mấy k chương ấy. mà viết kiểu gì ấy. hay vừa viết vừa nghĩ. mạnh truyện k ổn lắm. nvp ít đất diễn.
                                            </p>
                                        </div>
                                    </li>
                                    <li className='px-6 py-4 mb-4 bg-[#f7f5f0] rounded-lg'>
                                        <div className='flex items-center'>
                                            <div className='avatar mr-2'>
                                                <a className='no-underline bg-transparent'>
                                                    <img
                                                        className='object-cover overflow-hidden mr-2 rounded-full align-middle'
                                                        src='https://static.cdnno.com/user/default/50.jpg'
                                                    />
                                                </a>
                                            </div>
                                            <div className='info pl-1 min-w-80 max-w-96'>
                                                <div className='name flex'>
                                                    <a className='no-underline bg-transparent mr-2'>
                                                        <div className='text-black'>Bình Nguyễn</div>
                                                    </a>
                                                    <div className='text-black/50'>đánh giá</div>
                                                </div>
                                                <div className='book-title'>
                                                    <a className='no-underline bg-transparent'>
                                                        <div className='text-red-800 font-semibold truncate'>Trọng Sinh 2000, Thanh Mai Giáo Hoa 18 Tuổi</div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className='rounded-2xl text-white px-2 py-1 mr-3 mx-0 bg-red-700'>
                                                5.00
                                            </div>
                                        </div>
                                        <div className='desc pt-1 mt-2 align-middle'>
                                            <p className='truncate'>
                                                bối cảnh : 4 sao. tình huống mở đầu quá kém. thiếu sức thuyết phục. thanh mai trúc mã ổn.nhân vật: 3 sao tạm được, không giống thương nhân lắm. giống xã hội đen tẩy trắng hơn.nội dung: 3 sao. 1v1 k tình địch k có cửa nên muốn viết tiếp phải viết nhiều thương nghiệp. mà viết thương nghiệp kém. với lại main lất át hết nhân vật phụ luôn. kiểu tác bố cục viết mấy k chương ấy. mà viết kiểu gì ấy. hay vừa viết vừa nghĩ. mạnh truyện k ổn lắm. nvp ít đất diễn.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
                <div className='complete-layout'>
                    <div className="grid grid-cols-3 -mx-4 py-6">
                        <div className="ml-4 col-span-1">
                            <section className='block bg-[#f7f5f0] py-4 px-6 rounded-md'>
                                <div className="title-row mb-6 items-center flex">
                                    <h2 className="text-xl font-semibold my-0">Mới đăng</h2>
                                    <a href="#" className="text-[#b78a28] ml-auto no-underline bg-transparent hover:text-black/55">
                                        Xem tất cả
                                    </a>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='book-info flex flex-col items-center'>
                                        <div className="mb-2">
                                            <a className='bg-transparent no-underline'>
                                                <img
                                                    src="https://static.cdnno.com/poster/cau-tai-yeu-ma-loan-the-can-kinh-nghiem/300.jpg?1703674184"
                                                    alt="Ảnh bìa sách" className="w-32 rounded-md object-center align-middle shadow-md"
                                                />
                                            </a>
                                        </div>
                                        <div className="info text-center mt-4">
                                            <h2 className="text-lg font-semibold cursor-pointer hover:text-[#b78a28]">
                                                Cẩu Tại Yêu Ma Loạn Thế Can Kinh Nghiệm
                                            </h2>
                                            <div className='truncate break-words max-w-md'>
                                                <span className="text-sm text-gray-600">
                                                    【 ngươi xuyên việt rồi, tên là Cố Thịnh, là cái nông gia thiếu niên. 】 【 đó là cái yêu ma ẩn hiện bang phỉ hoành hành loạn thế vương triều, thân là hạ tầng ngươi, địa ngục cấp sinh tồn độ khó khăn. 】 【 ngươi quyết định cẩu ở. 】 【 ngươi đã thức tỉnh bảng độ thuần thục. 】 【 ngươi nhẹ nhàng thở ra , có thể bắt đầu lá gan. 】 【 ngươi đem chẻ củi lá gan đến viên mãn, thiết cốt đoạn cân không nói chơi. 】 【 ngươi đem tiễn thuật lá gan đến viên mãn, ngươi trở thành quán sắt xuyên dương thần tiễn thủ. 】 【 ngươi học được Thiết Thạch quyền, đạp vào võ giả con đường, lá gan đến viên mãn, quyền trọng vạn quân. 】 . . . 【 ngươi học được Trường Xuân Bất Lão ...
                                                </span>
                                            </div>
                                        </div>
                                        <div className='py-6 flex items-center'>
                                            <div className='flex items-center flex-grow'>
                                                <div className='text-black/55 flex items-center'>
                                                    <PencilLine className='w-4 h-4 mr-2 align-middle block' />
                                                    Minh Dạ Thính Tuyết
                                                </div>
                                            </div>
                                            <div className='ml-40'>
                                                <a className='no-underline'>
                                                    <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>
                                                        Huyền Huyễn
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className='mb-2 items-center flex'>
                                            <div className='rounded-full text-white px-12 py-2 bg-red-700 border-red-700 font-semibold cursor-pointer'>
                                                <a
                                                    href='#'
                                                    target='_blank'
                                                >
                                                    <div className='truncate'>Đọc ngay</div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className='col-span-2 mt-0.5 ml-8'>
                            <section className="block"
                                onMouseEnter={() => setHoverNewest(true)}
                                onMouseLeave={() => setHoverNewest(false)}                                    >
                                <div className="title-row mb-6 items-center flex">
                                    <h2 className="text-xl font-semibold my-0">Mới hoàn thành</h2>
                                    {hoverNewest && (
                                        <a href="#" className="text-[#b78a28] ml-auto no-underline bg-transparent mr-4 hover:text-black/55">
                                            Xem tất cả
                                        </a>
                                    )}
                                </div>
                                <div className='items-center flex'>
                                    <div className='grid grid-cols-2 w-full gap-4'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/thi-vuong-quat-khoi-bat-dau-don-uc-van-huyet-nhuc/150.jpg?1681049593"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Thi Vương Quật Khởi, Bắt Đầu Độn Ức Vạn Huyết Nhục</a>
                                                    </h2>
                                                    <div className='text-sm truncate text-black/50'>
                                                        【 tận thế + trùng sinh + độn vật tư + Zombie tiến hóa + bạo lực mỹ học 】Lâm Đông trùng sinh tại kinh khủng tận thế đêm trước, cũng thêm ra một cái không gian trữ vật.Nếu là người bình thường, khẳng định trữ hàng đại lượng vật tư, lương thực, nguồn nước, nhưng Lâm Đông lại mua đại lượng thịt tươi cùng máu tươi.Bởi vì. . . Hắn sắp biến thành một con Zombie!Huyết nhục chính là Zombie lực lượng nguồn suối, chỉ cần ăn thịt, liền có thể không ngừng tiến hóa.Một con có sung túc huyết nhục nuôi nấng Zombie, tốc độ phát triển khó có thể tưởng tượng kinh khủng.Muốn biến mạnh bao nhiêu, vậy phải xem Lâm Đông có thể ăn vào nhiều ít thịt, thế là, hắn bắt đầu trữ hàng ức vạn huyết nhục!
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Nhất Thiên Nhị Lưỡng Tửu</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Đô thị</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/tu-la-vu-than/150.jpg?1694906931"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Tu La Võ Thần</a>
                                                    </h2>
                                                    <div className='text-sm truncate text-black/50'>
                                                        Luận tiềm lực, không tính thiên tài, có thể Huyền công võ kỹ, đều có thể vô sự tự thông.Luận mị lực, thiên kim tiểu thư tính là gì, yêu nữ Thánh nữ, đều yêu ta muốn ngừng mà không được.Luận thực lực , mặc cho ngươi có ngàn vạn chí bảo, nhưng định không địch lại ta giới linh đại quân.Ta là ai ? Thiên hạ chúng sinh xem ta vì Tu La, lại không biết, ta lấy Tu La thành Võ Thần.Đẳng cấp: Linh Vũ, Nguyên Vũ, Huyền Vũ, Thiên Vũ, Vũ Quân, Vũ Vương, Vũ Đế, Vũ Tổ. . . .
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Thiện Lương Mật Phong</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='my-6 border-t border-solid border-[#eee] overflow-visible' />
                                <div className='items-center flex'>
                                    <div className='grid grid-cols-2 w-full gap-4'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/ta-co-mot-than-bi-dong-ky/150.jpg?1673424712"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Ta Có Một Thân Bị Động Kỹ</a>
                                                    </h2>
                                                    <div className='text-sm truncate text-black/50'>
                                                        Mạnh nhất trên thế giới kỹ năng, là cần chủ động thi triển kỹ năng sao?Sai! Là bị động kỹ!Cái gì là bị động kỹ?Bị động kỹ, là thuần phát chủ động kỹ, là không người sẽ đi phòng bị sát chiêu, là người chết mới có thể biết được cuối cùng át chủ bài!Có thể thông tục dễ hiểu chút?Phương pháp hô hấp, cường tráng, cảm giác ...Ha ha, liền cái này?Từ Tiểu Thụ một kiếm xé rách tinh hà, thế nhân phải sợ hãi ....Cái này mẹ nó vậy gọi bị động kỹ?Ân, kiếm thuật tinh thông .
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Ngao Dạ Cật Bình Quả</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/dinh-cap-ngo-tinh-tu-co-so-quyen-phap-bat-dau/150.jpg?1675594275"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Đỉnh Cấp Ngộ Tính: Từ Cơ Sở Quyền Pháp Bắt Đầu</a>
                                                    </h2>
                                                    <div className='text-sm truncate text-black/50'>
                                                        Xuyên qua thành Diệu Thủ viên học đồ Lục Trường Sinh, vốn định cố gắng làm hành y tế thế một đời thần y. Nhưng khi hắn bắt đầu luyện võ về sau, lại phát hiện mỗi luyện thành một môn võ công đến viên mãn, liền có thể tăng lên ngộ tính.Mà lại, ngộ tính tựa hồ có thể một mực tăng lên. Lục Trường Sinh muốn biết, ngộ tính hạn mức cao nhất đến cùng ở đâu?Thường thường không có gì lạ: So phế vật tốt hơn một chút một chút.Trung nhân chi tư: Chẳng khác người thường mà không biết.Rất có tiềm lực: Tiểu hà tài lộ tiêm tiêm giác.Tứ phương ca tụng: Phong mang tất lộ, duệ không thể đỡ!Rồng phượng trong loài người: Danh thiên tài truyền thiên hạ!Bách thế truyền tụng: Khai tông lập phái, xưng tông làm tổ!Thánh Nhân trời sinh: Vang dội cổ kim, vô xuất kỳ hữu!Vạn cổ vô nhất: Tiền vô cổ nhân hậu vô lai giả!Đỉnh cấp ngộ tính: Không thể nói, không thể xem, không thể nghe thấy!. . .
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Nguyệt Trung Âm</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='my-6 border-t border-solid border-[#eee] overflow-visible' />
                                <div className='items-center flex'>
                                    <div className='grid grid-cols-2 w-full gap-4'>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/bat-diet-ba-the-quyet/150.jpg?1597055080"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Bất Diệt Bá Thể Quyết</a>
                                                    </h2>
                                                    <div className='text-sm truncate text-black/50'>
                                                        Hèn mọn thiếu niên, ngoài ý muốn thức tỉnh trí nhớ kiếp trước, tu Bất Diệt Bá Thể Quyết, có được hậu thiên giác tỉnh huyết mạch năng lực. Người khác nhất sinh chỉ có thể thức tỉnh một loại huyết mạch, mà hắn lại có thể thức tỉnh mười cái, trăm cái, còn có thể tùy ý dung hợp, cuối cùng đúc Tựu Bất Diệt Bá Thể! Ta lấy xác phàm đúc Bá Thể, một tay che trời trấn thế gian! Cửu Cực Thánh Thể? Hoang Thiên Cổ Thể? Thái Thượng Vương Thể? Mặc cho ngươi thể chất cả thế gian vô song, lại sao địch ta Bất Diệt Bá Thể!
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Bát Dị</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Huyền Huyễn</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex items-start pl-2'>
                                                <a className='w-fit inline-block overflow-hidden  mr-4 no-underline bg-transparent shadow-lg cursor-pointer'>
                                                    <img
                                                        className="w-40 h-40 object-cover align-middle mr-2"
                                                        src="https://static.cdnno.com/poster/thien-su-ta-co-mot-the-gioi-khac/150.jpg?1689645868"
                                                        alt="Book Cover"
                                                    />
                                                </a>
                                                <div className='break-words truncate w-full'>
                                                    <h2 className='text-balance mb-2 font-semibold'>
                                                        <a className='block truncate no-underline hover:text-[#b78a28] cursor-pointer'>Thiên Sư, Ta Có Một Thế Giới Khác</a>
                                                    </h2>
                                                    <div className='text-sm truncate text-black/50'>
                                                        Một trận cơ duyên,Lưỡng giới đi tới đi lui. Từ nay về sau, vinh hoa phú quý...
                                                    </div>
                                                    <div className='py-1 mt-2 flex items-center'>
                                                        <div className='flex items-center text-black/75'>
                                                            <PencilLine className='w-4 h-4 block align-middle mr-2' />
                                                            <span className='truncate max-w-52'>Mông Diện Quái Khách</span>
                                                        </div>
                                                        <a className='ml-auto no-underline'>
                                                            <span className='truncate text-[#b78a28] px-2 inline-block border-[#b78a28] border border-solid font-normal cursor-pointer'>Đô Thị</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage