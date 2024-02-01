

import "./carousel.css"

import book from "../../../../public/book.jpg"
import { ArrowLeft, ArrowRight, Eye } from "lucide-react"

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
import { Button } from "@/components/ui/button"
import React from "react"

import homeData from "./homeData.json"

interface categories {
    name: string
}
interface newChapter {
    name: string,
    link: string,
    lastest: number,
    categories: categories[],
    time: string,
}

interface Book {
    name: string;
    author: string;
    description: string;
    image?: string;
    link: string;
    categories: Category[];
    status: string;
    view: number;
    lastest?: number;
}

interface Category {
    name: string;
}



const HomePage = () => {
    const OPTIONS: EmblaOptionsType = { align: 'center', dragFree: false, loop: true }
    // const SLIDE_COUNT = 5
    // const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    const newChapter: newChapter[] = homeData.newChapter;
    const [newChapterData, setNewChapterData] = React.useState<newChapter[]>(newChapter);

    const filterNewChapter = (category: string) => {
        if (category === "Tất cả") {
            setNewChapterData(newChapter);
        } else {
            setNewChapterData(newChapter.filter(p => p.categories.find(c => c.name === category) != null));
        }
    }

    const categories: categories[] = homeData.category;
    const DemoData: Book[] = homeData.books;

    return (
        <div className="flex flex-col gap-4">
            <Card className="p-6">
                <div id="section-1" className="flex flex-col gap-4  w-full">
                    <div className="flex flex-col md:flex-row justify-between w-full ">
                        <p className="font-bold text-base">Biên tập viên đề cử</p>
                        <div className="flex justify-between gap-4">
                            <Button variant={"outline"}><ArrowLeft /></Button>
                            <Button variant={"outline"}><ArrowRight /></Button>
                        </div>
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
                                                        <AspectRatio ratio={2 / 3}>
                                                            <img className="max-w-full rounded-lg w-full h-full  object-cover object-center" src={data.image ?? book} alt="book cover" />
                                                        </AspectRatio>
                                                    </Link>
                                                </div>
                                                <Link to={"/"} className="text-sm text-start font-bold line-clamp-2 min-h-10 hover:text-blue-500">{data.name}</Link>
                                                <Link className=" text-start text-sm line-clamp-2 hover:text-blue-500" to={"/"}>{data.author}</Link>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div className="flex flex-row justify-between items-start gap-2">

                                                <AspectRatio ratio={2 / 3}>
                                                    <img className="rounded-lg h-20 w-16  object-cover object-center" src={data.image ?? book} alt="book cover" />
                                                </AspectRatio>

                                                <p className="text-sm font-bold">{data.name}</p>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))
                        }
                    </div>
                    <div className="w-full flex justify-end">
                        <Button variant={"link"}>
                            <Link to={"/tatca"}>Xem tất cả</Link>
                        </Button>
                    </div>
                </div>
            </Card>
            <div id="section-new-chapter" className="grid grid-cols-12 gap-4">
                <Card className="col-span-12 md:col-span-8 lg:col-span-9">
                    <CardContent className="p-0 sm:p-6">
                        <div className="flex flex-col md:flex-row justify-between w-full mt-4">
                            <p className="font-bold text-base">Chương mới cập nhật</p>
                        </div>
                        <table className="table-auto w-full border-spacing-x-2">
                            <thead>
                                <tr className="w-full grid grid-cols-12 my-4 border-collapse border border-slate-200 p-2 py-4 rounded-md items-center">
                                    <th className="text-xs sm:text-sm text-start col-span-7 md:col-span-4 lg:col-span-5 font-bold">Tên truyện</th>
                                    <th className="text-xs sm:text-sm md:col-span-4 lg:col-span-3  hidden md:block text-start font-bold">Thể loại</th>
                                    <th className="text-xs text-start col-span-5 md:col-span-4 lg:col-span-2 font-bold mx-4">Chương</th>
                                    <th className="text-xs sm:text-sm hidden lg:col-span-2 lg:block text-start font-bold">Thời gian</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newChapterData.slice(0, 15).map((data, index) => (
                                    <tr key={index} className="w-full grid grid-cols-12 border-collapse border px-2 border-slate-200 py-1 items-center rounded-md my-1" >
                                        <td className="text-xs sm:text-sm col-span-7 md:col-span-4 lg:col-span-5 line-clamp-3">{data.name}</td>
                                        <td className="text-xs sm:text-sm md:col-span-4 lg:col-span-3 hidden md:block line-clamp-3">{data.categories.slice(0, 2).map((cate, index) => (<span className="hover:text-blue-500" key={index}>{cate.name}{
                                            index < data.categories.length - 1 && ", "
                                        } </span>))}</td>
                                        <td className="text-xs sm:text-sm col-span-5 md:col-span-4 lg:col-span-2"><Link to={"/tatca"}><Button variant={"link"} className="text-green-700 text-xs sm:text-sm">Chương {data.lastest}</Button></Link></td>
                                        <td className="text-xs sm:text-sm hidden lg:col-span-2 lg:block">{data.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </CardContent>
                    <CardFooter>
                        <div className="w-full flex justify-end">
                            <Button variant={"link"}>
                                <Link to={"/tatca"}>Xem tất cả</Link>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
                <div id="section-categories" className="col-span-12 md:col-span-4 lg:col-span-3">
                    <Card >
                        <CardContent>
                            <div className="flex flex-col md:flex-row justify-between w-full my-4">
                                <p className="font-bold text-base">Thể loại truyện</p>
                            </div>
                            <div className="flex flex-wrap gap-2 w-full items-stretch justify-stretch">
                                {categories.map((data, index) =>
                                (
                                    <Button key={index} variant={"outline"} className="text-green-700" onClick={() => {
                                        filterNewChapter(data.name);
                                    }}>
                                        <p className="text-sm">{data.name}</p>
                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <div className="w-full flex justify-end">
                                <Button variant={"link"}>
                                    <Link to={"/tatca"}>Xem tất cả</Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <Card className="p-6">
                <div id="section-complete">
                    <div className="flex flex-col md:flex-row justify-between w-full mb-4">
                        <p className="font-bold text-base">Mới đăng</p>
                    </div>
                    <div>

                    </div>
                </div>
            </Card>

            <div id="section-3" className="grid grid-cols-12 gap-4 w-full">
                <div className="flex flex-col w-full col-span-12 lg:col-span-8">
                    <Card className="p-6">
                        <div className="flex flex-col md:flex-row justify-between w-full mb-4">
                            <p className="font-bold text-base">Truyện mới</p>
                            <Link className="hover:underline hover:to-blue-500" to={"/"}>Xem tất cả</Link>
                        </div>
                        <section className="relative">
                            <EmblaCarousel options={OPTIONS} details={DemoData} />
                        </section>
                    </Card>
                </div>
                <div className="flex flex-col gap-4 w-full col-span-12 lg:col-span-4">
                    <Card className="p-6">
                        <div className="flex flex-col md:flex-row justify-between w-full mb-4">
                            <p className="font-bold text-base">Mới đăng</p>
                        </div>
                        <div id="section-2" className="flex gap-4 w-full col-span-12 lg:col-span-4">
                            <Tabs defaultValue="mostInWeek" className="w-full">
                                <TabsList className="grid w-full grid-cols-3">
                                    <TabsTrigger value="mostInWeek">Đọc nhiều</TabsTrigger>
                                    <TabsTrigger value="mostAllWeek">Thịnh hành</TabsTrigger>
                                    <TabsTrigger value="recommendOfWeek">Đề cử</TabsTrigger>
                                </TabsList>
                                <TabsContent value="mostInWeek">
                                    <CardHeader>
                                        <CardTitle className="font-bold">Đọc nhiều trong tuần</CardTitle>
                                    </CardHeader>
                                    <CardContent >
                                        <div className="flex flex-col gap-y-2">
                                            {
                                                DemoData.slice(0, 10).map((data, index) =>
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
                                                            <TooltipProvider>
                                                                <Tooltip>
                                                                    <TooltipTrigger>
                                                                        <div className="flex flex-col h-full text-start gap-2">
                                                                            <p className="font-bold truncate text-sm hover:text-blue-500">
                                                                                {data.name}
                                                                            </p>
                                                                            {index < 1 &&
                                                                                <div className="flex flex-col justify-end items-baseline gap-2">
                                                                                    <div className="flex gap-2 items-center"><Eye size={16} />  <p className="text-xs text-gray-500 line-clamp-2">{data.view}</p></div>

                                                                                    <p className="text-xs text-gray-500 line-clamp-2">{data.author}</p>
                                                                                </div>
                                                                            }
                                                                        </div>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p className="text-base font-bold">{data.name}</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        </div>

                                                        {index < 1
                                                            &&
                                                            <div className="col-span-3">

                                                                <AspectRatio ratio={2 / 3}>
                                                                    <img className="rounded-lg h-full w-full object-cover object-center" src={data.image ?? book} alt="book cover" />
                                                                </AspectRatio>

                                                            </div>
                                                        }
                                                        {index >= 1 &&
                                                            <div className="col-span-2 "><p className="text-xs text-gray-500 line-clamp-2">{data.view}</p>
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

                                </TabsContent>
                                <TabsContent value="mostAllWeek">
                                    <CardHeader>
                                        <CardTitle className="font-bold ">Thịnh hành tuần</CardTitle>
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
                                                                            <p className="font-bold truncate text-sm hover:text-blue-500">
                                                                                {data.name}
                                                                            </p>
                                                                            {index < 1 &&
                                                                                <div className="flex flex-col justify-end items-baseline gap-2">
                                                                                    <div className="flex gap-2 items-center"><Eye />  <p className="text-xs text-gray-500 line-clamp-2">{data.view}</p></div>

                                                                                    <p className="text-xs text-gray-500 line-clamp-2">{data.author}</p>
                                                                                </div>
                                                                            }
                                                                        </div>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p className="text-base font-bold">{data.name}</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        </div>

                                                        {index < 1
                                                            &&
                                                            <div className="col-span-3">
                                                                <AspectRatio ratio={2 / 3}>
                                                                    <img className="rounded-lg h-full w-full object-cover object-center" src={data.image ?? book} alt="book cover" />
                                                                </AspectRatio>

                                                            </div>
                                                        }

                                                        {index >= 1 &&
                                                            <div className="col-span-2 "><p className="text-xs text-gray-500 line-clamp-2">{data.view}</p>
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

                                </TabsContent>
                                <TabsContent value="recommendOfWeek">
                                    <CardHeader>
                                        <CardTitle className="font-bold">Đề cử tuần</CardTitle>
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
                                                                            <p className="font-bold truncate text-sm hover:text-blue-500">
                                                                                {data.name}
                                                                            </p>
                                                                            {index < 1 &&
                                                                                <div className="flex flex-col justify-end items-baseline gap-2">
                                                                                    <div className="flex gap-2 items-center"><Eye />  <p className="text-xs text-gray-500 line-clamp-2">{data.view}</p></div>

                                                                                    <p className="text-xs text-gray-500 line-clamp-2">{data.author}</p>
                                                                                </div>
                                                                            }
                                                                        </div>
                                                                    </TooltipTrigger>
                                                                    <TooltipContent>
                                                                        <p className="text-base font-bold">{data.name}</p>
                                                                    </TooltipContent>
                                                                </Tooltip>
                                                            </TooltipProvider>
                                                        </div>

                                                        {index < 1
                                                            &&
                                                            <div className="col-span-3">

                                                                <AspectRatio ratio={2 / 3}>
                                                                    <img className="rounded-lg h-full w-full object-cover object-center" src={data.image ?? book} alt="book cover" />
                                                                </AspectRatio>

                                                            </div>
                                                        }

                                                        {index >= 1 &&
                                                            <div className="col-span-2 "><p className="text-xs text-gray-500 line-clamp-2">{data.view}</p>
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
                                </TabsContent>
                            </Tabs>
                        </div>
                    </Card>
                </div>
            </div>
            <div id="section-4" className="flex flex-col gap-4 w-full">
                <Card className="p-6">

                    <div className="flex  flex-col md:flex-row justify-between w-full mb-4">
                        <p className="font-bold text-base">Truyện đã hoàn thành</p>
                        <Link className="hover:underline hover:to-blue-500" to={"/"}>Xem tất cả</Link>
                    </div>
                    <div className="w-full flex flex-row gap-4 overflow-x-scroll items-start ">
                        {
                            DemoData.map((data, index) =>
                            (
                                <TooltipProvider key={index}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div className="flex flex-col gap-2 items-start w-40">
                                                <div className="w-full">
                                                    <Link to="/truyen-tranh">

                                                        <AspectRatio ratio={2 / 3}>
                                                            <img className="max-w-full rounded-lg w-full h-full  object-cover object-center" src={data.image ?? book} alt="book cover" />
                                                        </AspectRatio>


                                                    </Link>
                                                </div>
                                                <Link to={"/"} className="text-sm text-start font-bold line-clamp-2 min-h-10 hover:text-blue-500">{data.name}</Link>
                                                <Link className=" text-start text-sm line-clamp-2 hover:text-blue-500" to={"/"}>{data.author}</Link>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div className="flex flex-row justify-between items-start gap-2">

                                                <AspectRatio ratio={2 / 3}>
                                                    <img className="rounded-lg h-20 w-16  object-cover object-center" src={data.image ?? book} alt="book cover" />
                                                </AspectRatio>

                                                <p className="text-sm font-bold">{data.name}</p>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))
                        }
                    </div>
                </Card>

            </div>
            <div id="section-random" className="flex flex-col gap-4 w-full">
                <Card className="p-6">

                    <div className="flex  flex-col md:flex-row justify-between w-full mb-4">
                        <p className="font-bold text-base">Truyện hay</p>
                        <Link className="hover:underline hover:to-blue-500" to={"/"}>Xem tất cả</Link>
                    </div>
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-start gap-4 ">
                        {
                            DemoData.map((data, index) =>
                            (
                                <TooltipProvider key={index}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <div className="flex flex-col gap-2 items-start w-full">
                                                <div className="w-full">
                                                    <Link to="/truyen-tranh">

                                                        <AspectRatio ratio={2 / 3}>
                                                            <img className="max-w-full rounded-lg w-full h-full  object-cover object-center" src={data.image ?? book} alt="book cover" />
                                                        </AspectRatio>

                                                    </Link>
                                                </div>
                                                <Link to={"/"} className="text-sm text-start font-bold line-clamp-2 min-h-10 hover:text-blue-500">{data.name}</Link>
                                                <Link className=" text-start text-sm line-clamp-2 hover:text-blue-500" to={"/"}>{data.author}</Link>
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div className="flex flex-row justify-between items-start gap-2">

                                                <AspectRatio ratio={2 / 3}>
                                                    <img className="rounded-lg h-20 w-16  object-cover object-center" src={data.image ?? book} alt="book cover" />
                                                </AspectRatio>

                                                <p className="text-sm font-bold">{data.name}</p>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))
                        }
                    </div>

                    <div className="flex justify-center items-center mt-8 my-4">
                        <div>
                            <Button variant={"outline"}>Xem thêm</Button>
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default HomePage 