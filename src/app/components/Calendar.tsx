export default function Calendar() {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold mb-4">Calendar - March</h3>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {[...Array(31)].map((_, i) => (
                    <div key={i} className={`py-2 rounded ${i === 4 ? 'bg-red-200' : 'bg-gray-100'}`}>{i + 1}</div>
                ))}
            </div>
        </div>
    )
}