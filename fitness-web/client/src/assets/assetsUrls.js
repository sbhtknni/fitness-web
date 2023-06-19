const allURLS = {

        "logo": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "logo2": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "logo3": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "logo4": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "logo5": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
        "home-page-left" : "https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-banner-left.png", 
        "home-page-right": "https://deprmqvywv28x.cloudfront.net/fitlovers/homepage-banner-right.png",   
        "weight" :"https://media.front.xoedge.com/images/f80416e9-d389-4beb-b778-de131aa323b2~rs_1080.h?q=90",
        "statistics" :"https://multimedia.journalism.berkeley.edu/wp-content/uploads/Databases-of-Statistical-Info-article-8.jpg",
        "workout" :'https://media.self.com/photos/6398b36c72eb56f726777d06/4:3/w_2560%2Cc_limit/weekly-workout-schedule.jpeg ',
        "general-info" : "https://media.baamboozle.com/uploads/images/40242/1603364713_188427",
    }       

function getURL(key) {
    return allURLS[key];
}

export default getURL;
