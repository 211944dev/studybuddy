async function askAI() {
  const question = document.getElementById("searchInput").value;

  const subjectPrompts = {
    general: "Answer clearly for a student:",
    math: "Solve step by step with formulas:",
    science: "Explain scientifically in simple terms:",
    biology: "Explain biological processes clearly:",
    chemistry: "Explain reactions step by step:",
    physics: "Show equations and reasoning:",
    history: "Answer with historical context:",
    english: "Analyze grammar, themes, or writing:",
    cs: "Explain code and logic clearly:",
    economics: "Explain concepts with examples:"
  };

  const prompt =
    (subjectPrompts[CURRENT_SUBJECT] || subjectPrompts.general)
    + " " + question;

  const response = await fetch(
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

  const data = await response.json();
  document.getElementById("output").innerText =
    data[0]?.generated_text || "No answer.";
}