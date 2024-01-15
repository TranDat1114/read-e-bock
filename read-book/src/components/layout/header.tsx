"use client";

import { AlignJustify, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    Card,
    CardContent,
    CardDescription,
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
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


// import {
//     Drawer,
//     DrawerClose,
//     DrawerContent,
//     DrawerDescription,
//     DrawerFooter,
//     DrawerHeader,
//     DrawerTitle,
//     DrawerTrigger,
// } from "@/components/ui/drawer"

interface BookData {
    name: string;
    author: string;
    category: string;
    viewCount: number;
    demoLink: string;
}

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const Header = () => {


    const formSchema = z.object({
        email: z.string().email({
            message: "Vui lòng điên email chính xác"
        }).min(2, {
            message: "Vui lòng điền email của bạn.",
        }),
        password: z.string().min(6, {
            message: "Mật khẩu phải tối thiểu 6 ký tự.",
        }),
        confirmPassword: z.string(),
    }).superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "Hãy kiểm tra lại mật khẩu bạn đang không nhập đúng khi nhập xác thực"
            })
        }
    })

    const [openSearchBox, setOpenSearchBox] = React.useState(false)

    const [searchTerm, setSearchTerm] = useState('');
    const [showBookInfo, setShowBookInfo] = useState(false);
    const [bookData, setBookData] = useState<BookData | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    const handleSearch = (bookName: string) => {
        const book1: BookData = {
            name: 'abc',
            author: 'Tác giả Truyện 1',
            category: 'Thể loại 1',
            viewCount: 500,
            demoLink: 'https://linktodemo1.com'
        };

        const book2: BookData = {
            name: 'cde',
            author: 'Tác giả Truyện 2',
            category: 'Thể loại 2',
            viewCount: 700,
            demoLink: 'https://linktodemo2.com'
        };

        if (bookName === 'abc') {
            setBookData(book1);
        } else if (bookName === 'cde') {
            setBookData(book2);
        } else {
            setBookData(null); // Trường hợp không tìm thấy thông tin
        }

        setShowBookInfo(true);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch(searchTerm);
        }
    };

    return (
        <header className="bg-background w-full backdrop-blur-md sticky top-0 z-50">
            <div className='lg:container flex justify-between items-center gap-4 h-16 px-2'>
                <div className="justify-between flex items-center gap-4">
                    <div className='md:hidden'>
                        <Sheet>
                            <SheetTrigger >
                                <AlignJustify className='text-foreground mt-2' />
                            </SheetTrigger>
                            <SheetContent side={'left'} >
                                <SheetHeader>
                                    <SheetTitle>Thanh điều hướng</SheetTitle>
                                    <SheetDescription>
                                        <div className='flex flex-col w-full gap-4'>
                                            <Link to={"categories"} className='whitespace-nowrap'>
                                                Thể loại
                                            </Link>
                                            <Link to={"ranking"}>
                                                Bảng xếp hạng
                                            </Link>
                                            <Link to="/news" >
                                              <p className='font-bold'>Truyện mới</p>
                                            </Link>
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                    <Link to={"/"}>
                        <h1 className="  text-foreground">LOGO</h1>
                    </Link>

                    <div className='hidden md:flex justify-between items-center gap-4'>
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        <Link to={"categories"}>
                                            Thể loại
                                        </Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] grid-cols-1 ">
                                            <Link to="/" title="Tất cả">
                                                <div className='flex flex-col justify-center items-start'>
                                                    <p className=' '>
                                                        Tất cả thể loại
                                                    </p>
                                                    <p>
                                                        Tất cả thể loại
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="/docs/installation" title="Installation">
                                                <div className='flex flex-col justify-center items-start'>
                                                    <p className=' '>
                                                        Truyện kiếm hiệp
                                                    </p>
                                                    <p >
                                                        Truyện kể về cuộc phiêu lưu của những cao thủ, kiếm khách hay còn gọi là hiệp khách sống trên giang hồ
                                                    </p>
                                                </div>
                                            </Link>
                                            <Link to="/docs/primitives/typography" title="Typography" className='whitespace-nowrap'>
                                                <div className='flex flex-col justify-center items-start'>
                                                    <p className=' '>
                                                        Truyện ngôn tình
                                                    </p>
                                                    <p>
                                                        Tất cả thể loại
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        <Link to={"ranking"} className='whitespace-nowrap'>
                                            Xếp hạng
                                        </Link>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>

                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/news" className='whitespace-nowrap' >
                                        Truyện mới
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                    </div>
                </div>

                <div className='w-full lg:max-w-64 inline-flex justify-end lg:justify-center bg-background border px-4 py-2 rounded-full items-center cursor-pointer'>
                    <Dialog open={openSearchBox} onOpenChange={setOpenSearchBox}>
                        <DialogTrigger asChild>
                            <div className='w-full flex justify-between items-center'>
                                <div className="font-medium border-none outline-none focus-visible:ring-0">Tìm kiếm truyện...</div>
                                <Search />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Tìm kiếm truyện</DialogTitle>
                            </DialogHeader>
                            <div className='inline-flex justify-between gap-x-2 items-center'>
                                <Input
                                    placeholder='Gõ tên hoặc nội dung truyện để tìm kiếm...'
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                                <Button className=''
                                    onClick={() => handleSearch(searchTerm)}
                                >
                                    <Search />
                                </Button>
                            </div>
                            {showBookInfo && bookData && (
                                <div className='flex flex-col items-center justify-between gap-2'>
                                    <div className='w-full flex items-center gap-4'>
                                        <img className='object-cover object-center w-24 h-32 rounded-lg' src='https://static.cdnno.com/poster/van-co-de-nhat-than/150.jpg?1585205719' alt="" />
                                        <div className='flex flex-col'>
                                            <p className="text-xl font-semibold">{bookData.name}</p>
                                            <p className="text-gray-500">{bookData.author}</p>
                                            <p className="text-gray-500">{bookData.category}</p>
                                            <p className="text-gray-500">View: {bookData.viewCount}</p>
                                            <a href={bookData.demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">DEMO</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="hidden md:flex justify-end items-center gap-4">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant={'ghost'}>Đăng nhập / Đăng ký</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] h-[55%]">
                            <Tabs defaultValue="login" className='pt-4'>
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="login">Đăng nhập</TabsTrigger>
                                    <TabsTrigger value="register">Đăng ký</TabsTrigger>
                                </TabsList>
                                <TabsContent value="login">
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className='text-3xl'>Đăng nhập</CardTitle>
                                                    <CardDescription>
                                                        Đăng nhập vào tài khoản của bạn!
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent className="flex flex-col gap-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="email"
                                                        render={({ field }) => (
                                                            <>
                                                                <FormLabel>
                                                                    <Label htmlFor="email">Email</Label>
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <FormItem>
                                                                        <Input id="email" type='email' placeholder='youremail@email.email' {...field} />
                                                                    </FormItem>
                                                                </FormControl>
                                                                <FormMessage />
                                                            </>
                                                        )}
                                                    />
                                                    <FormLabel>
                                                        <Label htmlFor="email">Mật khẩu</Label>
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input id="password" type='password' placeholder='Nhập mật khẩu của bạn' />
                                                    </FormControl>
                                                    <FormMessage />
                                                </CardContent>
                                                <CardFooter>
                                                    <Button type='submit'>Đăng nhập</Button>
                                                </CardFooter>
                                            </Card>
                                        </form>
                                    </Form>
                                </TabsContent>
                                <TabsContent value="register">
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle className='text-3xl'>Đăng ký</CardTitle>
                                                    <CardDescription>
                                                        Đăng ký tài khoản của bạn!
                                                    </CardDescription>
                                                </CardHeader>
                                                <CardContent className="flex flex-col gap-2">
                                                    <FormField
                                                        control={form.control}
                                                        name="email"
                                                        render={({ field }) => (
                                                            <>
                                                                <FormLabel>
                                                                    <Label htmlFor="email">Email</Label>
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <FormItem>
                                                                        <Input id="email" type='email' placeholder='your@email.com' {...field} />
                                                                    </FormItem>
                                                                </FormControl>
                                                                <FormMessage />
                                                            </>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="password"
                                                        render={({ field }) => (
                                                            <>
                                                                <FormLabel>
                                                                    <Label htmlFor="password">Mật khẩu</Label>

                                                                </FormLabel>
                                                                <FormControl>
                                                                    <FormItem>
                                                                        <Input id="password" type='password' placeholder='Nhập mật khẩu'{...field} />
                                                                    </FormItem>
                                                                </FormControl>
                                                                <FormMessage />
                                                            </>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="confirmPassword"
                                                        render={({ field }) => (
                                                            <>
                                                                <FormLabel>
                                                                    <Label htmlFor="confirmPassword">Xác nhận mật khẩu</Label>

                                                                </FormLabel>
                                                                <FormControl>
                                                                    <FormItem>
                                                                        <Input id="confirmPassword" type='password' placeholder='Nhập lại mật khẩu'{...field} />
                                                                    </FormItem>
                                                                </FormControl>
                                                                <FormMessage />
                                                            </>
                                                        )}
                                                    />
                                                </CardContent>
                                                <CardFooter>
                                                    <Button type='submit'>Đăng ký</Button>
                                                </CardFooter>
                                            </Card>
                                        </form>
                                    </Form>

                                </TabsContent>
                            </Tabs>
                        </DialogContent>
                    </Dialog>

                </div>

            </div>
        </header >
    )
}

export default Header;


