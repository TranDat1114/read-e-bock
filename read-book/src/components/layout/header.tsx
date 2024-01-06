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
            <header className="container h-16 backdrop-blur-md flex justify-between items-center gap-1">
                <div className="justify-between flex items-center gap-3">
                    <AlignJustify className='text-foreground' />
                    <h1 className="font-bold text-foreground">LOGO</h1>
                    <div className='hidden md:flex justify-between items-center'>

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

                                    </div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <Link to="/login">
                            <Button>Đăng ký</Button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;


