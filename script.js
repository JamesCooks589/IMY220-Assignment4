//James Cooks u21654680
// Position: 32

//First make sure the document is ready
$(document).ready(() => {
    //Left button
    $("#left").on("click", () => {
        //Get message in textarea 
        if($("#message").val() != ""){
            //Get message
            let message = checkForLink($("#message").val());
            //Append message to messages div
             $(".messages").append("<div class='col-4 offset-4 bg-primary'><p>" + message + "</p></div>");
            // //Clear the textarea
             $("#message").val("");
        }
    });
    //Right button
    $("#right").on("click", () => {
        //Get message in textarea 
        if($("#message").val() != ""){
            //Get message
            let message = checkForLink($("#message").val());
            //Append message to messages div
            $(".messages").append("<div class='col-4 offset-4 bg-success'><p>" + message + "</p></div>");
            // //Clear the textarea
            $("#message").val("");
        }
    });

});

//Function for checking if message contains youtube links
function checkForLink(msg){
    //A message can contain multiple youtube links for each link append an iframe under the message
    //Check if message contains youtube link
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g;
    //If message contains youtube links insert iframe into message
    if(msg.match(youtubeRegex)){
        //Get the youtube link
        let youtubeLink = msg.match(youtubeRegex);
        //For all the youtube links in the message
        //Add the iframe after the link but before the rest of the message
        for(let i = 0; i < youtubeLink.length; i++){
            //Get the video id from the youtube link from = to &
            let videoId = youtubeLink[i].substring(youtubeLink[i].indexOf("=") + 1, youtubeLink[i].indexOf("&"));
            //Create the iframe
            let iframe = "<iframe width='100%' height='315' src='https://www.youtube.com/embed/" + videoId + " frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen'></iframe>";
            //Insert the iframe into the message
            msg = msg.replace(youtubeLink[i], youtubeLink[i] + iframe);
        }
        
    }


    //Return the message
    return msg;
}
