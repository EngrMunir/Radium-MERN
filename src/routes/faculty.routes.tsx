import AdminDashboard from "../pages/admin/AdminDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const facultyPaths =[
    {
        name:'Dashboard',
        path:'dashboard',
        element:<AdminDashboard/>,
    },
    {
        name:'Offered Course',
        path:'offered-course',
        element:<OfferedCourse/>
    }
    
];