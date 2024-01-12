import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";
import { Link } from "react-router-dom"
const Header = () => {
    const [searchQuery, setsearchQuery] = useState("");
    const [suggestion, setsuggestion] = useState([])
    const [showSuggestion, setshowSuggestion] = useState(false);

    const dispatch = useDispatch();
    
    const searchCache = useSelector((store) => store.search)
    

    useEffect(() => {
        // make an api call for every key press
        // but if diff b/w api call is less than 200 -> decline api call

        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setsuggestion(searchCache[searchQuery])
            }
            else{
                getSearchSuggestion()
            }    
        },200);
        // declining the api call
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    
    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setsuggestion(json[1])

        dispatch(cacheResult({
            [searchQuery]:json[1]
        }))
    };


    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className="grid grid-flow-col pl-8 py-2">
            <div className="flex col-span-3 items-center gap-5">
                <i
                    className="fa-solid fa-bars cursor-pointer text-lg text-gray-500"
                    onClick={() => {
                        handleToggleMenu();
                    }}
                ></i>
                <Link to="/">
                <img
                    className="h-5"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
                    alt="Logo"
                />
                </Link>
            </div>

            <div className="col-span-8 w-3/4 relative">
                <form className=" flex items-center"
                    onSubmit={(e) => {
                        e.preventDefault();                        
                    }}
                >
                    <input
                        className="w-4/6 px-4 py-1 border border-gray-200 rounded-l-full outline-none"
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => {
                            setsearchQuery(e.target.value);
                        }}
                        onFocus={() => setshowSuggestion(true)}
                        onBlur={() => setshowSuggestion(false)}
                    />
                    <Link to={"/search?query=" + searchQuery}>
                        <button>
                        <i className="fa-solid fa-magnifying-glass py-2 px-3 bg-gray-100 text-gray-600 border border-gray-200 rounded-r-full"></i>
                        </button>
                    </Link>
                </form>
                {showSuggestion &&
                    (<div className="absolute bg-white my-1 w-4/6 border border-gray-100 rounded-lg shadow-lg">
                        <ul>
                            {suggestion.map((s) => (
                                <li key={s} className="py-2 px-4 text-md cursor-pointer font-medium hover:bg-gray-100">
                                    <i className="fa-solid fa-magnifying-glass text-xs text-gray-700 mr-4"></i>
                                    {s}</li>
                            ))}
                        </ul>
                    </div>)
                }
            </div>

            <div className="col-span-1 text-lg flex items-center gap-6">
                <i className="fa-regular fa-bell"></i>
                <i className="fa-regular fa-user "></i>
            </div>
        </div>
    );
};

export default Header;