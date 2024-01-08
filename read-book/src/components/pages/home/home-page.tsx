
import book from "../../../../public/book.jpg"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const HomePage = () => {
    return (
        <>
       
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center gap-4">
                <div >
                    <AspectRatio ratio={7 / 10}>
                        <img className=" w-full rounded-lg h-full object-cover object-center" src={book} alt="background" />
                    </AspectRatio>
                </div>
                <div >
                    <AspectRatio ratio={7 / 10}>
                        <img className=" w-full rounded-lg h-full object-cover object-center" src={book} alt="background" />
                    </AspectRatio>
                </div>
                <div >
                    <AspectRatio ratio={7 / 10}>
                        <img className=" w-full rounded-lg h-full object-cover object-center" src={book} alt="background" />
                    </AspectRatio>
                </div>
            </div>
        </>
    )
}

export default HomePage 