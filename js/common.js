var wScreen = $(window).width(),
    isRunMenu = !1,
    EZS = {
        init: function () {
            EZS.global.submitRegEmail() ,setTimeout(function () {
                    $(".loading").fadeOut(function () {
                        //logic
                    })
                }, 300)
        }
    };
EZS.global = {
    submitRegEmail: function () {
        const elmForm = $(".js-submit-reg");
        const elmBtn = elmForm.find("button");
        const elmInput = elmForm.find("input");
        const elmErr = elmForm.next(".form-notification");

        elmBtn.click(function(){
            const isEmail = elmInput.val() && BE.functions.checkEmail(elmInput.val());
            if(!isEmail) {
                elmInput.focus();
                console.log("Not is Email");
                return;
            }
            BE.loading.show();

            setTimeout(function(){
                BE.loading.hide();
            },800);
        });

        elmInput.on('keypress', function(e) {
            var keyCode = e.keyCode || e.which;
            if(keyCode === 13) {
                return false;
            }
        });


        // $.getJSON('/Services/reg/reg_email.ashx', { 'e': m }, function (rt) {
        //     alert(rt.mess);
        //     $('#reg_m').val('');

        // })
    }

}, EZS.init();