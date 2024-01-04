import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
    return (
        <div className="flex items-center border border-slate-400 rounded-md overflow-hidden">
            <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 w-full focus:outline-none"
            />
            <button className="bg-white text-slate-500 p-2 text-2xl">
                <FaSearch />
            </button>
        </div>
    );
};

export default SearchInput;
