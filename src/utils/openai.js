import OpenAI from 'openai';
import { OPEN_API_KEY } from './constants';


const openai = new OpenAI({
    // apiKey: "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",
    apiKey : process.env.REACT_APP_OPEN_API_KEY,
    dangerouslyAllowBrowser: true
  });
  

export default openai