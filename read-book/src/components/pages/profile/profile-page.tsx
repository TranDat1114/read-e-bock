import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { User } from "lucide-react";
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";

const ProfilePage = () => {
    const [progress, setProgress] = useState(13)
    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            <div className="profile grid grid-cols-3 p-4 gap-4 mb-2">
                <div className="col-span-1">
                    <Avatar className="w-24 h-auto block align-middle">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>AVA</AvatarFallback>
                    </Avatar>
                </div>
                <div className="col-span-2 space-y-5">
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
            <div className="progress space-y-2">
                <Label htmlFor="reading">Kinh nghiệm</Label>
                <Progress value={progress} className="w-full" />
            </div>
            <div className="books-profile flex flex-col p-4 gap-4">
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
        </div>
    );
}

export default ProfilePage;