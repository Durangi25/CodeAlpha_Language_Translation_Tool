const translateBtn = document.getElementById("translateBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");

const sourceLanguage = document.getElementById("sourceLanguage");
const targetLanguage = document.getElementById("targetLanguage");
const statusMessage = document.getElementById("statusMessage");

translateBtn.addEventListener("click", async () => {
    const text = inputText.value.trim();

    if (text === "") {
        statusMessage.textContent = "Please enter text before translating.";
        statusMessage.style.color = "#e74c3c";
        return;
    }

    statusMessage.textContent = "Translating...";
    statusMessage.style.color = "#333";
    outputText.value = "";

    try {
        const response = await fetch("/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text,
                source_language: sourceLanguage.value,
                target_language: targetLanguage.value
            })
        });

        const data = await response.json();

        if (data.success) {
            outputText.value = data.translated_text;
            statusMessage.textContent = "Translation completed successfully.";
            statusMessage.style.color = "#16a085";
        } else {
            statusMessage.textContent = data.message;
            statusMessage.style.color = "#e74c3c";
        }

    } catch (error) {
        statusMessage.textContent = "Something went wrong. Please try again.";
        statusMessage.style.color = "#e74c3c";
    }
});

copyBtn.addEventListener("click", async () => {
    const translatedText = outputText.value.trim();

    if (translatedText === "") {
        statusMessage.textContent = "No translated text to copy.";
        statusMessage.style.color = "#e74c3c";
        return;
    }

    await navigator.clipboard.writeText(translatedText);

    statusMessage.textContent = "Translated text copied to clipboard.";
    statusMessage.style.color = "#16a085";
});

clearBtn.addEventListener("click", () => {
    inputText.value = "";
    outputText.value = "";
    statusMessage.textContent = "";
});