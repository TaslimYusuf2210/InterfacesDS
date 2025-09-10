import { Link, Outlet } from "react-router-dom"

function AdminContent() {
    return ( 
        <div className="flex h-screen w-full bg-blue-600">
            <aside className="bg-amber-400 fixed h-screen p-4">
                <h1>Testing....1,2,3.</h1>
            </aside>
            <main className="h-screen w-full bg-red-500 overflow-y-auto ml-[200px]">
                <h1>Main content here (Admin side)</h1>
                <Outlet/>
            </main>
        </div>
     );
}

export default AdminContent;