import React from 'react';

const AddItem = () => {
    return (
        <div class="flex justify-center items-center h-screen w-full ">
            <div class="w-2/3 bg-white rounded shadow-2xl p-8 m-4"><h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Add Review</h1><form>
                <div class="flex flex-col mb-4"><label class="mb-2 font-bold text-lg text-gray-900" for="img">Name</label><input placeholder="Name" class="border py-2 px-3 text-grey-800" type="text" name="name" id="name" /></div>
                <div class="flex flex-col mb-4"><label class="mb-2 font-bold text-lg text-gray-900" for="rating">Rating</label><input class="border py-2 px-3 text-grey-800" type="text" name="rating" id="rating" placeholder="Out of 5" /></div>
                <div class="flex flex-col mb-4"><label class="mb-2 font-bold text-lg text-gray-900" for="img">Image Link</label><input class="border py-2 px-3 text-grey-800" type="text" name="img" id="img" /></div>
                <div class="flex flex-col mb-4"><label class="mb-2 font-bold text-lg text-gray-900" for="description">Description</label><textarea class="border py-2 px-3 text-grey-800" type="description" name="description" id="description"></textarea></div><button class="block bg-indigo-400 hover:bg-indigo-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Submit</button></form></div></div>
    );
};

export default AddItem;