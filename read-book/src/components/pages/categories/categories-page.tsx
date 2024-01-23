import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDown, Settings2 } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

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
    finished?: string,
    newUpdate?: string,
    chapterCount?: number
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
        finished: "Hoàn thành",
        newUpdate: "Đang ra",
        chapterCount: 100,
        img: "https://th.bing.com/th/id/R.92044013da12968d0b8bdcc6ae3d18c9?rik=wG6rgHrxhL1voA&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fytxnHu3wlTcbmCuLLM2Z8Zs1Dtz.jpg&ehk=38SObxUi0o%2fbhpIyexmaXiDb02h7dtLviQS6NpSYiLM%3d&risl=&pid=ImgRaw&r=0",
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
        img: "https://th.bing.com/th/id/R.92044013da12968d0b8bdcc6ae3d18c9?rik=wG6rgHrxhL1voA&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fytxnHu3wlTcbmCuLLM2Z8Zs1Dtz.jpg&ehk=38SObxUi0o%2fbhpIyexmaXiDb02h7dtLviQS6NpSYiLM%3d&risl=&pid=ImgRaw&r=0",

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
        img: "https://th.bing.com/th/id/R.92044013da12968d0b8bdcc6ae3d18c9?rik=wG6rgHrxhL1voA&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fytxnHu3wlTcbmCuLLM2Z8Zs1Dtz.jpg&ehk=38SObxUi0o%2fbhpIyexmaXiDb02h7dtLviQS6NpSYiLM%3d&risl=&pid=ImgRaw&r=0",
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
        img: "https://th.bing.com/th/id/R.92044013da12968d0b8bdcc6ae3d18c9?rik=wG6rgHrxhL1voA&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fytxnHu3wlTcbmCuLLM2Z8Zs1Dtz.jpg&ehk=38SObxUi0o%2fbhpIyexmaXiDb02h7dtLviQS6NpSYiLM%3d&risl=&pid=ImgRaw&r=0",

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
        img: "https://th.bing.com/th/id/R.92044013da12968d0b8bdcc6ae3d18c9?rik=wG6rgHrxhL1voA&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fytxnHu3wlTcbmCuLLM2Z8Zs1Dtz.jpg&ehk=38SObxUi0o%2fbhpIyexmaXiDb02h7dtLviQS6NpSYiLM%3d&risl=&pid=ImgRaw&r=0",
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
        img: "https://th.bing.com/th/id/R.92044013da12968d0b8bdcc6ae3d18c9?rik=wG6rgHrxhL1voA&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fytxnHu3wlTcbmCuLLM2Z8Zs1Dtz.jpg&ehk=38SObxUi0o%2fbhpIyexmaXiDb02h7dtLviQS6NpSYiLM%3d&risl=&pid=ImgRaw&r=0",
    }
]

const categoriesPage = () => {
    return (
        <div className="navbar space-y-10 md:space-y-4">
            <div className="flex flex-wrap items-center gap-3 w-full md:justify-center md:gap-12">
                <div className="categories-list">
                    <Sheet>
                        <SheetTrigger >
                            <Settings2 className="text-foreground mt-2" />
                        </SheetTrigger>
                        <SheetContent side={'left'} >
                            <SheetHeader>
                                <SheetTitle className="pb-4 md:text-2xl">Danh sách truyện</SheetTitle>
                                <SheetDescription>
                                    <div className='flex flex-col w-full gap-4'>
                                        <div className="categories-content">
                                            <Accordion type="multiple" className="w-full">
                                                <AccordionItem value="item-1">
                                                    <AccordionTrigger>
                                                        <p className="md:text-xl">Thể loại</p>
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <div className="flex flex-wrap text-left h-full gap-1.5">
                                                            {DemoData[0].categories?.map((category, index) => (
                                                                <p key={index} className="md:text-lg">
                                                                    {category.name}
                                                                    <span className="text-foreground">
                                                                        {index !== DemoData[0].categories!.length - 1 && <> - </>}
                                                                    </span>
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                                <AccordionItem value="item-2">
                                                    <AccordionTrigger>
                                                        <p className="md:text-xl">Tình trạng</p>
                                                    </AccordionTrigger>
                                                    <AccordionContent>
                                                        <div className="flex flex-wrap text-left h-full gap-1.5">
                                                            <p className="md:text-lg">{DemoData[0].finished}</p>
                                                            <p className="md:text-lg">{DemoData[0].newUpdate}</p>
                                                        </div>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="books-status">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center justify-center">
                                <p className="font-semibold text-base md:text-xl">
                                    Mới cập nhật
                                </p>
                                <ChevronDown className="ml-1 w-4 h-4 block align-middle md:translate-y-0.5" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                            <DropdownMenuGroup className="space-y-0.5">
                                <DropdownMenuItem className="text-foreground text-sm md:text-base">
                                    Mới cập nhật
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-foreground text-sm md:text-base">
                                    Mới đăng
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="reviews">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center justify-center">
                                <p className="font-semibold text-base md:text-xl">
                                    Điểm đánh giá
                                </p>
                                <ChevronDown className="ml-1 w-4 h-4 block align-middle md:translate-y-0.5" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-auto">
                            <DropdownMenuGroup className="space-y-0.5">
                                <DropdownMenuItem className="text-foreground text-sm md:text-base">
                                    Lượt đánh giá
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-foreground text-sm md:text-base">
                                    Điểm đánh giá
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="archive">
                    <p className="font-semibold text-base md:text-xl">
                        Cất giữ
                    </p>
                </div>
                <div className="likes">
                    <p className="font-semibold text-base md:text-xl">
                        Yêu thích
                    </p>
                </div>
                <div className="suggestion">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center justify-center">
                                <p className="font-semibold text-base md:text-xl">
                                    Đề cử
                                </p>
                                <ChevronDown className="ml-1 w-4 h-4 block align-middle md:translate-y-0.5" />
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-auto">
                            <DropdownMenuGroup className="space-y-0.5">
                                <DropdownMenuItem className="text-foreground text-sm md:text-base">
                                    Đê cử [ngày]
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-foreground text-sm md:text-base">
                                    Đê cử [tuần]
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-foreground text-sm md:text-base">
                                    Đê cử [tháng]
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-foreground text-sm md:text-base">
                                    Đê cử [năm]
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="comments">
                    <p className="font-semibold text-base md:text-xl">
                        Bình luận
                    </p>
                </div>
                <div className="chapter-numbers">
                    <p className="font-semibold text-base md:text-xl">
                        Số chương
                    </p>
                </div>
            </div>
            <div className="divider border-t border-solid border-black/50"></div>
            <div className="books md:pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {DemoData.map((book, index) => (
                        <div key={index} className="grid grid-cols-3 gap-4 mx-4 my-4">
                            <div className="col-span-1">
                                <img src={book.img} alt="books cover" className="w-auto h-auto object-cover rounded-lg md:w-full md:h-auto" />
                            </div>
                            <div className="col-span-2">
                                <div className="w-full flex items-start flex-wrap justify-start">
                                    <p className="font-semibold text-xl truncate max-w-prose mb-2">
                                        {book.title}
                                    </p>
                                    <p className="text-base truncate mb-2">
                                        {book.describe}
                                    </p>
                                    <div className="flex justify-between items-center w-full mb-4">
                                        <p className="flex-wrap truncate max-w-32 italic">{book.author}</p>
                                        <p>{book.status}</p>
                                    </div>
                                    <div>{book.chapterCount} chương</div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pagination">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#" isActive>1</PaginationLink>
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
    )
}

export default categoriesPage