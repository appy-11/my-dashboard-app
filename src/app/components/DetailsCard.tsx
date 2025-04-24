export default function DetailsCard() {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold mb-4">Detailed Information</h3>
            <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span className="font-medium">Full Name:</span> <span>Robert Smith</span></li>
                <li className="flex justify-between"><span className="font-medium">Email Address:</span> <span>robertsmith64@gmail.com</span></li>
                <li className="flex justify-between"><span className="font-medium">Contact Number:</span> <span>(555) 555-5674</span></li>
                <li className="flex justify-between"><span className="font-medium">Designation:</span> <span>Product Designer</span></li>
                <li className="flex justify-between"><span className="font-medium">Availability:</span> <span>Schedule the time slot</span></li>
            </ul>
        </div>
    )
}