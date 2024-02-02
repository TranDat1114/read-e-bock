
import { AlignJustify, ChevronsUpDown, Search } from 'lucide-react';
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
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
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
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


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
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import headerData from './headerData.json';

interface BookData {
    name: string;
    author: string;
    category: string;
    viewCount: number;
    demoLink: string;
}

import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface navbaritems {
    name: string;
    link: string;
}

interface categories {
    name: string;
    link?: string;
}

const navbarRanksItem: navbaritems[] = [
    {
        name: 'Thịnh hành',
        link: '/thinh-hanh'
    },
    {
        name: "Đọc nhiều",
        link: '/doc-nhieu'
    },
    {
        name: "Đề cử",
        link: '/de-cu'
    }
]

const categoriesItem: categories[] = headerData.category;

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    const [hide, setHide] = useState(true); // state variable to store the navbar visibility
    const [lastScrollY, setLastScrollY] = useState(0); // state variable to store the previous scroll position



    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY) { // if scroll down, hide the navbar
                setHide(false);
            } else { // if scroll up, show the navbar
                setHide(true);
            }
            // remember the current scroll position for the next move
            setLastScrollY(window.scrollY);
        };
        window.addEventListener('scroll', controlNavbar); // add the scroll event listener
        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar); // remove the scroll event listener
        };
    }, [lastScrollY]); // only re-run the effect if the lastScrollY changes

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
    const [openLoginBox, setOpenLoginBox] = React.useState(false)

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

        if (values.email === "dangnhap@gmail.com" && values.password === "123456") {
            setIsLogin(true)
            setOpenLoginBox(false)
        }
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
        <header className={`bg-background w-full backdrop-blur-md fixed top-0 z-50 shadow-md navbar-active ${!hide && 'navbar-hidden'}`}>
            <div className='lg:container flex justify-between items-center gap-4 h-16 px-2'>
                <div className="justify-between flex items-center gap-4">
                    <div className='md:hidden'>
                        <Sheet >
                            <SheetTrigger >
                                <AlignJustify className='text-foreground mt-2' />
                            </SheetTrigger>
                            <SheetContent side={'left'} className='h-dvh overflow-y-scroll' >
                                <SheetHeader>
                                    <SheetTitle> <h1 className="  text-foreground">LOGO</h1></SheetTitle>
                                    <SheetDescription>

                                    </SheetDescription>
                                </SheetHeader>
                                <div className='flex flex-col w-full gap-2'>
                                    <Button variant={'ghost'} className={`text-sm font-semibold ${isLogin ? "hidden" : "block"}`}>Đăng nhập / Đăng ký</Button>
                                    <hr />
                                    <div className='min-w-full flex flex-col space-y-3'>
                                        <Collapsible className='min-w-full'>
                                            <CollapsibleTrigger asChild>
                                                <div className='justify-between inline-flex gap-x-4  w-full'>
                                                    <p className={`whitespace-nowrap font-semibold text-sm ${navigationMenuTriggerStyle()}`}>Thể loại</p>
                                                    <Button variant="ghost" size="sm" className="">
                                                        <ChevronsUpDown size={16} />
                                                        <span className="sr-only">Toggle</span>
                                                    </Button>
                                                </div>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent className='flex flex-col gap-1 justify-start ml-4'>
                                                {
                                                    categoriesItem.map((item, index) => (
                                                        <Link to={item.link ?? "/"} title={item.name} key={index} className={`${navigationMenuTriggerStyle()}`}>
                                                            <div className='flex flex-col justify-center items-start'>
                                                                <p className='text-nowrap hover:text-blue-500 text-start'>
                                                                    {item.name}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))
                                                }
                                            </CollapsibleContent>
                                        </Collapsible>

                                        <Collapsible className='min-w-full'>
                                            <CollapsibleTrigger asChild>
                                                <div className='justify-between inline-flex gap-x-4 w-full'>
                                                    <p className={`whitespace-nowrap font-semibold text-sm ${navigationMenuTriggerStyle()}`}>Xếp hạng</p>
                                                    <Button variant="ghost" size="sm" className="">
                                                        <ChevronsUpDown size={16} />
                                                        <span className="sr-only">Toggle</span>
                                                    </Button>
                                                </div>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent className='flex flex-col gap-1 justify-start ml-4'>
                                                {
                                                    navbarRanksItem.map((item, index) => (
                                                        <Link to={item.link} title={item.name} key={index} className={`${navigationMenuTriggerStyle()}`}>
                                                            <div className='flex flex-col justify-center items-start'>
                                                                <p className='text-nowrap hover:text-blue-500 text-start'>
                                                                    {item.name}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))
                                                }
                                            </CollapsibleContent>
                                        </Collapsible>
                                        <Link to="/news" className={`whitespace-nowrap font-semibold text-sm ${navigationMenuTriggerStyle()}`} >
                                            Truyện mới
                                        </Link>
                                    </div>

                                </div>
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
                                        <p>
                                            Thể loại
                                        </p>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid grid-cols-4 gap-3 p-4 w-[700px]">
                                            {
                                                categoriesItem.map((item, index) => (
                                                    <Link to={item.link ?? "/"} title={item.name} key={index} className={`${navigationMenuTriggerStyle()} w-full`}>
                                                        <div className='flex flex-col justify-center items-start'>
                                                            <p className='text-nowrap hover:text-blue-500'>
                                                                {item.name}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        <p className='whitespace-nowrap'>
                                            Xếp hạng
                                        </p>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="flex gap-3 p-4 md:w-[350px] flex-wrap">
                                            {
                                                navbarRanksItem.map((item, index) => (
                                                    <Link to={item.link} title={item.name} key={index} className={`${navigationMenuTriggerStyle()}`} >
                                                        <div className='flex flex-col justify-center items-start'>
                                                            <p className='text-nowrap hover:text-blue-500 '>
                                                                {item.name}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                ))
                                            }
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/news" className={`whitespace-nowrap font-medium text-sm ${navigationMenuTriggerStyle()}`} >
                                        Truyện mới
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                    </div>
                </div>

                <div className='w-full max-w-10 md:max-w-64 inline-flex justify-end lg:justify-center bg-background border p-2 md:px-4 rounded-full items-center cursor-pointer'>
                    <Dialog open={openSearchBox} onOpenChange={setOpenSearchBox}>
                        <DialogTrigger asChild>
                            <div className='w-full inline-flex justify-end lg:justify-between items-center'>
                                <div className="font-medium border-none outline-none focus-visible:ring-0 text-sm hidden md:block">Tìm kiếm truyện...</div>
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
                    <Dialog open={openLoginBox} onOpenChange={setOpenLoginBox}>
                        <DialogTrigger asChild>
                            <Button variant={'ghost'} className={`text-sm ${isLogin ? "hidden" : "block"}`}>Đăng nhập / Đăng ký</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] h-dvh md:h-[500px]">
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
                    <div className={`${isLogin ? "flex" : "hidden"}`}>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className='flex flex-wrap items-center justify-center space-x-4 cursor-pointer'>
                                    <div className='avatar'>
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className='info flex flex-col items-center'>
                                        <div className='name font-semibold'>user123</div>
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Link to="/trang-ca-nhan">
                                            <p>
                                                Hồ sơ
                                            </p>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link to="/luu-tru">
                                            <p>
                                                Tủ truyện
                                            </p>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link to="/cai-dat">
                                            <p>
                                                Cài đặt
                                            </p>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Link to="/">
                                            <p>
                                                Đăng xuất
                                            </p>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;


