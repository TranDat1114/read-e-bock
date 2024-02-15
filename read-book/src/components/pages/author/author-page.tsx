import { Book, Glasses, File } from "lucide-react";
import AuthorData from "./author.json"


interface Author {
    "authorName": string,
    "book": Books[],
}

interface Books {
    "name": string,
    "img": string,
    "desc": string,
    "categories": string,
    "chapter": number,
    "views": number,
}

const author: Author = AuthorData.author;

const TacGia = () => {
    return (
        <div>
            <div className="mobile space-y-4 p-4 md:hidden">
                <div className="title">
                    <h1 className="font-semibold text-lg">
                        {author.authorName}
                    </h1>
                </div>
                <div className="books-info">
                    <div className="space-y-4">
                        {author.book.map((book, index) => (
                            <div className="space-y-4">
                                <div className="grid grid-cols-3 items-center gap-4" key={index}>
                                    <div>
                                        <img
                                            alt="Books Cover"
                                            src={book.img}
                                            className="w-24 h-auto object-center bg-center"
                                        />
                                    </div>
                                    <div className="col-span-2 space-y-2">
                                        <div className="title">
                                            <p className="font-bold capitalize">
                                                {book.name}
                                            </p>
                                        </div>
                                        <div className="desc">
                                            <p className="w-full truncate">
                                                {book.desc}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-4 text-sm">
                                            <div className="categories">
                                                <div className="flex items-center gap-2 text-black/70">
                                                    <Book className="w-4 h-4 block align-middle" />
                                                    {book.categories}
                                                </div>
                                            </div>
                                            <div className="chapter">
                                                <div className="flex items-center gap-2 text-black/70">
                                                    <File className="w-4 h-4 block align-middle" />
                                                    {book.chapter} chương
                                                </div>
                                            </div>
                                            <div className="views">
                                                <div className="flex items-center gap-2 text-black/70">
                                                    <Glasses className="w-4 h-4 block align-middle" />
                                                    {book.views} lượt xem
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider border-t border-solid border-black/10"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="desktop space-y-4 bg-white p-4 hidden md:block">
                <div className="title">
                    <h1 className="font-semibold text-lg">
                        {author.authorName}
                    </h1>
                </div>
                <div className="books-info">
                    <div className="space-y-4">
                        {author.book.map((book, index) => (
                            <div className="space-y-4">
                                <div className="grid grid-cols-12 items-center gap-4" key={index}>
                                    <div className="">
                                        <img
                                            alt="Books Cover"
                                            src={book.img}
                                            className="w-24 h-auto object-center bg-center"
                                        />
                                    </div>
                                    <div className="col-span-11 space-y-2">
                                        <div className="title">
                                            <p className="font-bold capitalize">
                                                {book.name}
                                            </p>
                                        </div>
                                        <div className="desc">
                                            <p className="w-full truncate">
                                                {book.desc}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
                                            <div className="flex items-center gap-4">
                                                <div className="categories">
                                                    <div className="flex items-center gap-2 text-black/70">
                                                        <Book className="w-4 h-4 block align-middle" />
                                                        {book.categories}
                                                    </div>
                                                </div>
                                                <div className="chapter">
                                                    <div className="flex items-center gap-2 text-black/70">
                                                        <File className="w-4 h-4 block align-middle" />
                                                        {book.chapter} chương
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="views">
                                                <div className="flex items-center gap-2 text-black/70">
                                                    <Glasses className="w-4 h-4 block align-middle" />
                                                    {book.views} lượt xem
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider border-t border-solid border-black/10"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TacGia;