export default function SectionHeader() {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Profile</h1>;
      <div className="flex justify-between items-center px-4 py-2">
        <button className="bg-black text-white px-4 py-1 rounded m-2">Pending</button>
        <button className="bg-black text-white px-4 py-1 rounded">March,2024</button>
      </div>
    </div>
  );
}
