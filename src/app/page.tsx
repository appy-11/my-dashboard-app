
import AppHeader from "./components/AppHeader";
import AppNavbar from "./components/AppNavbar";
import ProfileCard from "./components/ProfileCard";
import Calendar from "./components/Calendar";
import Projects from "./components/Projects";
import Inbox from "./components/Inbox";
import DetailsCard from "./components/DetailsCard";
import SectionHeader from "./components/SectionHeader";

export default function Home() {
  return (
    <div className="flex h-screen">
      <AppNavbar />
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        <AppHeader />
        <SectionHeader />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 mt-4">
          <div className="col-span-4 flex flex-col gap-4">
            <ProfileCard />
            <DetailsCard />
          </div>
          <div className="col-span-8 grid grid-cols-3 gap-4">
            <div className="col-span-3">
              <Projects />
            </div>
            <div className="col-span-2">
              <Calendar />
            </div>
            <div className="col-span-1">
              <Inbox />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

