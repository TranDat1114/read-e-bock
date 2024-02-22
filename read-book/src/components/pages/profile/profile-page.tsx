import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { User } from "lucide-react";

const ProfilePage = () => {

    return (
        <div className="md:grid md:grid-cols-2">
            <div className="profile grid grid-cols-3 p-4 gap-4 mb-2 space-x-2 md:flex md:grid-cols-2">
                <div className="col-span-1">
                    <Avatar className="w-20 h-auto block align-middle">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>AVA</AvatarFallback>
                    </Avatar>
                </div>
                <div className="col-span-2 space-y-5 pl-4">
                    <div className="w-full flex items-center justify-between">
                        <p className="text-foreground font-bold text-xl truncate max-w-36">ten</p>
                        <div>
                            <Badge variant="outline">level 0</Badge>
                        </div>
                    </div>
                    <div className="online flex items-center text-sm">
                        <User className="w-4 h-4 block align-middle mr-2" />
                        <p className="font-normal">một phút trước</p>
                    </div>
                </div>
            </div>
            <div className="books-profile flex flex-col p-4 mb-6 gap-4 md:col-span-2">
                <div className="read grid grid-cols-3 items-center">
                    <div className="col-span-1">
                        <p className="uppercase text-sm">Đã đọc</p>
                    </div>
                    <div className="col-span-2 ">
                        <div>
                            <span className="font-semibold">0&nbsp;</span>
                            truyện
                        </div>
                        <div>
                            <span className="font-semibold">0&nbsp;</span>
                            truyện
                        </div>
                    </div>
                </div>
                <div className="comment grid grid-cols-3">
                    <div className="col-span-1">
                        <p className="uppercase text-sm">Bình luận</p>
                    </div>
                    <div className="col-span-2">
                        <span className="font-semibold">0</span>
                    </div>
                </div>
                <div className="suggest grid grid-cols-3">
                    <div className="col-span-1">
                        <p className="uppercase text-sm">Đề cử</p>
                    </div>
                    <div className="col-span-2">
                        <span className="font-semibold">0</span>
                    </div>
                </div>
                <div className="likes grid grid-cols-3">
                    <div className="col-span-1">
                        <p className="uppercase text-sm">thích</p>
                    </div>
                    <div className="col-span-2">
                        <span className="font-semibold">0</span>

                    </div>
                </div>
                <div className="archive grid grid-cols-3">
                    <div className="col-span-1">
                        <p className="uppercase text-sm">cất giữ</p>
                    </div>
                    <div className="col-span-2">
                        <span className="font-semibold">0</span>
                    </div>
                </div>
            </div>
            <div className="col-span-3">
                <div className="flex items-center justify-center">
                    <p className="text-xl font-semibold italic text-foreground">
                        Chưa có nội dung
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;