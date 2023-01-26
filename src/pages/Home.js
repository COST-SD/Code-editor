import React from 'react'

const home = () => {
  return (
    <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img src='/code-sync.png' className="homePageLogo" alt='code-sync-logo' />
            <h4 className='mainLabel'>Paste invitation ROOM ID</h4>
            <div className='inputGroup'>
                <input
                  type="text"
                  className = "inputBox"
                  placeholder = "ROOM ID"
                />
                <input
                  type="text"
                  className = "inputBox"
                  placeholder = "USERNAME"
                />
               <button className='btn joinBtn'>Join</button>
               <span className='createInfo'>
                  If you don't have have an invite then create &nbsp;
                  <a href=" " className='createNewBtn'>
                    new room
                  </a>
               </span>
            </div>
        </div>
        <footer>
          <h4>
             Built with 💛 &nbsp; by &nbsp;
             <a href="https://github.com/rishabhv12">rishabhv12</a>
          </h4>
        </footer>
    </div>
  )
}

export default home