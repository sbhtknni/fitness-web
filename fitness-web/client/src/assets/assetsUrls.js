const allURLS = {

        "logo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "logo2": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "logo3": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "logo4": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "logo5": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "home-page-left" : "https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-banner-left.png", 
        "home-page-right": "https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-banner-right.png",   

        

}

function getURL(key) {
    return allURLS[key];
}

export default getURL;
