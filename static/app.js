var main = function () {
    "use strict";

    //array containing todo list
    var toDos = ["Get groceries",
                 "Make up some new ToDos",
                 "Prep for Monday's class",
                 "Answer emails",
                 "Take Gracie to the park",
                 "Finish writing this book"];

    //iterates through all three tabs
    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        //click event handler
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                //prints newest first
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } 
            else if ($element.parent().is(":nth-child(2)")) {
                //prints oldest first
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } 
            else if ($element.parent().is(":nth-child(3)")) {
                //displays button and text field to add todo item
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
            }

            $("main .content").append($content);

            return false;
        });
    });

    //triggers a click event when the page loads
    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);