// interface Props {
//     handleSearch: () => void;
//     handleInputChange: (value: string) => void;
//     inputValue: string;
// }

function SearchBar() {
    // const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     handleInputChange(event.target.value);
    // };

    return (
        <>
            <div className="flex justify-between item-center">
                <input
                    type="text"
                    placeholder="find doctors, services...."
                    className="bg-emerald-50 px-5 py-2.5 rounded-lg focus:rounded-lg
                        mr-4 text-sm border focus:outline-0 shadow-lg"
                    // value={inputValue}
                    // onChange={handleInput}
                />
                <button
                    className="border-2 px-4 hover:bg-emerald-200 shadow-lg rounded-lg text-xs"
                    // onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </>
    );
}

export default SearchBar;
