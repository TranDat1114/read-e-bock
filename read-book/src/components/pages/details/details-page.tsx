import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
                <div className="detail flex flex-col">
                    <div className="grid grid-cols-3 justify-start">
                        <div className="text-foreground">
                            <div className="author">Tác giả</div>
                        </div>
                        <div className="col-span-2"></div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Details;