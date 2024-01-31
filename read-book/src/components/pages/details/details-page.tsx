import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Star, File, AlignJustify, ThumbsUp, Reply, Flag, Search, Newspaper, User2, Bookmark, Flower2, SendHorizontal, Clock } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import {
    CardContent,
} from "@/components/ui/card"

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import homeData from "./detailsdata.json"

type SliderProps = React.ComponentProps<typeof Slider>

interface BookDetail {
    title: string,
    author: string,
    published: number,
    pages: number,
    desc: string
    categories: Categories[],
    chapters: ChapterBook[],
    suggest: string,
    arhived: number,
}

interface Fans {
    reviewTotal: number,
    avarageRating: number,
    rating: UserRating[],
    user: UserRanking[],
}

interface UserRating {
    character: number,
    story: number,
    enviroment: number,
    translated: number,
}

interface UserRanking {
    userName: string,
    avatar: string,
    likePoints: number,
    role: string,
}


interface ChapterBook {
    number: number,
    title: string,
    updateTime: string,
}

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
    chapter?: number,
    archive?: number,
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
        chapter: 100,
        archive: 100,
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

const Details = ({ className, ...props }: SliderProps) => {
    const book: BookDetail = homeData.book;
    const fans: Fans = homeData.fans;
    return (
        <div>
            <div className="mobile space-y-4">
                <div className="space-y-4 bg-white pb-8">
                    <div className="books-info mx-4">
                        <div className="pt-10 flex flex-col justify-center items-center gap-4">
                            <div>
                                <img
                                    className="h-full w-32 object-cover"
                                    src={DemoData[1].img}
                                    alt="Books Cover"
                                />
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                                <Flag className="w-4 h-4 block align-middle mr-2" />
                                <p>Báo xấu</p>
                            </div>
                            <div className="title">
                                <p className="capitalize text-black font-semibold">
                                    {DemoData[0].title}
                                </p>
                            </div>
                            <div className="author flex items-center text-gray-500 text-sm">
                                <User2 className="w-4 h-4 block align-middle mr-2" />
                                <p className="font-semibold">
                                    {DemoData[0].author}
                                </p>
                            </div>
                            <div className="ranking flex items-center gap-2 text-sm">
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 block align-middle" />
                                    <Star className="w-4 h-4 block align-middle" />
                                    <Star className="w-4 h-4 block align-middle" />
                                    <Star className="w-4 h-4 block align-middle" />
                                    <Star className="w-4 h-4 block align-middle" />
                                </div>
                                <p className="font-semibold">
                                    4.96/5<span className="text-black/55 font-normal"> (16 đánh giá)</span>
                                </p>
                            </div>
                            <div className="reading w-full">
                                <Button className="w-full rounded-full">
                                    <Search className="w-4 h-4 block align-middle mr-2" />
                                    <Link to={"/truyen"}>Đọc truyện</Link>
                                </Button>
                            </div>
                            <div className="flex items-center gap-2 w-full">
                                <Button variant="outline" className="w-full rounded-full">
                                    <Bookmark className="w-4 h-4 block align-middle mr-2" />
                                    <Link to={"/truyen"}>Đánh dấu</Link>
                                </Button>
                                <Button variant="secondary" className="w-full rounded-full">
                                    <Flower2 className="w-4 h-4 block align-middle mr-2" />
                                    <Link to={"/truyen"}>Đề cử</Link>
                                </Button>
                            </div>
                            <div className="w-full">
                                <div className="grid grid-cols-4 items-center gap-2 w-full text-center">
                                    <div className="chapter">
                                        <div>
                                            <p className="font-semibold">
                                                {DemoData[0].chapter}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm">
                                                Chương
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chapter">
                                        <div>
                                            <p className="font-semibold">
                                                {DemoData[0].chapter}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm">
                                                Chương/tuần
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chapter">
                                        <div>
                                            <p className="font-semibold">
                                                {DemoData[0].views}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm">
                                                Lượt đọc
                                            </p>
                                        </div>
                                    </div>
                                    <div className="chapter">
                                        <div>
                                            <p className="font-semibold">
                                                {DemoData[0].archive}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm">
                                                Cất giữ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tags flex flex-wrap justify-center items-center gap-2">
                                {book.categories.map((data, index) =>
                                (
                                    <Button key={index} variant={"outline"} className="text-green-700">
                                        <p className="text-sm">{data.name}</p>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chapter-list bg-white">
                    <div className="new-chapters py-4 mx-4 space-y-4">
                        <div className="flex items-center justify-between">
                            <p className="font-semibold">Mới nhất</p>
                            <p className="text-xs">48 phút trước</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm truncate max-w-64 cursor-pointer hover:underline">
                                {DemoData[0].newChapter}
                            </p>
                            <Badge className="bg-red-700 text-white rounded-full">Mới</Badge>
                        </div>
                        <div className="divider border-t border-solid border-black/20"></div>
                        <div className="title-chapter-list">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <div className="flex items-center gap-1 text-yellow-800 text-sm">
                                        <p>
                                            Danh sách chương
                                        </p>
                                        <ChevronRight className="w-4 h-4 block align-middle" />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="h-dvh">
                                    <DialogHeader>
                                        <DialogTitle>Danh sách chương</DialogTitle>
                                    </DialogHeader>
                                    <div className="bg-slate-100 rounded-lg py-4 px-4 h-full overflow-y-scroll w-full">
                                        <div className="my-4 flex flex-col gap-4">
                                            {book.chapters.map((data, index) =>
                                            (
                                                <p key={index} className="text-sm truncate">Chương {data.number}: {data.title}<span className="text-gray-500 text-xs"> ({data.updateTime})</span></p>
                                            ))}
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Pagination>
                                            <PaginationContent>
                                                <PaginationItem>
                                                    <PaginationPrevious href="#" />
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">1</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">
                                                        2
                                                    </PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationLink href="#">3</PaginationLink>
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationEllipsis />
                                                </PaginationItem>
                                                <PaginationItem>
                                                    <PaginationNext href="#" />
                                                </PaginationItem>
                                            </PaginationContent>
                                        </Pagination>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                </div>
                <div className="tabs bg-white">
                    <Tabs defaultValue="introduce" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="introduce">Giới thiệu</TabsTrigger>
                            <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
                            <TabsTrigger value="comments">Bình luận</TabsTrigger>
                        </TabsList>
                        <TabsContent value="introduce" className="w-full px-4 space-y-5">
                            <div className="desc">
                                <p className="text-balance">
                                    {book.desc}
                                </p>
                            </div>
                            <div className="divider border-t border-solid border-black/20"></div>
                            <div className="archive flex items-center justify-between">
                                <p className="font-bold text-sm">
                                    {book.suggest}
                                </p>
                                <div className="archived text-sm gap-2 flex items-center">
                                    <Flower2 className="w-4 h-4 block align-middle text-pink-400" />
                                    <p className="font-semibold">{book.arhived}</p>
                                </div>
                            </div>
                            <div className="divider border-t border-solid border-black/20"></div>
                            <div className="reactions">
                                <p className="font-semibold text-sm">Cảm xúc</p>
                                <div className="grid grid-cols-6 p-4 items-center gap-4">
                                    <div className="heart flex items-center justify-center flex-col">
                                        <img
                                            src="https://metruyencv.info/assets/images/icons/react-love.svg?v=1"
                                            className="w-8 h-8 block align-middle mb-2"
                                            alt="Heart icon"
                                        />
                                        <p className="text-sm">393</p>
                                    </div>
                                    <div className="like flex items-center justify-center flex-col">
                                        <img
                                            src="https://metruyencv.info/assets/images/icons/react-like.svg?v=1"
                                            className="w-8 h-8 block align-middle mb-2"
                                            alt="Like icon"
                                        />
                                        <p className="text-sm">393</p>
                                    </div>
                                    <div className="haha flex items-center justify-center flex-col">
                                        <img
                                            src="https://metruyencv.info/assets/images/icons/react-fun.svg?v=1"
                                            className="w-8 h-8 block align-middle mb-2"
                                            alt="Haha icon"
                                        />
                                        <p className="text-sm">393</p>

                                    </div>
                                    <div className="sad flex items-center justify-center flex-col">
                                        <img
                                            src="https://metruyencv.info/assets/images/icons/react-sad.svg?v=1"
                                            className="w-8 h-8 block align-middle mb-2"
                                            alt="Sad icon"
                                        />
                                        <p className="text-sm">393</p>

                                    </div>
                                    <div className="angry flex items-center justify-center flex-col">
                                        <img
                                            src="https://metruyencv.info/assets/images/icons/react-angry.svg?v=1"
                                            className="w-8 h-8 block align-middle mb-2"
                                            alt="Angry icon"
                                        />
                                        <p className="text-sm">393</p>

                                    </div>
                                    <div className="sword flex items-center justify-center flex-col">
                                        <img
                                            src="https://metruyencv.info/assets/images/icons/react-attack.svg"
                                            className="w-8 h-8 block align-middle mb-2"
                                            alt="Sword icon"
                                        />
                                        <p className="text-sm">393</p>
                                    </div>
                                </div>
                            </div>
                            <div className="same-author">
                                <p className="text-base font-semibold">
                                    Cùng tác giả
                                </p>
                                <div className="inline-flex overflow-x-scroll w-full">
                                    <div className="p-4 w-40">
                                        <img
                                            src={DemoData[1].img}
                                            alt="Book Cover"
                                            className="object-cover bg-center w-24 h-auto mb-2"
                                        />
                                        <p className="title truncate text-sm font-semibold">
                                            {book.title}
                                        </p>
                                        <p className="author truncate text-sm text-gray-700">
                                            {book.author}
                                        </p>
                                    </div>
                                    <div className="p-4 w-40">
                                        <img
                                            src={DemoData[1].img}
                                            alt="Book Cover"
                                            className="object-cover bg-center w-24 h-auto mb-2"
                                        />
                                        <p className="title truncate text-sm font-semibold">
                                            {book.title}
                                        </p>
                                        <p className="author truncate text-sm text-gray-700">
                                            {book.author}
                                        </p>
                                    </div>
                                    <div className="p-4 w-40">
                                        <img
                                            src={DemoData[1].img}
                                            alt="Book Cover"
                                            className="object-cover bg-center w-24 h-auto mb-2"
                                        />
                                        <p className="title truncate text-sm font-semibold">
                                            {book.title}
                                        </p>
                                        <p className="author truncate text-sm text-gray-700">
                                            {book.author}
                                        </p>
                                    </div>
                                    <div className="p-4 w-40">
                                        <img
                                            src={DemoData[1].img}
                                            alt="Book Cover"
                                            className="object-cover bg-center w-24 h-auto mb-2"
                                        />
                                        <p className="title truncate text-sm font-semibold">
                                            {book.title}
                                        </p>
                                        <p className="author truncate text-sm text-gray-700">
                                            {book.author}
                                        </p>
                                    </div>
                                </div>
                                <div className="divider border-t border-solid border-black/20"></div>
                                <div className="flex items-center gap-1 text-yellow-800 text-sm py-4">
                                    <p>
                                        Xem tất cả
                                    </p>
                                    <ChevronRight className="w-4 h-4 block align-middle" />
                                </div>
                            </div>
                            <div className="fans">
                                <p className="text-base font-semibold">
                                    Người hâm mộ
                                </p>
                                <CardContent>
                                    <div className="flex flex-col gap-y-2 w-full pt-4">
                                        {
                                            fans.user.map((data, index) =>
                                            (
                                                <div key={index} className="grid grid-cols-12 justify-between items-stretch gap-2 border-b-2 py-2 w-full">

                                                    {index < 3 &&
                                                        <div className="flex col-span-1 justify-center items-center rounded-full bg-yellow-500 px-2 text-background font-bold">{index + 1}
                                                        </div>
                                                    }
                                                    {
                                                        index >= 3 && <div className="flex justify-center items-center px-2 font-bold">
                                                            {index + 1}
                                                        </div>
                                                    }
                                                    <div className={`flex flex-col justify-between gap-2 w-full h-full ${index == 0 ? "col-span-8" : "col-span-9"}`}>
                                                        <div className="flex flex-col h-full text-start gap-2">
                                                            <p className="font-bold truncate text-sm hover:text-blue-500">
                                                                {data.userName}
                                                            </p>
                                                            <div className="flex flex-col justify-end items-baseline gap-2">
                                                                <p className="text-xs text-gray-500 line-clamp-2">{data.likePoints} điểm ái mộ</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {index < 1
                                                        &&
                                                        <div className="col-span-3">
                                                            <AspectRatio ratio={2 / 3}>
                                                                <img className="rounded-full h-auto w-full object-cover object-center" src={data.avatar} alt="book cover" />
                                                            </AspectRatio>
                                                        </div>
                                                    }
                                                    {index >= 1 &&
                                                        <div className="col-span-2 ">
                                                            <AspectRatio ratio={2 / 3}>
                                                                <img className="rounded-full h-auto w-full object-cover object-center" src={data.avatar} alt="book cover" />
                                                            </AspectRatio>
                                                        </div>}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </CardContent>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="flex items-center gap-1 text-yellow-800 text-sm py-4">
                                            <p>
                                                Xem tất cả
                                            </p>
                                            <ChevronRight className="w-4 h-4 block align-middle" />
                                        </div>
                                    </DialogTrigger>
                                    <DialogContent className="h-dvh">
                                        <DialogHeader>
                                            <DialogTitle>Người hâm mộ</DialogTitle>
                                        </DialogHeader>
                                        <div className="bg-slate-100 rounded-lg py-4 px-4 h-full overflow-y-scroll w-full">
                                            {fans.user.map((data, index) =>
                                            (
                                                <div className="grid grid-cols-6 gap-4 justify-center items-center">
                                                    <div key={index} className="ranking col-span-1 w-full">
                                                        {index < 3 &&
                                                            <div
                                                                className={`ranking-item flex items-center justify-center font-bold ${index === 0 ? 'bg-red-400 rounded-full h-full' : (index === 1 ? 'bg-orange-500 rounded-full h-full' : (index === 2 ? 'bg-yellow-500 rounded-full h-full' : ''))}`}
                                                            >
                                                                {index + 1}
                                                            </div>
                                                        }
                                                        {
                                                            index >= 3 && <div className="flex justify-center items-center font-bold">
                                                                {index + 1}
                                                            </div>
                                                        }
                                                    </div>
                                                    <div className="avatar col-span-1">
                                                        <AspectRatio ratio={2 / 3}>
                                                            <img className="rounded-full h-auto w-full object-cover object-center mt-2" src={data.avatar} alt="book cover" />
                                                        </AspectRatio>
                                                    </div>
                                                    <div className="username col-span-3">
                                                        <div className="flex flex-col h-full text-start space-y-0.5">
                                                            <p className="font-bold truncate text-sm hover:text-blue-500">
                                                                {data.userName}
                                                            </p>
                                                            <div className="flex flex-col justify-end items-baseline gap-2">
                                                                <p className="text-xs text-gray-500 line-clamp-2">{data.role}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="like-numbers flex justify-end">
                                                        <p className="text-xs text-gray-500 line-clamp-2">{data.likePoints}</p>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                        <DialogFooter>
                                            <Pagination>
                                                <PaginationContent>
                                                    <PaginationItem>
                                                        <PaginationPrevious href="#" />
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">1</PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">
                                                            2
                                                        </PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationLink href="#">3</PaginationLink>
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationEllipsis />
                                                    </PaginationItem>
                                                    <PaginationItem>
                                                        <PaginationNext href="#" />
                                                    </PaginationItem>
                                                </PaginationContent>
                                            </Pagination>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </TabsContent>
                        <TabsContent value="reviews">
                            <div className="space-y-4 p-4">
                                <div className="flex items-center justify-between">
                                    <div className="title-review">
                                        <p className="font-semibold">
                                            Đánh giá
                                        </p>
                                    </div>
                                    <Select>
                                        <SelectTrigger className="w-fit">
                                            <SelectValue placeholder="Hiển thị" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="likes">Lượt thích</SelectItem>
                                                <SelectItem value="news">Mới nhất</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="review-points">
                                    <div className="bg-red-50 p-4 space-y-4 rounded-lg">
                                        <div className="header-review flex items-center justify-between">
                                            <p className="font-semibold text-amber-900">
                                                {fans.reviewTotal} lượt đánh giá
                                            </p>
                                            <div className="flex items-center gap-4">
                                                <div className="flex items-center">
                                                    <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                    <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                    <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                    <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                    <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                </div>
                                                <p className="font-semibold text-amber-900">
                                                    {fans.avarageRating}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="border-t-2 border-dashed border-amber-900/15"></div>
                                        <div className="space-y-2.5">
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-amber-900">
                                                    Tính cách nhân vật
                                                </p>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center">
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                    </div>
                                                    <p className="font-semibold text-amber-900">
                                                        {fans.rating.map((data) => data.character).reduce((a, b) => a + b, 0) / fans.rating.length}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-amber-900">
                                                    Nội dung cốt truyện
                                                </p>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center">
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                    </div>
                                                    <p className="font-semibold text-amber-900">
                                                        {fans.rating.map((data) => data.story)}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-amber-900">
                                                    Bố cục thế giới
                                                </p>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center">
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                    </div>
                                                    <p className="font-semibold text-amber-900">
                                                        {fans.rating.map((data) => data.enviroment).reduce((a, b) => a + b, 0) / fans.rating.length}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm text-amber-900">
                                                    Chất lượng bản dịch
                                                </p>
                                                <div className="flex items-center gap-4">
                                                    <div className="flex items-center">
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                        <Star className="w-4 h-4 block align-middle text-yellow-600" />
                                                    </div>
                                                    <p className="font-semibold text-amber-900">
                                                        {fans.rating.map((data) => data.translated).reduce((a, b) => a + b, 0) / fans.rating.length}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-rate">
                                    <div className="bg-red-50 p-4 space-y-4 rounded-lg">
                                        <div className="rate-character flex flex-col gap-4">
                                            <p className="font-semibold text-sm text-amber-900">
                                                Tính cách nhân vật
                                            </p>
                                            <div className="progress flex items-center gap-12">
                                                <Slider
                                                    defaultValue={[0]}
                                                    max={5}
                                                    step={0.5}
                                                    className={cn("w-full", className)}
                                                    {...props}
                                                />
                                                <p className="font-semibold text-amber-900 mr-4">
                                                    0
                                                </p>
                                            </div>
                                        </div>
                                        <div className="rate-character flex flex-col gap-4">
                                            <p className="font-semibold text-sm text-amber-900">
                                                Nội dung cốt truyện
                                            </p>
                                            <div className="progress flex items-center gap-12">
                                                <Slider
                                                    defaultValue={[0]}
                                                    max={5}
                                                    step={0.5}
                                                    className={cn("w-full", className)}
                                                    {...props}
                                                />
                                                <p className="font-semibold text-amber-900 mr-4">
                                                    0
                                                </p>
                                            </div>
                                        </div>
                                        <div className="rate-character flex flex-col gap-4">
                                            <p className="font-semibold text-sm text-amber-900">
                                                Bố cục thế giới
                                            </p>
                                            <div className="progress flex items-center gap-12">
                                                <Slider
                                                    defaultValue={[0]}
                                                    max={5}
                                                    step={0.5}
                                                    className={cn("w-full", className)}
                                                    {...props}
                                                />
                                                <p className="font-semibold text-amber-900 mr-4">
                                                    0
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="space-y-2">
                                            <Textarea placeholder="Đánh giá của bạn về truyện này." />
                                            <Button className="gap-2 float-end">
                                                <p>Gửi đánh giá</p>
                                                <SendHorizontal className="w-4 h-4 block align-middle" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8 md:max-w-2xl">
                                    <div className="space-y-3">
                                        <div className="w-full flex items-center">
                                            <div className="avatar mr-4">
                                                <Avatar>
                                                    <AvatarImage src="https://static.cdnno.com/user/aba6a10dd0cb18f6a20416a188702d6c/100.jpg?1699124991" alt="Avatar cover" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="info">
                                                <div className="name">
                                                    <p className="font-semibold text-base cursor-pointer">Nguyễn Văn A</p>
                                                </div>
                                                <div className="last-comment flex items-center gap-4">
                                                    <p className="text-xs text-black/55 cursor-pointer">14 ngày trước</p>
                                                    <p className="text-xs text-black/55 cursor-pointer">Chương 73</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-content w-full">
                                            <p className="font-normal text-base">truyện như 2 hòn dái tao</p>
                                        </div>
                                        <div className="feature-button">
                                            <div className="w-full flex items-center justify-between">
                                                <div className="likes-reply flex items-center gap-8">
                                                    <div className="likes flex items-center gap-2">
                                                        <ThumbsUp className="w-4 h-4 block align-middle" />
                                                        <p>0</p>
                                                    </div>
                                                    <div className="reply flex items-center gap-2">
                                                        <Reply className="w-4 h-4 block align-middle" />
                                                        <p>0</p>
                                                    </div>
                                                    <div className="reply flex items-center gap-2">
                                                        <Clock className="w-4 h-4 block align-middle" />
                                                        <p className="text-sm">6 tháng trước</p>
                                                    </div>
                                                </div>
                                                <div className="report flex items-center gap-2">
                                                    <Flag className="w-4 h-4 block align-middle" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="comments">
                            <div className="p-4 space-y-4">
                                <div className="space-y-4 md:max-w-2xl">
                                    <div className="flex gap-4 w-full">
                                        <div className="avatar">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </div>
                                        <div className="comment-input w-full space-y-4">
                                            <Textarea placeholder="Bình luận của bạn." className="p-4" />
                                            <Button className="gap-2 float-end">
                                                <p>Gửi đánh giá</p>
                                                <SendHorizontal className="w-4 h-4 block align-middle" />
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="w-full flex items-center">
                                            <div className="avatar mr-4">
                                                <Avatar>
                                                    <AvatarImage src="https://static.cdnno.com/user/aba6a10dd0cb18f6a20416a188702d6c/100.jpg?1699124991" alt="Avatar cover" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="info">
                                                <div className="name">
                                                    <p className="font-semibold text-base cursor-pointer">Nguyễn Văn A</p>
                                                </div>
                                                <div className="last-comment flex items-center gap-4">
                                                    <p className="text-xs text-black/55 cursor-pointer">14 ngày trước</p>
                                                    <p className="text-xs text-black/55 cursor-pointer">Chương 73</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-content w-full">
                                            <p className="font-normal text-base">truyện như 2 hòn dái tao</p>
                                        </div>
                                        <div className="feature-button">
                                            <div className="w-full flex items-center justify-between">
                                                <div className="likes-reply flex items-center gap-8">
                                                    <div className="likes flex items-center gap-2">
                                                        <ThumbsUp className="w-4 h-4 block align-middle" />
                                                        <p>0</p>
                                                    </div>
                                                    <div className="reply flex items-center gap-2">
                                                        <Reply className="w-4 h-4 block align-middle" />
                                                        <p>0</p>
                                                    </div>
                                                </div>
                                                <div className="report flex items-center gap-2">
                                                    <Flag className="w-4 h-4 block align-middle" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className="desktop space-y-4 bg-white p-4 hidden">
                <div className="breadcrums pb-2">
                    <div className="flex gap-2 align-middle">
                        <Link to={"/"} className="text-blue-500 hover:underline">Trang chủ</Link>
                        <><ChevronRight className="w-4 h-4 translate-y-1.5" /></>
                        <Link to={"/the-loai"} className="text-blue-500 hover:underline">Thể loại</Link>
                        <><ChevronRight className="w-4 h-4 translate-y-1.5" /></>
                        {/* TODO: FETCH API  */}
                        <Link to={"/"} className="text-blue-500 hover:underline">{DemoData[0].title}</Link>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="title uppercase text-2xl font-semibold font-sans">{DemoData[0].title}</div>
                    <div className="update text-sm italic font-normal font-sans">Cập nhật lúc: 2024-01-08 01:05:15</div>
                </div>
                <div className="flex flex-col space-y-4 md:grid md:grid-cols-12">
                    <div className="info gap-3 md:col-span-3">
                        <div className="space-y-2">
                            <div className="w-full flex justify-center items-center">
                                <img src={DemoData[1].img} alt="Books cover" className="w-1/2 h-full object-cover rounded-md md:w-full" />
                            </div>
                        </div>
                    </div>
                    <div className="detail flex flex-col space-y-2 md:col-span-9 md:ml-16">
                        <div className="space-y-4">
                            <div className="grid grid-cols-3 justify-start md:grid-cols-5">
                                <div className="flex items-center">
                                    <p className="author">Tác giả: </p>
                                </div>
                                <Link to={"/"} className="author font-semibold hover:underline italic md:col-span-4">{DemoData[0].author}</Link>
                            </div>
                            <div className="grid grid-cols-3 justify-start md:grid-cols-5">
                                <div className="flex items-start">
                                    <p className="categories">Thể loại:</p>
                                </div>
                                <div className="categories col-span-2 flex gap-2 w-full flex-wrap md:col-span-4 italic">
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
                            <div className="grid grid-cols-3 justify-start md:grid-cols-5">
                                <div className="flex items-center">
                                    <p className="status">Trạng thái:</p>
                                </div>
                                <Link to={"/"} className="status font-semibold text-red-500/75 hover:underline italic md:col-span-4">{DemoData[0].status}</Link>
        //               </div>
                            <div className="grid grid-cols-3 justify-start md:grid-cols-5">
                                <div className="flex items-center">
                                    <p className="views">Lượt xem:</p>
                                </div>
                                <div className="views font-semibold col-span-2 italic md:col-span-4">{DemoData[0].views} lượt xem</div>
                            </div>
                            <div className="grid grid-cols-3 justify-start md:grid-cols-5">
                                <div className="flex items-start">
                                    <p className="status">Lưu trữ:</p>
                                </div>
                                <p className="status font-semibold col-span-2 italic md:col-span-4">{DemoData[0].follower} người lưu trữ</p>
                            </div>
                            <div className="grid grid-cols-3 justify-start md:grid-cols-5">
                                <p className="rating">Đánh giá:</p>
                                <div className="col-span-2 items-center flex flex-wrap md:col-span-4">
                                    <Star className="w-4 h-4 block align-middle mr-2" />
                                    <Star className="w-4 h-4 block align-middle mr-2" />
                                    <Star className="w-4 h-4 block align-middle mr-2" />
                                    <Star className="w-4 h-4 block align-middle mr-2" />
                                    <Star className="w-4 h-4 block align-middle mr-2" />
                                    <p className="ranking font-semibold">4.96/5<span className="text-black/55 font-normal italic"> (782 đánh giá)</span></p>
                                </div>
                            </div>
                            <div className="chapter flex items-center gap-2">
                                <Button variant="secondary" className="gap-2">
                                    <Search className="w-4 h-4 block align-middle" />
                                    <Link to={"/truyen"}>Đọc truyện</Link>
                                </Button>
                                <Button className="gap-2">
                                    <Newspaper className="w-4 h-4 block align-middle" />
                                    <Link to={"/truyen"}>Đọc mới nhất</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="content pt-4 md:col-span-12">
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
                    <div className="chapter-list pt-4 md:col-span-12">
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
                                        <TableHead className="w-[100px] md:w-96">Số chương</TableHead>
                                        <TableHead className="text-right">Cập nhật</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {DemoData.map((data, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-normal cursor-pointer hover:text-blue-500">{data.newChapter}</TableCell>
                                            <TableCell className="text-right italic">{data.updateDate}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                    <div className="ranking pt-4 md:w-full md:col-span-full">
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
                                            <TableHead className="w-10 md:w-20">Vị trí</TableHead>
                                            <TableHead>Hình ảnh</TableHead>
                                            <TableHead>Tên truyện</TableHead>
                                            <TableHead>Tập</TableHead>
                                            <TableHead className="text-right">Lượt xem</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {DemoData.map((data, index) => (
                                            <TableRow key={index}>
                                                <TableCell className={`font-medium ${index === 0 ? 'text-blue-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-red-500' : null}`}
                                                >
                                                    {data.topRated}
                                                </TableCell>
                                                <TableCell className="font-normal">
                                                    <img
                                                        className="object-cover cursor-pointer md:w-36 md:h-auto rounded-lg"
                                                        src={data.img}
                                                        alt="Books cover"
                                                    />
                                                </TableCell>
                                                <TableCell className="font-normal cursor-pointer hover:text-blue-500">{data.title}</TableCell>
                                                <TableCell className="font-normal cursor-pointer hover:text-blue-500">{data.newChapter}</TableCell>
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
                                            <TableHead className="w-10 md:w-20">Vị trí</TableHead>
                                            <TableHead>Hình ảnh</TableHead>
                                            <TableHead>Tên truyện</TableHead>
                                            <TableHead>Tập</TableHead>
                                            <TableHead className="text-right">Lượt xem</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {DemoData.map((data, index) => (
                                            <TableRow key={index}>
                                                <TableCell className={`font-medium ${index === 0 ? 'text-blue-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-red-500' : null}`}
                                                >
                                                    {data.topRated}
                                                </TableCell>
                                                <TableCell className="font-normal">
                                                    <img
                                                        className="object-cover cursor-pointer md:w-36 md:h-auto rounded-lg"
                                                        src={data.img}
                                                        alt="Books cover"
                                                    />
                                                </TableCell>
                                                <TableCell className="font-normal cursor-pointer hover:text-blue-500">{data.title}</TableCell>
                                                <TableCell className="font-normal cursor-pointer hover:text-blue-500">{data.newChapter}</TableCell>
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
                                            <TableHead className="w-10 md:w-20">Vị trí</TableHead>
                                            <TableHead>Hình ảnh</TableHead>
                                            <TableHead>Tên truyện</TableHead>
                                            <TableHead>Tập</TableHead>
                                            <TableHead className="text-right">Lượt xem</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {DemoData.map((data, index) => (
                                            <TableRow key={index}>
                                                <TableCell className={`font-medium ${index === 0 ? 'text-blue-500' : index === 1 ? 'text-green-500' : index === 2 ? 'text-red-500' : null}`}
                                                >
                                                    {data.topRated}
                                                </TableCell>
                                                <TableCell className="font-normal">
                                                    <img
                                                        className="object-cover cursor-pointer md:w-36 md:h-auto rounded-lg"
                                                        src={data.img}
                                                        alt="Books cover"
                                                    />
                                                </TableCell>
                                                <TableCell className="font-normal cursor-pointer hover:text-blue-500">{data.title}</TableCell>
                                                <TableCell className="font-normal cursor-pointer hover:text-blue-500">{data.newChapter}</TableCell>
                                                <TableCell className="text-right italic">{data.views}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className="comment pt-4 md:w-full md:col-span-full space-y-4">
                        <div className="selector flex items-center justify-between">
                            <div className="total-comment">
                                <p className="text-base font-semibold">61 bình luận</p>
                            </div>
                            <div className="options-newest">
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Chọn hiển thị" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="newest">Mới nhất</SelectItem>
                                            <SelectItem value="likes">Lượt thích</SelectItem>
                                            <SelectItem value="olders">Cũ nhất</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-4 md:max-w-2xl">
                            <div className="flex items-center gap-4 w-full">
                                <div className="avatar">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="comment-input w-full">
                                    <Textarea placeholder="Bình luận của bạn." className="p-4" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="w-full flex items-center">
                                    <div className="avatar mr-4">
                                        <Avatar>
                                            <AvatarImage src="https://static.cdnno.com/user/aba6a10dd0cb18f6a20416a188702d6c/100.jpg?1699124991" alt="Avatar cover" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="info">
                                        <div className="name">
                                            <p className="font-semibold text-base cursor-pointer">Nguyễn Văn A</p>
                                        </div>
                                        <div className="last-comment flex items-center gap-4">
                                            <p className="text-xs text-black/55 cursor-pointer">14 ngày trước</p>
                                            <p className="text-xs text-black/55 cursor-pointer">Chương 73</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-content w-full">
                                    <p className="font-normal text-base">truyện như 2 hòn dái tao</p>
                                </div>
                                <div className="feature-button">
                                    <div className="w-full flex items-center justify-between">
                                        <div className="likes-reply flex items-center gap-8">
                                            <div className="likes flex items-center gap-2">
                                                <ThumbsUp className="w-4 h-4 block align-middle" />
                                                <p>0</p>
                                            </div>
                                            <div className="reply flex items-center gap-2">
                                                <Reply className="w-4 h-4 block align-middle" />
                                                <p>0</p>
                                            </div>
                                        </div>
                                        <div className="report flex items-center gap-2">
                                            <Flag className="w-4 h-4 block align-middle" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="divider border-t border-solid border-black/25"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;