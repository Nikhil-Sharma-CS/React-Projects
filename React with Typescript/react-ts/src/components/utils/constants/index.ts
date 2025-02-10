export const TextConstants = {
  ENTER_YOUR_PASSWORD: "Enter your password",
  ENTER_YOUR_EMAIl: "Enter your email address",
  WELCOME_BACK: "Welcome Back",
  LOG_IN: "Log in",
  REMEMBER_ME: "Remember me",
  TROUBLE_LOGGIN_IN: "Trouble logging in?",
  OR_LOGIN_WITH: "Or, Log in with",
  POCKET_PAY: "Pocket Pay",
  SIGN_IN: "Sign In",
  GOOGLE_ICON: "Google Icon",
  FACEBOOK_ICON: "Facebook Icon",
  APPLE_ICON: "Apple Icon",
};

const BASE_URL = "/assets/icons";

export const Icons = [
  {
    src: `${BASE_URL}/google.svg`,
    alt: TextConstants.GOOGLE_ICON,
  },
  { src: `${BASE_URL}/facebook.svg`, alt: TextConstants.FACEBOOK_ICON },
  { src: `${BASE_URL}/apple.svg`, alt: TextConstants.APPLE_ICON },
];
