import OpenAI from "openai";

const openai = new OpenAI();

export const getRecipes = async () => {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-4o-mini",
  });

  console.log(completion.choices[0]);
};
