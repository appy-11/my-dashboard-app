export default function ProfileCard() {
    return (
        <div className="bg-white rounded-lg shadow p-4 text-center">
            <h2 className="font-semibold text-lg">Robert Smith</h2>
            <p className="text-gray-500 text-sm">Product Designer</p>
            <div className="flex justify-center gap-2 my-4">
                <button className="text-xl">📧</button>
                <button className="text-xl">📞</button>
                <button className="text-xl">💬</button>
                <button className="text-xl">📹</button>
            </div>
            <div>
                <label className="text-xs text-gray-400">Time Slots</label>
                <input type="month" defaultValue="2024-04" className="w-full border px-2 py-1 mt-1 rounded" />
                <button className="mt-2 bg-gray-100 px-4 py-1 w-full rounded">Meetings (3)</button>
            </div>
        </div>
    )
}