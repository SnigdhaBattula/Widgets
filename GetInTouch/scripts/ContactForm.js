define("DS/GetInTouch/scripts/ContactForm", [], function () {
    'use strict';

    var myWidget = {
        onLoad: function () {
            var formHTML = `
                <div class='main-Container' id='mainContainer' style="width: 400px; padding: 20px; background:rgb(119, 152, 242); border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); text-align: center;">
                    <h2 style="color:rgb(15, 95, 175);">Get In Touch</h2>
                    <form id="contactForm">
                        <input type="text" placeholder="First Name" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;" required>
                        <input type="text" placeholder="Last Name" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;" required>
                        <input type="email" placeholder="Email" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;" required>
                        <input type="tel" placeholder="Phone" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;" required>
                        <input type="text" placeholder="Address" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;">
                        <textarea placeholder="Type your message here" style="width: 90%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 5px;"></textarea>
                        <button type="submit" style="background-color: #1e3a8a; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Submit</button>
                    </form>
                    <p id="successMessage" style="color: green; display: none;">Thanks for submitting!</p>
                </div>`;

            widget.body.innerHTML = formHTML;

            document.getElementById("contactForm").addEventListener("submit", function (event) {
                event.preventDefault();
                document.getElementById("successMessage").style.display = "block";
            });
        }
    };

    widget.addEvent('onLoad', myWidget.onLoad);
});

