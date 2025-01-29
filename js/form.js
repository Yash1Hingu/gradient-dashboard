$(document).ready(function () {
    $("#myForm").submit(function (event) {
        event.preventDefault();

        const file = $("#file")[0].files[0];
        const color = $("#color").val();
        const date = $("#date").val();
        const time = $("#time").val();
        const month = $("#month").val();
        const email = $("#email").val();
        const url = $("#url").val();
        const nourl = $("#nourl").val();
        const number = $("#number").val();
        const rangenumber = $("#rangenumber").val();
        const telenumber = $("#telenumber").val();
        const password = $("#password").val();
        const confirmpassword = $("#confirmpassword").val();
        const rangetext = $("#rangetext").val();
        const select = $("#select").val();
        const radioyes = $("#radioyes:checked").length;
        const radiono = $("#radiono:checked").length;
        const checkboxes = $("#checkboxes:checked").length;

        if(!file){
            alert("File Should be containe");
            return;
        }

        if(color.trim() === ""){
            alert("Color Should be Selected.");
            return;
        }


        if(date === ""){
            alert("date should be selected.");
            return;
        }

        if(time === ""){
            alert("Time should be selected.");
            return;
        }

        if(month === ""){
            alert("Month Should be selected.");
            return;
        }


        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
        // Validate email format
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if(url === "" || url.trim() === ""){
            alert("Url should be Enter.");
            return;
        }

        if(nourl === "" || nourl.trim() === ""){
            alert("Url without TLD Should be not Empty.");
            return;
        }

        if(number === ""){
            alert("Number Should not be Empty.");
            return;
        }

        if(rangenumber === ""){
            alert("Range Number Should be not Empty.");
            return;
        }

        const telPattern = /^[0-9]{10}$/;
        if(telenumber === ""){
            alert("Telephonic number should not be Empty.");
            return;
        }
        if(!telPattern.test(telenumber)){
            alert("Telephonic should be in valid formate.");
            return;
        }

        // Validate password length (at least 8 characters)
        if (password.trim() === "" || password.length < 8) {
            alert(
                "Password must be at least 8 characters and no spaces."
            );
            return;
        }

        // Validate password match
        if (password !== confirmpassword) {
            alert("Passwords do not match.");
            return;
        }

        if(rangetext === ""){
            alert("Text with Minimum and Maximum Length should satisfy.");
            return;
        }

        if(!(rangetext.length >= 3 & rangetext.length <=9)) {
            alert("Text should be in range.")
            return;
        }

        if (select === "select") {
            alert("Select should be Selected.");
            return;
        }

        if(radiono === radioyes){
            alert("Radio Button should be selected YES or NO.");
            return;
        }
        if(checkboxes === 0){
            alert("Checkbox should be tick.");
            return;
        }

        alert("Thank You")

        $(this)[0].reset();
    });
});
