import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="logo" className='w-28 object-contain' />

        <button type='button' onClick={() => window.open('https://github.com/kenneth-alt/React-RTK-AI-article-summarizer')} className='black_btn'>
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize web articles with <br />
        <span className='orange_gradient'>GPT-4 AI</span>
      </h1>
      <h2 className='desc'>
        Discover More, Read Less with Sumz TL;DR: Instantly Summarize Long Articles for Quick, Easy and Concise Insights.
      </h2>
    </header>
  )
}

export default Hero