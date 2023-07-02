function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // 로그아웃 성공
        console.log("User signed out.");
        window.location.href = "index.html"; 
      })
      .catch((error) => {
        // 로그아웃 실패 또는 오류 처리
        console.log("로그아웃 에러:", error.message);
      });
  }
