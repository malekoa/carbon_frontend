import { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class APITab extends Component {
    state = {}
    render() {
        return (
            <div className="flex justify-center items-center flex-grow px-6">
                <div className="flex flex-col max-w-lg space-y-6 p-8 border rounded-lg">
                    <span className="flex flex-col w-full space-y-2">
                        <span className="text-xl font-bold tracking-tight">Subscribe readers to your letters</span>
                        <span className="text-neutral-600 tracking-tight">Choose the mailing list you want to add your readers to and we'll generate your GET request.</span>
                    </span>
                    <span className="flex items-center space-x-1">
                        <span className="tracking-tight">Subscribe readers to </span>
                        <select className="flex p-0.5 border rounded-lg tracking-tight font-medium" name="" id="">
                            <option value="">My Newsletter</option>
                            <option value="">My Marketing Letter</option>
                        </select>
                        <span>.</span>
                    </span>
                    <span className="relative flex flex-col p-4 bg-neutral-200 rounded-lg ibm text-sm">
                        <FontAwesomeIcon className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-900 transition cursor-pointer" icon={faClipboard}></FontAwesomeIcon>
                        <span className="flex overflow-x-auto font-light">http://www.greenmail.xyz/api/subscribe?key=auyw4i7h32ef2&mailing_list=my_newsletter</span>
                    </span>
                </div>
            </div>
        );
    }
}

export default APITab;