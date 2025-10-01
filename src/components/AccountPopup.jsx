import "./AccountPopup.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadSession, signInWithGithub, signOut } from "../redux/login";

const AccountPopup = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const { session, status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadSession());
  }, [dispatch]);

  if (status === "loading") return <div>로딩 중...</div>;

  return (
    <>
      <p className="profile">프로필 설정</p>
      <button
        className="account-manage"
        onClick={() => nav("/profile", { state: { user: session?.user } })}
      >
        계정 관리
      </button>
      {session ? (
        <button className="log-out" onClick={() => dispatch(signOut())}>
          로그아웃
        </button>
      ) : (
        <button className="log-in" onClick={() => dispatch(signInWithGithub())}>
          로그인
        </button>
      )}
    </>
  );
};

export default AccountPopup;
