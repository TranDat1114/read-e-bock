

import "./carousel.css"

import book from "../../../../public/book.jpg"
import { Eye } from "lucide-react"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Link } from "react-router-dom"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import EmblaCarousel from "@/components/ui/EmblaCarousel"

import { EmblaOptionsType } from 'embla-carousel'
// import { Card } from "@/components/ui/card";

import imageByIndex from "./imageByIndex"
import { Button } from "@/components/ui/button"
interface Data {
    title: string,
    describe: string,
    views: number,
    likes: number,
    comments: number,
    author: string,
    newChapter?: string,
    img?: string,
    lastUpdate?: string,
    updateBy?: string,
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
        lastUpdate: "1 ngày trước",
        updateBy: "Trần Hoàng",
    },
    {
        title: "Harry Potter",
        describe: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
        views: 100,
        likes: 100,
        comments: 100,
        author: "J. K. Rowling",
        img: "https://th.bing.com/th/id/R.92044013da12968d0b8bdcc6ae3d18c9?rik=wG6rgHrxhL1voA&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fytxnHu3wlTcbmCuLLM2Z8Zs1Dtz.jpg&ehk=38SObxUi0o%2fbhpIyexmaXiDb02h7dtLviQS6NpSYiLM%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        title: "The Little Prince",
        describe: "The Little Prince is a novella by French aristocrat, writer, and aviator Antoine de Saint-Exupéry. It was first published in English and French in the US by Reynal & Hitchcock in April 1943, and posthumously in France following the liberation of France as Saint-Exupéry's works had been banned by the Vichy Regime.",
        views: 100,
        likes: 100,
        comments: 100,
        author: "Antoine de Saint-Exupéry",
    },
    {
        title: "The Hobbit",
        describe: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
        views: 100,
        likes: 100,
        comments: 100,
        author: "J. R. R. Tolkien",
        newChapter: "Chapter 8: A Long-expected Party",
        lastUpdate: "20 phút trước",
        updateBy: "Trần Hoàng",
    },
    {
        title: "Alice's Adventures in Wonderland",
        describe: "The Alice's Adventures in Wonderland, ",
        views: 100,
        likes: 100,
        comments: 100,
        author: "Lewis Carroll",

    },
    {
        title: "Dream of the Red Chamber",
        describe: "Dream of the Red Chamber, also called The Story of the Stone, composed by Cao Xueqin, is one of China's Four Great Classical Novels. It was written some time in the middle of the 18th century during the Qing dynasty.",
        views: 100,
        likes: 100,
        comments: 100,
        author: "Cao Xueqin",
    },
    {
        title: "And Then There Were None",
        describe: "",
        views: 100,
        likes: 100,
        comments: 100,
        author: "Agatha Christie",
    }


]

const HomePage = () => {
    const OPTIONS: EmblaOptionsType = { align: 'center', dragFree: false, loop: true }
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <div className="flex flex-col gap-y-16">
            <Card className="py-4 px-2 lg:px-6  m-2">
                <div id="section-1" className="flex flex-col gap-4  w-full">
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        <p className="font-bold text-base">Biên tập viên đề cử</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 w-full items-start justify-between">
                        {
                            DemoData.slice(0, 6).map((data, index) =>
                            (
                                <TooltipProvider key={index}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div className="flex flex-col gap-2 items-start">
                                                <div className="w-full">
                                                    <Link to="/truyen-tranh">
                                                        {
                                                            data.img ?
                                                                <AspectRatio ratio={2 / 3}>
                                                                    <img className="max-w-full rounded-lg w-full h-full  object-cover object-center" src={data.img} />
                                                                </AspectRatio>

                                                                :

                                                                <AspectRatio ratio={2 / 3}>
                                                                    <img className="max-w-full rounded-lg w-full h-full object-cover object-center" src={book} alt="background" />
                                                                </AspectRatio>

                                                        }
                                                    </Link>
                                                </div>
                                                <Link to={"/"} className="text-sm text-start font-bold line-clamp-2 min-h-10 hover:text-blue-500">{data.title}</Link>
                                                <Link className=" text-start text-xs line-clamp-2 hover:text-blue-500" to={"/"}>{data.author}</Link>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div className="flex flex-row justify-between items-start gap-2">
                                                {
                                                    data.img ?
                                                        <AspectRatio ratio={2 / 3}>
                                                            <img className="rounded-lg h-20 w-16  object-cover object-center" src={data.img} />
                                                        </AspectRatio>
                                                        :
                                                        <AspectRatio ratio={2 / 3}>

                                                            <img className="rounded-lg h-20 w-16 object-cover object-center" src={book} alt="background" />
                                                        </AspectRatio>

                                                }
                                                <p className="text-sm font-bold">{data.title}</p>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))
                        }

                    </div>
                    <div className="w-full flex justify-end">
                        <Button variant={"link"}>
                            <Link to={"/"}>Xem tất cả</Link>
                        </Button>
                    </div>
                </div>

            </Card>
            <Card className="py-4 px-2 lg:px-6 m-2">
                <div id="section-new-chapter" className="flex flex-col gap-4  w-full">
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        <p className="font-bold text-base">Chương mới cập nhật</p>
                    </div>
                    <div>

                    </div>
                </div>
            </Card>
            <div id="section-2" className="flex gap-4 w-full col-span-12 lg:col-span-4">
                <Tabs defaultValue="mostInWeek" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="mostInWeek">Đọc nhiều</TabsTrigger>
                        <TabsTrigger value="mostAllWeek">Thịnh hành</TabsTrigger>
                        <TabsTrigger value="recommendOfWeek">Đề cử</TabsTrigger>
                    </TabsList>
                    <TabsContent value="mostInWeek">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-bold text-base">Đọc nhiều trong tuần</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-2">
                                    {
                                        DemoData.slice(0, 10).map((data, index) =>
                                        (
                                            <div key={index} className="grid grid-cols-12 justify-between items-stretch gap-2 border-b-2 py-2 w-full">

                                                {index < 3 &&
                                                    <div className="flex col-span-1 justify-center items-center rounded-full bg-yellow-500 px-2 text-white font-bold">{index + 1}
                                                    </div>
                                                }
                                                {
                                                    index >= 3 && <div className="flex justify-center items-center px-2 font-bold">
                                                        {index + 1}
                                                    </div>
                                                }
                                                <div className={`flex flex-col justify-between gap-2 w-full h-full ${index == 0 ? "col-span-8" : "col-span-9"}`}>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger>
                                                                <div className="flex flex-col h-full text-start gap-2">
                                                                    <p className="font-bold truncate hover:text-blue-500">
                                                                        {data.title}
                                                                    </p>
                                                                    {index < 1 &&
                                                                        <div className="flex flex-col justify-end items-baseline gap-2">
                                                                            <div className="flex gap-2 items-center"><Eye />  <p className="text-xs text-gray-500 line-clamp-2">{data.views}</p></div>

                                                                            <p className="text-xs text-gray-500 line-clamp-2">{data.author}</p>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="text-base font-bold">{data.title}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </div>

                                                {index < 1
                                                    &&
                                                    <div className="col-span-3">
                                                        {
                                                            data.img ?
                                                                <AspectRatio ratio={2 / 3}>
                                                                    <img className="rounded-lg h-full w-full object-cover object-center" src={data.img} />
                                                                </AspectRatio>
                                                                :
                                                                <AspectRatio ratio={2 / 3}>

                                                                    <img className="rounded-lg h-full w-full object-cover object-center" src={book} alt="background" />
                                                                </AspectRatio>
                                                        }
                                                    </div>
                                                }
                                                {index >= 1 &&
                                                    <div className="col-span-2 "><p className="text-xs text-gray-500 line-clamp-2">{data.views}</p>
                                                    </div>}
                                            </div>
                                        ))
                                    }
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className="flex justify-end w-full">
                                    <Link className="hover:underline hover:to-blue-500" to={"/"}>Xem tất cả</Link>
                                </div>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="mostAllWeek">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-bold text-xl">Thịnh hành tuần</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-2">
                                    {
                                        DemoData.slice(0, 10).map((data, index) =>
                                        (
                                            <div key={index} className="grid grid-cols-12 justify-between items-stretch gap-2 border-b-2 py-2 w-full">

                                                {index < 3 &&
                                                    <div className="flex col-span-1 justify-center items-center rounded-full bg-yellow-500 px-2 text-white font-bold">{index + 1}
                                                    </div>
                                                }
                                                {
                                                    index >= 3 && <div className="flex justify-center items-center px-2 font-bold">
                                                        {index + 1}
                                                    </div>
                                                }
                                                <div className={`flex flex-col justify-between gap-2 w-full h-full ${index == 0 ? "col-span-8" : "col-span-9"}`}>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger>
                                                                <div className="flex flex-col h-full text-start gap-2">
                                                                    <p className="font-bold truncate hover:text-blue-500">
                                                                        {data.title}
                                                                    </p>
                                                                    {index < 1 &&
                                                                        <div className="flex flex-col justify-end items-baseline gap-2">
                                                                            <div className="flex gap-2 items-center"><Eye />  <p className="text-xs text-gray-500 line-clamp-2">{data.views}</p></div>

                                                                            <p className="text-xs text-gray-500 line-clamp-2">{data.author}</p>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="text-base font-bold">{data.title}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </div>

                                                {index < 1
                                                    &&
                                                    <div className="col-span-3">
                                                        {
                                                            data.img ?
                                                                <AspectRatio ratio={2 / 3}>
                                                                    <img className="rounded-lg h-full w-full object-cover object-center" src={data.img} />
                                                                </AspectRatio>
                                                                :
                                                                <AspectRatio ratio={2 / 3}>

                                                                    <img className="rounded-lg h-full w-full object-cover object-center" src={book} alt="background" />
                                                                </AspectRatio>

                                                        }
                                                    </div>
                                                }

                                                {index >= 1 &&
                                                    <div className="col-span-2 "><p className="text-xs text-gray-500 line-clamp-2">{data.views}</p>
                                                    </div>}

                                            </div>

                                        ))
                                    }
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className="flex justify-end w-full">
                                    <Link className="hover:underline hover:to-blue-500" to={"/"}>Xem tất cả</Link>
                                </div>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="recommendOfWeek">
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-bold text-xl">Đề cử tuần</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-2">
                                    {
                                        DemoData.reverse().slice(0, 10).map((data, index) =>
                                        (
                                            <div key={index} className="grid grid-cols-12 justify-between items-stretch gap-2 border-b-2 py-2 w-full">

                                                {index < 3 &&
                                                    <div className="flex col-span-1 justify-center items-center rounded-full bg-yellow-500 px-2 text-white font-bold">{index + 1}
                                                    </div>
                                                }
                                                {
                                                    index >= 3 && <div className="flex justify-center items-center px-2 font-bold">
                                                        {index + 1}
                                                    </div>
                                                }
                                                <div className={`flex flex-col justify-between gap-2 w-full h-full ${index == 0 ? "col-span-8" : "col-span-9"}`}>
                                                    <TooltipProvider>
                                                        <Tooltip>
                                                            <TooltipTrigger>
                                                                <div className="flex flex-col h-full text-start gap-2">
                                                                    <p className="font-bold truncate hover:text-blue-500">
                                                                        {data.title}
                                                                    </p>
                                                                    {index < 1 &&
                                                                        <div className="flex flex-col justify-end items-baseline gap-2">
                                                                            <div className="flex gap-2 items-center"><Eye />  <p className="text-xs text-gray-500 line-clamp-2">{data.views}</p></div>

                                                                            <p className="text-xs text-gray-500 line-clamp-2">{data.author}</p>
                                                                        </div>
                                                                    }
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="text-base font-bold">{data.title}</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </div>

                                                {index < 1
                                                    &&
                                                    <div className="col-span-3">
                                                        {
                                                            data.img ?
                                                                <AspectRatio ratio={2 / 3}>
                                                                    <img className="rounded-lg h-full w-full object-cover object-center" src={data.img} />
                                                                </AspectRatio>
                                                                :
                                                                <AspectRatio ratio={2 / 3}>

                                                                    <img className="rounded-lg h-full w-full object-cover object-center" src={book} alt="background" />
                                                                </AspectRatio>

                                                        }
                                                    </div>
                                                }

                                                {index >= 1 &&
                                                    <div className="col-span-2 "><p className="text-xs text-gray-500 line-clamp-2">{data.views}</p>
                                                    </div>}

                                            </div>

                                        ))
                                    }
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className="flex justify-end w-full">
                                    <Link className="hover:underline hover:to-blue-500" to={"/"}>Xem tất cả</Link>
                                </div>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
                dC</div>

            <div id="section-3" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 w-full">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        <p className="font-bold text-xl">Mới đăng</p>
                        <Link className="hover:underline hover:to-blue-500" to={"/"}>Xem tất cả</Link>
                    </div>
                    <section className="relative">
                        <EmblaCarousel slides={SLIDES} options={OPTIONS} imageByIndex={imageByIndex} />
                    </section>

                </div>
                <div className="flex flex-col gap-4 w-full col-span-1 lg:col-span-2">
                    <div className="flex flex-col md:flex-row justify-between w-full">
                        <p className="font-bold text-xl">Mới hoàn thành</p>
                        <Link className="hover:underline hover:to-blue-500" to={"/"}>Xem tất cả</Link>
                    </div>

                </div>
            </div>
            <div id="section-4" className="flex flex-col gap-4 w-full">
                <div className="flex  flex-col md:flex-row justify-between w-full">
                    <p className="font-bold text-xl">Chương mới cập nhật</p>
                    <Link className="hover:underline hover:to-blue-500" to={"/"}>Xem tất cả</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        DemoData.filter(p => p.newChapter != null).map((data, index) =>
                        (
                            <div key={index} className="grid grid-cols-3 justify-between items-stretch gap-2">
                                {
                                    data.img ?
                                        <AspectRatio ratio={2 / 3}>
                                            <img className="rounded-lg h-full w-full object-cover object-center" src={data.img} />
                                        </AspectRatio>
                                        :
                                        <AspectRatio ratio={2 / 3}>

                                            <img className="rounded-lg h-full w-full object-cover object-center" src={book} alt="background" />
                                        </AspectRatio>

                                }
                                <div className="flex flex-col justify-between gap-2 max-w-prose col-span-2 ">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <div className="text-base text-start font-bold truncate hover:text-blue-500">{data.title}</div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="text-base font-bold">{data.title}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <Link to={"/"} className="text-base line-clamp-2 hover:text-blue-500">Tác giả: {data.author}</Link>

                                    {data.newChapter && <Link to={`detail:${data.newChapter}`} className="text-xs text-gray-500 hover:text-blue-500 line-clamp-2">{data.newChapter}</Link>}

                                    <p className="text-gray-500 hover:text-blue-500 line-clamp-2 text-xs">{data.lastUpdate}</p>
                                    <p className="text-gray-500 hover:text-blue-500 line-clamp-2 text-xs">Bởi {data.updateBy}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage 