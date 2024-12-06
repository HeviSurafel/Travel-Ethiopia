
import { Outlet } from "react-router-dom";
import { Sidebar } from "lucide-react";
function BlogLayout() {
  return (
    <div className="flex flex-col relative">
   
    <div className="flex">
      <Sidebar /> 
      <Outlet />
    </div>
  </div>
  )
}

export default BlogLayout