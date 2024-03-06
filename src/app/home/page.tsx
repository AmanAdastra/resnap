import { NavigationBar } from "@/components/common/NavigationBar";
import { SideBar } from "@/components/SideBar/SideBar";
import StoryComponent from "@/components/HomePage/StoryComponent";
import AddPostComponent from "@/components/HomePage/AddPostComponent";

export default function Page() {
    return (
        <>
            <NavigationBar />
            <div className="flex">
                <SideBar />
                <div className="flex w-full overflow-y-auto pt-[96px]">
                    <div className='w-2/3 h-full '>
                        <StoryComponent />
                        <AddPostComponent/>
                    </div>
                    <div className='w-1/3 h-full '>
                    </div>
                </div>
            </div>
        </>
    );
}
