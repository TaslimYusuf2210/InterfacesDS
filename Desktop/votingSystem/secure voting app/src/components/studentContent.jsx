import { Link, Outlet } from "react-router-dom"

function StudentContent() {
    return ( 
        <div className="w-full h-screen bg-blue-500 flex">
            <aside className="bg-brand text-center text-white fixed h-screen px-4 py-8">
                <h1 className="font-icon">Voting System</h1>
                <div className="h-full">
                    <li className="list-none p-6 h-full flex flex-col justify-between">
                        <ul>Dashboard</ul>
                        <ul>Logout</ul>
                    </li>
                </div>
            </aside>
            <main className="h-screen w-full bg-red-500 overflow-y-auto">
                <h1 className="text-yellow-400">Main content here</h1>
                <Outlet/>
            </main>
        </div>
     );
}

export default StudentContent;