$(document).ready(function () {

    console.log("jQuery is ready!");


    $("h1").css("letter-spacing", "-2px");

    $("#mainGreeting").css("color", "#446b51");

    $(".intro").css("line-height", "1.8");

    $("#updateGreetingBtn").click(function () {

        $("#mainGreeting").html("Welcome to My Portfolio!");

        $(".headline").text("My Personal Learning Journey");

        $(".headline").css("color", "#699477");

    });


    $("#darkModeBtn").click(function () {

        $("body").toggleClass("dark-theme");

        if ($("body").hasClass("dark-theme")) {

            $(this).text("Light Mode");

        } else {

            $(this).text("Dark Mode");

        }

    });


    $("#hideInfoBtn").click(function () {

        $("#statusMessage, #funFacts").hide(400);

    });

    $("#showInfoBtn").click(function () {

        $("#statusMessage, #funFacts").show(400);

    });

    $("#toggleInfoBtn").click(function () {

        $("#statusMessage, #funFacts").toggle(400);

    });


    $("#fadeInBtn").click(function () {

        $(".gallery-image").fadeIn(500);

    });

    $("#fadeOutBtn").click(function () {

        $(".gallery-image").fadeOut(500);

    });

    $("#fadeToggleBtn").click(function () {

        $(".gallery-image").fadeToggle(500);

    });


$(".accordion-heading").click(function () {

    $(this).next(".accordion-panel").stop(true, true).slideToggle(400);

});

$("#hidePanelsBtn").click(function () {

    $(".accordion-panel").stop(true, true).slideUp(400);

});

$("#showPanelsBtn").click(function () {

    $(".accordion-panel").stop(true, true).slideDown(400);

});

    function getNewSkill() {

        return $("#newSkillInput").val().trim();

    }

    function createSkillItem(skill) {

        return $("<li>").text(skill);

    }

    $("#appendSkillBtn").click(function () {

        let skill = getNewSkill();

        if (skill === "") {

            $("#skillFeedback").text("Please enter a skill!");

            return;

        }

        $("#skillsList").append(createSkillItem(skill));

        $("#newSkillInput").val("");

        $("#skillFeedback").text(skill + " added successfully!");

    });


    $("#prependSkillBtn").click(function () {

        let skill = getNewSkill();

        if (skill === "") {

            $("#skillFeedback").text("Please enter a skill!");

            return;

        }

        $("#skillsList").prepend(createSkillItem(skill));

        $("#newSkillInput").val("");

        $("#skillFeedback").text(skill + " added at the beginning!");

    });


    $("#removeSkillBtn").click(function () {

        if ($("#skillsList li").length > 0) {

            $("#skillsList li").last().remove();

            $("#skillFeedback").text("Last skill removed!");

        } else {

            $("#skillFeedback").text("The list is empty!");

        }

    });


    let githubLink = true;

    $("#changeLinkBtn").click(function () {

        if (githubLink) {

            $("#socialLink")
                .attr("href", "https://www.linkedin.com/")
                .text("LinkedIn Profile");

            $("#linkFeedback").text("Link changed to LinkedIn!");

        } else {

            $("#socialLink")
                .attr("href", "https://github.com/aikynsabit077")
                .text("GitHub Profile");

            $("#linkFeedback").text("Link changed to GitHub!");

        }

        githubLink = !githubLink;

    });


    $("#visitorName").on("input", function () {

        let name = $(this).val();

        $("#namePreview").text("Name: " + (name || "—"));

    });

    $("#visitorEmail").on("input", function () {

        let email = $(this).val();

        $("#emailPreview").text("Email: " + (email || "—"));

    });


    let animated = false;

    $("#animateSkillsBtn").click(function () {

        let bars = $(".progress-bar");

        if (!animated) {

            bars.each(function (index) {

                let width = $(this).data("width");

                $(this)
                    .stop(true)
                    .delay(index * 150)
                    .animate({

                        width: width + "%"

                    }, 1000);

            });

            $(this).text("Reset Skill Bars");

        } else {

            bars.stop(true).animate({

                width: "0%"

            }, 600);

            $(this).text("Animate My Skills");

        }

        animated = !animated;

    });

});