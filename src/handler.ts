const { Configuration, OpenAIApi } = require("openai");

//openAIの初期設定
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const handler = async function (event: any, context: any) {
  const pushMessage = event.message;

  try {
    const completion: any = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          //TODO:返答の文字数を制限する
          role: "user", // "user" | "assistant" | "system"
          content: pushMessage, // string
        },
      ],
    });
    const getMessage = completion.data.choices[0].message.content;

    return {
      statusCode: 200,
      headers: {},
      body: { message: getMessage },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: { message: "エラーが発生しました" },
    };
  }
};
