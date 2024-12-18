const express = require('express')
const router = express.Router()
const { GoogleGenerativeAI } = require("@google/generative-ai");
var fs = require('fs');

const app= express()
const genAI = new GoogleGenerativeAI("AIzaSyAZFThBxWKAPsajlU-krmWs_dNM2zaSg5A");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = "Hi How is todays weather";
// let result;

// async function main (){
//  result = await model.generateContent([prompt]);}
// main();
// console.log(result);

async function generateText(prompt) {
  try {
    const response = await model.generateContent(prompt);
    
    console.log(JSON.stringify(response));
  } catch (error) {
    console.error('Error:', error);
  }
}
generateText("what color is apple")