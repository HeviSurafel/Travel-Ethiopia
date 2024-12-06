
import Sidebar from "../components/Sidebar";
import EventList from "../components/EventList";
import PackageList from "../components/PackageList";
import UserList from "../components/UserList";

function Dashboard() {
  return (
    <div className="flex relative top-[130px]">
      <Sidebar />
      <div className="flex-1">

        <div className="p-6">
          {/* Depending on the route, show the corresponding component */}
          <EventList />
          <PackageList /> 
          <UserList /> 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
