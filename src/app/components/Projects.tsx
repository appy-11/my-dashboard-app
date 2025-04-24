export default function Projects() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Ongoing Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-yellow-100 p-3 rounded">
                    <p className="font-medium">Web Designing</p>
                    <p className="text-sm text-gray-600">2 Days Left</p>
                </div>
                <div className="bg-blue-100 p-3 rounded">
                    <p className="font-medium">Mobile App</p>
                    <p className="text-sm text-gray-600">5 Days Left</p>
                </div>
                <div className="bg-pink-100 p-3 rounded">
                    <p className="font-medium">Dashboard</p>
                    <p className="text-sm text-gray-600">8 Days Left</p>
                </div>
            </div>
        </div>
    )
}