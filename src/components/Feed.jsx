import { useState, useEffect } from "react";
import { client } from "../lib/SupabaseClient";

const Feed = () => {
  const [pages, setPages] = useState([]);
  //DataInsert하는 방법 DataDocs INSERT로
  const refreashHistory = async () => {
    let { data: page, error } = await client.from("loginpage").select("*");
    //console.log(page);
    if (error) {
      console.error("Error fetching pages:", error);
    } else {
      setPages(page);
    }
  };

  async function recordHandler() {
    const { data, error } = await client
      .from("loginpage")
      .insert([{ title: prompt("title?"), body: prompt("body?") }]);
    refreashHistory();
  }

  async function deleteRecord(id) {
    const { data, error } = await client
      .from("loginpage")
      .delete()
      .eq("id", id);
    refreashHistory();
  }

  useEffect(() => {
    refreashHistory();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-full max-w-md">
        {pages.map((page) => (
          <div
            key={page.id}
            className="w-full bg-white shadow-md rounded-xl p-4 mb-4 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold mb-2">{page.title}</h2>
            <p className="text-gray-700 mb-3">{page.body}</p>
            <input
              className="border-2 border-red-400 text-red-500 px-3 py-1 rounded-lg cursor-pointer hover:bg-red-50 transition"
              type="button"
              value="삭제"
              onClick={() => deleteRecord(page.id)}
            />
          </div>
        ))}

        <button
          onClick={recordHandler}
          className="mt-4 border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-2xl cursor-pointer hover:bg-blue-50 transition"
        >
          게시글 작성하기
        </button>
      </div>
    </div>
  );
};

export default Feed;
