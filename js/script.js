let current_index = 0;

$(document).ready(function () {


    $(".Header__LangActive").click(function () {
        $(".Header__LangOther").toggleClass("active")
        $(".Header__LangOtherHolder").toggleClass("active");
    });

    $(".Header__LangOtherHolder span").click(function () {
        $(".Header__LangOther").toggleClass("active");
        $(".Header__LangOtherHolder").toggleClass("active");
        $(".Header__LangActive").text($(this).text())
    });

    $(".Header__Burger").click(function () {
        $(this).toggleClass("collapsed")
    })

    $(".Content__LeftTxt").click(function () {
        $(".Content__RightSlide").removeClass("active");
        const $this = $(this);
        if ($this.parent().hasClass("end")) {
            current_index--
        }
        else {
            current_index++
        }

        $(".Content__RightSlide.active").eq(current_index).addClass("active");
        if (current_index === $(".Content__Right>div").length - 1) {
            $this.parent().addClass('end');
            $this.text("Strona główna")
        }
        else {
            $this.parent().removeClass('end')
            $this.text("Nasze produkty")
        }

        let anim = -current_index * 85;
        $(".Content__Right").css("top", anim + "vh")
    })




});