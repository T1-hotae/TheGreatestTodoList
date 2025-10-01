import Button from "./Button";
import { useEffect, useState } from "react";
import InputField from "./InputField";
import { client } from "../lib/SupabaseClient";

const Post = () => {
  const [pages, setPages] = useState([]);

  const refreashHistory = async () => {
    let { data: page, error } = await client.from("page").select("*");
    //console.log(page);
    if (error) {
      console.error("Error fetching pages:", error);
    } else {
      setPages(page);
    }
  };

  useEffect(() => {
    refreashHistory();
  }, []);

  //DataInsert하는 방법 DataDocs INSERT로
  const recordHandler = async () => {
    const { data, error } = await client
      .from("page")
      .insert([{ title: prompt("title?"), body: prompt("body?") }])
      .select();

    if (error) {
      console.error("Error inserting:", error);
    } else {
      refreashHistory(); // 새로고침 필요
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* 인풋 테스트 */}
        <div className="w-80">
          <InputField
            label="이름"
            placeholder="이름을 입력해요."
            type="password"
          />
        </div>

        {/* 작성 버튼 */}
        <div className="flex flex-col w-60 my-5">
          <Button title={"게시글 작성하기 ✏️"} onClick={recordHandler} />
        </div>

        {/* 게시물 */}
        <h1 className="text-black text-xl font-bold mb-2">Supabase Page</h1>
        <div className="flex justify-center border-gray border-1 px-10 py-1 rounded-2xl w-60 shadow-inner mb-10">
          <div id="history">
            {pages.map((page) => (
              <div key={page.id} className="mb-4">
                <h2 className="text-lg font-semibold">{page.title}</h2>
                <p>{page.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
