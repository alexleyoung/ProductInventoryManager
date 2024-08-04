"use server";

const chat = async (prompt: string) => {
  const result = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // model: "meta-llama/llama-3.1-8b-instruct:free",
      // model: "google/gemma-2-9b-it:free",
      model: "qwen/qwen-2-7b-instruct:free",
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await result.json();
  return data;
};

export default chat;
