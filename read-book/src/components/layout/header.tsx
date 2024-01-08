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
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
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
import React from 'react';
import { Input } from '../ui/input';
const Header = () => {
    const [openSearchBox, setOpenSearchBox] = React.useState(false)
    return (
        <>
            <header className="bg-background w-full  backdrop-blur-md ">
                <div className='container flex justify-between items-center gap-4  h-16 '>

                    <div className="justify-between flex items-center gap-4">
                        <div className='block md:hidden'>

                            <Sheet>
                                <SheetTrigger>
                                    <AlignJustify className='text-foreground' />
                                </SheetTrigger>
                                <SheetContent side={'left'}>
                                    <SheetHeader>
                                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                                        <SheetDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </SheetDescription>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                        <Link to={"/"}>
                            <h1 className="font-bold text-foreground">LOGO</h1>
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
                                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] grid-cols-1 ">
                                                <Link to="/" title="Tất cả">
                                                    <div className='flex flex-col justify-center items-start'>
                                                        <p className='font-bold'>
                                                            Tất cả thể loại
                                                        </p>
                                                        <p>
                                                            Tất cả thể loại
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link to="/docs/installation" title="Installation">
                                                    <div className='flex flex-col justify-center items-start'>
                                                        <p className='font-bold'>
                                                            Truyện kiếm hiệp
                                                        </p>
                                                        <p >
                                                            Truyện kể về cuộc phiêu lưu của những cao thủ, kiếm khách hay còn gọi là hiệp khách sống trên giang hồ
                                                        </p>
                                                    </div>
                                                </Link>
                                                <Link to="/docs/primitives/typography" title="Typography">
                                                    <div className='flex flex-col justify-center items-start'>
                                                        <p className='font-bold'>
                                                            Truyện ngôn tình
                                                        </p>
                                                        <p>
                                                            Tất cả thể loại
                                                        </p>
                                                    </div>
                                                </Link>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>
                                            <Link to={"ranking"}>
                                                Xếp hạng
                                            </Link>
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>

                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                    <NavigationMenuItem>
                                        <Link to="/news" >
                                            Truyện mới
                                        </Link>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                        </div>
                    </div>

                    <div className='w-full max-w-64 inline-flex justify-between bg-background border px-4 py-2 rounded-md items-center cursor-pointer'>
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
                                    <Input placeholder='Gõ tên hoặc nội dung truyện để tìm kiếm...' />
                                    <Button className=''><Search /></Button>
                                </div>
                                <div className='flex flex-col items-center justify-between gap-2'>
                                    <div className='w-full inline-flex justify-between items-center gap-2'>
                                        <img className='object-cover object-center h-32' src='https://images.unsplash.com/photo-1704241485844-5df18f026028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8' alt="" />
                                        <div className='w-full flex flex-col h-full'>
                                            <p>Name</p>
                                            <p>Author</p>
                                            <p>Category</p>
                                            <p>View</p>
                                            <p>DEMO</p>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className=" hidden md:flex justify-between items-center gap-4">
                        <Link to="/register">
                            <Button>Đăng ký</Button>
                        </Link>

                        <Link to="/login">
                            <Button>Đăng nhập</Button>
                        </Link>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header;


