import { useRef, ChangeEvent, useState } from "react"
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
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const SettingsPage = () => {
    const [date, setDate] = useState<Date>()


    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleAvatarClick = () => {
        // Trigger click on the file input
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        // Handle the selected file
        const selectedFile = e.target.files?.[0];
        console.log('Selected file:', selectedFile);

        // You can perform additional actions with the selected file, such as uploading it, etc.
    };

    return (
        <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto">
                <TabsTrigger value="profile" className="md:text-xl">Hồ sơ</TabsTrigger>
                <TabsTrigger value="security" className="md:text-xl">Bảo mật</TabsTrigger>
                <TabsTrigger value="notification" className="md:text-xl">Thông báo</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
                <Card className="md:px-96">
                    <CardHeader>
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col items-center gap-4">
                                <CardTitle className="md:text-xl">Thay đổi ảnh cá nhân</CardTitle>
                                <div className="avatar">
                                    <Input
                                        id="picture"
                                        type="file"
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        ref={fileInputRef} />
                                    <Avatar className="w-32 h-auto block align-middle cursor-pointer md:w-44" onClick={handleAvatarClick}>
                                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                        <AvatarFallback>AVA</AvatarFallback>
                                    </Avatar>
                                </div>
                                <div className="desc">
                                    <CardDescription className="italic">
                                        Ấn vào ảnh để thay đổi ảnh cá nhân, ảnh có kích thước không quá 1MB
                                    </CardDescription>
                                </div>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-1">
                            <Label htmlFor="name" className="md:text-lg">Tên hiển thị</Label>
                            <Input id="name" defaultValue="John Doe" placeholder="Tên của bạn là gì?" className="md:text-base"/>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Label htmlFor="birthday" className="md:text-lg">Năm sinh</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-full justify-start text-left font-normal md:text-base",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span className="md:text-base">Chọn ngày</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="sex" className="md:text-lg">Giới tính</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Vui lòng chọn giới tính" className="md:text-base"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="male">Nam</SelectItem>
                                        <SelectItem value="female">Nữ</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1">
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="bio" className="md:text-lg">Giới thiệu ngắn</Label>
                                <Textarea placeholder="Viết một vài giới thiệu ngắn về bạn." id="bio" className="text-base"/>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="email" className="md:text-lg">Email</Label>
                                <Input type="email" id="email" placeholder="Email" defaultValue="emailcủabạn.com" className="md:text-base"/>
                                <p className="text-sm text-muted-foreground italic md:text-base">
                                    Lưu ý: nếu đổi email phải vào email cũ xác nhận thì mới có hiệu lực.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button>Cập nhật</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="security">
                <Card className="md:px-96">
                    <CardContent className="space-y-2 mt-4">
                        <div className="space-y-1">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="newPassword" className="md:text-lg">Mật khẩu mới</Label>
                                <Input type="password" id="oldPassword" placeholder="******" className="md:text-base"/>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="confirmPassword" className="md:text-lg">Xác nhận mật khẩu mới</Label>
                                <Input type="password" id="confirmPassword" placeholder="******" className="md:text-base"/>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button>Cập nhật</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="notification">
                <Card className="md:px-96">
                    <CardContent className="space-y-4 mt-4">
                        <div className="space-y-1">
                            <Label htmlFor="notiNewChapter" className="md:text-lg">Thông báo chương mới</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Vui lòng chọn cài đặt thông báo" className="md:text-base"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="on">Bật</SelectItem>
                                        <SelectItem value="off">Tắt</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="notiNewContact" className="md:text-lg">Thông báo tương tác</Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Vui lòng chọn cài đặt thông báo" className="md:text-base"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="on">Bật</SelectItem>
                                        <SelectItem value="off">Tắt</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button>Cập nhật</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    );
}

export default SettingsPage;