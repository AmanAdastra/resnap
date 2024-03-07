import { NavigationBar } from "@/components/common/NavigationBar";
import { SideBar } from "@/components/SideBar/SideBar";
import StoryComponent from "@/components/HomePage/StoryComponent";
import AddPostComponent from "@/components/HomePage/AddPostComponent";
import FriendRequestComponent from "@/components/HomePage/FriendRequestComponent";

export default function Page() {
    return (
        <>
            <NavigationBar />
            <div className="flex">
                <SideBar />
                <div className="flex w-full overflow-y-auto pt-[96px]">
                    <div className='flex w-full h-full '>
                        <div className=" w-[10%]">
                        </div>
                        <div className="flex justify-center w-[70%] ">
                            <div className="w-[58%] " >
                                <StoryComponent />
                                <AddPostComponent />
                            </div>
                            <div className=" w-[30%] ">
                                <FriendRequestComponent/>
                            </div>
                        </div>
                        <div className=" w-[10%]">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
