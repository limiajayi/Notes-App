import { useState } from "react"
import { MdAdd, MdClose } from "react-icons/md"


const TagInput = ({ tags, setTags }) => {

    //variable for the value of the tags
    const [inputValue, setInputValue] = useState("");

    //function for the onChange attribute of input tag
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue)
    }

    //function for the button tag below
    const addNewTag = () => {
        //if inputValue with the white space removed is not empty
        if (inputValue.trim() !== "") {
            
            //set the value of tags to be a copy of the previous tags + the new inputValue
            setTags([...tags, inputValue.trim()])
        }
    }

    const handleKeyDown = (e) => {

        //if the event object's key is enter, call addNewTag
        if (e.key === "Enter") {
            addNewTag()
        }
    }

    //for the tags in props
    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove))
    }

    return (
        <div>

            {
                tags?.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap mt-2">
                        {
                            tags.map((tag, index) => {
                                return (
                                    <span key={index} className="flex items-center gap-2 text-sm text-slate-900 bg-slate-100 px-3 py-1 rounded">
                                        # {tag}
                                        <button 
                                        onClick={() => handleRemoveTag(tag)}>
                                            <MdClose />
                                        </button>
                                    </span>
                                )
                            })
                        }
                    </div>
                )
            }

            <div className="flex items-center gap-4 mt-3">
                {/* for input to be a controlled element it must have a value attribute and an onChange attribute! */}
                <input 
                type="text"
                className="w-[50%] text-sm bg-transparent border-slate-300 border-2 px-3 py-2 rounded outline-none"
                placeholder="Add Tags"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                />

                <button 
                    className="w-8 h-8 flex items-center justify-center rounded border-blue-700 border-2 hover:bg-blue-700"
                    onClick={addNewTag}>
                        <MdAdd className="text-2xl text-blue-700 hover:text-white" />
                </button>
            </div>
        </div>
    )
}

export default TagInput