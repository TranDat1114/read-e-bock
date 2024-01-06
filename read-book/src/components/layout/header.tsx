import { AlignJustify, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    DialogDescription,
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
const Header = () => {

    const [open, setOpen] = React.useState(false)

    return (
        <>
            <header className="container h-16 backdrop-blur-md flex justify-between items-center gap-1">
                <div className="justify-between flex items-center gap-3">
                    <AlignJustify />
                    <h1 className="font-bold">LOGO</h1>
                    <div className='hidden md:flex justify-between items-center'>

                    </div>
                </div>

                <div className='w-full max-w-64 inline-flex justify-between border bg-white px-4 py-2 rounded-md items-center cursor-pointer'>
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <div className='w-full flex justify-between items-center'>
                                <div className="font-medium border-none outline-none focus-visible:ring-0">Tìm kiếm truyện...</div>
                                <Search />
                            </div>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're done.
                                </DialogDescription>
                            </DialogHeader>
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


