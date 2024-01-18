import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Trash } from "lucide-react";

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

const SaveBooks = () => {
    return (
        <div>
            <Tabs defaultValue="reading" className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-auto">
                    <TabsTrigger value="reading" className="md:text-xl">Đang đọc</TabsTrigger>
                    <TabsTrigger value="archive" className="md:text-xl">Đã lưu</TabsTrigger>
                </TabsList>
                <TabsContent value="reading">
                    <Table>
                        <TableHeader>
                            <TableRow className="md:text-xl">
                                <TableHead>Hình ảnh</TableHead>
                                <TableHead>Tên truyện</TableHead>
                                <TableHead>Tập</TableHead>
                                <TableHead className="text-right text-red-500">Xóa</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {DemoData.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-normal">
                                        <img
                                            className="object-cover cursor-pointer w-24 h-auto rounded-xl md:w-40"
                                            src={data.img}
                                            alt="Books cover"
                                        />
                                    </TableCell>
                                    <TableCell className="font-semibold text-sm cursor-pointer hover:text-blue-500 md:text-lg">{data.title}</TableCell>
                                    <TableCell className="font-normal text-foreground cursor-pointer italic hover:text-blue-500 md:text-lg">{data.newChapter}</TableCell>
                                    <TableCell>
                                        <Trash className="w-4 h-4 block align-middle ml-auto cursor-pointer" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
                <TabsContent value="archive">
                <Table>
                        <TableHeader>
                            <TableRow className="text-xl">
                                <TableHead>Hình ảnh</TableHead>
                                <TableHead>Tên truyện</TableHead>
                                <TableHead>Tập</TableHead>
                                <TableHead className="text-right text-red-500">Xóa</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {DemoData.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-normal">
                                        <img
                                            className="object-cover cursor-pointer w-24 h-auto rounded-xl md:w-40"
                                            src={data.img}
                                            alt="Books cover"
                                        />
                                    </TableCell>
                                    <TableCell className="font-semibold text-sm cursor-pointer hover:text-blue-500 md:text-lg">{data.title}</TableCell>
                                    <TableCell className="font-normal text-foreground cursor-pointer italic hover:text-blue-500 md:text-lg">{data.newChapter}</TableCell>
                                    <TableCell>
                                        <Trash className="w-4 h-4 block align-middle ml-auto cursor-pointer" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default SaveBooks;