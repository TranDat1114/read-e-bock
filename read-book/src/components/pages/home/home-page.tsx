

import book from "../../../../public/book.jpg"
import { Eye, Heart, GanttChartSquare } from "lucide-react"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Link } from "react-router-dom"
import { AspectRatio } from "@/components/ui/aspect-ratio"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

interface Data {
    title: string,
    describe: string,
    views: number,
    likes: number,
    comments: number,
    author: string,
    newChapter?: string,
    img?: string,
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
        newChapter: "Chapter 8: A Long-expected Party"
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
    return (
        <div className="">
            <div className="grid grid-cols-12 justify-between gap-8">
                <div id="section-1" className="flex flex-col gap-4 col-span-12 lg:col-span-8 w-full">
                    <div className="flex justify-between w-full">
                        <p className="font-bold text-xl">Biên tập viên đề cử</p>
                        <Link className="underline hover:to-blue-500" to={"/"}>Xem tất cả</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {
                            DemoData.slice(0, 6).map((data, index) =>
                            (
                                <div key={index} className="grid grid-cols-3 justify-between items-stretch gap-4">
                                    {
                                        data.img ?
                                            <AspectRatio ratio={2 / 3}>
                                                <img className="rounded-lg h-full w-full  object-cover object-center" src={data.img} />
                                            </AspectRatio>
                                            :
                                            <AspectRatio ratio={2 / 3}>
                                                <img className="rounded-lg h-full w-full object-cover object-center" src={book} alt="background" />
                                            </AspectRatio>
                                    }
                                    <div className="flex flex-col justify-between gap-2 max-w-prose col-span-2">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <div className="text-base text-start font-bold truncate  hover:text-blue-500">{data.title}</div>
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
                                                        <p className="text-base font-bold">{data.title}</p>

                                                    </div>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <div className="text-sm text-gray-500 line-clamp-2">{data.describe}</div>
                                        <Link className="text-base line-clamp-2 hover:text-blue-500" to={""}>{data.author}</Link>
                                        <div className="flex justify-between items-center">
                                            <div className="text-sm text-gray-500"><Eye /> {data.views}</div>
                                            <div className="text-sm text-gray-500"><Heart /> {data.likes}</div>
                                            <div className="text-sm text-gray-500"><GanttChartSquare /> {data.comments}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                

            </div>
            <div id="section-3" className="flex gap-4 w-full">
                <Tabs defaultValue="mostInWeek" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="mostInWeek">Đọc nhiều tuần</TabsTrigger>
                        <TabsTrigger value="mostAllWeek">Thịnh hành tuần</TabsTrigger>
                        <TabsTrigger value="recommendOfWeek">Đề cử tuần</TabsTrigger>
                    </TabsList>
                    <TabsContent value="mostInWeek">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account</CardTitle>
                                <CardDescription>
                                    Make changes to your account here. Click save when you're done.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="Pedro Duarte" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username" defaultValue="@peduarte" />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="mostAllWeek">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you'll be logged out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Current password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="recommendOfWeek">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you'll be logged out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Current password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default HomePage 