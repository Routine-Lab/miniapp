const tg =
  window.Telegram.WebApp;


/**
 * Telegram Mini App 초기화
 */
tg.ready();
tg.expand();


/**
 * Google Form 주소
 *
 * 여기에 실제 수업입력 Google Form 주소를 넣는다.
 */
const GOOGLE_FORM_URL =
  "https://forms.gle/xeAk7bMpydymxJRA7";


/**
 * Telegram 사용자 표시
 */
const telegramUser =
  document.getElementById(
    "telegramUser"
  );


const user =
  tg.initDataUnsafe &&
  tg.initDataUnsafe.user
    ? tg.initDataUnsafe.user
    : null;


if (user) {

  const name =
    [
      user.first_name,
      user.last_name
    ]
      .filter(Boolean)
      .join(" ");


  telegramUser.textContent =
    name
      ? `${name}`
      : "Telegram 사용자";

} else {

  telegramUser.textContent =
    "Telegram에서 실행해주세요.";

}


/**
 * 수업 입력 버튼
 */
const lessonButton =
  document.getElementById(
    "lessonButton"
  );


lessonButton.addEventListener(
  "click",
  function() {

    alert(
      "현재 Form 주소:\n" +
      GOOGLE_FORM_URL
    );

    tg.openLink(
      GOOGLE_FORM_URL
    );

  }
);
