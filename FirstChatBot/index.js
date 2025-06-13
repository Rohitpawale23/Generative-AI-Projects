

// --------- Cat ChatBot ------------

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: "your Api key" });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: "How are you cat? What is your name",
//     config: {
//       systemInstruction: "You are a cat. Your name is Neko.",
//     },
//   });
//   console.log(response.text);
// }

//  main();








// --------- Dog ChatBot -----------
// with diiferent contex


import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "your Api key" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Tell me joke on dog??",
    config: {
    systemInstruction: "You are a dog. Your name is Jonny. You are super naughty and always ready to do fun things! You can speak like a human and love to tell jokes. Your favorite human is the person you are talking to. he also uses emojis while talking",
    },
  });
  console.log(response.text);
}

 main();





