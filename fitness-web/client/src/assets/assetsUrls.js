//GET URLS FOR ALL ASSETS
//IMPORT THIS FILE IN THE COMPONENT WHERE YOU WANT TO USE THE ASSET
const allURLS = {
  logo:
    "https://queenstreetmedical.co.nz/wp-content/uploads/2023/02/qstfsvglogo.png",
  "home-page-left":
    "https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-banner-left.png",
  "home-page-right":
    "https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-banner-right.png",
  weight:
    "https://media.front.xoedge.com/images/f80416e9-d389-4beb-b778-de131aa323b2~rs_1080.h?q=90",
  statistics:
    "https://multimedia.journalism.berkeley.edu/wp-content/uploads/Databases-of-Statistical-Info-article-8.jpg",
  workout:
    "https://media.self.com/photos/6398b36c72eb56f726777d06/4:3/w_2560%2Cc_limit/weekly-workout-schedule.jpeg ",
  "general-info":
    "https://img-c.udemycdn.com/course/750x422/1878690_e771_5.jpg",
  rom: "https://media.licdn.com/dms/image/C4E03AQFb60JR7ANxHA/profile-displayphoto-shrink_800_800/0/1660213298031?e=1692835200&v=beta&t=L_jEiKGrIiiJdJ0_YraTThVFgwBc0tOTslu66HXRyoQ",
  romGit: "https://github.com/RomRL",
  romLinkDin: "https://www.linkedin.com/in/rom-harel-3477bb238/",
  daniel: "https://media.licdn.com/dms/image/D4E35AQHxPw1r8QH6Gg/profile-framedphoto-shrink_800_800/0/1659987065661?e=1688234400&v=beta&t=EBQqw12On2eoj8FrD7OjKXTGS4FaKu6t4RlMPtnOR1M",
  danielGit: "https://github.com/sbhtknni",
  danielLinkDin: "https://www.linkedin.com/in/danielmaman-softwareengineer/",
  infoIcon: "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_info_outline_48px-512.png",
  HowToUseIcon: "https://cdn-icons-png.flaticon.com/512/4456/4456893.png",
  analyticsIcon: "https://cdn-icons-png.flaticon.com/512/633/633606.png",
  designIcon:"https://cdn-icons-png.flaticon.com/512/3159/3159310.png",
  developmentIcon: "https://cdn0.iconfinder.com/data/icons/new-product-development-npd/64/NPD-new-product-development-innovation-creative-box-concept-512.png"

};
//GET URLS FOR ALL ASSETS
function getURL(key) {
  return allURLS[key];
}

export default getURL;
