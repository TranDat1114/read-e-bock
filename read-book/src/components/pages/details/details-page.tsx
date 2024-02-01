import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Star, ThumbsUp, Reply, Flag, Search, User2, Bookmark, Flower2, SendHorizontal, Clock, Book, Library, Glasses, ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { Link } from "react-router-dom";
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

import EmblaCarousel from "@/components/ui/EmblaCarousel"
import { EmblaOptionsType } from 'embla-carousel'
import imageByIndex from "./imageByIndex";

import React, { useState } from 'react';
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
    img: string,
    totalChapters: number,
    chapterWeek: number,
    views: number,
    lastUpdate: string,
}

interface Fans {
    commentTotal: number
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
    lastComment: string,
    lastRead: number,
    level: number,
    comment: string,
    rating: number,
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
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const OPTIONS: EmblaOptionsType = { align: 'center', dragFree: false, loop: true }

    const [isArrowUp, setIsArrowUp] = useState(false);
    const toggleArrow = () => {
        setIsArrowUp((prevState) => !prevState);
    };

    return (
        <div>
            <div className="mobile space-y-4 md:hidden">
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
                                                <div className="flex items-center" key={index}>
                                                    <div className="w-full flex items-center justify-between gap-4">
                                                        <div className="flex items-center gap-6">
                                                            {index < 3 &&
                                                                <div className="flex col-span-1 justify-center items-center rounded-full bg-yellow-500 px-2 text-background font-bold">{index + 1}
                                                                </div>
                                                            }
                                                            {
                                                                index >= 3 && <div className="flex justify-center items-center px-2 font-bold">
                                                                    {index + 1}
                                                                </div>
                                                            }

                                                            <div className="flex flex-col gap-2">
                                                                <div className="username">{data.userName}</div>
                                                                <div className="role">
                                                                    <p className="text-sm italic">
                                                                        {data.likePoints} điểm ái mộ
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="avatar">
                                                            <Avatar>
                                                                <AvatarImage src={data.avatar} alt="Avatar cover" />
                                                                <AvatarFallback>CN</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                    </div>
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
                                            <div className="flex flex-col gap-y-2 w-full pt-4">
                                                {
                                                    fans.user.map((data, index) =>
                                                    (
                                                        <div className="flex items-center" key={index}>
                                                            <div className="w-full flex items-center justify-between gap-4">
                                                                <div className="flex items-center gap-6">
                                                                    {index < 3 &&
                                                                        <div className="flex col-span-1 justify-center items-center rounded-full bg-yellow-500 px-2 text-background font-bold">{index + 1}
                                                                        </div>
                                                                    }
                                                                    {
                                                                        index >= 3 && <div className="flex justify-center items-center px-2 font-bold">
                                                                            {index + 1}
                                                                        </div>
                                                                    }
                                                                    <div className="avatar">
                                                                        <Avatar>
                                                                            <AvatarImage src={data.avatar} alt="Avatar cover" />
                                                                            <AvatarFallback>CN</AvatarFallback>
                                                                        </Avatar>
                                                                    </div>
                                                                    <div className="flex flex-col">
                                                                        <div className="username">{data.userName}</div>
                                                                        <div className="role">
                                                                            <p>
                                                                                {data.role}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="role">
                                                                    <p className="text-sm italic">
                                                                        {data.likePoints}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
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
                                    <div className="space-y-2 mb-16">
                                        <Textarea placeholder="Đánh giá của bạn về truyện này." />
                                        <Button className="gap-2 float-end">
                                            <p>Gửi đánh giá</p>
                                            <SendHorizontal className="w-4 h-4 block align-middle" />
                                        </Button>
                                    </div>
                                </div>
                                {fans.user.map((data, index) => (
                                    <div key={index} className="w-full">
                                        <div className="space-y-4">
                                            <div className="space-y-3">
                                                <div className="flex w-full items-center">
                                                    <div className="avatar mr-4">
                                                        <Avatar>
                                                            <AvatarImage src={data.avatar} alt="Avatar cover" />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                        </Avatar>
                                                    </div>
                                                    <div className="info space-y-0.5 w-full">
                                                        <div className="name flex items-center justify-between">
                                                            <p className="font-semibold text-base cursor-pointer">{data.userName}</p>
                                                            <div className="flex items-center gap-2">
                                                                <Star className="w-4 h-4 block align-middle" />
                                                                <p className="font-semibold text-base cursor-pointer">{data.rating}</p>
                                                            </div>
                                                        </div>
                                                        <div className="last-comment flex items-center gap-4">
                                                            <Badge className="text-xs">
                                                                Cấp {data.level}
                                                            </Badge>
                                                            <p className="text-xs font-normal text-black/55 cursor-pointer">Đã dọc: Chương {data.lastRead}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comment-content w-full">
                                                    <p className="font-normal text-base">{data.comment}</p>
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
                                        <div className="divider border-t border-solid border-black/20 mt-8"></div>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="comments">
                            <div className="w-full">
                                <div className="p-4 space-y-4">
                                    <div className="space-y-3">
                                        <div className="header flex items-center justify-between">
                                            <p className="font-semibold text-lg">{fans.reviewTotal} bình luận</p>
                                            <Select>
                                                <SelectTrigger className="w-fit">
                                                    <SelectValue placeholder="Hiển thị" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="likes">Lượt thích</SelectItem>
                                                        <SelectItem value="news">Mới nhất</SelectItem>
                                                        <SelectItem value="oldest">Cũ nhất</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex justify-center">
                                            <div className="avatar mr-2 mt-2">
                                                <Avatar>
                                                    <AvatarImage src="https://metruyencv.com/images/avatar-profile.png?97b80827721f6116c3dbc797d11d629b" alt="Avatar cover" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className="comment-input w-full space-y-1">
                                                <Textarea placeholder="Bình luận của bạn." />
                                                <Button className="gap-2 float-end">
                                                    <p>Gửi bình luận</p>
                                                    <SendHorizontal className="w-4 h-4 block align-middle" />
                                                </Button>
                                            </div>
                                        </div>
                                        {fans.user.map((data, index) => (
                                            <div>
                                                <div className="w-full space-y-4" key={index}>
                                                    <div className="flex w-full items-center">
                                                        <div className="avatar mr-4">
                                                            <Avatar>
                                                                <AvatarImage src={data.avatar} alt="Avatar cover" />
                                                                <AvatarFallback>CN</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                        <div className="info space-y-0.5 w-full">
                                                            <div className="name flex items-center justify-between">
                                                                <p className="font-semibold text-base cursor-pointer">{data.userName}</p>
                                                                <div className="flex items-center gap-2">
                                                                    <Badge className="text-xs">
                                                                        Cấp {data.level}
                                                                    </Badge>
                                                                </div>
                                                            </div>
                                                            <div className="last-comment flex items-center gap-4">
                                                                <p className="text-xs">
                                                                    {data.lastComment}
                                                                </p>
                                                                <p className="text-xs font-normal text-black/55 cursor-pointer">Chương {data.lastRead}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-content w-full">
                                                        <p className="font-normal text-base">{data.comment}</p>
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
                                                <div className="divider border-t border-black/20 border-solid my-5"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="divider border-t border-solid border-black/20 mt-8"></div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
            <div className="desktop space-y-4 bg-white p-4 hidden md:block py-12">
                <div className="grid grid-cols-4 space-y-4">
                    <div className="info gap-3 col-span-1">
                        <div className="space-y-2">
                            <div className="w-full flex justify-center items-center">
                                <img src={book.img} alt="Books cover" className="w-full h-auto object-cover rounded-md" />
                            </div>
                        </div>
                    </div>
                    <div className="detail flex flex-col items-start col-span-3 space-y-4 ml-8">
                        <div className="flex items-center justify-center gap-2">
                            <div className="title uppercase text-2xl font-semibold font-sans">{book.title}</div>
                            <Flag className="w-4 h-4 block align-middle" />
                        </div>
                        <div className="space-y-6 w-full">
                            <div className="flex items-center">
                                <div className="categories flex gap-2 w-full flex-wrap md:col-span-4 italic">
                                    {book.categories.map((data, index) =>
                                    (
                                        <Button key={index} variant={"outline"} className="text-green-700 rounded-full">
                                            <p className="text-sm">{data.name}</p>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-2 w-full text-center">
                                <div className="chapter">
                                    <div>
                                        <p className="font-semibold">
                                            {book.totalChapters}
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
                                            {book.chapterWeek}
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
                                            {book.views}
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
                                            {book.arhived}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm">
                                            Cất giữ
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="col-span-2 items-center flex flex-wrap md:col-span-4">
                                    <Star className="w-4 h-4 block align-middle mr-2" />
                                    <Star className="w-4 h-4 block align-middle mr-2" />
                                    <Star className="w-4 h-4 block align-middle mr-2" />
                                    <Star className="w-4 h-4 block align-middle mr-2" />
                                    <Star className="w-4 h-4 block align-middle mr-2" />
                                    <p className="ranking font-semibold">4.96/5<span className="text-black/55 font-normal"> (782 đánh giá)</span></p>
                                </div>
                            </div>
                            <div className="chapter flex items-center gap-2">
                                <div className="reading">
                                    <Button className="w-full rounded-full">
                                        <Search className="w-4 h-4 block align-middle mr-2" />
                                        <Link to={"/truyen"}>Đọc truyện</Link>
                                    </Button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" className="w-full rounded-full">
                                        <Bookmark className="w-4 h-4 block align-middle mr-2" />
                                        <Link to={"/truyen"}>Đánh dấu</Link>
                                    </Button>
                                    <Button variant="secondary" className="w-full rounded-full">
                                        <Flower2 className="w-4 h-4 block align-middle mr-2" />
                                        <Link to={"/truyen"}>Đề cử</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tabs">
                    <div className="tabs bg-white">
                        <Tabs defaultValue="introduce" className="w-full">
                            <TabsList className="grid w-full grid-cols-5 bg-[#f1f2f3]">
                                <TabsTrigger value="introduce" className="text-black">Giới thiệu</TabsTrigger>
                                <TabsTrigger value="reviews" className="items-center gap-0.5">
                                    <p>
                                        Đánh giá
                                    </p>
                                    <Badge variant="secondary">{fans.reviewTotal}</Badge>
                                </TabsTrigger>
                                <TabsTrigger value="chapterList" className="items-center gap-0.5">
                                    <p>
                                        Chương
                                    </p>
                                    <Badge variant="secondary">{book.totalChapters}</Badge>
                                </TabsTrigger>
                                <TabsTrigger value="comments" className="items-center gap-0.5">
                                    <p>
                                        Bình luận
                                    </p>
                                    <Badge variant="secondary">{fans.commentTotal}</Badge>
                                </TabsTrigger>
                                <TabsTrigger value="likes">Hâm mộ</TabsTrigger>
                            </TabsList>
                            <TabsContent value="introduce" className="w-full px-4 space-y-5">
                                <div className="grid grid-cols-6">
                                    <div className="col-span-4 space-y-4 pt-4 mr-8">
                                        <div className="desc">
                                            <p className="text-balance">
                                                {book.desc}
                                            </p>
                                        </div>
                                        <div className="divider border-t border-solid border-black/20"></div>
                                        <div className="reactions flex items-center space-x-12">
                                            <p className="font-semibold text-sm">Cảm xúc</p>
                                            <div className="grid grid-cols-6 p-4 items-center gap-8">
                                                <div className="heart flex items-center justify-center gap-2">
                                                    <img
                                                        src="https://metruyencv.info/assets/images/icons/react-love.svg?v=1"
                                                        className="w-8 h-8 block align-middle"
                                                        alt="Heart icon"
                                                    />
                                                    <p className="text-sm mr-7">393</p>
                                                </div>
                                                <div className="like flex items-center justify-center gap-2">
                                                    <img
                                                        src="https://metruyencv.info/assets/images/icons/react-like.svg?v=1"
                                                        className="w-8 h-8 block align-middle"
                                                        alt="Like icon"
                                                    />
                                                    <p className="text-sm mr-5">393</p>
                                                </div>
                                                <div className="haha flex items-center justify-center gap-2">
                                                    <img
                                                        src="https://metruyencv.info/assets/images/icons/react-fun.svg?v=1"
                                                        className="w-8 h-8 block align-middle"
                                                        alt="Haha icon"
                                                    />
                                                    <p className="text-sm mr-4">393</p>

                                                </div>
                                                <div className="sad flex items-center justify-center gap-2">
                                                    <img
                                                        src="https://metruyencv.info/assets/images/icons/react-sad.svg?v=1"
                                                        className="w-8 h-8 block align-middle"
                                                        alt="Sad icon"
                                                    />
                                                    <p className="text-sm mr-3">393</p>

                                                </div>
                                                <div className="angry flex items-center justify-center gap-2">
                                                    <img
                                                        src="https://metruyencv.info/assets/images/icons/react-angry.svg?v=1"
                                                        className="w-8 h-8 block align-middle"
                                                        alt="Angry icon"
                                                    />
                                                    <p className="text-sm mr-2">393</p>

                                                </div>
                                                <div className="sword flex items-center justify-center gap-2">
                                                    <img
                                                        src="https://metruyencv.info/assets/images/icons/react-attack.svg"
                                                        className="w-8 h-8 block align-middle"
                                                        alt="Sword icon"
                                                    />
                                                    <p className="text-sm">393</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider border-t border-solid border-black/20"></div>
                                        <div className="archive flex items-center justify-between">
                                            <div className="archived text-sm gap-12 flex items-center space-x-8">
                                                <p className="font-semibold text-sm">Đề cử:</p>
                                                <div className="flex items-center gap-4">
                                                    <Flower2 className="w-4 h-4 block align-middle text-pink-400" />
                                                    <p>{book.arhived}</p>
                                                </div>
                                            </div>
                                            <p className="font-bold text-sm">
                                                {book.suggest}
                                            </p>
                                        </div>
                                        <div className="divider border-t border-solid border-black/20"></div>
                                        <div className="chapterList flex items-center justify-between">
                                            <div className="flex items-center gap-10">
                                                <p className="font-semibold text-sm">Chương mới</p>
                                                <p className="text-sm">{DemoData[0].newChapter}</p>
                                            </div>
                                            <p className="text-sm">{book.lastUpdate}</p>
                                        </div>
                                    </div>
                                    <div className="col-span-2 pt-4">
                                        <div className="bg-red-50 p-4 rounded-md space-y-4">
                                            <div className="info">
                                                <div className="avatar flex justify-center">
                                                    <Avatar className="w-24 h-auto">
                                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                        <AvatarFallback>CN</AvatarFallback>
                                                    </Avatar>
                                                </div>
                                                <Badge className="flex justify-center bg-red-700">Kim cương</Badge>
                                            </div>
                                            <div className="name flex items-center justify-center py-6">
                                                <p className="font-semibold">{book.author}</p>
                                            </div>
                                            <div className="w-full pb-4">
                                                <div className="grid grid-cols-3 items-center gap-2 w-full text-center">
                                                    <div className="chapter space-y-4">
                                                        <div className="flex justify-center">
                                                            <Book className="w-6 h-6 block align-middle text-amber-700" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm">
                                                                Số truyện
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">
                                                                {DemoData[0].chapter}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="chapter space-y-4">
                                                        <div className="flex justify-center">
                                                            <Library className="w-6 h-6 block align-middle text-amber-700" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm">
                                                                Số chương
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">
                                                                {DemoData[0].chapter}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="chapter space-y-4">
                                                        <div className="flex justify-center">
                                                            <Book className="w-6 h-6 block align-middle text-amber-700" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm">
                                                                Cấp
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">
                                                                {DemoData[0].chapter}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider border-t border-solid border-black/5 mt-4"></div>
                                            <div className="w-full hidden">
                                                <section>
                                                    <EmblaCarousel slides={SLIDES} options={OPTIONS} imageByIndex={imageByIndex} />
                                                </section>
                                            </div>
                                            <div className="same-author">
                                                <div className="w-full flex items-center justify-between">
                                                    <p className="text-base font-semibold">
                                                        Cùng tác giả
                                                    </p>
                                                    <div className="flex items-center gap-1 text-yellow-800 text-sm">
                                                        <p className="cursor-pointer">
                                                            Xem tất cả
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="divider border-t border-solid border-black/5 my-4"></div>
                                                <div className="content w-full space-y-4">
                                                    <div className="flex gap-4">
                                                        <div className="book-cover">
                                                            <img className="rounded-md h-auto w-16 object-cover object-center" src={DemoData[1].img} alt="book cover" />
                                                        </div>
                                                        <div className="book-title flex flex-col">
                                                            <p className="text-sm font-semibold">{book.title}</p>
                                                            <div className="flex items-center">
                                                                <Book className="w-4 h-4 block align-middle mr-2 text-sm" />
                                                                <p className="text-sm">{book.author}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="book-cover">
                                                            <img className="rounded-md h-auto w-16 object-cover object-center" src={DemoData[1].img} alt="book cover" />
                                                        </div>
                                                        <div className="book-title flex flex-col">
                                                            <p className="text-sm font-semibold">{book.title}</p>
                                                            <div className="flex items-center">
                                                                <Book className="w-4 h-4 block align-middle mr-2 text-sm" />
                                                                <p className="text-sm">{book.author}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="book-cover">
                                                            <img className="rounded-md h-auto w-16 object-cover object-center" src={DemoData[1].img} alt="book cover" />
                                                        </div>
                                                        <div className="book-title flex flex-col">
                                                            <p className="text-sm font-semibold">{book.title}</p>
                                                            <div className="flex items-center">
                                                                <Book className="w-4 h-4 block align-middle mr-2 text-sm" />
                                                                <p className="text-sm">{book.author}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="reviews" className="w-full px-4 space-y-5">
                                <div className="grid grid-cols-6">
                                    <div className="left col-span-4 space-y-4 pt-4 mr-8">
                                        <div className="review-rate">
                                            <div className="bg-red-50 p-4 space-y-4 rounded-lg">
                                                <div className="rate-character flex items-center">
                                                    <p className="font-semibold text-sm text-amber-900 w-1/4">
                                                        Tính cách nhân vật
                                                    </p>
                                                    <Slider
                                                        defaultValue={[0]}
                                                        max={5}
                                                        step={0.5}
                                                        className={cn("w-full mr-12", className)}
                                                        {...props}
                                                    />
                                                    <p className="font-semibold text-amber-900 mr-4">
                                                        0
                                                    </p>
                                                </div>
                                                <div className="rate-character flex items-center">
                                                    <p className="font-semibold text-sm text-amber-900 w-1/4">
                                                        Nội dung cốt truyện
                                                    </p>
                                                    <Slider
                                                        defaultValue={[0]}
                                                        max={5}
                                                        step={0.5}
                                                        className={cn("w-full mr-12", className)}
                                                        {...props}
                                                    />
                                                    <p className="font-semibold text-amber-900 mr-4">
                                                        0
                                                    </p>
                                                </div>
                                                <div className="rate-character flex items-center">
                                                    <p className="font-semibold text-sm text-amber-900 w-1/4">
                                                        Bố cục thế giới
                                                    </p>
                                                    <Slider
                                                        defaultValue={[0]}
                                                        max={5}
                                                        step={0.5}
                                                        className={cn("w-full mr-12", className)}
                                                        {...props}
                                                    />
                                                    <p className="font-semibold text-amber-900 mr-4">
                                                        0
                                                    </p>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="space-y-2 w-full flex flex-wrap justify-end">
                                                        <Textarea placeholder="Đánh giá của bạn về truyện này." className="bg-white" />
                                                        <Button className="gap-2">
                                                            <p>Gửi đánh giá</p>
                                                            <SendHorizontal className="w-4 h-4 block align-middle" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">
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
                                        <div className="divider border-t border-solid border-black/5 mt-4"></div>
                                        <div className="comments space-y-20">
                                            {fans.user.map((data, index) => (
                                                <div className="space-y-3" key={index}>
                                                    <div className="w-full flex items-center">
                                                        <div className="avatar mr-4">
                                                            <Avatar>
                                                                <AvatarImage src={data.avatar} alt="Avatar cover" />
                                                                <AvatarFallback>CN</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                        <div className="info space-y-1.5">
                                                            <div className="name">
                                                                <p className="font-semibold text-base cursor-pointer">{data.userName}</p>
                                                            </div>
                                                            <div className="flex items-center gap-4">
                                                                <div className="flex items-center">
                                                                    <Star className="w-4 h-4 block align-middle" />
                                                                    <Star className="w-4 h-4 block align-middle" />
                                                                    <Star className="w-4 h-4 block align-middle" />
                                                                    <Star className="w-4 h-4 block align-middle" />
                                                                    <Star className="w-4 h-4 block align-middle" />
                                                                    <p className="ml-4 font-semibold">5</p>
                                                                </div>
                                                                <div className="read text-sm flex items-center text-gray-400">
                                                                    <Glasses className="w-4 h-4 block align-middle mr-2" />
                                                                    <p>Đã đọc: {book.totalChapters} chương</p>
                                                                </div>
                                                                <div className="read text-sm flex items-center text-gray-400">
                                                                    <Clock className="w-4 h-4 block align-middle mr-2" />
                                                                    <p>{book.lastUpdate}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-content w-full">
                                                        <p className="font-normal text-base">{data.comment}</p>
                                                    </div>
                                                    <div className="feature-button">
                                                        <div className="w-full flex items-center justify-end">
                                                            <div className="likes-reply flex items-center gap-20">
                                                                <div className="flex items-center gap-2">
                                                                    <ThumbsUp className="w-4 h-4 block align-middle" />
                                                                    <p>0</p>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <Reply className="w-4 h-4 block align-middle" />
                                                                    <p>0</p>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <Flag className="w-4 h-4 block align-middle" />
                                                                    <p>Báo xấu</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="footer w-full">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right col-span-2 pt-4 space-y-4">
                                        <div className="bg-red-50 p-4 space-y-4 rounded-lg">
                                            <div className="header-review flex items-center justify-between">
                                                <p className="font-semibold text-amber-900">
                                                    Đã có {fans.reviewTotal} lượt đánh giá
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
                                                    <p className="text-sm text-amber-900 ">
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
                                        <div className="bg-red-50 p-4 space-y-4 rounded-lg">
                                            <p className="font-semibold text-amber-900">Lưu ý khi đánh giá</p>
                                            <div className="content space-y-4">
                                                <ul className="list-decimal px-4 space-y-4 text-amber-700 text-sm text-pretty">
                                                    <li>
                                                        Không được dẫn link hoặc nhắc đến website khác
                                                    </li>
                                                    <li>
                                                        Không được có những từ ngữ gay gắt, đả kích, xúc phạm người khác
                                                    </li>
                                                    <li>
                                                        Đánh giá hoặc bình luận không liên quan tới truyện sẽ bị xóa
                                                    </li>
                                                    <li>
                                                        Đánh giá hoặc bình luận chê truyện một cách chung chung không mang lại giá trị cho người đọc sẽ bị xóa
                                                    </li>
                                                    <li>
                                                        Đánh giá có điểm số sai lệch với nội dung sẽ bị xóa
                                                    </li>
                                                </ul>
                                                <p className="warning text-amber-700 text-sm italic">
                                                    Vui lòng xem và tuân theo đầy đủ các quy định tại Điều Khoản Dịch Vụ khi sử dụng website
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="chapterList">
                                <div className="w-full p-4 space-y-4">
                                    <div className="title flex items-center justify-between">
                                        <p className="font-semibold text-lg">Danh sách chương</p>
                                        <div>
                                            {isArrowUp ? (
                                                <ArrowUpNarrowWide
                                                    className="w-6 h-6 block align-middle"
                                                    onClick={toggleArrow}
                                                />
                                            ) : (
                                                <ArrowDownWideNarrow
                                                    className="w-6 h-6 block align-middle"
                                                    onClick={toggleArrow}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="main w-full">
                                        {book.chapters.map((data, index) => (
                                            <div key={index} className="grid grid-cols-3">
                                                <div className="space-y-4 items-center">
                                                    <p className="text-sm">
                                                        Chương {data.number}: {data.title} <span className="text-xs text-gray-700">({data.updateTime})</span>
                                                    </p>
                                                    <div className="divider border-t-2 border-dashed border-black/5 py-2"></div>
                                                </div>
                                                <div className="space-y-4 items-center">
                                                    <p className="text-sm">
                                                        Chương {data.number}: {data.title} <span className="text-xs text-gray-700">({data.updateTime})</span>
                                                    </p>
                                                    <div className="divider border-t-2 border-dashed border-black/5 py-2"></div>
                                                </div>
                                                <div className="space-y-4 items-center">
                                                    <p className="text-sm">
                                                        Chương {data.number}: {data.title} <span className="text-xs text-gray-700">({data.updateTime})</span>
                                                    </p>
                                                    <div className="divider border-t-2 border-dashed border-black/5 py-2"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="comments">
                                <div className="grid grid-cols-6">
                                    <div className="left col-span-4 space-y-4 pt-4 mr-8">
                                        <div className="flex items-center justify-between">
                                            <p className="font-semibold text-lg">
                                                {fans.commentTotal} bình luận
                                            </p>
                                            <div className="flex justify-end">
                                                <Select>
                                                    <SelectTrigger className="w-fit">
                                                        <SelectValue placeholder="Hiển thị" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="likes">Lượt thích</SelectItem>
                                                            <SelectItem value="news">Mới nhất</SelectItem>
                                                            <SelectItem value="oldest">Cũ nhất</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
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
                                                    <p>Gửi bình luận</p>
                                                    <SendHorizontal className="w-4 h-4 block align-middle" />
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="divider border-t border-solid border-black/5 mt-4"></div>
                                        <div className="comments space-y-20">
                                            {fans.user.map((data, index) => (
                                                <div className="space-y-3" key={index}>
                                                    <div className="w-full flex items-center">
                                                        <div className="avatar mr-4">
                                                            <Avatar>
                                                                <AvatarImage src={data.avatar} alt="Avatar cover" />
                                                                <AvatarFallback>CN</AvatarFallback>
                                                            </Avatar>
                                                        </div>
                                                        <div className="info space-y-1.5">
                                                            <div className="name">
                                                                <p className="font-semibold text-base cursor-pointer">{data.userName}</p>
                                                            </div>
                                                            <div className="flex items-center gap-4">
                                                                <div className="read text-sm flex items-center text-gray-400">
                                                                    <Clock className="w-4 h-4 block align-middle mr-2" />
                                                                    <p>{data.lastComment}</p>
                                                                </div>
                                                                <div className="read text-sm flex items-center text-gray-400">
                                                                    <Glasses className="w-4 h-4 block align-middle mr-2" />
                                                                    <p>Chương {data.lastRead}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="comment-content w-full">
                                                        <p className="font-normal text-base">{data.comment}</p>
                                                    </div>
                                                    <div className="feature-button">
                                                        <div className="w-full flex items-center justify-end">
                                                            <div className="likes-reply flex items-center gap-20">
                                                                <div className="flex items-center gap-2">
                                                                    <ThumbsUp className="w-4 h-4 block align-middle" />
                                                                    <p>0</p>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <Reply className="w-4 h-4 block align-middle" />
                                                                    <p>0</p>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <Flag className="w-4 h-4 block align-middle" />
                                                                    <p>Báo xấu</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            <div className="footer w-full">
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right col-span-2 pt-4 space-y-4">
                                        {fans.user.map((data, index) => (
                                            <div className="w-full">
                                                <div className="w-full" key={index}>
                                                    <img
                                                        className="w-full h-auto object-cover object-center"
                                                        src="https://static.cdnno.com/storage/topbox/3247e2a49468941c8d63d69049f7443a.jpg"
                                                        alt="Book Cover"
                                                    />
                                                </div>
                                                <div className="divider border-t border-black/5 border-solid my-4"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="likes">
                                <div className="p-4 space-y-4">
                                    <div className="space-y-4">
                                        <p className="font-semibold text-lg">
                                            Người hâm mộ hàng đầu
                                        </p>
                                        {fans.user.map((data, index) => (
                                            <div className="grid grid-cols-4" key={index}>
                                                <div className="flex items-center gap-4">
                                                    {index < 3 &&
                                                        <div className="flex col-span-1 justify-center items-center rounded-full bg-yellow-500 px-2 text-background font-bold">{index + 1}
                                                        </div>
                                                    }
                                                    {
                                                        index >= 3 && <div className="flex justify-center items-center px-2 font-bold">
                                                            {index + 1}
                                                        </div>
                                                    }
                                                    <div className="avatar">
                                                        <Avatar>
                                                            <AvatarImage src={data.avatar} alt="Avatar cover" />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                        </Avatar>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="username">{data.userName}</div>
                                                        <div className="role">{data.role}</div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    {index < 3 &&
                                                        <div className="flex col-span-1 justify-center items-center rounded-full bg-yellow-500 px-2 text-background font-bold">{index + 1}
                                                        </div>
                                                    }
                                                    {
                                                        index >= 3 && <div className="flex justify-center items-center px-2 font-bold">
                                                            {index + 1}
                                                        </div>
                                                    }
                                                    <div className="avatar">
                                                        <Avatar>
                                                            <AvatarImage src={data.avatar} alt="Avatar cover" />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                        </Avatar>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="username">{data.userName}</div>
                                                        <div className="role">{data.role}</div>
                                                    </div>
                                                </div><div className="flex items-center gap-4">
                                                    {index < 3 &&
                                                        <div className="flex col-span-1 justify-center items-center rounded-full bg-yellow-500 px-2 text-background font-bold">{index + 1}
                                                        </div>
                                                    }
                                                    {
                                                        index >= 3 && <div className="flex justify-center items-center px-2 font-bold">
                                                            {index + 1}
                                                        </div>
                                                    }
                                                    <div className="avatar">
                                                        <Avatar>
                                                            <AvatarImage src={data.avatar} alt="Avatar cover" />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                        </Avatar>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="username">{data.userName}</div>
                                                        <div className="role">{data.role}</div>
                                                    </div>
                                                </div><div className="flex items-center gap-4">
                                                    {index < 3 &&
                                                        <div className="flex col-span-1 justify-center items-center rounded-full bg-yellow-500 px-2 text-background font-bold">{index + 1}
                                                        </div>
                                                    }
                                                    {
                                                        index >= 3 && <div className="flex justify-center items-center px-2 font-bold">
                                                            {index + 1}
                                                        </div>
                                                    }
                                                    <div className="avatar">
                                                        <Avatar>
                                                            <AvatarImage src={data.avatar} alt="Avatar cover" />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                        </Avatar>
                                                    </div>
                                                    <div className="flex flex-col">
                                                        <div className="username">{data.userName}</div>
                                                        <div className="role">{data.role}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="footer w-full py-12">
                                            <Pagination className="flex justify-end">
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
                                        </div>
                                        <div className="tutorial space-y-4">
                                            <p className="font-semibold">Hướng dẫn</p>
                                            <div className="rules space-y-4">
                                                <div className="content space-y-3">
                                                    <div className="pb-4 space-y-3">
                                                        <p className="font-semibold">Một, làm sao để trở thành người hâm mộ?</p>
                                                        <ul className="list-disc text-sm ml-8 items-center">
                                                            <li>
                                                                <p>
                                                                    Khi bạn tặng hoa, tặng quà cho truyện hoặc trả phí đọc truyện, bạn trở thành người hâm mộ của truyện.
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="pb-4 space-y-3">
                                                        <p className="font-semibold">Hai, cách tính điểm hâm mộ?</p>
                                                        <ul className="list-disc text-sm ml-8 items-center">
                                                            <li>
                                                                <p>
                                                                    Tiêu xài 1 Kẹo = 1 điểm hâm mộ (trả phí đọc, tặng quà)
                                                                </p>
                                                            </li>
                                                            <li>
                                                                <p>
                                                                    Tặng 1 Hoa = 1000 điểm hâm mộ
                                                                </p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="pb-4 space-y-3">
                                                        <p className="font-semibold">
                                                            Ba, điểm hâm mộ hiện tại của tôi?
                                                        </p>
                                                        <ul className="list-disc text-sm ml-8 items-center">
                                                            <li>
                                                                <p>
                                                                    Bạn cần đăng nhập mới xem được điểm hâm mộ và xếp hạng của mình
                                                                </p>
                                                            </li>
                                                        </ul>
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
            </div>
        </div>
    );
}

export default Details;