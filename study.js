function makeQuiz() {
  generateStudy("Create a 5-question quiz with answers:");
}

function makeFlashcards() {
  generateStudy("Create flashcards:");
}

function makeTLDR() {
  generateStudy("Summarize briefly:");
}

async function generateStudy(instruction) {
  const text = prompt("Paste notes or topic:");
  const prompt = `${instruction} Subject: ${CURRENT_SUBJECT}. Content: ${text}`;

  const res = await fetch(
    "https://api-inference.huggingface.co/models/google/flan-t5-large",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: prompt })
    }
  );

  const data = await res.json();
  document.getElementById("studyOutput").innerText =
    data[0]?.generated_text;
}