import OpenAI from 'openai';
import { OPEN_API_KEY } from './constants';


const openai = new OpenAI({
    apiKey : process.env.REACT_APP_OPEN_API_KEY,
    dangerouslyAllowBrowser: true
  });
  

export default openai