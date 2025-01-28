export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://images.ctfassets.net/4cd45et68cgf/1pFUjCo5EKjZp9SMoSIsmq/f66c53a4473233fa73f5820bc8a04d8a/NFLX_Profile_10Yrs.jpg?w=2000";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer "+ process.env.REACT_APP_TMDB_KEY,
  },
};
export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const BANNER_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/US-en-20250106-TRIFECTA-perspective_65e335d4-6f1e-4d03-8daa-e439fbaaa340_large.jpg";

export const SUPPORTED_LANG = [
  { identifier: "english", name: "English" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPEN_API_KEY = process.env.REACT_APP_OPEN_API_KEY;
// export const OPEN_API_KEY = "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"
