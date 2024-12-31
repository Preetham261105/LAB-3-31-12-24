function openhtml(event){
  event.preventDefault()
  window.location.href = "index2.html";
}

function sendGreet(event){
    alert("Your Greetings has been Sent")
}

document.addEventListener("DOMContentLoaded", function () {
    const selectFestival = document.querySelector("select.op");
    const textArea = document.querySelector("textarea.te");
    const receiverInput = document.querySelector(".em");
    const emailList = document.querySelectorAll("input.em")[1];
    const form = document.querySelector("form");

    // Predefined festival messages
    const festivalMessages = {
        Diwali: "Wishing you a very Happy Diwali! May this festival of lights brighten up your life.",
        Dasara: "Happy Dasara! May this festival bring joy, health, and prosperity to your life.",
        Sankranthi: "Happy Sankranthi! May your life be filled with sweet moments and endless happiness.",
        "Vinayaka Chavithi": "Happy Vinayaka Chavithi! May Lord Ganesha bless you with wisdom and success.",
        Ramzan: "Eid Mubarak! Wishing you and your family peace and prosperity on this holy occasion.",
        Bakridh: "Eid al-Adha Mubarak! May your life be blessed with love and devotion.",
        Christmas: "Merry Christmas! May this festive season bring you joy and cheer.",
        Ugadhi: "Happy Ugadhi! May this new year bring you happiness and success."
    };

    // Add festival info to the textarea on selection
    selectFestival.addEventListener("change", function () {
        const selectedFestival = selectFestival.value;
        if (festivalMessages[selectedFestival]) {
            textArea.value = festivalMessages[selectedFestival];
        } else {
            textArea.value = "";
        }

        // Add custom festival textbox if "Other" is selected
        if (selectedFestival === "Other") {
            if (!document.querySelector(".custom-festival")) {
                const customFestivalInput = document.createElement("input");
                customFestivalInput.type = "text";
                customFestivalInput.placeholder = "Enter festival name";
                customFestivalInput.className = "em custom-festival";
                selectFestival.insertAdjacentElement("afterend", customFestivalInput);
            }
        } else {
            const customFestivalInput = document.querySelector(".custom-festival");
            if (customFestivalInput) {
                customFestivalInput.remove();
            }
        }
    });

    // Add email to the email list
    document.querySelector("button.sub").addEventListener("click", function (event) {
        event.preventDefault();
        const email = receiverInput.value.trim();
        if (email) {
            // Check if the email is already in the list
            const emailArray = emailList.value.split(";").map(e => e.trim()).filter(Boolean);
            if (emailArray.includes(email)) {
                alert("This email is already in the list. Please add a different email.");
            } else {
                emailList.value += email + "; ";
                alert(`Email ${email} added successfully!`);
                receiverInput.value = "";
            }
        } else {
            alert("Please enter a valid email address.");
        }
    });

    // Send greetings on form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const emails = emailList.value.trim();
        const message = textArea.value.trim();
        if (!message) {
            alert("Please select a festival or enter a custom message.");
            return;
        }
        alert(`Greetings sent to:\n${emails}\n\nMessage:\n${message}`);
        // Simulate sending email (Replace with actual email sending logic)
    });
});
