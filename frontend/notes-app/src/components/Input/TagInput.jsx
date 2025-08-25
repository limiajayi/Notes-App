import { MdAdd, MdClose } from "react-icons/md"


const TagInput = ({ tags, setTags }) => {
    return (
        <div>
            <div className="flex items-center gap-4 mt-3">
                <input 
                type="text"
                className="w-[50%] text-sm bg-transparent border-slate-700 px-3 py-2 rounded outline-none"
                placeholder="Add Tags" 
                />

                <button className="w-8 h-8 flex items-center justify-center rounded drop-shadow-2xl border-blue-700 hover:bg-blue-700">
                    <MdAdd className="text-2xl text-blue-700 hover:text-white" />
                </button>
            </div>
        </div>
    )
}

export default TagInput