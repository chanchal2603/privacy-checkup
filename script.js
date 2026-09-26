function checkPrivacy() {
    const checkboxes = document.querySelectorAll(
        'input[type="checkbox"]:checked'
    );

    const result = document.getElementById("result");

    if (checkboxes.length === 0) {
        result.innerHTML =
            "<strong>Please select at least one permission.</strong>";
        return;
    }

    let message = "<h3>Privacy Checkup Result</h3>";

    checkboxes.forEach(function (checkbox) {

        if (checkbox.value === "Location") {
            message +=
                "<p>📍 <strong>Location:</strong> Check whether the app really needs your location access.</p>";
        }

        if (checkbox.value === "Camera") {
            message +=
                "<p>📷 <strong>Camera:</strong> Allow camera access only when necessary.</p>";
        }

        if (checkbox.value === "Microphone") {
            message +=
                "<p>🎤 <strong>Microphone:</strong> Review whether the app needs microphone access.</p>";
        }

        if (checkbox.value === "Contacts") {
            message +=
                "<p>👥 <strong>Contacts:</strong> Check whether access to your contacts is necessary.</p>";
        }

        if (checkbox.value === "Photos") {
            message +=
                "<p>🖼️ <strong>Photos / Files:</strong> Review whether the app needs access to your photos or files.</p>";
        }
    });

    // Privacy score
    const count = checkboxes.length;
    const score = 100 - (count * 15);

    message += "<h3>🔐 Privacy Score: " + score + "/100</h3>";

    if (score >= 70) {
        message += "<p>✅ <strong>Good:</strong> You selected a small number of permissions to review.</p>";
    } else if (score >= 40) {
        message += "<p>⚠️ <strong>Review:</strong> Consider whether all these permissions are necessary.</p>";
    } else {
        message += "<p>🔎 <strong>Review Carefully:</strong> Check whether each permission is really needed.</p>";
    }

    message +=
        "<p><strong>Tip:</strong> Give an app only the permissions it actually needs.</p>";

    result.innerHTML = message;
}
