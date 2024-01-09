import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ChevronRight, Eye, Star, Tags, TrendingUp, User, File, AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

interface Categories {
    name: string,
}

interface Data {
    title: string,
    describe: string,
    views: number,
    likes: number,
    comments: number,
    author: string,
    newChapter?: string,
    img?: string,
    status?: string,
    categories?: Categories[],
    follower?: number,
    updateDate?: string,
    topRated?: number,
}

const DemoData: Data[] = [
    {
        title: "The Lord of the Rings",
        describe: "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.",
        views: 100,
        likes: 100,
        comments: 100,
        author: "J. R. R. Tolkien",
        newChapter: "Chapter 1: A Long-expected Party",
        status: "Đang cập nhật",
        categories: [{
            name: "Hành động",
        }, {
            name: "Phiêu lưu",
        }, {
            name: "Kì thú",
        }, {
            name: "Chuyển sinh"
        }, {
            name: "Phép thuật"
        }, {
            name: "Nổ hũ"
        }, {
            name: "Hyperroll"
        }, {
            name: "Exodia"
        }, {
            name: "Eco"
        }, {
            name: "5 tiền 3 sao"
        }],
        follower: 100,
        updateDate: "2021-08-08 01:05:15",
        topRated: 1,
    },
    {
        title: "Harry Potter",
        describe: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
        views: 100,
        likes: 100,
        comments: 100,
        author: "J. K. Rowling",
        img: "https://th.bing.com/th/id/R.92044013da12968d0b8bdcc6ae3d18c9?rik=wG6rgHrxhL1voA&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fytxnHu3wlTcbmCuLLM2Z8Zs1Dtz.jpg&ehk=38SObxUi0o%2fbhpIyexmaXiDb02h7dtLviQS6NpSYiLM%3d&risl=&pid=ImgRaw&r=0",
        updateDate: "2021-08-08 01:05:15",
        topRated: 2,
        newChapter: "Chapter 1: A Long-expected Party",


    },
    {
        title: "The Little Prince",
        describe: "The Little Prince is a novella by French aristocrat, writer, and aviator Antoine de Saint-Exupéry. It was first published in English and French in the US by Reynal & Hitchcock in April 1943, and posthumously in France following the liberation of France as Saint-Exupéry's works had been banned by the Vichy Regime.",
        views: 100,
        likes: 100,
        comments: 100,
        author: "Antoine de Saint-Exupéry",
        updateDate: "2021-08-08 01:05:15",
        topRated: 3,
        newChapter: "Chapter 1: A Long-expected Party",

    },
    {
        title: "The Hobbit",
        describe: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
        views: 100,
        likes: 100,
        comments: 100,
        author: "J. R. R. Tolkien",
        newChapter: "Chapter 8: A Long-expected Party",
        updateDate: "2021-08-08 01:05:15",
        topRated: 4,

    },
    {
        title: "Alice's Adventures in Wonderland",
        describe: "The Alice's Adventures in Wonderland, ",
        views: 100,
        likes: 100,
        comments: 100,
        author: "Lewis Carroll",
        updateDate: "2021-08-08 01:05:15",
        topRated: 5,
        newChapter: "Chapter 1: A Long-expected Party",
    },
    {
        title: "Dream of the Red Chamber",
        describe: "Dream of the Red Chamber, also called The Story of the Stone, composed by Cao Xueqin, is one of China's Four Great Classical Novels. It was written some time in the middle of the 18th century during the Qing dynasty.",
        views: 100,
        likes: 100,
        comments: 100,
        author: "Cao Xueqin",
        updateDate: "2021-08-08 01:05:15",
        topRated: 6,
        newChapter: "Chapter 1: A Long-expected Party",
    },
    {
        title: "And Then There Were None",
        describe: "",
        views: 100,
        likes: 100,
        comments: 100,
        author: "Agatha Christie",
        updateDate: "2021-08-08 01:05:15",
        topRated: 7,
        newChapter: "Chapter 1: A Long-expected Party",
    }
]

const Details = () => {
    return (
        <div>
            <div className="flex flex-col gap-y-2">
                <div className="breadcrums pb-2">
                    <div className="flex gap-2 align-middle">
                        <Link to={"/"} className="text-blue-500 hover:underline">Trang chủ</Link>
                        <><ChevronRight className="w-4 h-4 translate-y-1.5" /></>
                        <Link to={"/"} className="text-blue-500 hover:underline">Thể loại</Link>
                        <><ChevronRight className="w-4 h-4 translate-y-1.5" /></>
                        {/* TODO: FETCH API  */}
                        <Link to={"/"} className="text-blue-500 hover:underline">{DemoData[0].title}</Link>
                    </div>
                </div>
                <div className="info flex flex-col items-center gap-3 ">
                    <div className="title uppercase text-2xl font-normal font-sans">{DemoData[0].title}</div>
                    <div className="update text-sm italic font-normal font-sans">Cập nhật lúc: 2024-01-08 01:05:15</div>
                    <div className="w-full grid grid-cols-1 justify-between items-center ">
                        <AspectRatio ratio={2 / 3}>
                            <img src={DemoData[1].img} alt="Books cover" className="w-full h-full object-cover rounded-md" />
                        </AspectRatio>
                    </div>
                </div>
                <div className="detail flex flex-col space-y-2">
                    <div className="grid grid-cols-3 justify-start">
                        <div className="flex items-center">
                            <User className="w-4 h-4 block align-middle mr-1" />
                            <p className="author">Tác giả: </p>
                        </div>
                        <Link to={"/"} className="author font-semibold">{DemoData[0].author}</Link>
                    </div>
                    <div className="grid grid-cols-3 justify-start">
                        <div className="flex items-center">
                            <TrendingUp className="w-4 h-4 block align-middle mr-1" />
                            <p className="status">Tình trạng:</p>
                        </div>
                        <Link to={"/"} className="status font-semibold">{DemoData[0].status}</Link>
                    </div>
                    <div className="grid grid-cols-3 justify-start">
                        <div className="flex items-start">
                            <Tags className="w-4 h-4 block align-middle mr-1 translate-y-1" />
                            <p className="categories">Thể loại:</p>
                        </div>
                        <div className="categories col-span-2 flex gap-2 w-full flex-wrap">
                            {DemoData[0].categories?.map((category, index) => (
                                <Link to={"/"} key={index} className="category text-blue-500 hover:underline font-semibold font-sans">
                                    {category.name}
                                    <span className="text-foreground">
                                        {index !== DemoData[0].categories!.length - 1 && <> -</>}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-3 justify-start">
                        <div className="flex items-center">
                            <Eye className="w-4 h-4 block align-middle mr-1" />
                            <p className="views">Lượt xem:</p>
                        </div>
                        <div className="views font-semibold col-span-2">{DemoData[0].views}</div>
                    </div>
                    <div className="grid grid-cols-3 justify-start">
                        <Link to={"/"} className="title text-blue-500 hover:underline">{DemoData[0].title}</Link>
                        <div className="ranking col-span-2">Xếp hạng: 4/5 - 782 Lượt đánh giá.</div>
                    </div>
                    <div className="grid grid-cols-3 justify-start py-2">
                        <p className="rating">Đánh giá:</p>
                        <div className="col-span-2 items-center flex">
                            <Star className="w-4 h-4 block align-middle mr-2" />
                            <Star className="w-4 h-4 block align-middle mr-2" />
                            <Star className="w-4 h-4 block align-middle mr-2" />
                            <Star className="w-4 h-4 block align-middle mr-2" />
                            <Star className="w-4 h-4 block align-middle mr-2" />
                        </div>
                    </div>
                    <div className="follower flex items-center">
                        <p className="font-normal"><span className="font-semibold">{DemoData[0].follower}</span> Người theo dõi</p>
                    </div>
                    <div className="chapter flex items-center gap-2">
                        <Button>Đọc từ đầu</Button>
                        <Button>Đọc mới nhất</Button>
                    </div>
                </div>
                <div className="pt-4">
                    <div className="flex items-baseline justify-start">
                        <div className="title flex items-center text-blue-400">
                            <File className="w-6 h-6 block align-middle mr-1.5" />
                            <p className="font-semibold">Nội dung</p>
                        </div>
                    </div>
                    <div className="mt-2 border border-t border-solid border-blue-400 w-full"></div>
                    <div className="content flex flex-wrap font-normal pt-2">
                        <p>
                            {DemoData[0].describe}
                        </p>
                    </div>
                </div>
                <div className="pt-4">
                    <div className="flex items-baseline justify-start">
                        <div className="title flex items-center text-blue-400">
                            <AlignJustify className="w-6 h-6 block align-middle mr-1.5" />
                            <p className="font-semibold">Danh sách chương</p>
                        </div>
                    </div>
                    <div className="mt-2 border border-t border-solid border-blue-400 w-full"></div>
                    <div className="content flex flex-wrap font-normal pt-2">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Số chương</TableHead>
                                    <TableHead className="text-right">Cập nhật</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {DemoData.map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-normal hover:text-blue-500">{data.newChapter}</TableCell>
                                        <TableCell className="text-right italic">{data.updateDate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
                <div className="pt-4">
                    <Tabs defaultValue="month" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="month">Top Tháng</TabsTrigger>
                            <TabsTrigger value="weekend">Top Tuần</TabsTrigger>
                            <TabsTrigger value="day">Top Ngày</TabsTrigger>
                        </TabsList>
                        <TabsContent value="month">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-10">Vị trí</TableHead>
                                        <TableHead>Hình ảnh</TableHead>
                                        <TableHead>Tên truyện</TableHead>
                                        <TableHead>Tập</TableHead>
                                        <TableHead className="text-right">Lượt xem</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {DemoData.map((data, index) => (
                                        <TableRow key={index}>
                                            <TableCell className={`font-medium ${index === 0 ? 'text-blue-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-red-500' : ''}`}
                                            >
                                                {data.topRated}
                                            </TableCell>
                                            <TableCell className="font-normal">
                                                <img
                                                    className="object-cover cursor-pointer"
                                                    src={data.img}
                                                    alt="Books cover"
                                                />
                                            </TableCell>
                                            <TableCell className="font-normal hover:text-blue-500">{data.title}</TableCell>
                                            <TableCell className="font-normal hover:text-blue-500">{data.newChapter}</TableCell>
                                            <TableCell className="text-right italic">{data.views}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>
                        <TabsContent value="weekend">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-10">Vị trí</TableHead>
                                        <TableHead>Hình ảnh</TableHead>
                                        <TableHead>Tên truyện</TableHead>
                                        <TableHead>Tập</TableHead>
                                        <TableHead className="text-right">Lượt xem</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {DemoData.map((data, index) => (
                                        <TableRow key={index}>
                                            <TableCell className={`font-medium ${index === 0 ? 'text-blue-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-red-500' : ''}`}
                                            >
                                                {data.topRated}
                                            </TableCell>
                                            <TableCell className="font-normal">
                                                <img
                                                    className="object-cover cursor-pointer"
                                                    src={data.img}
                                                    alt="Books cover"
                                                />
                                            </TableCell>
                                            <TableCell className="font-normal hover:text-blue-500">{data.title}</TableCell>
                                            <TableCell className="font-normal hover:text-blue-500">{data.newChapter}</TableCell>
                                            <TableCell className="text-right italic">{data.views}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>
                        <TabsContent value="day">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-10">Vị trí</TableHead>
                                        <TableHead>Hình ảnh</TableHead>
                                        <TableHead>Tên truyện</TableHead>
                                        <TableHead>Tập</TableHead>
                                        <TableHead className="text-right">Lượt xem</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {DemoData.map((data, index) => (
                                        <TableRow key={index}>
                                            <TableCell className={`font-medium ${index === 0 ? 'text-blue-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-red-500' : ''}`}
                                            >
                                                {data.topRated}
                                            </TableCell>
                                            <TableCell className="font-normal">
                                                <img
                                                    className="object-cover cursor-pointer"
                                                    src={data.img}
                                                    alt="Books cover"
                                                />
                                            </TableCell>
                                            <TableCell className="font-normal hover:text-blue-500">{data.title}</TableCell>
                                            <TableCell className="font-normal hover:text-blue-500">{data.newChapter}</TableCell>
                                            <TableCell className="text-right italic">{data.views}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TabsContent>
                    </Tabs>
                </div>
                
            </div>
        </div >
    );
}

export default Details;