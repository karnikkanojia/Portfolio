import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href='https://twitter.com/KanojiaKarnik' target='_blank' rel='noreferrer'>
        <BsTwitter />
      </a>
      <a href="https://github.com/karnikkanojia" target='_blank' rel='noreferrer'>
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/karnik.kanojia/" target='_blank' rel='noreferrer'>
        <BsInstagram />
      </a>
      <a href="https://linkedin.com/in/karnikkanojia" target='_blank' rel='noreferrer'>
        <FaLinkedin />
      </a>
    </div>
  )
}

export default SocialMedia