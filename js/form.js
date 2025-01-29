$(document).ready(function () {
    $("#form-link").click(function(){
        $("#myForm").submit(function (event) {
            event.preventDefault();
    
            const file = $("#file")[0];
            const color = $("#color");
            const date = $("#date");
            const time = $("#time");
            const month = $("#month");
            const email = $("#email");
            const url = $("#url");
            const nourl = $("#nourl");
            const number = $("#number");
            const rangenumber = $("#rangenumber");
            const telenumber = $("#telenumber");
            const password = $("#password");
            const confirmpassword = $("#confirmpassword");
            const rangetext = $("#rangetext");
            const select = $("#select");
            const radioyes = $("#radioyes:checked").length;
            const radiono = $("#radiono:checked").length;
            const checkboxes = $("#checkboxes:checked").length;
            
            $("input").removeClass("warning");
            $("select").removeClass("warning");
            $("p.warning").remove();
            
            if(!file.files[0]){
                $(file).addClass("warning");
                $(file).after(`<p class="warning">Please fill out this filed.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(file).offset().top)
                }, 1000);;
                return;
            }
    
            if(color.val().trim() === ""){
                $(color).addClass("warning");
                $(color).after(`<p class="warning">Please fill out this filed.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(color).offset().top)
                }, 1000);;
                return;
            }
    
    
            if(date.val() === ""){
                $(date).addClass("warning");
                $(date).after(`<p class="warning">Please fill out this filed.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(date).offset().top)
                }, 1000);;
                return;
            }
    
            if(time.val() === ""){
                $(time).addClass("warning");
                $(time).after(`<p class="warning">Please fill out this filed.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(time).offset().top)
                }, 1000);;
                return;
            }
    
            if(month.val() === ""){
                $(month).addClass("warning");
                $(month).after(`<p class="warning">Please fill out this filed.</p>`);
                console.log(-$(month).offset().top)
                $('#main-content').animate({
                    scrollTop: ($(month).offset().top)
                }, 1000);
                return;
            }
    
    
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
            // Validate email format
            if (!emailPattern.test(email.val())) {
                $(email).addClass("warning");
                $(email).after(`<p class="warning">Please fill out this filed.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(email).offset().top)
                }, 1000);
                return;
            }
    
            if(url.val() === "" || url.val().trim() === ""){
                $(url).addClass("warning");
                $(url).after(`<p class="warning">Please fill out this filed.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(url).offset().top)
                }, 1000);
                return;
            }
    
            if(nourl.val() === "" || nourl.val().trim() === ""){
                $(nourl).addClass("warning");
                $(nourl).after(`<p class="warning">Please fill out this filed.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(nourl).offset().top)
                }, 1000);
                return;
            }
    
            if(number.val() === ""){
                $(number).addClass("warning");
                $(number).after(`<p class="warning">Please fill out this filed.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(number).offset().top)
                }, 1000);
                return;
            }
    
            if(rangenumber.val() === ""){
                $(rangenumber).addClass("warning");
                $(rangenumber).after(`<p class="warning">Please fill out this filed.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(rangenumber).offset().top)
                }, 1000);
                return;
            }
    
            const telPattern = /^[0-9]{10}$/;
            if(telenumber.val() === ""){
                $(telenumber).addClass("warning");
                $(telenumber).after(`<p class="warning">Please fill out this filed.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(telenumber).offset().top)
                }, 1000);
                return;
            }
            if(!telPattern.test(telenumber.val())){
                $(telenumber).addClass("warning");
                $(telenumber).after(`<p class="warning">Please fill out in valid formate.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(telenumber).offset().top)
                }, 1000);
                return;
            }
    
            // Validate password length (at least 8 characters)
            if (password.val().trim() === "" || password.val().length < 8) {
                $(password).addClass("warning");
                $(password).after(`<p class="warning">Password must be at least 8 characters and no spaces.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(password).offset().top)
                }, 1000);
                return;
            }
    
            // Validate password match
            if (password.val() !== confirmpassword.val()) {
                $(confirmpassword).addClass("warning");
                $(confirmpassword).after(`<p class="warning">Passwords do not match.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(password).offset().top)
                }, 1000);
                return;
            }
    
            if(rangetext.val() === ""){
                $(rangetext).addClass("warning");
                $(rangetext).after(`<p class="warning">Text with Minimum and Maximum Length should satisfy.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(rangetext).offset().top)
                }, 1000);
                return;
            }
    
            if(!(rangetext.val().length >= 3 & rangetext.val().length <=9)) {
                $(rangetext).addClass("warning");
                $(rangetext).after(`<p class="warning">Text should be in range.</p>`);
                $('#main-content').animate({
                    scrollTop: (-$(rangetext).offset().top)
                }, 1000);
                return;
            }
    
            if (select.val() === "select") {
                $(select).addClass("warning");
                $(select).after(`<p class="warning">Select should be Selected.</p>`);
                $('#main-content').animate({
                    scrollTop: ($(select).offset().top)
                }, 1000);
                return;
            }
    
            if(radiono === radioyes){
                $(radiono).addClass("warning");
                $(radiono).after(`<p class="warning">Radio Button should be selected YES or NO.</p>`);
                return;
            }
            if(checkboxes === 0){
                $(checkboxes).addClass("warning");
                $(checkboxes).after(`<p class="warning">Checkbox should be tick.</p>`);
                return;
            }
    
            $("#content-body").load("./html/dashboard.html");
    
            $(this)[0].reset();
        });
    })
});
