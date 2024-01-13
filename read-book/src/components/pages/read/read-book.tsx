import { useState } from "react";
import { ALargeSmall, AlertCircle, AlignJustify, ArrowLeft, ArrowRight, Book, BookHeart, Bookmark, CaseSensitive, CaseUpper, Clock, Flower2, Gift, Heart, MessageCircleMore, Palette, Settings, Star, } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import {
    Drawer,
    // DrawerClose,
    DrawerContent,
    // DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";


interface textFont {
    text: string | "text-base" | "text-lg" | "text-xl",
    fontSize: number | 16 | 18 | 20
}

const textFont: textFont[] = [
    { text: "text-base", fontSize: 16 },
    { text: "text-lg", fontSize: 18 },
    { text: "text-xl", fontSize: 20 },
    { text: "text-2xl", fontSize: 24 },
    { text: "text-3xl", fontSize: 30 }
]

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
    textCounter?: number,
    reaction?: number,
    currentChapter?: number,
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
        textCounter: 100,
        reaction: 100,
        currentChapter: 1,
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
        textCounter: 100,
        currentChapter: 1,
        reaction: 100,

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
        reaction: 100,
        currentChapter: 1,
        textCounter: 100,

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
        reaction: 100,
        currentChapter: 1,
        textCounter: 100,

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
        reaction: 100,
        currentChapter: 1,
        textCounter: 100,

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
        reaction: 100,
        currentChapter: 1,
        textCounter: 100,
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
        reaction: 100,
        currentChapter: 1,
        textCounter: 100,
    }
]


const ReadBook = () => {

    const [fontSize, setFontSize] = useState<textFont>(textFont[0]);




    const [font, setFont] = useState('font-sans');
    const handleFontChange = () => {
        // Khi người dùng nhấn vào button, chuyển đổi font chữ
        setFont(font === 'font-sans' ? 'font-serif' : 'font-sans');
    };

    const [text, setText] = useState(16)

    function onClick(adjustment: number) {
        const currentIndex = textFont.findIndex((item) => item.text === fontSize.text);
        const newIndex = Math.max(0, Math.min(textFont.length - 1, currentIndex + adjustment));
        setText(textFont[newIndex].fontSize);
        setFontSize(textFont[newIndex]);
    }

    return (
        <div className="flex flex-col gap-2">
            <div className="chapter flex justify-between items-center py-2">
                <div className="pre-chapter flex items-center text-black/50">
                    <ArrowLeft className="w-4 h-4 align-middle block mr-2" />
                    <p className="font-medium text-base">Chương trước</p>
                </div>
                <div className="last-chapter flex items-center">
                    <p className="font-medium text-base mr-2">Chương sau</p>
                    <ArrowRight className="w-4 h-4 align-middle block" />
                </div>
            </div>
            <div className="divider border-t border-solid border-t-black/25 py-2"></div>
            <div className="info space-y-3">
                <div className="chapter-title text-2xl text-black/75 font-normal">
                    <p>{DemoData[0].newChapter}</p>
                </div>
                <div className="book-title text-sm text-black/65 font-normal flex items-center">
                    <Book className="w-4 h-4 block align-middle mr-2" />
                    <p>{DemoData[0].title}</p>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <div className="author text-sm text-black/65 flex items-center">
                        <BookHeart className="w-4 h-4 block align-middle mr-2" />
                        <p className="truncate max-w-24">{DemoData[0].author}</p>
                    </div>
                    <div className="text-counter text-center text-black/65 flex justify-center items-center">
                        <ALargeSmall className="w-4 h-4 block align-middle mr-2" />
                        <p className="truncate max-w-24">12 chữ</p>
                    </div>
                    <div className="reaction text-right text-black/65 flex items-center justify-center">
                        <Heart className="w-4 h-4 block align-middle mr-2" />
                        <p className="truncate max-w-24">{DemoData[0].reaction} cảm xúc</p>
                    </div>
                </div>
                <div className="timeline-update flex items-center text-black/65">
                    <Clock className="w-4 h-4 block align-middle mr-2" />
                    <p>{DemoData[0].updateDate}</p>
                </div>
            </div>
            <div className="pt-6 flex-wrap flex items-center justify-start max-w-prose pb-10">
                <p className={`${fontSize.text} ${font} text-foreground`}>
                    {DemoData[0].describe}
                </p>
            </div>
            <div className="divider border-t-2 border-solid border-black/30"></div>
            <div className="suggest-books pt-6">
                <p>
                    Đọc thêm những câu chuyện hấp dãn khác&nbsp;
                    <Link to={"/"} className="text-blue-500 hover:underline">tại đây</Link>
                </p>
            </div>
            <div>
                <div className="p-4 px-28">
                    <div className="flex items-center justify-between">
                        <div className="start">
                            <Star className="w-6 h-6 block align-middle" />
                        </div>
                        <div className="flower">
                            <Flower2 className="w-6 h-6 block align-middle" />
                        </div>
                        <div className="gift">
                            <Gift className="w-6 h-6 block align-middle" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer border-t border-solid border-black/25">
                <div className="flex items-center justify-between p-4">
                    <div className="pre-chapter flex items-center text-black/50">
                        <ArrowLeft className="w-4 h-4 align-middle block mr-2" />
                        <p className="font-medium text-base">Chương trước</p>
                    </div>
                    <div className="alert flex items-center">
                        <AlertCircle className="w-4 h-4 align-middle block mr-2" />
                    </div>
                    <div className="last-chapter flex items-center">
                        <p className="font-medium text-base mr-2">Chương sau</p>
                        <ArrowRight className="w-4 h-4 align-middle block" />
                    </div>
                </div>
            </div>
            <div className="img">
                <AspectRatio ratio={16 / 9}>
                    <img className="h-auto w-full object-cover object-center"
                        src="https://static.cdnno.com/storage/topbox/d38e53dc47be5859d93c263e8fe6db99.jpg"
                        alt="background" />
                </AspectRatio>
            </div>
            <div className="sticky bottom-0 flex items-center justify-between bg-gray-200/60 p-2 px-4 rounded-lg">
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="list-chapter">
                            <AlignJustify className="w-6 h-6 block align-middle" />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Danh sách chương</DialogTitle>
                        </DialogHeader>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Chương</TableHead>
                                    <TableHead className="text-left">Tên chương</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {DemoData.map((data, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-normal">Chương {data.currentChapter}</TableCell>
                                        <TableCell className="font-normal">
                                            {data.newChapter}
                                            <span className="text-black/50 ml-2 text-xs italic">{data.updateDate}</span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </DialogContent>
                </Dialog>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="settings">
                            <Settings className="w-6 h-6 block align-middle" />
                        </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle className="text-left">Cài đặt</DialogTitle>
                        </DialogHeader>
                        <div className="pt-3 space-y-5">
                            <div className="grid grid-cols-3">
                                <div className="flex justify-start">
                                    <Palette className="w-4 h-4 block align-middle mr-2 translate-y-1" />
                                    <p className="font-normal">Màu nền</p>
                                </div>
                                <div className="flex flex-wrap items-center justify-between col-span-2 mx-8">
                                    <div className="rounded-full border-2 border-solid border-red-200 bg-red-100 w-10 h-10"></div>
                                    <div className="rounded-full border-2 border-solid border-yellow-200 bg-yellow-100 w-10 h-10"></div>
                                    <div className="rounded-full border-2 border-solid border-green-200 bg-green-100 w-10 h-10"></div>
                                    <div className="w-full flex justify-between mt-3">
                                        <div className="rounded-full border-2 border-solid border-blue-200 bg-blue-100 w-10 h-10"></div>
                                        <div className="rounded-full border-2 border-solid border-yellow-600/45 bg-yellow-600/25 w-10 h-10"></div>
                                        <div className="rounded-full border-2 border-solid border-purple-200 bg-purple-100 w-10 h-10"></div>
                                    </div>
                                    <div className="w-full flex items-center mt-3">
                                        <div className="rounded-full border-2 border-solid border-black bg-black w-10 h-10"></div>
                                        <div className="rounded-full border-2 border-solid border-gray-200 bg-gray-100 w-10 h-10 ml-6"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 items-center">
                                <div className="flex justify-start">
                                    <CaseUpper className="w-4 h-4 block align-middle mr-2 translate-y-1" />
                                    <p className="font-normal">Font chữ</p>
                                </div>
                                <div className="flex items-center justify-center col-span-2">
                                    <Select onValueChange={handleFontChange}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Chọn font chữ" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="palatino">Palatino Linotype</SelectItem>
                                                <SelectItem value="roboto">Roboto</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 items-center">
                                <div className="flex justify-start">
                                    <CaseSensitive className="w-4 h-4 block align-middle mr-2 translate-y-1" />
                                    <p className="font-normal">Cỡ chữ</p>
                                </div>
                                <div className="flex items-center justify-center col-span-2">
                                    <Drawer>
                                        <DrawerTrigger asChild>
                                            <Button variant="outline">{`${text}px`}</Button>
                                        </DrawerTrigger>
                                        <DrawerContent>
                                            <div className="mx-auto w-full max-w-sm pb-4">
                                                <DrawerHeader>
                                                    <DrawerTitle>Cỡ chữ</DrawerTitle>
                                                </DrawerHeader>
                                                <div className="p-4 pb-0">
                                                    <div className="flex items-center justify-center space-x-2">
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-8 w-8 shrink-0 rounded-full"
                                                            onClick={() => onClick(-1)}
                                                            disabled={text <= textFont[0].fontSize}
                                                        >
                                                            <MinusIcon className="h-4 w-4" />
                                                            <span className="sr-only">Giảm</span>
                                                        </Button>
                                                        <div className="flex-1 text-center">
                                                            <div className="text-7xl font-bold tracking-tighter">
                                                                {text}
                                                            </div>
                                                        </div>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-8 w-8 shrink-0 rounded-full"
                                                            onClick={() => onClick(1)}
                                                            disabled={text >= textFont[textFont.length - 1].fontSize}
                                                        >
                                                            <PlusIcon className="h-4 w-4" />
                                                            <span className="sr-only">Tăng</span>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <DrawerFooter>
                                                <DrawerClose asChild>
                                                    <Button onClick={handleFontSizeChange}>Xác nhận</Button>
                                                </DrawerClose>
                                                <DrawerClose asChild>
                                                    <Button variant="outline">Hủy</Button>
                                                </DrawerClose>
                                            </DrawerFooter> */}
                                        </DrawerContent>
                                    </Drawer>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
                <div className="like">
                    <Heart className="w-6 h-6 block align-middle" />
                </div>
                <div className="bookmark">
                    <Bookmark className="w-6 h-6 block align-middle" />
                </div>
                <div className="list-chapter">
                    <MessageCircleMore className="w-6 h-6 block align-middle" />
                </div>
            </div>
        </div>
    );
}

export default ReadBook;