document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
        fetch("assets/components/header.html")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then((html) => {
                headerElement.innerHTML = html;
            })
            .catch((error) => {
                console.error("Error loading header:", error);
            });
    }
});
